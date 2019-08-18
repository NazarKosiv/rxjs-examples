import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { IGenericObject } from '../../models/dynamic-form.models';
import { DynamicFormGroup } from '../../models/dynamic-form-group.model';
import { DYNAMIC_FORM_FIELD_TYPES } from '../../constants/rxjs-dynamic-forms.constants';
import { DynamicFormControl } from '../../models/dynamic-form-control.model';
import { DynamicFormArray } from '../../models/dynamic-form-array.model';
import { DynamicFormCheckbox } from '../../models/dynamic-form-checkbox.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  private formGroup: FormGroup;
  @Input() public dynamicForm: DynamicFormGroup;
  @Output() public submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public formCreated: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor() {}

  ngOnInit() {
    this.formGroup = this.dynamicForm.create();
    this.formCreated.emit(this.formGroup);
  }

  onSubmit() {
    let value: any = this.formGroup.value;
    this.submit.emit(value);
    const checkboxArrayGroups = this.dynamicForm.controls.filter(
      (f: DynamicFormControl) => f.type === DYNAMIC_FORM_FIELD_TYPES.CHECKBOX_ARRAY
    ) as DynamicFormArray[];

    checkboxArrayGroups.forEach((checkboxArrayGroup: DynamicFormArray) => {
      value = {
        ...value,
        [checkboxArrayGroup.name]: this.getCheckedItems(checkboxArrayGroup, value)
      };
    });

    console.log(value);
  }

  private getCheckedItems(citiesGroup: DynamicFormArray, value: any): IGenericObject<string> {
    return (value[citiesGroup.name] as boolean[]).reduce(
      (acc, cur, i) => {
        if (cur) {
          const city: DynamicFormCheckbox = citiesGroup.controls[i] as DynamicFormCheckbox;

          acc[city.name] = city.label;
        }
        return acc;
      },
      {} as IGenericObject<string>
    );
  }
}
