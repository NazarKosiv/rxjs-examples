import { IPerson, Person } from './person';

export interface IEmployee extends IPerson {
  major: string;
}

export class Employee extends Person implements IEmployee {
  constructor(name: string, age: number, public major: string) {
    super(name, age);
  }

  getInfo(): string {
    return `${super.getInfo()} and his/her major is ${this.major}`;
  }
}
