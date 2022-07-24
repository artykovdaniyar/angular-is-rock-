import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  declarations: [AddCourseComponent],
  imports: [CommonModule, PipesModule],
  exports: [AddCourseComponent],
})
export class AddCourseModule {}
