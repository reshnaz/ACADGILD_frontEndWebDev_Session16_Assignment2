import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PersonDropdownService } from './../service/person-dropdown.service';


@Injectable()
export class ResolveGuard implements Resolve<any> {

  constructor(private _mrms: PersonDropdownService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this._mrms.getHonorific(); 
  }
}
