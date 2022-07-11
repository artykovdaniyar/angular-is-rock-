import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent
  implements OnInit, AfterViewInit, OnChanges, AfterContentInit, DoCheck
{
  userEmail = '';
  userPassword = '';
  isVisible = false;
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}
  ngAfterContentInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit(): void {}

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
      console.log(this.userEmail, this.userPassword);
    }
  }
  closeModal() {
    this.authService.toggleLoginModel();
  }
}
