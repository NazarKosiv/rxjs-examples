import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormDateComponent } from './dynamic-form-date.component';

describe('DynamicFormDateComponent', () => {
  let component: DynamicFormDateComponent;
  let fixture: ComponentFixture<DynamicFormDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
