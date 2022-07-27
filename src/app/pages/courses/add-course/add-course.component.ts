import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Course } from 'src/app/shared/models/course';
import { Author } from '../../../shared/models/author';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  form!: FormGroup;
  course$!: Observable<Course>;
  courseId = 0;

  constructor(public coursesService: CoursesService, private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.form = new FormGroup({
      id: new FormControl(+(Math.random() * (9 - 1) + 1).toFixed(2)),
      name: new FormControl(''),
      description: new FormControl(''),
      length: new FormControl(),
      date: new FormControl(''),
      authors: new FormControl([]),
      isTopRated: new FormControl(false),
    });
  }

  updateAuthorsHandler(newAuthorsList: Author[]) {
    this.form.get('authors')?.patchValue(newAuthorsList);
  }
  onSubmit() {
    this.coursesService.createCourse(this.form.value);
    this.goToCoursesPage();
  }
  goToCoursesPage() {
    this.router.navigate(['courses']);
  }
}
