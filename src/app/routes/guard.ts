import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class Guard implements CanActivate {

    constructor(private _router: Router) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /* Checks if session storage data is set
            If yes, redirects to add-person page
            If no, displays alert and navigates to login page. */
        if (sessionStorage.getItem('allowAccess')) {
            return true;
        };
        alert(`Not Authorized!`);
        this._router.navigate(['/login']);
        return false;
    }
}
