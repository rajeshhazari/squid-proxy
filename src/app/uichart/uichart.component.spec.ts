import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UIChartComponent } from './uichart.component';

describe('UIChartComponent', () => {
  let component: UIChartComponent;
  let fixture: ComponentFixture<UIChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UIChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UIChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
