import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  courseForChange: any;

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.courseForChange = this.courseService.getCourseById(1);
  }

  onInput(target: any) {
    if (target.tagName === 'INPUT') {
      const tag = target as HTMLInputElement;
      this.courseForChange.name = tag.value;
    } else {
      const tag = target as HTMLTextAreaElement;
      this.courseForChange.description = tag.value;
    }
  }
  onInputDate(date: number) {
    this.courseForChange.date = date;
  }
  onInputDuration(duration: number) {
    this.courseForChange.duration = duration;
  }
  onSubmit(event: Event) {
    event.preventDefault();
    this.courseService.updateCourse(this.courseForChange);
  }
}
