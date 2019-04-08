export interface IPerson {
  name: string;
  age: number;

  getInfo(): string;
}

export class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  getInfo(): string {
    return `the name of person is ${this.name} and age is ${this.age}`;
  }
}
