import { NgModule } from '@angular/core';
import { CourseDurationPipe } from './course-duration/course-duration.pipe';
import { CoursesFilterPipe } from './courses-filter/courses-filter.pipe';
import { OrderByPipe } from './courses-order-by/courses-order-by.pipe';
import { AuthorsFilterPipe } from './authors-filter/authors-filter.pipe';

@NgModule({
  declarations: [
    CourseDurationPipe,
    OrderByPipe,
    CoursesFilterPipe,
    AuthorsFilterPipe,
  ],
  exports: [
    CourseDurationPipe,
    OrderByPipe,
    CoursesFilterPipe,
    AuthorsFilterPipe,
  ],
})
export class PipesModule {}
