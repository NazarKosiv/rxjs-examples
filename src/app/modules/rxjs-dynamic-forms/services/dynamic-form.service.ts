import { Injectable } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { IDynamicFormField, IControl, IValidator } from '../models/dynamic-form.models';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  constructor() {}

  generate(formFields: Array<IDynamicFormField>): FormGroup {
    const controls: IControl = formFields.reduce(
      (acc: IControl, cur: IDynamicFormField) => {
        if (cur.name) {
          acc[cur.name] = this.createFormControl(cur);
        }

        return acc;
      },
      {} as IControl
    );
    console.log(controls);

    return new FormGroup(controls);
  }

  private getDefaultValue(fieldConfig: IDynamicFormField): string | null {
    return fieldConfig.value || null;
  }

  private getValidators(fieldConfig: IDynamicFormField): Array<any> {
    if (!fieldConfig.validators) {
      return [];
    }
    return fieldConfig.validators.map((validator: IValidator) => validator.validator);
  }

  private createFormControl(fieldConfig: IDynamicFormField): AbstractControl {
    if (fieldConfig.isFormArray) {
      const formArray: FormArray = new FormArray([]);
      fieldConfig.formArrayFields.forEach((formField: IDynamicFormField) =>
        formArray.push(this.createFormControl(formField))
      );

      return formArray;
    } else {
      return new FormControl(this.getDefaultValue(fieldConfig), this.getValidators(fieldConfig));
    }
  }
}
