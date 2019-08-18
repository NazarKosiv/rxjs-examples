import { Component, OnInit, OnDestroy } from '@angular/core';
import { favoriteCitiesFormConfig, COUNTRY_CITIES } from '../../constants/rxjs-dynamic-forms.constants';
import { FormGroup, FormArray } from '@angular/forms';
import { DynamicFormSelect } from '../../models/dynamic-form-select.model';
import { IDynamicFormControlConfig } from '../../models/dynamic-form-control.model';
import { DynamicFormArray } from '../../models/dynamic-form-array.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dynamic-form-wrapper',
  templateUrl: './dynamic-form-wrapper.component.html',
  styleUrls: ['./dynamic-form-wrapper.component.scss']
})
export class DynamicFormWrapperComponent implements OnInit, OnDestroy {
  public dynamicForm = favoriteCitiesFormConfig;
  public formGroup: FormGroup;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit() {
    const countryRef = this.dynamicForm.controls.find((control) => control.name === 'country') as DynamicFormSelect;
    const citiesRef = this.dynamicForm.controls.find((control) => control.name === 'cities') as DynamicFormArray;
    countryRef.addHooksDynamically({
      onInit: (config: IDynamicFormControlConfig) => {
        
      }
    });
    citiesRef.addHooksDynamically({
      onInit: (config: IDynamicFormControlConfig) => {
        this.formGroup.get('country').valueChanges
          .pipe(takeUntil(this.onDestroy$))
          .subscribe((country: string) => {
            const cities = COUNTRY_CITIES.get(country);
            config.changeField({
              ...config.field,
              controls: [...cities]
            });
          });
      }
    });
    this.formGroup = this.dynamicForm.create();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onSubmit(): void {
    const { value } = this.formGroup;
    console.log({value});
  }

  private startWatchingFieldsChanges(): void {
    this.formGroup.get('country').valueChanges.subscribe((countryChanged) => {
      console.log({countryChanged});
    })
  }
}
