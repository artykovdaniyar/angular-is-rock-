import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { IfAuthenticatedDirective } from './breadcrumbs/if-authenticated.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    IfAuthenticatedDirective,
  ],
  exports: [HeaderComponent, BreadcrumbsComponent, FooterComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class CoreModule {}
