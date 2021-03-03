import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activar'
})
export class ActivarPipe implements PipeTransform {

  transform(value: string, act:boolean =false) {
    
    return (act) ?'*'.repeat(value.length) : value
  }

}
