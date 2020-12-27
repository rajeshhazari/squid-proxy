import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoggedIn:boolean = false;
  public loginForm: FormGroup;

  

  constructor() {

    this.loginForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required
      ]),
      'password': new FormControl('', [
        Validators.required
      ])
    });

    debugger;
   }

  ngOnInit() {
    debugger;
  }


  public sendLogin(): void {
    console.log(this.loginForm.value);
  }

}
