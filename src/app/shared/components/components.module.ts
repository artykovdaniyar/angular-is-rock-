import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiractivesModule } from '../diractives/diractives.module';
import { RouterModule } from '@angular/router';
import { CourseLoadingComponent } from './loading/loading.component';
import { CourseErrorComponent } from './course-form/course-error/course-error.component';
import { BreadcrumbModule } from 'angular-crumbs';
import { CourseFormModule } from './course-form/course-form.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CourseLoadingComponent,
    CourseErrorComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DiractivesModule,
    RouterModule,
    BreadcrumbModule,
    CourseFormModule,
    TranslateModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,

    CourseLoadingComponent,
    CourseErrorComponent,
  ],
  providers: [TitleCasePipe],
})
export class ComponentsModule {}
