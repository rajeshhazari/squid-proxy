import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }
  
  getDemoDirect() {
    //***Direct server url used for api*/
    return this.http.get<any>('http://localhost:3000/api/config');
  }
  getDemoProxy() {
    //***Direct server url used for api*/
    return this.http.get<any>('/api/angular-server');
  }
}
