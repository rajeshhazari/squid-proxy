var express = require('express');
var aclRulesRouter = express.Router();
var rules = require("../resources/acl/rules");
/* GET proxy acl rules listing, update, append. */

aclRulesRouter.get('/', function(req, res, next) {
  res.render('acls', { title: 'Express App - Proxy core', cardTite:"SquidGuard Acls Category Defined" , data: rules.aclCategoty, rules: rules } );
  
});


aclRulesRouter.get('/alldest', function(req, res, next) {
  //TODO send squidGuard dest defined
  res.send(rules.catergoryRules);
});


aclRulesRouter.get('/:category', function(req, res, next) {
  var catId = req.params.category;
  res.send(rules.catergoryRules[catId]);
});

aclRulesRouter.put('/:category/edit', function(req, res, next) {
  var catId = req.params.category;
  var pass = req.params.pass;
  var redirect = req.params.redirect;
  res.send(rules.catergoryRules[catId]);
});


aclRulesRouter.put('/:dest', function(req, res, next) {
  var dest = req.params.dest;
  
  res.send(rules.catergoryRules[catId]);
});

module.exports = aclRulesRouter;
