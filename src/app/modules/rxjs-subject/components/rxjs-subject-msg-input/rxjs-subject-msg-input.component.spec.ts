import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSubjectMsgInputComponent } from './rxjs-subject-msg-input.component';

describe('RxjsSubjectMsgInputComponent', () => {
  let component: RxjsSubjectMsgInputComponent;
  let fixture: ComponentFixture<RxjsSubjectMsgInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSubjectMsgInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSubjectMsgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
