import {
  Directive,
  AfterViewChecked,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
} from '@angular/core';

function getMiniSecondsFromDay(number: number) {
  let miniSec = 24 * 60 * 60 * (1000 * number);
  return miniSec;
}

@Directive({
  selector: '[appCourseMarker]',
})
export class CourseMarkerDirective implements OnInit, AfterViewChecked {
  @Input() creationDate!: string | number;
  currentDate = new Date().getTime();

  constructor(private el: ElementRef, private r: Renderer2) {}
  ngOnInit(): void {}

  ngAfterViewChecked() {
    console.log();
    if (
      this.creationDate < this.currentDate &&
      this.creationDate >= this.currentDate - getMiniSecondsFromDay(14)
    ) {
      this.r.addClass(this.el.nativeElement, 'card--new');
    } else if (this.creationDate > this.currentDate) {
      this.r.addClass(this.el.nativeElement, 'card--inrelease');
    }
  }
}
