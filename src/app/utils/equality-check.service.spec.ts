import { TestBed } from '@angular/core/testing';

import { EqualityCheckService } from './equality-check.service';

describe('EqualityCheckService', () => {
  let service: EqualityCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EqualityCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
