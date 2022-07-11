import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Login } from 'src/app/auth/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements DoCheck {
  userEmail = '';
  userPassword = '';
  isVisible = false;
  constructor(public authService: AuthService) {}

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
      this.authService.toggleLoginModel();
    }
  }
  closeModal() {
    this.authService.toggleLoginModel();
  }
}
