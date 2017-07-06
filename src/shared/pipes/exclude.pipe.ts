import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'exclude'
})
export class ExcludePipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) { return []; }
        return items.filter(it => it[field] !== value);
    }
}
