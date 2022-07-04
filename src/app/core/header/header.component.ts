import { Component, Input, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faPlayCircle = faPlayCircle;
  faUser = faUser;
  faRightFromBracket = faRightFromBracket;
}
