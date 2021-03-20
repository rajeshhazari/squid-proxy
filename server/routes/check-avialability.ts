import { Request, Response, Router } from 'express';

const http = require('http');


const checkAvialability: Router = Router();

const email = 'vamsitha@gmail.com';
const passwd = 'saitrishi@8579';
const loginReqPayload = {username: email, password: passwd};
// const loginUrl = 'https://www.walgreens.com/profile/v1/login?ru=/findcare/vaccination/covid-19/eligibility-survey?flow=covidvaccine&register=rx';
const wloginUrl = 'https://www.walgreens.com/profile/v1/login';

/*
public login(username: string, password: string): Observable < boolean > {
  const tokenEndpoint = `${this._urlService.authorityUrl}token`;
  const requestContent = `username=${username}&password=${password}&client_id=${this._clientId}&client_secret=${this._clientSecret}&grant_type=password&scope=api`;

  const headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  return this._http.post(tokenEndpoint, requestContent, {
      headers
    })
    .map(res => {
      const result = res.json();

      this._token = result.access_token;
      this._user = username;
      this.saveToLocalStorage();

      return true;
    }, () => false);
};
*/


function loginGetCookies(request: Request) {
  let post_options = {
    url: wloginUrl,
    method: 'POST',
    body: loginReqPayload,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    }
};
  http.request(post_options,
   function(res) {
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
        console.log('Response: ' + chunk);
    });
  });
}
/* GET home page. */
checkAvialability.get('/', function(req: Request, res: Response) {
  loginGetCookies(req);
  res.json( {
    title: 'Express App - Walgreens Check Availability',
  text: 'Greetings, you have valid token' ,
  email
});
});



export { checkAvialability };
