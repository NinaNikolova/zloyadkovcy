import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/bg';

@Pipe({
  name: 'times'
})
export class TimesPipe implements PipeTransform {

  transform(dateString: string, ...args: unknown[]): unknown {
    // date from the posts from today's date
    
    return moment(dateString).format('LLLL');;
  }

}
