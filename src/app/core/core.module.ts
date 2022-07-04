import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbsComponent, FooterComponent],
  exports: [HeaderComponent, BreadcrumbsComponent, FooterComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class CoreModule {}
