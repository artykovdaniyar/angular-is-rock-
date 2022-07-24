import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EditCourseComponent } from './edit-course.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EditCourseComponent],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [EditCourseComponent],
  providers: [DatePipe],
})
export class EditCourseModule {}
