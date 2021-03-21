import { Request, Response, Router } from 'express';
import { rules } from '../resources/acl/rules';
import { squidInstallProps as squidInstallProps } from '../resources/squidInstallProps';
const fs = require('fs');


const domainSearchRouter: Router  = Router();


domainSearchRouter.get('/url', (req: Request, res: Response) => {
    const domainName = req.query.url;
    const action = req.query.action;
    console.log(' debug urlval:: ', domainName , ' action:: ', action);
    req.accepts('json, text/plain');

    const domaindbFileName = squidInstallProps.DATABASE.concat(req.query.filename);
    // Call your python script here.
    // I prefer using spawn from the child process module instead of the Python shell
    // TODO search for the domain in the db
    let resp: any;
    const updateScriptcmd = ' update-squidguard-db.sh append ' + squidInstallProps.DATABASE + ' ' + domainName;

    try {
      resp = {
        url: domainName,
        blocked: true
      };
      // grep -rnw /var/lib/squidguard/db/BL/adv/domains  -e "www.walgreens.com"

      res.status(200).json(resp);
    } catch (e) {
      res.status(400).send('Invalid JSON string' + e);
    }
  });

domainSearchRouter.get('/:domain', (req: Request, res: Response, next) => {
    const domainVal = req.params.domain;
    console.log(' debug domainVal:: ', domainVal);
    res.json({ data: rules.catergoryRules[domainVal] });
  });




export { domainSearchRouter };
