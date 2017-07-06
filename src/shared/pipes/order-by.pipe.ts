import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy', pure: false })
export class OrderByPipe implements PipeTransform {
  transform(input: Array<any>, fieldName: string): any {
    if (!input || !fieldName) {
      return input;
    }

    return input.sort((a, b) => {
      if (a[fieldName].toLowerCase() > b[fieldName].toLowerCase()) {
        return 1;
      } else if (a[fieldName].toLowerCase() < b[fieldName].toLowerCase()) {
        return -1;
      }

      return 0;
    });
  }
}
