import { FormControl } from '@angular/forms';
import { DynamicFormControl, IDynamicFormControlOptions } from './dynamic-form-control.model';

export interface IDynamicFormRadioOptions extends IDynamicFormControlOptions {
	options: string[];
	value?: string;
}

export class DynamicFormRadio extends DynamicFormControl {
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
