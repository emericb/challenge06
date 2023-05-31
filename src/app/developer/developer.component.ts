import {Component, Input} from '@angular/core';
import {Developer} from '../models/Developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  constructor() {}

  @Input()
  developer: Developer = new Developer('','',0,'','',[]);
}
