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

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesSearchComponent,
    CoursesListComponent,
    CoursesItemComponent,
    CoursesMoreComponent,
    CourseMarkerDirective,
  ],
  exports: [CoursesComponent, CoursesSearchComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
})
export class CoursesModule {}
