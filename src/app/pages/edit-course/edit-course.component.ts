import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Author } from 'src/app/shared/models/author';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss'],
})
export class EditCourseComponent implements OnInit {
  form!: FormGroup;
  course$!: Observable<Course>;
  courseId = 0;

  constructor(
    public coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.form = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(''),
      description: new FormControl(''),
      length: new FormControl(0),
      date: new FormControl(''),
      authors: new FormControl([]),
      isTopRated: new FormControl(false),
    });

    this.route.params.subscribe(({ id }) => {
      this.courseId = +id;
    });

    this.course$ = this.coursesService.getCourseById(this.courseId);

    this.course$.subscribe((course) => {
      this.form.patchValue({
        id: course.id,
        name: course.name,
        description: course.description,
        length: course.length,
        date: this.datePipe.transform(course.date, 'yyyy-MM-dd'),
        authors: course.authors,
        isTopRated: course.isTopRated,
      });
    });
  }

  updateAuthorsHandler(newAuthorsList: Author[]) {
    this.form.get('authors')?.patchValue(newAuthorsList);
  }
  onSubmit() {
    this.coursesService.updateCourse(this.form.value);
    this.goToCoursesPage();
  }
  goToCoursesPage() {
    this.router.navigate(['courses']);
  }
}
