import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBlComponent } from './search-bl.component';


describe('SearchBlComponent', () => {
  let component: SearchBlComponent;
  let fixture: ComponentFixture<SearchBlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
