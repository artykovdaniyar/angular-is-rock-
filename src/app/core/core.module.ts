import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent],
  exports: [HeaderComponent, BreadcrumbsComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class CoreModule {}
