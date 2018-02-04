import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './../add-person/add-person.component';
import { PersonComponent } from '../person/person.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component'
import { PersonDetailComponent } from '../person-detail/person-detail.component';
/*
Here we configure routing and router outlet.
Each path is mapped to corresponding component it needs to navigate to.
*/
const routes: Routes = [
    { path: '', redirectTo: '/addPerson', pathMatch: 'full' },
    { path: 'addPerson', component: AddPersonComponent },
    { path: 'personList', component: PersonComponent },
    { path: 'personDetail/:id', component: PersonDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];

// A const that holds all our routing configuration. This is globally imported in @NgModule.
export const personRouting = RouterModule.forRoot(routes);
