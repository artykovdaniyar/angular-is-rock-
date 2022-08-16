import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faEarthAmericas,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { User } from '../../models/user';
import * as fromStore from '../../../store';
import { TranslateService } from '@ngx-translate/core';

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
  faEarthAmericas = faEarthAmericas;

  conformText = '';

  constructor(
    private router: Router,
    private store: Store<fromStore.LoginState>,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(
      fromStore.isAuthenticatedSelector
    );
    this.userInfo$ = this.store.select(fromStore.userInfoSelector);
  }
  loginOut(): void {
    this.translate
      .get('HEADER.CONFORM_FOR_LOGINOUT')
      .pipe(take(1))
      .subscribe((res: string) => {
        this.conformText = res;
      });

    if (confirm(this.conformText)) {
      this.store.dispatch(fromStore.loginOut());
      this.router.navigate(['/login']);
    }
  }
  useLanguage(): void {
    const currLang = this.translate.currentLang;
    const langToChange = currLang === 'en' ? 'ru' : 'en';
    this.translate.use(langToChange);
    localStorage.setItem('angularIsRockCurrLang', langToChange);
  }
}
