import { Validators } from '@angular/forms';
import { IDynamicFormField } from '../models/dynamic-form.models';
import { minSelectedCheckboxes } from '../validators/min-selected-checkboxes.validator';

export enum DYNAMIC_FORM_FIELD_TYPES {
  INPUT = 'input',
  RADIO = 'radiobutton',
  DATE = 'date',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  CHECKBOX_ARRAY = 'checkboxArray',
  BUTTON = 'button'
}

export const dynamicFormConfig: Array<IDynamicFormField> = [
  {
    type: DYNAMIC_FORM_FIELD_TYPES.INPUT,
    label: 'Username',
    inputType: 'text',
    name: 'name',
    validators: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Name Required'
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Accept only text'
      }
    ]
  },
  {
    type: DYNAMIC_FORM_FIELD_TYPES.INPUT,
    label: 'Email Address',
    inputType: 'email',
    name: 'email',
    validators: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Email Required'
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        message: 'Invalid email'
      }
    ]
  },
  {
    type: DYNAMIC_FORM_FIELD_TYPES.INPUT,
    label: 'Password',
    inputType: 'password',
    name: 'password',
    validators: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required'
      }
    ]
  },
  {
    type: DYNAMIC_FORM_FIELD_TYPES.RADIO,
    label: 'Gender',
    name: 'gender',
    options: ['Male', 'Female'],
    value: 'Male'
  },
  {
    type: 'date',
    label: 'DOB',
    name: 'dob',
    validators: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Date of Birth Required'
      }
    ]
  },
  {
    type: DYNAMIC_FORM_FIELD_TYPES.SELECT,
    label: 'Country',
    name: 'country',
    value: 'UK',
    options: ['India', 'UAE', 'UK', 'US']
  },
  {
    type: 'checkbox',
    label: 'Accept Terms',
    name: 'term',
    value: true
  },
  {
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX_ARRAY,
    label: 'Pick Cities',
    name: 'cities',
    isFormArray: true,
    validators: [
      { name: 'minChecked', validator: minSelectedCheckboxes(1), message: 'At least one city must be checked!' }
    ],
    formArrayFields: [
      {
        value: false,
        type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
        name: 'if',
        label: 'Ivano-Frankivsk'
      },
      {
        value: false,
        type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
        name: 'lv',
        label: 'Lviv'
      },
      {
        value: false,
        type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
        name: 'pg',
        label: 'Prague'
      },
      {
        value: false,
        type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
        name: 'ld',
        label: 'London'
      }
    ]
  },
  {
    type: DYNAMIC_FORM_FIELD_TYPES.BUTTON,
    label: 'Save'
  }
];
