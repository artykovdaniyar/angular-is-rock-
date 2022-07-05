import { Directive } from '@angular/core';

@Directive({
  selector: '[appNewCourseHighlighter]',
})
export class NewCourseHighlighterDirective {
  currentDate = new Date('09 Nov 2018').getTime();
  constructor() {
    console.log(this.currentDate);
  }
}
