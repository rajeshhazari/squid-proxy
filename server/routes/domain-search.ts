import { Request, Response, Router } from "express";

const rules = require("../resources/acl/rules");
/* GET proxy acl rules listing, update, append. */

const domainSearchRouter: Router  = express.Router();


domainSearchRouter.get('/', function(req:Request, res:Response) {
  res.json( { title: 'Express App - Proxy core' , data: rules.aclCategoty } );
  
});

domainSearchRouter.get('/:url', function(req:Request, res:Response) {
  var catId = req.params.url;
  console.debug(' debug catId:: ',catId)
  res.json( { data: rules.catergoryRules[catId]});
});

domainSearchRouter.get('/:domain', function(req:Request, res:Response, next) {
    var domainVal = req.params.domain;
    console.debug(' debug domainVal:: ',domainVal)
    res.json( { data: rules.catergoryRules[domainVal]});
  });


export { domainSearchRouter };
