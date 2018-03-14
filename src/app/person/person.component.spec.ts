import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person.component';
import { SearchPipe } from './../pipe/search.pipe';
import { CapitalizeFirstPipe } from './../pipe/capitalize-first.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from "./../service/post.service";
import { HttpErrorHandler } from './../service/http-error-handler.service';
import { MessageService } from './../service/message.service';
import { HttpClientModule } from '@angular/common/http';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientModule],
      declarations: [PersonComponent, SearchPipe, CapitalizeFirstPipe],
      providers: [PostService, HttpErrorHandler, MessageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
