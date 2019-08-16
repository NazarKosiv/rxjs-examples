import { IDynamicFormRadio, DynamicFormRadio, IDynamicFormRadioOptions } from './dynamic-form-radio.model';

export class DynamicFormSelect extends DynamicFormRadio implements IDynamicFormRadio {
  constructor(options: IDynamicFormRadioOptions) {
    super(options);
  }
}
