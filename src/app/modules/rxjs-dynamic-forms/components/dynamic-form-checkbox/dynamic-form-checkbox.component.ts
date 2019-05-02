import { Component, OnInit } from '@angular/core';
import { IDynamicFormField } from '../../models/dynamic-form.models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-checkbox',
  templateUrl: './dynamic-form-checkbox.component.html',
  styleUrls: ['./dynamic-form-checkbox.component.scss']
})
export class DynamicFormCheckboxComponent implements OnInit {
  field: IDynamicFormField;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
