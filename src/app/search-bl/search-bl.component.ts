import { Component, NgZone, OnInit } from '@angular/core';


@Component({
  selector: 'app-searchbl',
  templateUrl: './search-bl.component.html',
  styleUrls: ['./search-bl.component.css']
})
export class SearchBlComponent implements OnInit {

  inputDomainurl:String  = '';
  
  constructor(private _ngZone: NgZone) { }

  ngOnInit(): void {
  }


  selectAction() {
    console.log('selectAction is called');
  }
  submitUrl(){
    console.log('submitUrl is called');
  }
}
