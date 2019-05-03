import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '../../services/dynamic-form.service';
import {
  registrationFormConfig,
  surveyFormConfig,
  favoriteCitiesFormConfig
} from '../../constants/rxjs-dynamic-forms.constants';
import { IDynamicFormField, IGenericObject } from '../../models/dynamic-form.models';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;
  dynamicFormFields: Array<IDynamicFormField> = registrationFormConfig;

  constructor(private dynamicFormService: DynamicFormService) {}

  ngOnInit() {
    this.dynamicForm = this.dynamicFormService.createFormGroup(this.dynamicFormFields);
  }

  onSubmit() {
    let value: any = this.dynamicForm.value;
    const checkboxArrayGroups: Array<IDynamicFormField> = this.dynamicFormFields.filter(
      (f: IDynamicFormField) => f.isFormArray
    );

    checkboxArrayGroups.forEach((checkboxArrayGroup: IDynamicFormField) => {
      value = {
        ...value,
        [checkboxArrayGroup.name]: this.getCheckedItems(checkboxArrayGroup, value)
      };
    });

    console.log(value);
  }

  private getCheckedItems(citiesGroup: IDynamicFormField, value: any): IGenericObject<string> {
    return (value[citiesGroup.name] as Array<boolean>).reduce(
      (acc, cur, i) => {
        if (cur) {
          const city: IDynamicFormField = citiesGroup.formArrayFields[i];

          acc[city.name] = city.label;
        }
        return acc;
      },
      {} as IGenericObject<string>
    );
  }
}
