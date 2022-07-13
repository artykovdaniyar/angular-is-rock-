import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCourseModule } from './add-course/add-course.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesModule,
    LoginModule,
    FontAwesomeModule,
    AddCourseModule,
  ],
  exports: [CoursesModule, LoginModule, AddCourseModule],
})
export class PagesModule {}
