import { FormArray } from '@angular/forms';

import { IValidator } from './dynamic-form.models';
import { DynamicFormControl, IDynamicFormControlOptions } from './dynamic-form-control.model';

export interface IDynamicFormArrayOptions extends IDynamicFormControlOptions {
  controls: DynamicFormControl[];
  validators: IValidator[];
}

export class DynamicFormArray extends DynamicFormControl {
  public controls: DynamicFormControl[];
  public validators: IValidator[];

  constructor(options: IDynamicFormArrayOptions) {
    super(options);
    this.controls = options.controls || [];
    this.validators = options.validators || [];
  }

  public create(): FormArray {
		const formArray: FormArray = new FormArray([], this.createValidators());
			this.controls.forEach((formField: DynamicFormControl) =>
			formArray.push(formField.create())
		);
    return formArray;
  }
}
