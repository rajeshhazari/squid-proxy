import { Request, Response, Router } from 'express';

const rules = require('../resources/acl/rules');

const aclRulesRouter: Router = Router();

/* GET proxy acl rules listing, update, append. */

aclRulesRouter.get('/', (req: Request, res: Response) => {
    res.json({ title: 'Express App - Proxy core', cardTite: 'SquidGuard Acls Category Defined', data: rules.aclCategoty, rules });

  });


aclRulesRouter.get('/alldest', (req: Request, res: Response) => {
    // TODO send squidGuard dest defined
    res.json(rules.catergoryRules);
  });


aclRulesRouter.get('/:category', (req: Request, res: Response) => {
    const catId = req.params.category;
    res.json(rules.catergoryRules[catId]);
  });

aclRulesRouter.put('/:category/edit', (req: Request, res: Response) => {
    const catId = req.params.category;
    const pass = req.params.pass;
    const redirect = req.params.redirect;
    res.json(rules.catergoryRules[catId]);
  });


aclRulesRouter.put('/:dest', (req: Request, res: Response) => {
    const dest = req.params.dest;

    res.json(rules.catergoryRules[dest]);
  });

export { aclRulesRouter };
