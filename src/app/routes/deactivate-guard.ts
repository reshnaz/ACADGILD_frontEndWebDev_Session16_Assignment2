import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface ComponentToDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateGuard implements CanDeactivate<ComponentToDeactivate> {
  /* This is the deactivate guard which controls add-person page */
  canDeactivate(component: ComponentToDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
