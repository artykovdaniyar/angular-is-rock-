import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DiractivesModule } from '../diractives/diractives.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent],
  imports: [CommonModule, FontAwesomeModule, DiractivesModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent],
})
export class ComponentsModule {}
