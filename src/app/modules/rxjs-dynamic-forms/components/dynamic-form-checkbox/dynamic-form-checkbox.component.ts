import { Component, OnInit } from '@angular/core';
import { DynamicFormCheckbox } from '../../models/dynamic-form-checkbox.model';
import { DynamicFormFieldBase } from '../../models/dymanic-form-field-base.model';

@Component({
  selector: 'app-dynamic-form-checkbox',
  templateUrl: './dynamic-form-checkbox.component.html',
  styleUrls: ['./dynamic-form-checkbox.component.scss']
})
export class DynamicFormCheckboxComponent extends DynamicFormFieldBase<DynamicFormCheckbox> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
