import { Injectable } from '@angular/core';
import { PersonList } from './../interface/person-model';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {

  // constructor(public id: number, public name: string) { }

  // Array of imported interface type used to store input values.
  personArr: PersonList[] = [];

  // Service function that adds values in the array by using unshift() method.
  addPerson(personList: PersonList) {
    this.personArr.unshift(personList);
  }

  // Service function which will return (GET) the array of interface object.
  getPerson(): PersonList[] {
    return this.personArr;
  }

  // This function returns person based on parameter passed in URL
  getPersonWithId(id: number | string): PersonList { 
    return this.personArr[+id-1];
  }

}
