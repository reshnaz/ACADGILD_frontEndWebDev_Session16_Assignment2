import { Injectable } from '@angular/core';
import { Mrms } from './../interface/mrms';

@Injectable()
export class PersonDropdownService {

  honorific: Mrms[] = [];

  constructor() { }

  /** Get the honorific */
  getHonorific() {
    return this.honorific = [
      {
        honorific: 'Mr. '
      },      
      {
        honorific: 'Ms. '
      }
    ];
  }

}
