import { TestBed, inject } from '@angular/core/testing';

import { CallUrlService } from './call-url.service';

describe('CallUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallUrlService]
    });
  });

  it('should be created', inject([CallUrlService], (service: CallUrlService) => {
    expect(service).toBeTruthy();
  }));
});
