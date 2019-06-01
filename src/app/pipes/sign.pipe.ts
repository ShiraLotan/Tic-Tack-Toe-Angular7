import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sign'
})
export class SignPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if(value)
      {
        return 'X'
      }
  }

}
