var express = require('express');
var domainSearchRouter = express.Router();
var rules = require("../resources/acl/rules");
/* GET proxy acl rules listing, update, append. */

domainSearchRouter.get('/', function(req, res, next) {
  res.render('domain-search', { title: 'Express App - Proxy core' , data: rules.aclCategoty } );
  
});

domainSearchRouter.get('/:url', function(req, res, next) {
  var catId = req.params.url;
  console.debug(' debug catId:: ',url)
  res.render('domain-search', { data: rules.catergoryRules[url]});
});

domainSearchRouter.get('/:domain', function(req, res, next) {
    var catId = req.params.domain;
    console.debug(' debug catId:: ',domain)
    res.render('domain-search', { data: rules.catergoryRules[domain]});
  });


module.exports = domainSearchRouter;