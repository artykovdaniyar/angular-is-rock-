import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseMarkerDirective } from './course-marker/course-marker.directive';
import { IfAuthenticatedDirective } from './if-authenticated/if-authenticated.directive';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [CourseMarkerDirective, IfAuthenticatedDirective],
  imports: [CommonModule, InfiniteScrollModule],
  exports: [
    CourseMarkerDirective,
    IfAuthenticatedDirective,
    InfiniteScrollModule,
  ],
})
export class DiractivesModule {}
