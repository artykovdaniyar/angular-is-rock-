import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCourseModule } from './add-course/add-course.module';
import { EditCourseModule } from './edit-course/edit-course.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesModule,
    LoginModule,
    FontAwesomeModule,
    AddCourseModule,
    EditCourseModule,
  ],
  exports: [CoursesModule, LoginModule, AddCourseModule, EditCourseModule],
})
export class PagesModule {}
