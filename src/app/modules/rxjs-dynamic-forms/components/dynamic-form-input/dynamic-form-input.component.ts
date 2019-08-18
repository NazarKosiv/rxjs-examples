import { Component, OnInit } from '@angular/core';
import { DynamicFormInput } from '../../models/dynamic-form-input.model';
import { DynamicFormFieldBase } from '../../models/dymanic-form-field-base.model';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss']
})
export class DynamicFormInputComponent extends DynamicFormFieldBase<DynamicFormInput> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
