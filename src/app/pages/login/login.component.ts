import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as fromStore from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  userLogin = 'artykovdaniyar@gmail.com';
  userPassword = 'lampa69';
  isAuthenticated = false;
  errorInput$!: Observable<boolean>;
  serverError$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;
  form!: FormGroup;
  isLoadingSub!: Subscription;
  constructor(
    private store: Store<fromStore.LoginState>,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('artykovdaniyar@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('lampa69', [
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(6),
      ]),
    });

    this.errorInput$ = this.store.select(fromStore.errorSelector);
    this.serverError$ = this.store.select(fromStore.serverErrorSelector);
    this.isLoading$ = this.store.select(fromStore.loadingSelector);
  }

  onSubmit() {
    this.store.dispatch(fromStore.loginIn({ login: this.form.value }));
    this.isLoadingSub = this.isLoading$.subscribe((state) => {
      if (!state) {
        this.router.navigate(['/courses']);
      }
    });
  }
  ngOnDestroy() {
    this.isLoadingSub.unsubscribe();
  }
}
