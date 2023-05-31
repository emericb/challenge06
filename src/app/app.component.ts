import { Component } from '@angular/core';
import {Developer} from "./models/Developer";
import {Skill} from "./models/Skill";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'challenge06';

  developer: Developer = new Developer(
    'Doe',
    'John',
    25,
    'male',
    'I am a full-stack web developer with experience in Angular, React, and Node.js.',
    [
      new Skill('Angular', '/assets/images/angular-logo.png', 'https://angular.io/'),
      new Skill('React', '/assets/images/react-logo.png', 'https://reactjs.org/'),
      new Skill('Node.js', '/assets/images/nodejs-logo.png', 'https://nodejs.org/'),
    ],
  );
}
