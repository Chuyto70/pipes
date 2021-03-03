import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private sanador:DomSanitizer){

  }
  transform(value: string, ...args: unknown[]) {
    return this.sanador.bypassSecurityTrustResourceUrl(value)
  }

}
