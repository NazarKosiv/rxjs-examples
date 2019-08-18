import { FormGroup } from '@angular/forms';
import { DynamicFormControl, IDynamicFormControlOptions } from './dynamic-form-control.model';
import { IControl } from './dynamic-form.models';

export interface IDynamicFormGroupOptions extends IDynamicFormControlOptions {
  controls: DynamicFormControl[];
}

export class DynamicFormGroup extends DynamicFormControl {
  public controls: DynamicFormControl[];

  constructor(options: IDynamicFormGroupOptions) {
    super(options);
    this.controls = options.controls || [];
  }

  public create(): FormGroup {
    return new FormGroup(this.createControls(), this.createValidators());
	}
	
	private createControls(): IControl {
		return this.controls.reduce(
      (acc: IControl, cur: DynamicFormControl) => {
        acc[cur.name] = cur.create();

        return acc;
      },
      {}
    ) as IControl;
	}
}