  import { Injectable } from '@angular/core';
  import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable , throwError } from 'rxjs';
  import { catchError, retry } from 'rxjs/operators';

  import { HostPiCahrtReq } from './pi-chart.request';
  import { HostPiCahrtResponse} from './pi-chart.response';
  
  /*
  @Injectable({providedIn: 'root'})
  export class HeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req);
    }
  
  } 
  */



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}
 
@Injectable()
export class SysstatsService {


  constructor(private httpClient:HttpClient){

  };


  private url = 'http://localhost:8585/api/stats/v1'; // full uri of the service to consume here

  

  getData(url:string): Observable<HostPiCahrtResponse[]> {

    return this.httpClient.get<HostPiCahrtResponse[]>(this.url);
  }
  
}
