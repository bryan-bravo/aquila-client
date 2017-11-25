import { TestBed, inject } from '@angular/core/testing';

import { PreawardService } from './preaward.service';

describe('PreawardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreawardService]
    });
  });

  it('should be created', inject([PreawardService], (service: PreawardService) => {
    expect(service).toBeTruthy();
  }));
});
