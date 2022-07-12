import { NgModule } from '@angular/core';
import { CourseDurationPipe } from './course-duration/course-duration.pipe';
import { CoursesFilterPipe } from './courses-filter/courses-filter.pipe';
import { OrderByPipe } from './courses-order-by/courses-order-by.pipe';

@NgModule({
  declarations: [CourseDurationPipe, OrderByPipe, CoursesFilterPipe],
  exports: [CourseDurationPipe, OrderByPipe, CoursesFilterPipe],
})
export class PipesModule {}
