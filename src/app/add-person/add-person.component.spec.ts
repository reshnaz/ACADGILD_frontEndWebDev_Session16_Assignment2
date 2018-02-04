import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRoutingConfigComponent } from './person-routing-config.component';

describe('PersonRoutingConfigComponent', () => {
  let component: PersonRoutingConfigComponent;
  let fixture: ComponentFixture<PersonRoutingConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRoutingConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRoutingConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
