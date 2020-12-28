import { Request, Response, Router } from 'express';

const indexRouter: Router = Router();

/* GET home page. */
indexRouter.get('/', function(req: Request, res: Response) {
  res.redirect('/home');
});

indexRouter.get('/home', function(req: Request, res: Response) {
  res.json( {
    title: 'Express App - Proxy core',
  text: 'Greetings, you have valid token' });
});


export { indexRouter };
