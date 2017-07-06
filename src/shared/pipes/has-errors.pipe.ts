import { PipeTransform, Pipe } from '@angular/core';
import { NgModel } from '@angular/forms';

@Pipe({ name: 'hasErrors', pure: false })
export class HasErrorsPipe implements PipeTransform {
  transform(input: NgModel, validate = false): any {
    if (input && input.errors && (/*input.dirty || input.touched ||*/ validate)) {
      return true;
    }

    return false;
  }
}
