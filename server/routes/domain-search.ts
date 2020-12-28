import { Request, Response, Router } from 'express';
// import { rules } from ("../resources/acl/rules");
/* GET proxy acl rules listing, update, append. */
import { rules } from '../resources/acl/rules';

const domainSearchRouter: Router  = Router();


domainSearchRouter.get('/', function(req: Request, res: Response) {
  res.json( { title: 'Express App - Proxy core' , data: rules.aclCategoty } );

});

domainSearchRouter.get('/:url', function(req: Request, res: Response) {
  let catId = req.params.url;
  console.debug(' debug catId:: ', catId);
  res.json( { data: rules.catergoryRules[catId]});
});

domainSearchRouter.get('/:domain', function(req: Request, res: Response, next) {
    let domainVal = req.params.domain;
    console.debug(' debug domainVal:: ', domainVal);
    res.json( { data: rules.catergoryRules[domainVal]});
  });


export { domainSearchRouter };
