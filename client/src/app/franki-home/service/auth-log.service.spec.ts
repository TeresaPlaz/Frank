import { TestBed, inject } from '@angular/core/testing';

import { AuthLogService } from './auth-log.service';

describe('AuthLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthLogService]
    });
  });

  it('should be created', inject([AuthLogService], (service: AuthLogService) => {
    expect(service).toBeTruthy();
  }));
});
