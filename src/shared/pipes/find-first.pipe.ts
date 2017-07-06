import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findFirst'
})
@Injectable()
export class FindFirstPipe implements PipeTransform {
  transform(items: any[], id: any, name = 'Name', idName = 'Id'): string {

    let item = (items || []).find(x => x[idName] === id);

    if (item) {
      return item[name];
    }

    return '';
  }
}
