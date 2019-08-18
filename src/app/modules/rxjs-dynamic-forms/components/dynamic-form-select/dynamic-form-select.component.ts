import { Component, OnInit } from '@angular/core';
import { DynamicFormSelect } from '../../models/dynamic-form-select.model';
import { DynamicFormFieldBase } from '../../models/dymanic-form-field-base.model';

@Component({
  selector: 'app-dynamic-form-select',
  templateUrl: './dynamic-form-select.component.html',
  styleUrls: ['./dynamic-form-select.component.scss']
})
export class DynamicFormSelectComponent extends DynamicFormFieldBase<DynamicFormSelect> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

  public changeField(field: DynamicFormSelect): void {
    this.fieldMsgSrc$.next(field);
    this.updateSelect();
  }

  private updateSelect(): void {
    if (this.group) {
      const selectControlRef = this.group.get(this.field.name);
      const value = selectControlRef.value;
      if (!this.field.options.includes(value)) {
        selectControlRef.patchValue(this.field.options[0]);
      }
    }
  }
}
