import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBlockedlogsComponent } from './view-blockedlogs.component';

describe('ViewBlockedlogsComponent', () => {
  let component: ViewBlockedlogsComponent;
  let fixture: ComponentFixture<ViewBlockedlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBlockedlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBlockedlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
