import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: string): unknown {
    return value.slice(1, value.indexOf(' '));
  }
}
