import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
  isAuthenticated = false;
  errorInput$!: Observable<boolean>;
  serverError$!: Observable<boolean>;
  isLoading$!: Observable<boolean>;
  form!: FormGroup;
  constructor(
    private store: Store<fromStore.LoginState>,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl('artykovdaniyar@gmail.com'),
      password: new FormControl('lampa69'),
    });

    this.errorInput$ = this.store.select(fromStore.errorSelector);
    this.serverError$ = this.store.select(fromStore.serverErrorSelector);
    this.isLoading$ = this.store.select(fromStore.loadingSelector);
    this.store.select(fromStore.isAuthenticatedSelector).subscribe((state) => {
      if (state) {
        this.router.navigate(['/courses']);
      }
    });
  }

  onSubmit() {
    this.store.dispatch(fromStore.loginIn({ login: this.form.value }));
    this.router.navigate(['/courses']);
  }
}
