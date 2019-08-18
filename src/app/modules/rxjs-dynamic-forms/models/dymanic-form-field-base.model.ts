import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormControl, IDynamicFormControlConfig } from './dynamic-form-control.model';
import { of, Observable, BehaviorSubject } from 'rxjs';

export abstract class DynamicFormFieldBase<T extends DynamicFormControl> implements OnInit {
  protected fieldMsgSrc$: BehaviorSubject<T> = new BehaviorSubject<T>(null);
  public field$: Observable<T> = this.fieldMsgSrc$.asObservable();
  public set field(field: T) {
    this.changeField(field);
  }
  public get field(): T {
    return this.fieldMsgSrc$.getValue();
  }
  
  public group: FormGroup;

  constructor() {
  }

  ngOnInit() {
    if (this.field.hooks) {
      const config = {
        form: this.group,
        field: this.field,
        changeField: this.changeField.bind(this)
      } as IDynamicFormControlConfig;
      this.field.hooks.onInit(config);
    }
  }

  public changeField(field: T): void {
    this.fieldMsgSrc$.next(field);
  }
}
