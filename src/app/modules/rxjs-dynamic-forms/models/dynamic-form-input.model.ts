import { FormControl } from '@angular/forms';
import { DynamicFormControl, IDynamicFormControlOptions } from './dynamic-form-control.model';

export interface IDynamicFormInputOptions extends IDynamicFormControlOptions {
	inputType?: string;
	value?: string;
}

export interface IDynamicFormInput extends IDynamicFormInputOptions {
  create(): FormControl;
}

export class DynamicFormInput extends DynamicFormControl implements IDynamicFormInput {
  public inputType: string;
	public value: string;

  constructor(options: IDynamicFormInputOptions) {
    super(options);
		this.inputType = options.inputType || 'text';
		this.value = options.value || null;
  }

  public create(): FormControl {
    return new FormControl(this.value, this.createValidators());
  }
}