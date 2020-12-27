import * as express from "express";
import { configRouter } from "./routes/config";
import { domainSearchRouter } from "./routes/domain-search";
import { indexRouter } from "./routes/index";
import { loginRouter } from "./routes/login";
import { protectedRouter } from "./routes/protected";
import { aclScriptUpdateRouter } from "./routes/update-script";

var createError = require('http-errors');
var hash = require('pbkdf2-password')()
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'devuser321'
}));


// api routes
app.use('/', indexRouter);
app.use("/api/secure", protectedRouter);
app.use("/api/login", loginRouter);
app.use('/acl/rules', aclrulesRouter);
app.use('/config', configRouter);
app.use('/search', domainSearchRouter);
app.use('/process/update', aclScriptUpdateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


var users = {
  devuser: { name: 'devuser' }
};

// when you create a user, generate a salt
// and hash the password ('foobar' is the pass here)

hash({ password: 'foobar' }, function (err, pass, salt, hash) {
  if (err) throw err;
  // store the salt & hash in the "db"
  //users.devuser.salt = salt;
  //users.devuser.hash = hash;
});


// Authenticate using our plain-object database of doom!

function authenticate(name, pass, fn) {
   console.log('authenticating %s:%s', name, pass);
  var user = users[name];
  // query the db for the given username
  if (!user) return fn(new Error('cannot find user'));
  // apply the same algorithm to the POSTed password, applying
  // the hash against the pass / salt, if there is a match we
  // found the user
  hash({ password: pass, salt: user.salt }, function (err, pass, salt, hash) {
    if (err) return fn(err);
    if (hash === user.hash) return fn(null, user)
    fn(new Error('invalid password'));
  });
}

function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) {
    res.sendStatus(204).end()
  }
  next();
}

function restrict(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}

app.get('/login', function(req, res){
  res.render('login');
});


app.post('/login', function(req, res){
  authenticate(req.body.username, req.body.password, function(err, user){
    if (user) {
      // Regenerate session when signing in
      // to prevent fixation
      req.session.regenerate(function(){
        // Store the user's primary key
        // in the session store to be retrieved,
        // or in this case the entire user object
        req.session.user = user;
        req.session.success = 'Authenticated as ' + user.name
          + ' click to <a href="/logout">logout</a>. '
          + ' You may now access <a href="/restricted">/restricted</a>.';
        res.redirect('back');
      });
    } else {
      req.session.error = 'Authentication failed, please check your '
        + ' username and password.'
        + ' (use "tj" and "foobar")';
      res.redirect('/login');
    }
  });
});

app.use(ignoreFavicon)

// error handler
app.use(function( req, res, next) {
  // set locals, only providing error in development
  var err = req.session.error;
  var msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err.message + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  
  //res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  next();
});


module.exports = app;
