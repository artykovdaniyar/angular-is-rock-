import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  courseForChange: any;

  constructor(
    private courseService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.courseForChange = this.courseService.getCourseById(+params['id']);
    // });
  }

  // onInput(target: any) {
  //   if (target.tagName === 'INPUT') {
  //     const tag = target as HTMLInputElement;
  //     this.courseForChange.name = tag.value;
  //   } else {
  //     const tag = target as HTMLTextAreaElement;
  //     this.courseForChange.description = tag.value;
  //   }
  // }
  // onInputDate(date: number) {
  //   this.courseForChange.date = date;
  // }
  // onInputDuration(length: number) {
  //   this.courseForChange.length = length;
  // }
  // onSubmit(event: Event) {
  //   event.preventDefault();
  //   this.courseService.updateCourse(this.courseForChange);
  //   this.goToCoursesPage();
  // }
  // goToCoursesPage() {
  //   this.router.navigate(['courses']);
  // }
}
