import { Component, OnInit } from '@angular/core';
import { DemoService } from '../shared/DemoService';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {

  constructor(private demoService: DemoService) { }
  ngOnInit(): void {
    this.demoService.getDemoDirect().subscribe(
      data => {
        console.log('##DEMO DATA from direct url', data);
      },
      err => {
        console.log('##Error', err)
      }
    );

    this.demoService.getDemoProxy().subscribe(
      data => {
        console.log('##DEMO DATA from proxy url', data);
      },
      err => {
        console.log('##Error', err)
      }
    );
  }

}
