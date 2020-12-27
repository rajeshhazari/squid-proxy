import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNodesComponent } from './upload-nodes.component';

describe('UploadNodesComponent', () => {
  let component: UploadNodesComponent;
  let fixture: ComponentFixture<UploadNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
