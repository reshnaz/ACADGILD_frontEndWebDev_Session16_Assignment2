import { TestBed, inject } from '@angular/core/testing';

import { PersonDropdownService } from './person-dropdown.service';

describe('PersonDropdownService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonDropdownService]
    });
  });

  it('should be created', inject([PersonDropdownService], (service: PersonDropdownService) => {
    expect(service).toBeTruthy();
  }));
});
