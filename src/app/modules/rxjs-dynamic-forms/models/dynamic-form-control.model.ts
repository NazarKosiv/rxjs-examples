import {
	FormControl,
	FormArray,
	FormGroup,
	ValidatorFn
} from '@angular/forms';

import { IValidator } from './dynamic-form.models';

export interface IDynamicFormControlOptions {
	type: string;
  label?: string;
  name?: string;
  validators?: IValidator[];
}

export interface IDynamicFormControl extends IDynamicFormControlOptions {
  create(): FormControl | FormArray | FormGroup;
}

export class DynamicFormControl implements IDynamicFormControl {
	public type: string;
  public label: string;
  public name: string;
  public validators: IValidator[];

  constructor(options: IDynamicFormControlOptions) {
    this.name = options.name || null;
    this.label = options.label || null;
    this.validators = options.validators || [];
    this.type = options.type;
  }

  public create(): FormControl | FormArray | FormGroup {
    return null;
	}
	
	protected createValidators(): ValidatorFn[] {
		return this.validators.map((validator: IValidator) => validator.validator);
	}
}
