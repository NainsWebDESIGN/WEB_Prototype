import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'Video'
})
export class VideoPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
@Pipe({
  name: 'Href'
})
// tslint:disable-next-line: class-name
export class Href implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(x: string) {
    return this.sanitizer.bypassSecurityTrustUrl(x);
  }
}