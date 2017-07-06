import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fieldType'
})
export class FieldTypePipe implements PipeTransform {

    transform(value: string): string {
        switch (value.toLowerCase()) {
            case 'bool':
                return 'Boolean';

            case 'datetime':
                return 'DateTime';

            case 'decimal':
                return 'Decimal';

            case 'int':
                return 'Integer';

            case 'dropdown':
                return 'DropDown';

            case 'string':
                return 'String';

            default:
                return 'Unknown';
        }
    }
}
