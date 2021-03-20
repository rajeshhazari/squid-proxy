import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConfigComponent } from './update-config.component';

describe('UpdateConfigComponent', () => {
  let component: UpdateConfigComponent;
  let fixture: ComponentFixture<UpdateConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
