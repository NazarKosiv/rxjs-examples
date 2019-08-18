import { Component, OnInit } from '@angular/core';
import { DynamicFormFieldBase } from '../../models/dymanic-form-field-base.model';
import { DynamicFormArray } from '../../models/dynamic-form-array.model';
import { DynamicFormCheckbox } from '../../models/dynamic-form-checkbox.model';
import { FormArray } from '@angular/forms';
import { DynamicFormControl } from '../../models/dynamic-form-control.model';

@Component({
  selector: 'app-dynamic-form-array-checkbox',
  templateUrl: './dynamic-form-array-checkbox.component.html',
  styleUrls: ['./dynamic-form-array-checkbox.component.scss']
})
export class DynamicFormArrayCheckboxComponent extends DynamicFormFieldBase<DynamicFormArray> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  public changeField(field: DynamicFormArray): void {
    this.fieldMsgSrc$.next(field);
    this.updateControls();
  }

  private updateControls(): void {
    if (this.group) {
      const formArrayRef = this.group.get(this.field.name) as FormArray;
      while (formArrayRef.length > 0) {
        formArrayRef.removeAt(0);
      }
      this.field.controls.forEach((control: DynamicFormControl) => {
        formArrayRef.push(control.create());
      });
    }
  }
}
