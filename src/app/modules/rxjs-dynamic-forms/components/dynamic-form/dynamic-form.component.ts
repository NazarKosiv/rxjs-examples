import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { dynamicFormConfig } from '../../constants/rxjs-dynamic-forms.constants';
import { IDynamicFormField } from '../../models/dynamic-form.models';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;
  dynamicFormFields: Array<IDynamicFormField> = dynamicFormConfig;

  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit() {
    this.dynamicForm = this.dynamicFormService.generate(this.dynamicFormFields);
  }

  onSubmit() {
    console.log(this.dynamicForm.value);
  }
}
