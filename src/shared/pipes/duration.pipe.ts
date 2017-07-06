import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(value: any, args: string): any {
    return moment('2000-01-01 00:00:00').add(moment.duration(value, 'minutes')).format(args || 'HH:mm');
  }
}
