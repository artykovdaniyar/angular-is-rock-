import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ErrorPageComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule, TranslateModule],
  exports: [ErrorPageComponent],
})
export class ErrorPageModule {}
