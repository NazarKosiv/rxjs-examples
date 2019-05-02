import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormArrayCheckboxComponent } from './dynamic-form-array-checkbox.component';

describe('DynamicFormArrayCheckboxComponent', () => {
  let component: DynamicFormArrayCheckboxComponent;
  let fixture: ComponentFixture<DynamicFormArrayCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormArrayCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormArrayCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
