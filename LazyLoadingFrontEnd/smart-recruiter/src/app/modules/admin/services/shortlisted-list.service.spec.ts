import { TestBed } from '@angular/core/testing';

import { ShortlistedListService } from './shortlisted-list.service';

describe('ShortlistedListService', () => {
  let service: ShortlistedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortlistedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
