import { FormArray } from '@angular/forms';

import { IDynamicFormControlField, IValidator } from './dynamic-form.models';
import { DynamicFormControl, IDynamicFormControlOptions, IDynamicFormControl } from './dynamic-form-control.model';

export interface IDynamicFormArrayOptions extends IDynamicFormControlOptions {
  controls: IDynamicFormControlField[];
  validators: IValidator[];
}

export interface IDynamicFormArray extends IDynamicFormArrayOptions {
  create(): FormArray;
}

export class DynamicFormArray extends DynamicFormControl implements IDynamicFormArray {
  public controls: IDynamicFormControlField[];
  public validators: IValidator[];

  constructor(options: IDynamicFormArrayOptions) {
    super(options);
    this.controls = options.controls || [];
    this.validators = options.validators || [];
  }

  public create(): FormArray {
		const formArray: FormArray = new FormArray([], this.createValidators());
			this.controls.forEach((formField: IDynamicFormControl) =>
			formArray.push(formField.create())
		);
    return formArray;
  }
}
