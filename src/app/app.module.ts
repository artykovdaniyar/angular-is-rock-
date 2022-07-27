import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbModule } from 'angular-crumbs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BreadcrumbModule,
    BrowserModule,
    CoreModule,
    PagesModule,
    SharedModule,
    AppRouterModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
    BreadcrumbModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
