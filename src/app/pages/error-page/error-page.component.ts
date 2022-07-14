import { Component, OnInit } from '@angular/core';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  faCircleArrowLeft = faCircleArrowLeft;
  constructor() {}

  ngOnInit(): void {}
}
