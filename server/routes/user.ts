import { Request, Response, Router } from 'express';

const userRouter: Router = Router();

const user =
  [
 { address: {
    city: 'Morrisville',
    geo: {
      lat: '',
      lng: '',
    },
    street: '904 Garden Square ln',
    suite: '',
    zipcode: '27560',
  },
  company: {
    bs: 'C3Transcribe',
    catchPhrase: 'Multi-layered client-server neural-net',
    name: 'C3Transcribe',
  },
  email: 'rajeshhazari1980@yahho.com',
  id: 1,
  name: 'Rajesh Hazari',
  username: 'rhazari'
 }, {
  email: 'rajeshhazari1980@yahho.com',
  id: 2,
  name: 'devuser',
  username: 'devuser'
 }
];

userRouter.get('/', (request: Request, response: Response) => {

  response.send(user);
});

export { userRouter };
