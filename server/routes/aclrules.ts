import { Request, Response, Router } from "express";

var rules = require("../resources/acl/rules");

const aclRulesRouter: Router = express.Router();

/* GET proxy acl rules listing, update, append. */

aclRulesRouter.get('/', function(req:Request, res:Response) {
  res.json( { title: 'Express App - Proxy core', cardTite:"SquidGuard Acls Category Defined" , data: rules.aclCategoty, rules: rules } );
  
});


aclRulesRouter.get('/alldest', function(req:Request, res:Response) {
  //TODO send squidGuard dest defined
  res.json(rules.catergoryRules);
});


aclRulesRouter.get('/:category', function(req:Request, res:Response) {
  var catId = req.params.category;
  res.json(rules.catergoryRules[catId]);
});

aclRulesRouter.put('/:category/edit', function(req:Request, res:Response) {
  var catId = req.params.category;
  var pass = req.params.pass;
  var redirect = req.params.redirect;
  res.json(rules.catergoryRules[catId]);
});


aclRulesRouter.put('/:dest', function(req:Request, res:Response) {
  var dest = req.params.dest;
  
  res.json(rules.catergoryRules[dest]);
});

export { aclRulesRouter };
