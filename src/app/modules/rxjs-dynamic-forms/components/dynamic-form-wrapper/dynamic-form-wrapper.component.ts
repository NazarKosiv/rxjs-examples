import { Component, OnInit } from '@angular/core';
import { favoriteCitiesFormConfig } from '../../constants/rxjs-dynamic-forms.constants';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-wrapper',
  templateUrl: './dynamic-form-wrapper.component.html',
  styleUrls: ['./dynamic-form-wrapper.component.scss']
})
export class DynamicFormWrapperComponent implements OnInit {
  dynamicForm = favoriteCitiesFormConfig;
  private formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value): void {
    console.log({value});
  }

  onFormCreated(formGroup: FormGroup): void {
    this.formGroup = formGroup;
    this.startWatchingFieldsChanges();
  }

  private startWatchingFieldsChanges(): void {
    this.formGroup.get('country').valueChanges.subscribe((countryChanged) => {
      console.log({countryChanged});
    })
  }
}
