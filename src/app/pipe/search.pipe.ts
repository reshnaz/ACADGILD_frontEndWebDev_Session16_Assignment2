import { Pipe, PipeTransform } from '@angular/core';
/*
This pipe searches first names of added people using the search key entered as argument.
*/
@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length !== 0) {
      return value.filter((item) => item.firstName.startsWith(args));
    } else {
      return [];
    }
  };

}
