import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import * as _ from 'lodash';
import { Mrms } from './../interface/mrms';
import { HttpErrorHandler, HandleError } from './../service/http-error-handler.service';
import { catchError } from 'rxjs/operators';

/* This service gets our drop-down values from an external link
(in this case, it is a JSON file).
We use HTTPCLient GET method to access the path. */

@Injectable()
export class CallUrlService {

  // Below is the url/link from where we will get our drop-down values
  link = "api/honorific";
  private handleError: HandleError; // Error handler
  // Stores the values "Mr. " & "Ms. " that we will get from url.
  mrms: Observable<Mrms[]>;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    // Creating error handler for this service.
    this.handleError = httpErrorHandler.createHandleError('Call-URL-Service');
  }

  retURL() {
    return this.mrms = this.http
      .get<Mrms[]>(this.link)
      .map(data => _.values(data))
      .pipe(
        catchError(this.handleError('getPersons', []))
      );
  }

}