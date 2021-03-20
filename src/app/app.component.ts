import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-squid-proxy';
  isLoading = false;


  ngOnInit(): void {
    this.isLoading = false;
  }

  resetisLoading(): void{
    this.isLoading = false;
  }
  enableLoading(): void{
    this.isLoading = true;
  }
  getisLoading(){
    return this.isLoading;
  }
}
