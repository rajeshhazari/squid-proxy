import * as express from 'express';
import * as path from 'path';
import { aclRulesRouter } from './routes/aclrules';
import { configRouter } from './routes/config';
import { domainSearchRouter } from './routes/domain-search';
import { indexRouter } from './routes/index';
import { loginRouter } from './routes/login';
import { protectedRouter } from './routes/protected';
import { aclScriptUpdateRouter } from './routes/update-script';
const cookie =  require('cookie');


const debug = require('debug')('proxy-core:server');
const http = require('http');



const app: express.Application = express();
/**
 * Normalize a port into a number, string, or false.
 */


// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookie);

app.disable('x-powered-by');


// api routes
app.use('/', indexRouter);
app.use('/api/secure', protectedRouter);
app.use('/api/login', loginRouter);
app.use('/acl/rules', aclRulesRouter);
app.use('/config', configRouter);
app.use('/search', domainSearchRouter);
app.use('/process/update', aclScriptUpdateRouter);

if (app.get('env') === 'production') {

  // in production mode run application from dist folder
  app.use(express.static(path.join(__dirname, '/../client')));
}

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next) => {
  const err = new Error('Not Found');
  next(err);
});

// production error handler
// no stacktrace leaked to user
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {

  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message,
  });
});

export { app };
