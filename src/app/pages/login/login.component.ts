import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userLogin = 'artykovdaniyar@gmail.com';
  userPassword = 'lamap69';
  isVisible = false;
  constructor(public authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  onInput(event: any) {
    if (event.target.type === 'email') {
      this.userLogin = event.target.value;
    } else if (event.target.type === 'password') {
      this.userPassword = event.target.value;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.userLogin && this.userPassword) {
      const userLogin: Login = {
        login: this.userLogin,
        password: this.userPassword,
      };
      this.authService.loginIn(userLogin);
    }
  }
}
