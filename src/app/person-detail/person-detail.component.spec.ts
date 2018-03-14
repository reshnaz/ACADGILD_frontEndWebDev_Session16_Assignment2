import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CapitalizeFirstPipe } from './../pipe/capitalize-first.pipe';
import { PersonDetailComponent } from './person-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from "./../service/post.service";
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './../service/http-error-handler.service';
import { MessageService } from './../service/message.service';

describe('PersonDetailComponent', () => {
  let component: PersonDetailComponent;
  let fixture: ComponentFixture<PersonDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [PersonDetailComponent, CapitalizeFirstPipe],
      providers: [PostService, HttpErrorHandler, MessageService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
