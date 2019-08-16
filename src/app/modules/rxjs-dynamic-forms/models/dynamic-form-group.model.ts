import { FormGroup } from '@angular/forms';
import { IDynamicFormControl, DynamicFormControl, IDynamicFormControlOptions } from './dynamic-form-control.model';
import { IControl } from './dynamic-form.models';

export interface IDynamicFormGroupOptions extends IDynamicFormControlOptions {
  controls: IDynamicFormControl[];
}

export interface IDynamicFormGroup extends IDynamicFormGroupOptions {
  create(): FormGroup;
}

export class DynamicFormGroup extends DynamicFormControl implements IDynamicFormGroup {
  public controls: IDynamicFormControl[];

  constructor(options: IDynamicFormGroupOptions) {
    super(options);
    this.controls = options.controls || [];
  }

  public create(): FormGroup {
    return new FormGroup(this.createControls(), this.createValidators());
	}
	
	private createControls(): IControl {
		return this.controls.reduce(
      (acc: IControl, cur: IDynamicFormControl) => {
        if (cur.name) {
          acc[cur.name] = cur.create();
        }

        return acc;
      },
      {}
    ) as IControl;
	}
}