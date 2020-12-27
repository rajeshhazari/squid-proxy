import { Component, OnInit, SimpleChange, OnDestroy } from '@angular/core';
import { SysstatsService } from './sysstats.service';


@Component({
  selector: 'app-pi-chart',
  templateUrl: './pi-chart.component.html',
  providers: [SysstatsService],
  styleUrls: ['./pi-chart.component.scss']
})
export class PiChartComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.alive = false; // switches your IntervalObservable off
  }
  //private data: SysDataModel;
  private data: any;
  private display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this
  private errorMessage;

private alive: boolean; // used to unsubscribe from the IntervalObservable
// when OnDestroy is called.
private url = 'http://localhost:8585/api/stats/v1'; // full uri of the service to consume here

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';
  public msg = 'Hello';

  constructor( private sysStatsService:SysstatsService) {
    this.display = true;
    this.alive = true;
    this.errorMessage = 'Sample error  message';
    this.msg = ''
   }

  ngOnInit() {
    debugger;
    console.log(" ng init called and initialized")
       
  }


    // get our data every subsequent 10 seconds
    /*IntervalObservable.create(2000).takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
        this.SysstatsService.getData(url)
          .subscribe(data => {
            this.data = data;
          });
      });
      */

     ngOnChanges(changes: SimpleChange) {
      debugger;

      if(changes['data'] && changes['data'].currentValue) {
        //Do something once data is set.
      }

      this.sysStatsService.getData(this.url).subscribe(
        res => {
            this.data= res;
  
        },
        err => {
          console.log("error occured::  "+ err.message);
          this.errorMessage=err.message;
          this.alive = true;
          this.display = true;
          this.msg = 'res received';
        },
        () => console.log("res received")
        );
        
    }

  }

  /*
ngOnChanges(changes: SimpleChange) {

    if(changes['data'] && changes['data'].currentValue) {
      //Do something once data is set.
    }
  }
*/
