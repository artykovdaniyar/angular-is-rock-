import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { Course } from '../../models/course';
import * as fromStore from '../../../store';
import { take } from 'rxjs';

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
      .pipe(take(2))
      .subscribe((state) => (this.isAuthenticated = state));
  }
}
