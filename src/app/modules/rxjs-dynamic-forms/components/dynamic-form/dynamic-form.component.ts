import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { dynamicFormConfig } from '../../constants/rxjs-dynamic-forms.constants';
import { IDynamicFormField, IGenericObject } from '../../models/dynamic-form.models';

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
    this.dynamicForm = this.dynamicFormService.createFormGroup(this.dynamicFormFields);
  }

  onSubmit() {
    const value: any = this.dynamicForm.value;
    const citiesGroup: IDynamicFormField = { ...this.dynamicFormFields.find((f: IDynamicFormField) => f.isFormArray) };

    if (citiesGroup) {
      value[citiesGroup.name] = this.getCheckedItems(citiesGroup, value);
    }

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
