import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddPersonComponent } from './add-person.component';
import { CallUrlService } from './../service/call-url.service';
import { PostService } from "./../service/post.service";
import { HttpErrorHandler } from './../service/http-error-handler.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './../service/message.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddPersonComponent', () => {
  let component: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule, BrowserAnimationsModule],
      declarations: [AddPersonComponent],
      providers: [CallUrlService, PostService, HttpErrorHandler, MessageService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
