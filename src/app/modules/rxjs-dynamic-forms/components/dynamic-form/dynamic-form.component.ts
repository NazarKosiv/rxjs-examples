import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '../../services/dynamic-form.service';
import {
  registrationFormConfig,
  surveyFormConfig,
  favoriteCitiesFormConfig
} from '../../constants/rxjs-dynamic-forms.constants';
import { IDynamicFormControlField, IGenericObject } from '../../models/dynamic-form.models';
import { IDynamicFormControl } from '../../models/dynamic-form-control.model';
import { IDynamicFormGroup } from '../../models/dynamic-form-group.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  formGroup: FormGroup;
  dynamicForm: IDynamicFormGroup = favoriteCitiesFormConfig;
  @Output() public submit: EventEmitter<any> = new EventEmitter<any>();
  @Output() public formCreated: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit() {
    this.formGroup = this.dynamicForm.create();
    this.formCreated.emit(this.formGroup);
  }

  onSubmit() {
    let value: any = this.formGroup.value;
    this.submit.emit(value);
    const checkboxArrayGroups: Array<IDynamicFormControlField> = this.dynamicForm.controls.filter(
      (f: IDynamicFormControlField) => f.isFormArray
    );

    checkboxArrayGroups.forEach((checkboxArrayGroup: IDynamicFormControlField) => {
      value = {
        ...value,
        [checkboxArrayGroup.name]: this.getCheckedItems(checkboxArrayGroup, value)
      };
    });

    console.log(value);
  }

  private getCheckedItems(citiesGroup: IDynamicFormControlField, value: any): IGenericObject<string> {
    return (value[citiesGroup.name] as Array<boolean>).reduce(
      (acc, cur, i) => {
        if (cur) {
          const city: IDynamicFormControlField = citiesGroup.formArrayFields[i];

          acc[city.name] = city.label;
        }
        return acc;
      },
      {} as IGenericObject<string>
    );
  }
}
