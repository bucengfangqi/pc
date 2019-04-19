import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatstr'
})
export class FormatstrPipe implements PipeTransform {

  transform(value: string, args?: number): any {
    if(value.length>args){
      return value.substring(0,args)+" . . .";
    }else{
      return value;
    }
    
  }

}
