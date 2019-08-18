import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsDynamicFormsRoutingModule } from './rxjs-dynamic-forms-routing.module';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormCheckboxComponent } from './components/dynamic-form-checkbox/dynamic-form-checkbox.component';
import { DynamicFormDateComponent } from './components/dynamic-form-date/dynamic-form-date.component';
import { DynamicFormInputComponent } from './components/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormRadiobuttonComponent } from './components/dynamic-form-radiobutton/dynamic-form-radiobutton.component';
import { DynamicFormSelectComponent } from './components/dynamic-form-select/dynamic-form-select.component';
import { DynamicFormArrayCheckboxComponent } from './components/dynamic-form-array-checkbox/dynamic-form-array-checkbox.component';
import { DynamicFormFieldDirective } from './components/dynamic-form-field/dynamic-form-field.directive';
import { MaterialModule } from '../material/material.module';
import { DynamicFormGroupComponent } from './components/dynamic-form-group/dynamic-form-group.component';
import { DynamicFormWrapperComponent } from './components/dynamic-form-wrapper/dynamic-form-wrapper.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormCheckboxComponent,
    DynamicFormDateComponent,
    DynamicFormInputComponent,
    DynamicFormRadiobuttonComponent,
    DynamicFormSelectComponent,
    DynamicFormArrayCheckboxComponent,
    DynamicFormFieldDirective,
    DynamicFormGroupComponent,
    DynamicFormWrapperComponent
  ],
  imports: [CommonModule, RxjsDynamicFormsRoutingModule, ReactiveFormsModule, MaterialModule],
  entryComponents: [
    DynamicFormComponent,
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
