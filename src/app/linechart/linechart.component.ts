import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  public lineChartData = [120, 150, 180, 90];
  public lineChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

}
