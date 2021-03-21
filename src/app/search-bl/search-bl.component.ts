import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Params, Router } from '@angular/router';
import { AppComponent } from '@app/app.component';
//import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-searchbl',
  templateUrl: './search-bl.component.html',
  styleUrls: ['./search-bl.component.css']
})
export class SearchBlComponent implements OnInit {
  
  baseUri = '${environment.apiUrl}/search';
 
  domainUrlCheckForm : FormGroup;
  /* public domainUrlCheckForm = this.formBuilder.group({
    url: this.formBuilder.control('', [Validators.required]),
    keyword: this.formBuilder.control('', [Validators.required]),
    action: this.formBuilder.control('', [Validators.required])
  }); */
  
  actions = ['update', 'unblock', 'check', 'delete'];
  action = new FormControl(this.actions[0]);
  
  constructor(private _ngZone: NgZone, 
              private formBuilder: FormBuilder,
              private router: Router,
              private http: HttpClient,
              private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.appComponent.resetisLoading();
    this.domainUrlCheckForm = this.formBuilder.group({
      url: this.formBuilder.control('', [Validators.required]),
    keyword: this.formBuilder.control('', [Validators.required]),
    action: this.formBuilder.control('', [Validators.required])
    })
  }

  public selectAction(): void {
    console.log('selectAction is called'+this.domainUrlCheckForm.value);
  }
  
  resetForm(): void {
    this.appComponent.resetisLoading();
  }
  public submitUrl(): void {
    this.appComponent.enableLoading();
    
    const queryParams: Params = { url: this.domainUrlCheckForm.value.url,
                                  action: this.domainUrlCheckForm.value.action };
    this.getJSON(`${environment.apiUrl}/search/url`,queryParams).subscribe(data => {
      console.log('submitUrl is called'+ JSON.stringify(data));
    });  
    
  }

  public getJSON( uri, params): Observable<any> {
    return this.http.get(uri, { params: params });
  }
}
