import { FormControl } from '@angular/forms';
import { DynamicFormControl, IDynamicFormControlOptions } from './dynamic-form-control.model';

export interface IDynamicFormDateOptions extends IDynamicFormControlOptions {
	value?: string;
}

export interface IDynamicFormDate extends IDynamicFormDateOptions {
  create(): FormControl;
}

export class DynamicFormDate extends DynamicFormControl implements IDynamicFormDate {
	public value: string;

  constructor(options: IDynamicFormDateOptions) {
    super(options);
		this.value = options.value || null;
  }

  public create(): FormControl {
    return new FormControl(this.value, this.createValidators());
  }
}