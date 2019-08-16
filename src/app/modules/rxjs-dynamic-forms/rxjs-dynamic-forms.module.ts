import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsDynamicFormsRoutingModule } from './rxjs-dynamic-forms-routing.module';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormButtonComponent } from './components/dynamic-form-button/dynamic-form-button.component';
import { DynamicFormCheckboxComponent } from './components/dynamic-form-checkbox/dynamic-form-checkbox.component';
import { DynamicFormDateComponent } from './components/dynamic-form-date/dynamic-form-date.component';
import { DynamicFormInputComponent } from './components/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormRadiobuttonComponent } from './components/dynamic-form-radiobutton/dynamic-form-radiobutton.component';
import { DynamicFormSelectComponent } from './components/dynamic-form-select/dynamic-form-select.component';
import { DynamicFormArrayCheckboxComponent } from './components/dynamic-form-array-checkbox/dynamic-form-array-checkbox.component';
import { DynamicFormFieldDirective } from './components/dynamic-form-field/dynamic-form-field.directive';
import { MaterialModule } from '../material/material.module';
import { DynamicFormGroupComponent } from './components/dynamic-form-group/dynamic-form-group.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormButtonComponent,
    DynamicFormCheckboxComponent,
    DynamicFormDateComponent,
    DynamicFormInputComponent,
    DynamicFormRadiobuttonComponent,
    DynamicFormSelectComponent,
    DynamicFormArrayCheckboxComponent,
    DynamicFormFieldDirective,
    DynamicFormGroupComponent
  ],
  imports: [CommonModule, RxjsDynamicFormsRoutingModule, ReactiveFormsModule, MaterialModule],
  entryComponents: [
    DynamicFormComponent,
    DynamicFormButtonComponent,
    DynamicFormCheckboxComponent,
    DynamicFormDateComponent,
    DynamicFormInputComponent,
    DynamicFormRadiobuttonComponent,
    DynamicFormSelectComponent,
    DynamicFormArrayCheckboxComponent,
    DynamicFormGroupComponent
  ]
})
export class RxjsDynamicFormsModule {}
