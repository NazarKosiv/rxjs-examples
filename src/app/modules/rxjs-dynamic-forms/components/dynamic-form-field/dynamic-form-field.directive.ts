import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, OnInit, ComponentRef } from '@angular/core';
import { IDynamicFormField } from '../../models/dynamic-form.models';
import { FormGroup } from '@angular/forms';
import { DynamicFormInputComponent } from '../dynamic-form-input/dynamic-form-input.component';
import { DynamicFormButtonComponent } from '../dynamic-form-button/dynamic-form-button.component';
import { DynamicFormSelectComponent } from '../dynamic-form-select/dynamic-form-select.component';
import { DynamicFormDateComponent } from '../dynamic-form-date/dynamic-form-date.component';
import { DynamicFormRadiobuttonComponent } from '../dynamic-form-radiobutton/dynamic-form-radiobutton.component';
import { DynamicFormCheckboxComponent } from '../dynamic-form-checkbox/dynamic-form-checkbox.component';
import { DynamicFormArrayCheckboxComponent } from '../dynamic-form-array-checkbox/dynamic-form-array-checkbox.component';
import { DYNAMIC_FORM_FIELD_TYPES } from '../../constants/rxjs-dynamic-forms.constants';

const componentMapper: Map<string, any> = new Map<string, any>([
  [DYNAMIC_FORM_FIELD_TYPES.INPUT, DynamicFormInputComponent],
  [DYNAMIC_FORM_FIELD_TYPES.BUTTON, DynamicFormButtonComponent],
  [DYNAMIC_FORM_FIELD_TYPES.SELECT, DynamicFormSelectComponent],
  [DYNAMIC_FORM_FIELD_TYPES.DATE, DynamicFormDateComponent],
  [DYNAMIC_FORM_FIELD_TYPES.RADIO, DynamicFormRadiobuttonComponent],
  [DYNAMIC_FORM_FIELD_TYPES.CHECKBOX, DynamicFormCheckboxComponent],
  [DYNAMIC_FORM_FIELD_TYPES.CHECKBOX_ARRAY, DynamicFormArrayCheckboxComponent]
]);

@Directive({
  selector: '[appDynamicFormField]'
})
export class DynamicFormFieldDirective implements OnInit {
  @Input() field: IDynamicFormField;
  @Input() group: FormGroup;
  private componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(componentMapper.get(this.field.type));
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
