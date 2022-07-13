import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course.component';
import { AddCourseDateComponent } from './add-course-date/add-course-date.component';
import { AddCourseDurationComponent } from './add-course-duration/add-course-duration.component';
import { AddCourseAuthorsComponent } from './add-course-authors/add-course-authors.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [
    AddCourseComponent,
    AddCourseDateComponent,
    AddCourseDurationComponent,
    AddCourseAuthorsComponent,
  ],
  imports: [CommonModule, PipesModule],
  exports: [AddCourseComponent],
})
export class AddCourseModule {}
