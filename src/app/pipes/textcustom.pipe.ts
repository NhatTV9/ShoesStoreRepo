import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textcustom',
})
export class TextcustomPipe implements PipeTransform {
  transform(value: string, number: number): string {
    if (value.length > number) {
      let text = value.slice(0, number) + '...';
      return text;
    }
    return value;
  }
}
