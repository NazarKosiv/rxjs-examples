import { Component, OnInit } from '@angular/core';
import { IDynamicFormControlField } from '../../models/dynamic-form.models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-radiobutton',
  templateUrl: './dynamic-form-radiobutton.component.html',
  styleUrls: ['./dynamic-form-radiobutton.component.scss']
})
export class DynamicFormRadiobuttonComponent implements OnInit {
  field: IDynamicFormControlField;
  group: FormGroup;

  constructor() {}

  ngOnInit() {}
}
