import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSubjectMsgOutputComponent } from './rxjs-subject-msg-output.component';

describe('RxjsSubjectMsgOutputComponent', () => {
  let component: RxjsSubjectMsgOutputComponent;
  let fixture: ComponentFixture<RxjsSubjectMsgOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSubjectMsgOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSubjectMsgOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
