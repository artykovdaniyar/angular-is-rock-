import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // newCourse: Course = {
  //   name: '',
  //   id: 0,
  //   description: '',
  //   length: 0,
  //   date: '',
  //   isTopRated: false,
  // };
  // constructor(private courseService: CoursesService, private router: Router) {}
  // ngOnInit(): void {
  //   this.newCourse.id = this.courseService.getCoursesList().length + 1;
  // }
  // onInput(target: any) {
  //   if (target.tagName === 'INPUT') {
  //     const tag = target as HTMLInputElement;
  //     this.newCourse.name = tag.value;
  //   } else {
  //     const tag = target as HTMLTextAreaElement;
  //     this.newCourse.description = tag.value;
  //   }
  // }
  // onInputDate(date: any) {
  //   this.newCourse.date = date;
  // }
  // onInputDuration(length: number) {
  //   this.newCourse.length = length;
  // }
  // onSubmit(event: any) {
  //   event.preventDefault();
  //   this.courseService.createCourse(this.newCourse);
  //   this.goToCoursePage();
  // }
  // goToCoursePage() {
  //   this.router.navigate(['/courses']);
  // }
}
