import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'map2array', pure: true })
export class Map2ArrayPipe implements PipeTransform {
  transform(input, args: string[]): any {
    let output = Array.from(input, ([key, val]) => {
      return {key: key, value: val};
    });

    return output;
  }
}
