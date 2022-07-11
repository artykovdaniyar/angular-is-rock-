import { Component, Input, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faPlayCircle = faPlayCircle;
  faUser = faUser;
  faRightFromBracket = faRightFromBracket;
  isAuthenticated = false;
  @Input() title = '';

  constructor(private authService: AuthService) {}

  openLoginModel() {
    this.authService.toggleLoginModel();
  }
}
