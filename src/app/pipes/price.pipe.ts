import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: string): number {
    return Number.parseFloat(value.slice(1, value.indexOf(' ')));
  }
}
