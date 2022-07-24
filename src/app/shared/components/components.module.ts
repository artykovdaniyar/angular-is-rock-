import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiractivesModule } from '../diractives/diractives.module';
import { RouterModule } from '@angular/router';
import { CourseAuthorsComponent } from './course-form/course-authors/course-authors.component';
import { CourseLoadingComponent } from './course-form/course-loading/course-loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CourseAuthorsComponent,
    CourseLoadingComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, DiractivesModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CourseAuthorsComponent,
    CourseLoadingComponent,
  ],
  providers: [TitleCasePipe],
})
export class ComponentsModule {}
