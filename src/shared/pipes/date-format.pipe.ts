import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({ name: 'dateFormat' })
export class DateFormatPipe implements PipeTransform {
  transform(value: any, args: string): any {
    if (value) {
      return moment(value).format(args || 'dd/MM/yyyy');
    }
  }
}
