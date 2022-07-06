import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    if (!hours) {
      return minutes + ' min';
    } else if (!minutes) {
      return hours + ' h';
    } else {
      return hours + ' h ' + minutes + ' min';
    }
  }
}
