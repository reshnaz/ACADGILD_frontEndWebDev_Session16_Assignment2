import { Component, OnInit, transition } from '@angular/core';
import { PersonModel, PersonList } from './../interface/person-model';
import { Mrms } from './../interface/mrms';
import { PersonService } from './../service/person.service';
import { ThreeDigits } from './../validator/validator';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  /* Necessary variable declarations which will be used in html */
  personModel: PersonList;
  personList: PersonList;
  mrms: Mrms[] = [];
  checker: boolean = false;

  // Using constructor, call the PersonService and PersonDropdownService.
  constructor(private _route: ActivatedRoute, private _personService: PersonService, private _router: Router) { }

  ngOnInit() {

    this.initPersonModel();
    // Fetching dropdown values for honorific using resolve guard
    this._route.data.forEach((data: any) => {
      this.mrms = data.mrms;
    });

  }

  initPersonModel() {
    /**Define default values */
    return this.personModel = {
      honorific: '',
      firstName: '',
      lastName: '',
      age: null,
      dor: null,
      personId: null
    };
  }

  // This function is called from html which in turn calls the functions in our Person service.
  addPerson(vals) {

    /* This boolean controls the canDeactivate() if...else condition.
    If true, it means that the "Add to Table" button is clicked 
    and we don't want the confirmation dialog */
    this.checker = true;
    // Assign input values to interface variables.
    this.personList = {
      honorific: vals.honorific,
      firstName: vals.firstName,
      lastName: vals.lastName,
      age: vals.age,
      dor: vals.dor,
      personId: vals.personId
    }

    // Service function called to add person details to array
    this._personService.addPerson(this.personList);

    // Redirecting page to personList
    this._router.navigate(['/personList']);
  }

  /* Below function checks if there are any values filled in the form.
      If yes, and the user tries to navigate away from page without saving data,
      there is a confirmation asked from user. */
  canDeactivate() {
    if ((this.personModel.honorific == '' &&
      this.personModel.firstName == '' &&
      this.personModel.lastName == '' &&
      this.personModel.age == null &&
      this.personModel.dor == null &&
      this.personModel.personId == null) || this.checker == true) {
      return true;
    }
    else {
      return window.confirm(`Are you sure you don’t want to save the data?`);
    }
  }

}
