import { Component, OnInit } from '@angular/core';
import { IDynamicFormControlField } from '../../models/dynamic-form.models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-array-checkbox',
  templateUrl: './dynamic-form-array-checkbox.component.html',
  styleUrls: ['./dynamic-form-array-checkbox.component.scss']
})
export class DynamicFormArrayCheckboxComponent implements OnInit {
  field: IDynamicFormControlField;
  group: FormGroup;

  constructor() {}

  ngOnInit() {
  }
}
