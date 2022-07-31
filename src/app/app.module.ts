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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const environment = {
  development: true,
  production: false,
};

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
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    environment.development ? StoreDevtoolsModule.instrument() : [],
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
