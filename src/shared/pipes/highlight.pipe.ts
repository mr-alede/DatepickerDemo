import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'highlight' })
export class HighlightPipe implements PipeTransform {
    transform(text: string, search): string {
        let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

        pattern = pattern.split(' ').filter((t) => {
            return t.length > 0;
        }).join('|');

        let regex = new RegExp(pattern, 'gi');

        return search ? text.replace(regex, (match) => `<span class="highlight">${match}</span>`) : text;
    }
}
