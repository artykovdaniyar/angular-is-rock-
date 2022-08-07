import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTitleComponent } from './course-title/course-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { CourseDurationPipe } from '../../pipes/course-duration/course-duration.pipe';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CourseTitleComponent,
    CourseDescriptionComponent,
    CourseDateComponent,
    CourseDurationComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PipesModule],
  exports: [
    CourseTitleComponent,
    CourseDescriptionComponent,
    CourseDateComponent,
    CourseDurationComponent,
  ],
})
export class CourseFormModule {}
