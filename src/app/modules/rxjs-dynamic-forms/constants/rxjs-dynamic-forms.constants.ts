import { Validators } from '@angular/forms';
import { IDynamicFormField } from '../models/dynamic-form.models';

export const dynamicFormConfig: Array<IDynamicFormField> = [
  {
    type: 'input',
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
    type: 'input',
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
    type: 'input',
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
    type: 'radiobutton',
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
    type: 'select',
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
    type: 'checkboxArray',
    label: 'Pick Cities',
    name: 'cities',
    isFormArray: true,
    formArrayFields: [
      {
        value: false,
        type: 'checkbox',
        name: 'if',
        label: 'Ivano-Frankivsk'
      },
      {
        value: false,
        type: 'checkbox',
        name: 'lv',
        label: 'Lviv'
      },
      {
        value: false,
        type: 'checkbox',
        name: 'pg',
        label: 'Prague'
      },
      {
        value: false,
        type: 'checkbox',
        name: 'ld',
        label: 'London'
      }
    ]
  },
  {
    type: 'button',
    label: 'Save'
  }
];
