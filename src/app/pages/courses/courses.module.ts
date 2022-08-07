import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CourseFormModule } from 'src/app/shared/components/course-form/course-form.module';
import { CoursesGalleryModule } from './courses-gallery/courses-gallery.module';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses.routing.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CoursesRoutingModule, CommonModule, CoursesGalleryModule],
  providers: [CoursesService],
  exports: [RouterModule],
})
export class CoursesModule {}
