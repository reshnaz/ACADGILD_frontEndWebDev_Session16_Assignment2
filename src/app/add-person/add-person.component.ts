import { Component, OnInit } from '@angular/core';
import { PersonModel, PersonList } from './../interface/person-model';
import { Mrms } from './../interface/mrms';
import { Router } from "@angular/router";
import { CallUrlService } from './../service/call-url.service';
import { Observable } from "rxjs/Observable";
import { PostService } from "./../service/post.service";
import { NgForm } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
  providers: [CallUrlService, PostService],
  /* Animations that are triggered when mouse enters and leaves the submit button in HTML
     Background color changes and scales up its content when mouse enters. */
  animations: [
    trigger('personState', [
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      state('inactive', style({
        backgroundColor: '#fff',
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class AddPersonComponent implements OnInit {

  /* Necessary variable declarations which will be used in html/rest of code */
  personModel: PersonList;
  persons: PersonList[] = [];
  mrms: Observable<Mrms[]>;
  checker: boolean = false;
  index: number = 0;
  stateExpression: string;

  // Using constructor, call the PostService & CallUrlService that uses HTTPClient methods.
  constructor(private postService: PostService, private urlService: CallUrlService, private _router: Router) { }

  ngOnInit() {

    this.initPersonModel();
    this.getPersons();
    // Fetching dropdown values for honorific using URL service that uses HTTPCLient GET.
    this.mrms = this.urlService.retURL();

  }

  // On initialization of component, we retrieve the persons list,
  getPersons(): void {
    this.postService.getPersons()
      .subscribe(persons => this.persons = persons);
  }

  initPersonModel() {
    /**Define default values */
    return this.personModel = {
      id: null,
      honorific: '',
      firstName: '',
      lastName: '',
      age: null,
      dor: null,
      personId: null
    };
  }

  addPerson(vals) {
    /* This boolean controls the canDeactivate() if...else condition.
      If true, it means that the "Add to Table" button is clicked 
      and we don't want the confirmation dialog */
    this.checker = true;
    // Helps in calculating id property for the new person added.
    if (this.persons.length !== 0 || null || undefined) {
      this.index = this.persons[this.persons.length - 1].id;
    }

    // Assign input values to interface variables.
    const newPerson = {
      id: this.index + 1,
      honorific: vals.honorific,
      firstName: vals.firstName,
      lastName: vals.lastName,
      age: vals.age,
      dor: vals.dor,
      personId: vals.personId
    } as PersonList;

    // Push newly added person to existing list.
    this.postService.addPerson(newPerson)
      .subscribe(person => this.persons.push(person));
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

  /* The four functions below  are used to help code identify what state 
  animation needs to be applied to submit button on mouse entering and leaving */
  mouseEnter() { this.activeState(); };
  mouseLeave() { this.inactiveState(); };

  inactiveState() { this.stateExpression = 'inactive'; }
  activeState() { this.stateExpression = 'active'; }
}
