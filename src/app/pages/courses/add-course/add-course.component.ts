import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/shared/models/course';
import { Author } from '../../../shared/models/author';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  form!: FormGroup;
  course$!: Observable<Course>;
  courseId = 0;
  loading = false;
  error = false;

  constructor(
    private router: Router,
    private store: Store<fromStore.CoursesState>
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(500),
        Validators.minLength(10),
      ]),
      date: new FormControl('', Validators.required),
      length: new FormControl(0, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
      authors: new FormControl([], Validators.required),
      isTopRated: new FormControl(false),
    });
    this.store
      .select<boolean>(fromStore.coursesLoadingSelector)
      .subscribe((state) => (this.loading = state));
    this.store
      .select<boolean>(fromStore.coursesErrorSelector)
      .subscribe((state) => (this.error = state));
  }

  updateAuthorsHandler(newAuthorsList: Author[]) {
    this.form.get('authors')?.patchValue(newAuthorsList);
  }
  onSubmit() {
    this.store.dispatch(new fromStore.CreateCourse(this.form.value));
  }
  goToCoursesPage() {
    this.router.navigate(['courses']);
  }
}
