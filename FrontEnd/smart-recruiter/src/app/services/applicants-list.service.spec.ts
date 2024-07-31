import { TestBed } from '@angular/core/testing';

import { ApplicantsListService } from './applicants-list.service';

describe('ApplicantsListService', () => {
  let service: ApplicantsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
