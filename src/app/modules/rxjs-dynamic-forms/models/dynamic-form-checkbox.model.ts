import { FormControl } from '@angular/forms';
import { DynamicFormControl, IDynamicFormControlOptions } from './dynamic-form-control.model';

export interface IDynamicFormCheckboxOptions extends IDynamicFormControlOptions {
	value?: boolean;
}

export class DynamicFormCheckbox extends DynamicFormControl {
	public value: boolean;

  constructor(options: IDynamicFormCheckboxOptions) {
    super(options);
		this.value = options.value || false;
  }

  public create(): FormControl {
    return new FormControl(this.value, this.createValidators());
  }
}
