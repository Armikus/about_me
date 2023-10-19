import { Component } from '@angular/core';
import { NavigationEnum } from '../utils/naviagation';

export interface Link {
  content: string,
  path: string,
  tooltip: string | null
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../animations.scss']
})
export class NavbarComponent {
  links: Link[] = [
    {
      content: "home",
      path: NavigationEnum.HOME,
      tooltip: "home page"
    },
    {
      content: "about me",
      path: NavigationEnum.HOME,
      tooltip: "learn more about me!"
    },
    {
      content: "skills",
      path: NavigationEnum.HOME,
      tooltip: "check my skills and technologies I know!"
    },
    {
      content: "experience",
      path: NavigationEnum.HOME,
      tooltip: "find out more about my professional experience"
    },
    {
      content: "education",
      path: NavigationEnum.HOME,
      tooltip: "everything about my education"
    },
  ]

}
