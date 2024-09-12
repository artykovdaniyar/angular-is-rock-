import { Component, OnInit } from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.scss'],
})
export class LoginErrorComponent implements OnInit {
  faTriangleExclamation = faTriangleExclamation;
  constructor() {}

  ngOnInit(): void {}
}
