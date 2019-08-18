import { Validators } from '@angular/forms';
import { minSelectedCheckboxes } from '../validators/min-selected-checkboxes.validator';
import { DynamicFormCheckbox } from '../models/dynamic-form-checkbox.model';
import { DynamicFormArray } from '../models/dynamic-form-array.model';
import { DynamicFormGroup } from '../models/dynamic-form-group.model';
import { DynamicFormInput } from '../models/dynamic-form-input.model';
import { DynamicFormSelect } from '../models/dynamic-form-select.model';

export enum DYNAMIC_FORM_FIELD_TYPES {
  INPUT = 'input',
  RADIO = 'radiobutton',
  DATE = 'date',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  CHECKBOX_ARRAY = 'checkboxArray',
  GROUP = 'group'
}

const uaCities: DynamicFormCheckbox[] = [
  new DynamicFormCheckbox({
    value: false,
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
    name: 'if',
    label: 'Ivano-Frankivsk'
  }),
  new DynamicFormCheckbox({
    value: false,
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
    name: 'lv',
    label: 'Lviv'
  }),
  new DynamicFormCheckbox({
    value: false,
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
    name: 'kv',
    label: 'Kyiv'
  }),
  new DynamicFormCheckbox({
    value: false,
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
    name: 'od',
    label: 'Odessa'
  })
]

const usCities: DynamicFormCheckbox[] = [
  new DynamicFormCheckbox({
    value: false,
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
    name: 'al',
    label: 'Alabama'
  }),
  new DynamicFormCheckbox({
    value: false,
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
    name: 'ny',
    label: 'New York'
  }),
  new DynamicFormCheckbox({
    value: false,
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
    name: 'la',
    label: 'Los Angeles'
  }),
  new DynamicFormCheckbox({
    value: false,
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
    name: 'tx',
    label: 'Texas'
  }),
  new DynamicFormCheckbox({
    value: false,
    type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX,
    name: 'fl',
    label: 'Florida'
  })
]

export const COUNTRY_CITIES: Map<string, DynamicFormCheckbox[]> = new Map([
  ['Ukraine', uaCities],
  ['US', usCities]
]);

export const favoriteCitiesFormConfig: DynamicFormGroup = new DynamicFormGroup({
  name: null,
  type: DYNAMIC_FORM_FIELD_TYPES.GROUP,
  controls: [
    new DynamicFormSelect({
      type: DYNAMIC_FORM_FIELD_TYPES.SELECT,
      label: 'Country',
      name: 'country',
      value: 'Ukraine',
      options: ['Ukraine', 'US']
    }),
    new DynamicFormArray({
      type: DYNAMIC_FORM_FIELD_TYPES.CHECKBOX_ARRAY,
      label: 'Pick Cities',
      name: 'cities',
      validators: [
        { name: 'minChecked', validator: minSelectedCheckboxes(1), message: 'At least one city must be checked!' }
      ],
      controls: [
        ...COUNTRY_CITIES.get('Ukraine')
      ]
    }),
    new DynamicFormInput({
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
    }),
    new DynamicFormGroup({
      name: 'userform',
      type: DYNAMIC_FORM_FIELD_TYPES.GROUP,
      controls: [
        new DynamicFormInput({
          type: DYNAMIC_FORM_FIELD_TYPES.INPUT,
          name: 'name',
          label: 'name',
          validators: [
            {
              name: 'required',
              validator: Validators.required,
              message: 'Field is required'
            },
            {
              name: 'minlength',
              validator: Validators.minLength(2),
              message: 'At least 2 symbols long!'
            },
          ]
        })
      ]
    })
  ]
});

export const surveyFormConfig: any[] = [
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
  }
];

export const registrationFormConfig: any[] = [
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
  }
];
