import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditCourseModule } from './edit-course/edit-course.module';
import { ErrorPageModule } from './error-page/error-page.module';
import { AddCourseModule } from './add-course/add-course.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    CoursesModule,
    LoginModule,
    EditCourseModule,
    ErrorPageModule,
    AddCourseModule,
  ],
})
export class PagesModule {}
