import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { Course } from '../../models/course';
import * as fromStore from '../../../pages/login/store';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  course?: Course;
  courseId = 0;
  isAuthenticated!: boolean;
  constructor(
    public authService: AuthService,
    private store: Store<fromStore.LoginState>
  ) {}

  ngOnInit(): void {
    this.store
      .select(fromStore.isAuthenticatedSelector)
      .subscribe((state) => (this.isAuthenticated = state));
  }
}
