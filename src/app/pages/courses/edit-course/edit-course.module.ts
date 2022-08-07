import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EditCourseComponent } from './edit-course.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CourseFormModule } from 'src/app/shared/components/course-form/course-form.module';

@NgModule({
  declarations: [EditCourseComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EditCourseComponent,
      },
    ]),
    CommonModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CourseFormModule,
  ],
  exports: [EditCourseComponent, RouterModule],
  providers: [DatePipe],
})
export class EditCourseModule {}
