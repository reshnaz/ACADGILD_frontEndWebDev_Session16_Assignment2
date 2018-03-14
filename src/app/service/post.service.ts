import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { PersonList } from './../interface/person-model';
import { HttpErrorHandler, HandleError } from './../service/http-error-handler.service';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import * as _ from 'lodash';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class PostService { 

  personsUrl = 'api/persons';  // URL to web api
  private handleError: HandleError; // Error handler

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    // Creating error handler for this service.
    this.handleError = httpErrorHandler.createHandleError('PostService');
  }

  /** GET persons from the server */
  getPersons(): Observable<PersonList[]> {
    return this.http.get<PersonList[]>(this.personsUrl)
      .pipe(
        catchError(this.handleError('getPersons', []))
      );
  }

  /** POST: add a new person to the database */
  addPerson(person: PersonList): Observable<PersonList> {
    return this.http.post<PersonList>(this.personsUrl, person, httpOptions)
      .pipe(
        catchError(this.handleError('addPerson', person))
      );
  }

  // This function returns person based on parameter passed in URL
  getPersonWithId(id: number): Observable<PersonList> {
    const url = `${this.personsUrl}/${id}`;
    return this.http.get<PersonList>(url);
    // .toPromise();
  }

  // This function deletes person having particular id.
  deletePerson(id: number): Observable<{}> {
    const url = `${this.personsUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deletePerson'))
      );
  }

} 
