import { TestBed, inject } from '@angular/core/testing';
import { CallUrlService } from './call-url.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './../service/http-error-handler.service';
import { MessageService } from './../service/message.service';

describe('CallUrlService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CallUrlService, HttpErrorHandler, MessageService]
    });
  });

  it('should be created', inject([CallUrlService], (service: CallUrlService) => {
    expect(service).toBeTruthy();
  }));

});
