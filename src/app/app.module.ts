import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CapitalizeFirstPipe } from './pipe/capitalize-first.pipe';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { SearchPipe } from './pipe/search.pipe';
import { personRouting } from './routes/person-routes.routes';
import { Guard } from './routes/guard';
import { DeactivateGuard } from './routes/deactivate-guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { PersonDropdownService } from './service/person-dropdown.service';
import { PersonService } from './service/person.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { LoginComponent } from './login/login.component';
import { ResolveGuard } from './routes/resolve-guard';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpErrorHandler } from './service/http-error-handler.service';
import { MessageService } from './service/message.service';
import { PostService } from "./service/post.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    CapitalizeFirstPipe,
    SearchPipe,
    PageNotFoundComponent,
    AddPersonComponent,
    PersonDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, personRouting, HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }),
    BrowserAnimationsModule
  ],
  providers: [PersonService, PersonDropdownService, Guard, DeactivateGuard, ResolveGuard,
    HttpErrorHandler, MessageService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
