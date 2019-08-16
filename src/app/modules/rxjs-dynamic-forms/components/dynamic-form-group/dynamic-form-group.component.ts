import { Component, OnInit } from '@angular/core';
import { IDynamicFormGroup } from '../../models/dynamic-form-group.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-group',
  templateUrl: './dynamic-form-group.component.html',
  styleUrls: ['./dynamic-form-group.component.scss']
})
export class DynamicFormGroupComponent implements OnInit {
  field: IDynamicFormGroup;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
