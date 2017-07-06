import { PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(style) {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
