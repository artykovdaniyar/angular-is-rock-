import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCourseComponent } from './edit-course.component';
import { EditCourseDateComponent } from './edit-course-date/edit-course-date.component';
import { EditCourseDurationComponent } from './edit-course-duration/edit-course-duration.component';
import { EditCourseAuthorsComponent } from './edit-course-authors/edit-course-authors.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [
    EditCourseComponent,
    EditCourseDateComponent,
    EditCourseDurationComponent,
    EditCourseAuthorsComponent,
  ],
  imports: [CommonModule, PipesModule],
  exports: [EditCourseComponent],
})
export class EditCourseModule {}
