import {
	FormControl,
	FormArray,
	FormGroup,
	ValidatorFn
} from '@angular/forms';

import { IValidator } from './dynamic-form.models';

export interface IDynamicFormControlConfig {
  form: FormGroup;
  field: DynamicFormControl;
  changeField: (field: any) => void;
}

export interface IDynamicFormHooks {
  onInit: (config: IDynamicFormControlConfig) => void;
}

export interface IDynamicFormControlOptions {
	type: string;
  label?: string;
  name?: string;
  validators?: IValidator[];
  hooks?: IDynamicFormHooks;
}

export abstract class DynamicFormControl {
	public type: string;
  public label: string;
  public name: string;
  public validators: IValidator[];
  public hooks: IDynamicFormHooks;

  constructor(options: IDynamicFormControlOptions) {
    this.name = options.name || null;
    this.label = options.label || null;
    this.validators = options.validators || [];
    this.type = options.type;
    this.hooks = options.hooks || null;
  }

  public abstract create(): FormControl | FormArray | FormGroup;

	protected createValidators(): ValidatorFn[] {
		return this.validators.map((validator: IValidator) => validator.validator);
  }

  public addHooksDynamically(hooks: IDynamicFormHooks): void {
    this.hooks = hooks;
  }
}
