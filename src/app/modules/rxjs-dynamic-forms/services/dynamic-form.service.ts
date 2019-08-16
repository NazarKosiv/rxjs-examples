import { Injectable } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { IDynamicFormControlField, IControl, IValidator } from '../models/dynamic-form.models';
import { DYNAMIC_FORM_FIELD_TYPES } from '../constants/rxjs-dynamic-forms.constants';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  constructor() {}

  createFormGroup(formFields: Array<IDynamicFormControlField>): FormGroup {
    const controls: IControl = formFields.reduce(
      (acc: IControl, cur: IDynamicFormControlField) => {
        if (cur.name) {
          acc[cur.name] = this.createFormControl(cur);
        }

        return acc;
      },
      {} as IControl
    );

    return new FormGroup(controls);
  }

  private getDefaultValue(fieldConfig: IDynamicFormControlField): number | string | boolean | null {
    if (fieldConfig.value) {
      return fieldConfig.value;
    } else if (fieldConfig.value === false) {
      return false;
    } else {
      return null;
    }
  }

  private getValidators(fieldConfig: IDynamicFormControlField): Array<any> {
    if (!fieldConfig.validators) {
      return [];
    }
    return fieldConfig.validators.map((validator: IValidator) => validator.validator);
  }

  private createFormControl(fieldConfig: IDynamicFormControlField): AbstractControl {
    if (fieldConfig.type === DYNAMIC_FORM_FIELD_TYPES.CHECKBOX_ARRAY) {
      const formArray: FormArray = new FormArray([], this.getValidators(fieldConfig));
      fieldConfig.formArrayFields.forEach((formField: IDynamicFormControlField) =>
        formArray.push(this.createFormControl(formField))
      );

      return formArray;
    } else {
      return new FormControl(this.getDefaultValue(fieldConfig), this.getValidators(fieldConfig));
    }
  }
}
