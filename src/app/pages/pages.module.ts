import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesModule } from './courses/courses.module';
import { LoginModule } from './login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ErrorPageModule } from './error-page/error-page.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
  exports: [CoursesModule, LoginModule, ErrorPageModule],
})
export class PagesModule {}
