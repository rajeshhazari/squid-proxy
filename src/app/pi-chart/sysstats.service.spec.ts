import { TestBed } from '@angular/core/testing';

import { SysstatsService } from './sysstats.service';

describe('SysstatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SysstatsService = TestBed.get(SysstatsService);
    expect(service).toBeTruthy();
  });
});
