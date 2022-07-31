import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginLoadingComponent } from './login-loading/login-loading.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoginComponent, LoginLoadingComponent, LoginErrorComponent],
  exports: [LoginComponent, LoginLoadingComponent],
  imports: [
    FontAwesomeModule,
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
      },
    ]),
  ],
})
export class LoginModule {}
