import { TestBed, inject } from '@angular/core/testing';
import { MessageService } from './../service/message.service';
import { HttpErrorHandler } from './http-error-handler.service';

describe('HttpErrorHandler', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorHandler, MessageService]
    });
  });

  it('should be created', inject([HttpErrorHandler], (service: HttpErrorHandler) => {
    expect(service).toBeTruthy();
  }));
});
