import { AbstractControl } from '@angular/forms';

export interface IControl {
  [key: string]: AbstractControl;
}

export interface IValidator {
  name: string;
  validator: any;
  message: string;
}
export interface IDynamicFormField {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  type: string;
  value?: any;
  isFormArray?: boolean;
  formArrayFields?: Array<IDynamicFormField>;
  validators?: IValidator[];
}
