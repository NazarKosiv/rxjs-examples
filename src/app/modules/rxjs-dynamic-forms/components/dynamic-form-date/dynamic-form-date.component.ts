import { Component, OnInit } from '@angular/core';
import { IDynamicFormField } from '../../models/dynamic-form.models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-date',
  templateUrl: './dynamic-form-date.component.html',
  styleUrls: ['./dynamic-form-date.component.scss']
})
export class DynamicFormDateComponent implements OnInit {
  field: IDynamicFormField;
  group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
