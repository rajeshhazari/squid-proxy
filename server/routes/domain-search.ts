import { Request, Response, Router } from 'express';
import { rules } from '../resources/acl/rules';
const fs = require('fs');


const domainSearchRouter: Router  = Router();

domainSearchRouter.get('/', function(req: Request, res: Response) {
  res.json( { title: 'Express App - Proxy Search Domani' , data: rules.catergoryRules } );

});

domainSearchRouter.get('/url', function(req: Request, res: Response) {
  const urlval = req.query.url;
  console.log(' debug catId:: ', urlval);
  // TODO search for the domain in the db
  const jsonStr = req.query.params as string;
  try {
      const jsonObj = JSON.parse(jsonStr);
      res.send('Success');
    } catch (e) {
      res.status(400).send('Invalid JSON string');
    }
});

domainSearchRouter.get('/:domain', (req: Request, res: Response, next) => {
    const domainVal = req.params.domain;
    console.log(' debug domainVal:: ', domainVal);
    res.json({ data: rules.catergoryRules[domainVal] });
  });


export { domainSearchRouter };
