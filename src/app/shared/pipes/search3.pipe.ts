import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search3'
})
export class Search3Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
