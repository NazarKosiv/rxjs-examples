import { FormControl } from '@angular/forms';
import { IDynamicFormControl, DynamicFormControl, IDynamicFormControlOptions } from './dynamic-form-control.model';

export interface IDynamicFormRadioOptions extends IDynamicFormControlOptions {
	options: string[];
	value?: string;
}

export interface IDynamicFormRadio extends IDynamicFormRadioOptions {
  create(): FormControl;
}

export class DynamicFormRadio extends DynamicFormControl implements IDynamicFormRadio {
  public options: string[];
	public value: string;

  constructor(options: IDynamicFormRadioOptions) {
    super(options);
		this.options = options.options;
		this.value = options.value || options.options[0];
  }

  public create(): FormControl {
    return new FormControl(this.value, this.createValidators());
  }
}
