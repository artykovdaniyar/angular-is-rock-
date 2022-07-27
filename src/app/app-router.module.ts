import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CoursesComponent } from './pages/courses/courses.component';
const routes: Routes = [
  {
    path: 'courses',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/courses/courses.module').then((m) => m.CoursesModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
