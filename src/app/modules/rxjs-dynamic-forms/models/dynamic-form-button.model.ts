import { DynamicFormControl, IDynamicFormControlOptions } from './dynamic-form-control.model';

export interface IDynamicFormButton extends IDynamicFormControlOptions {
	label: string;
}

export class DynamicFormButton extends DynamicFormControl implements IDynamicFormButton {
	public label: string;

  constructor(options: IDynamicFormButton) {
    super(options);
		this.label = options.label || null;
  }
}
