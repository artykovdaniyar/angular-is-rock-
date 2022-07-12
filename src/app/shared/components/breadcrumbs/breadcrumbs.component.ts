import { Component, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements DoCheck {
  constructor(private authService: AuthService) {}
  isAuthenticated = false;
  ngDoCheck(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
