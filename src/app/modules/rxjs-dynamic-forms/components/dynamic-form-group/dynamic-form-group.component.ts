import { Component, OnInit } from '@angular/core';
import { DynamicFormGroup } from '../../models/dynamic-form-group.model';
import { DynamicFormFieldBase } from '../../models/dymanic-form-field-base.model';

@Component({
  selector: 'app-dynamic-form-group',
  templateUrl: './dynamic-form-group.component.html',
  styleUrls: ['./dynamic-form-group.component.scss']
})
export class DynamicFormGroupComponent extends DynamicFormFieldBase<DynamicFormGroup> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
