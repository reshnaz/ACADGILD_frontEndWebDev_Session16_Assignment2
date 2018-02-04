import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capitalizefirst
 * Example:
 *  // value.name = daniel
 *  {{ value.name | capitalizefirst  }}
 *  formats to: Daniel
*/
@Pipe({
  name: 'capitalizeFirst'
})
export class CapitalizeFirstPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === null) return 'Not assigned';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
