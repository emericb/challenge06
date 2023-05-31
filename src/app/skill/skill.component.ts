import {Component, Input} from '@angular/core';
import {Skill} from "../models/Skill";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  constructor() {}

  @Input()
  skill: Skill = new Skill('', '', '');
}
