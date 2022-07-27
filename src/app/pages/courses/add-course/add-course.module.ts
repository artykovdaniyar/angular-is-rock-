import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course.component';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddCourseComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AddCourseComponent,
      },
    ]),
    CommonModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [AddCourseComponent],
})
export class AddCourseModule {}
