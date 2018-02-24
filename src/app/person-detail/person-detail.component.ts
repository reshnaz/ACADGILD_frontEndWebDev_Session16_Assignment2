import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { PostService } from './../service/post.service';
import { PersonList } from './../interface/person-model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  // Declarations necessary to produce required person details
  person: Observable<PersonList>;
  private id: string;

  // Instance of ActivatedRoute service is used to extract route parameter from URL
  constructor(private _route: ActivatedRoute, private _service: PostService) { }

  // We get the route parameter and fetch details of corresponding person.
  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.person = this._service.getPersonWithId(+this.id);
  }

}
