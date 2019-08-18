import { Component, OnInit } from '@angular/core';
import { DynamicFormDate } from '../../models/dynamic-form-date.model';
import { DynamicFormFieldBase } from '../../models/dymanic-form-field-base.model';

@Component({
  selector: 'app-dynamic-form-date',
  templateUrl: './dynamic-form-date.component.html',
  styleUrls: ['./dynamic-form-date.component.scss']
})
export class DynamicFormDateComponent extends DynamicFormFieldBase<DynamicFormDate> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
