import { Component, OnInit } from '@angular/core';
import { DynamicFormRadio } from '../../models/dynamic-form-radio.model';
import { DynamicFormFieldBase } from '../../models/dymanic-form-field-base.model';

@Component({
  selector: 'app-dynamic-form-radiobutton',
  templateUrl: './dynamic-form-radiobutton.component.html',
  styleUrls: ['./dynamic-form-radiobutton.component.scss']
})
export class DynamicFormRadiobuttonComponent extends DynamicFormFieldBase<DynamicFormRadio> implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
