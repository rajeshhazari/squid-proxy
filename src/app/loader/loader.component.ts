import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AlertService } from '@app/_services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() visible: boolean;
  constructor(private alertService: AlertService) { }
  
  ngOnInit(): void {
  }

}
