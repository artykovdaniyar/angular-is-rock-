import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { TranslateService } from '@ngx-translate/core';

export let test = 'test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private translate: TranslateService) {
    if (localStorage['angularIsRockCurrLang']) {
      translate.setDefaultLang(localStorage['angularIsRockCurrLang']);
      translate.use(localStorage['angularIsRockCurrLang']);
    } else {
      translate.setDefaultLang('en');
      translate.use('en');
      localStorage.setItem('angularIsRockCurrLang', 'en');
    }
  }
  ngOnInit() {
    if (localStorage[fromStore.TOKEN_KEY]) {
      const userToken = JSON.parse(
        JSON.stringify(localStorage.getItem(fromStore.TOKEN_KEY))
      );
      this.store.dispatch(fromStore.getUserInfo({ token: userToken }));
    }
  }
}
