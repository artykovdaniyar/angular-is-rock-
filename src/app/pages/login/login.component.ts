import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogin = 'artykovdaniyar@gmail.com';
  userPassword = 'lampa69';
  errorInput$!: Observable<boolean>;
  serverError$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;
  form!: FormGroup;
  constructor(private store: Store<fromStore.LoginState>) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('artykovdaniyar@gmail.com'),
      password: new FormControl('lampa69'),
    });

    this.errorInput$ = this.store.select(fromStore.errorSelector);
    this.serverError$ = this.store.select(fromStore.serverErrorSelector);
    this.isLoading$ = this.store.select(fromStore.loadingSelector);
  }

  onSubmit() {
    this.store.dispatch(fromStore.loginIn({ login: this.form.value }));
  }
}
