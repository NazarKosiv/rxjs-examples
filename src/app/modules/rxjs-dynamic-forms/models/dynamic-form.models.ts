import { AbstractControl, FormGroup, FormControl, FormArray } from '@angular/forms';

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





export interface IDynamicFormControlField {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  type: string;
  value?: any;
  isFormArray?: boolean;
  formArrayFields?: Array<IDynamicFormControlField>;
  validators?: IValidator[];
}









export class DynamicFormControlField implements IDynamicFormControlField {
  public label: string;
  public name: string;
  public inputType: string;
  public options: string[];
  public type: string;
  public value: any;
  public isFormArray: boolean;
  public formArrayFields: IDynamicFormControlField[];
  public validators: IValidator[];

  constructor(options: IDynamicFormControlField) {
    this.label = options.label || null;
    this.name = options.name;
  }
}
