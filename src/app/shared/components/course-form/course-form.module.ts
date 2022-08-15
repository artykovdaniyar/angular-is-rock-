import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseTitleComponent } from './course-title/course-title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseDateComponent } from './course-date/course-date.component';
import { CourseDurationComponent } from './course-duration/course-duration.component';
import { PipesModule } from '../../pipes/pipes.module';
import { CourseAuthorsComponent } from './course-authors/course-authors.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CourseTitleComponent,
    CourseDescriptionComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    TranslateModule,
  ],
  exports: [
    CourseTitleComponent,
    CourseDescriptionComponent,
    CourseDateComponent,
    CourseDurationComponent,
    CourseAuthorsComponent,
  ],
})
export class CourseFormModule {}
