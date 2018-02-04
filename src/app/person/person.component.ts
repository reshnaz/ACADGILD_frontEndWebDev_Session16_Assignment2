import { Component, OnInit, Input } from '@angular/core';
import { PersonList } from './../interface/person-model';
import { PersonService } from './../service/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  // Array of interface -- stores all persons' details
  personList: PersonList[] = [];

  // String to search with.
  private searchString: string;

  // Using constructor, call the PersonService
  constructor(private _personService: PersonService) { }

  ngOnInit() {
    this.searchString = '';
    // Service function called to return updated person array.
    this.fetchDetails();
  }

  private fetchDetails() {
    this.personList = this._personService.getPerson();
  }
  
}
