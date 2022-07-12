import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseMarkerDirective } from './course-marker/course-marker.directive';
import { IfAuthenticatedDirective } from './if-authenticated/if-authenticated.directive';

@NgModule({
  declarations: [CourseMarkerDirective, IfAuthenticatedDirective],
  imports: [CommonModule],
  exports: [CourseMarkerDirective, IfAuthenticatedDirective],
})
export class DiractivesModule {}
