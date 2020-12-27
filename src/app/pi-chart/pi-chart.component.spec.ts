import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiChartComponent } from './pi-chart.component';

describe('PiChartComponent', () => {
  let component: PiChartComponent;
  let fixture: ComponentFixture<PiChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
