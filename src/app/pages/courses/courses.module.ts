import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesComponent } from './courses.component';
import { CoursesSearchComponent } from './courses-search/course-search.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesItemComponent } from './courses-item/courses-item.component';
import { FormsModule } from '@angular/forms';
import { CoursesMoreComponent } from './courses-more/courses-more.component';
import { CoursesInfoCardComponent } from './courses-info-card/courses-info-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesSearchComponent,
    CoursesListComponent,
    CoursesItemComponent,
    CoursesMoreComponent,
    CoursesInfoCardComponent,
  ],
  exports: [CoursesComponent, CoursesSearchComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule,
    RouterModule,
  ],
})
export class CoursesModule {}
