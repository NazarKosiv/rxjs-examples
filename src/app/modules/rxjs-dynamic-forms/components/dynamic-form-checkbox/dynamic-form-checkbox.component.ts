import { Component, OnInit } from '@angular/core';
import { IDynamicFormControlField } from '../../models/dynamic-form.models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-checkbox',
  templateUrl: './dynamic-form-checkbox.component.html',
  styleUrls: ['./dynamic-form-checkbox.component.scss']
})
export class DynamicFormCheckboxComponent implements OnInit {
  field: IDynamicFormControlField;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
