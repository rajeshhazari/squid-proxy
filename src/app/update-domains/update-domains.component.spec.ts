import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDOmainsComponent } from './update-domains.component';

describe('UpdateDOmainsComponent', () => {
  let component: UpdateDOmainsComponent;
  let fixture: ComponentFixture<UpdateDOmainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDOmainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDOmainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
