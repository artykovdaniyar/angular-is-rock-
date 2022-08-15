import { Input, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'courseDuration',
})
export class CourseDurationPipe implements PipeTransform {
  constructor() {}
  transform(value: number, lang = 'en'): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    if (!hours) {
      return lang === 'en' ? minutes + ' min' : minutes + ' мин';
    } else if (!minutes) {
      return lang === 'en' ? hours + ' h' : hours + ' ч';
    } else {
      return lang == 'en'
        ? hours + ' h ' + minutes + ' min'
        : hours + ' ч ' + minutes + ' мин';
    }
  }
}
