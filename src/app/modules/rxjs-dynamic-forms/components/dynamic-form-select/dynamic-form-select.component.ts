import { Component, OnInit } from '@angular/core';
import { IDynamicFormControlField } from '../../models/dynamic-form.models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-select',
  templateUrl: './dynamic-form-select.component.html',
  styleUrls: ['./dynamic-form-select.component.scss']
})
export class DynamicFormSelectComponent implements OnInit {
  field: IDynamicFormControlField;
  group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
