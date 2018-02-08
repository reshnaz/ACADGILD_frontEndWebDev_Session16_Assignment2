import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
    /* Sets session storage data that decides whether or not
      to navigate to add-person page using canActivate guard. */
    sessionStorage.setItem('allowAccess', 'true');
  }

}
