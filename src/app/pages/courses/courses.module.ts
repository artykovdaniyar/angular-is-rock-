import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CoursesService } from 'src/app/core/services/courses.service';
import { CoursesGalleryModule } from './courses-gallery/courses-gallery.module';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses.routing.module';
import { effects } from './store/effects';
import { COURSES_KEY, reducers } from './store/reducers';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CoursesRoutingModule,
    CommonModule,
    CoursesGalleryModule,
    StoreModule.forFeature(COURSES_KEY, reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [CoursesService],
  exports: [RouterModule],
})
export class CoursesModule {}
