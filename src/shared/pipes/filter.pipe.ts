import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], fieldName: string, value: string): any[] {
        if (!items) {
            return [];
        }

        if (!value) {
            return items;
        }


        return items.filter(it => {
            let field = it[fieldName];
            return field && field.toLowerCase().indexOf(value.toLowerCase()) > -1;
        });
    }
}
