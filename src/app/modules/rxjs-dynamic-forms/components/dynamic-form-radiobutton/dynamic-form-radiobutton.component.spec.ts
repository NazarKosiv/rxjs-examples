import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormRadiobuttonComponent } from './dynamic-form-radiobutton.component';

describe('DynamicFormRadiobuttonComponent', () => {
  let component: DynamicFormRadiobuttonComponent;
  let fixture: ComponentFixture<DynamicFormRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormRadiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
