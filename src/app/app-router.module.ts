import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';
import { LoginComponent } from './pages/login/login.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/new',
    component: AddCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/:id',
    component: EditCourseComponent,
    canActivate: [AuthGuard],
  },

  { path: 'login', component: LoginComponent },
  {
    path: '404',
    component: ErrorPageComponent,
  },

  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
