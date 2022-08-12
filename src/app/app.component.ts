import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store, private router: Router) {}
  ngOnInit() {
    if (localStorage[fromStore.TOKEN_KEY]) {
      const userToken = JSON.parse(
        JSON.stringify(localStorage.getItem(fromStore.TOKEN_KEY))
      );
      this.store.dispatch(fromStore.getUserInfo({ token: userToken }));
    }
  }
}
