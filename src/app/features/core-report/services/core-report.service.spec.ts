import { TestBed } from '@angular/core/testing';

import { CoreReportsService } from './core-report.service';

describe('CoreReportsService', () => {
  let service: CoreReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
