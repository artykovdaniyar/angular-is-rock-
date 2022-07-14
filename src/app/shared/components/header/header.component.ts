import { Component, DoCheck, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements DoCheck {
  faPlayCircle = faPlayCircle;
  faUser = faUser;
  faRightFromBracket = faRightFromBracket;
  isAuthenticated = false;

  @Input() title = '';

  constructor(private authService: AuthService, private router: Router) {}
  ngDoCheck(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  loginOut(): void {
    if (confirm('Do you really want to login out?')) {
      this.authService.loginOut();
      this.router.navigate(['/login']);
    }
  }
}