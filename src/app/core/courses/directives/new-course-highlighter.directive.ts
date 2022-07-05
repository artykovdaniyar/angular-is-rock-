import {
  AfterViewChecked,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

function getMiniSecondsFromDay(number: number) {
  let miniSec = 24 * 60 * 60 * (1000 * number);
  return miniSec;
}
@Directive({
  selector: '[appNewCourseHighlighter]',
})
export class NewCourseHighlighterDirective implements AfterViewChecked {
  @Input() creationDate!: number;
  currentDate = new Date().getTime();

  constructor(private el: ElementRef, private r: Renderer2) {}

  ngAfterViewChecked() {
    if (
      this.creationDate < this.currentDate &&
      this.creationDate >= this.currentDate - getMiniSecondsFromDay(14)
    ) {
      this.r.addClass(this.el.nativeElement, 'card--new');
    }
  }
}
