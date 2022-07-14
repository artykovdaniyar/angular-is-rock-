import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements DoCheck {
  userEmail = '';
  userPassword = '';
  isVisible = false;
  constructor(public authService: AuthService, private router: Router) {}

  ngDoCheck() {
    this.isVisible = this.authService.isLoginModelOpened;
  }
  onInput(event: any) {
    if (event.target.type === 'email') {
      this.userEmail = event.target.value;
    } else if (event.target.type === 'password') {
      this.userPassword = event.target.value;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.userEmail && this.userPassword) {
      const userLogin: Login = {
        email: this.userEmail,
        password: this.userPassword,
      };
      this.authService.loginIn(userLogin);
      this.router.navigate(['/courses']);
    }
  }
}
