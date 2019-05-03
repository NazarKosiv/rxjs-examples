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

export const favoriteCitiesFormConfig: Array<IDynamicFormField> = [
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

export const surveyFormConfig: Array<IDynamicFormField> = [
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
    value: 'Ukraine',
    options: ['Ukraine', 'UK', 'US']
  },
  {
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX_ARRAY,
    label: 'Pick your Favorite actors :D',
    name: 'people',
    isFormArray: true,
    validators: [
      { name: 'minChecked', validator: minSelectedCheckboxes(1), message: 'At least one person must be selected!' }
    ],
    formArrayFields: [
      {
        value: false,
        type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
        name: 'jon',
        label: 'Kit Harington'
      },
      {
        value: false,
        type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
        name: 'jaime',
        label: 'Nicolay Coster Waldau'
      },
      {
        value: false,
        type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
        name: 'tirion',
        label: 'Peter Dinklage'
      }
    ]
  },
  {
    type: DYNAMIC_FORM_FIELD_TYPES.BUTTON,
    label: 'Save'
  }
];

export const registrationFormConfig: Array<IDynamicFormField> = [
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
    type: DYNAMIC_FORM_FIELD_TYPES.INPUT,
    label: 'Country',
    name: 'country',
    value: null,
    validators: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Your country is required!'
      },
      {
        name: 'minlength',
        validator: Validators.minLength(2),
        message: 'At least 2 symbols long!'
      },
      {
        name: 'pattern',
        validator: Validators.pattern('^[a-zA-Z]+$'),
        message: 'Accept only text'
      }
    ]
  },
  {
    type: 'checkbox',
    label: 'Accept Terms',
    name: 'term',
    value: true
  },
  {
    type: DYNAMIC_FORM_FIELD_TYPES.BUTTON,
    label: 'Save'
  }
];
