import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [ErrorPageComponent],
})
export class ErrorPageModule {}
