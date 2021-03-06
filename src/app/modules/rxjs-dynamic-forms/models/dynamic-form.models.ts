import { AbstractControl } from '@angular/forms';

export interface IGenericObject<T> {
  [key: string]: T;
}

export interface IControl {
  [key: string]: AbstractControl;
}

export interface IValidator {
  name: string;
  validator: any;
  message: string;
}
