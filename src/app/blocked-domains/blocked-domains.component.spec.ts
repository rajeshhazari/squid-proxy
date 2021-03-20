import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedDomainsComponent } from './blocked-domains.component';

describe('BlockedDomainsComponent', () => {
  let component: BlockedDomainsComponent;
  let fixture: ComponentFixture<BlockedDomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedDomainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
