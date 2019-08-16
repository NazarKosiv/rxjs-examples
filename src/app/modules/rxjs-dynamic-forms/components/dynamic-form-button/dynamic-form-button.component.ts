import { Component, OnInit } from '@angular/core';
import { IDynamicFormControlField } from '../../models/dynamic-form.models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-button',
  templateUrl: './dynamic-form-button.component.html',
  styleUrls: ['./dynamic-form-button.component.scss']
})
export class DynamicFormButtonComponent implements OnInit {
  field: IDynamicFormControlField;
  group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
