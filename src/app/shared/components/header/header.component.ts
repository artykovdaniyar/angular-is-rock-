import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>;
  userInfo$!: Observable<User | null>;
  faPlayCircle = faPlayCircle;
  faUser = faUser;
  faRightFromBracket = faRightFromBracket;

  constructor(
    private router: Router,
    private store: Store<fromStore.LoginState>
  ) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(
      fromStore.isAuthenticatedSelector
    );
    this.userInfo$ = this.store.select(fromStore.userInfoSelector);
  }
  loginOut(): void {
    if (confirm('Do you really want to login out?')) {
      this.store.dispatch(fromStore.loginOut());
      this.router.navigate(['/login']);
    }
  }
}
