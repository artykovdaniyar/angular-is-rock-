import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesComponent } from './courses.component';
import { CoursesSearchComponent } from './courses-search/course-search.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { FormsModule } from '@angular/forms';
import { CoursesMoreComponent } from './courses-more/courses-more.component';

import { CourseMarkerDirective } from './directives/course-marker.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CoursesInfoCardComponent } from './courses-info-card/courses-info-card.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesSearchComponent,
    CoursesListComponent,
    CoursesItemComponent,
    CoursesMoreComponent,
    CourseMarkerDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    CoursesInfoCardComponent,
  ],
  exports: [CoursesComponent, CoursesSearchComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
})
export class CoursesModule {}
