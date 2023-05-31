import {Skill} from "./Skill";

export class Developer {
  constructor(
    public lastName: string,
    public firstName: string,
    public age: number,
    public gender: string,
    public bio: string,
    public skills: Skill[]
  ) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.gender = gender;
    this.bio = bio;
    this.skills = skills;
  }
}
