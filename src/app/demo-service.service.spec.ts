import { TestBed } from '@angular/core/testing';

import { DemoService } from "./shared/DemoService";

describe('DemoServiceService', () => {
  let service: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
