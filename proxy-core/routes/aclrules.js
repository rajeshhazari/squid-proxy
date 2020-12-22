var express = require('express');
var router = express.Router();
var rules = require("../resources/acl/rules");
/* GET proxy acl rules listing, update, append. */

router.get('/', function(req, res, next) {
  res.send(rules.aclCategoty);
});

router.get('/:category', function(req, res, next) {
  var catId = req.params.category;
  console.debug(' debug catId:: ',catId)
  res.send(rules.catergoryRules[catId]);
});


module.exports = router;
