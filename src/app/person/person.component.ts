import { Component, OnInit } from '@angular/core';
import { PersonList } from './../interface/person-model';
import { PostService } from "./../service/post.service";
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

// This header will be passed along with URL
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {


  // Array of interface -- stores all persons' details
  personList: Observable<PersonList[]>;

  // String to search with.
  private searchString: string;

  // Using constructor, declare the PostService
  constructor(private _postService: PostService, private http: HttpClient) { }

  ngOnInit() {
    this.searchString = '';
    // Service function called to return updated person array.
    this.fetchDetails();
  }

  private fetchDetails() {
    this.personList = this._postService.getPersons();
  }

  // Calls the service function to delete person of selected id and refreshes view.
  deletePerson(person: PersonList) {
    this._postService.deletePerson(person.id).subscribe();
    this.fetchDetails();
  }
}
