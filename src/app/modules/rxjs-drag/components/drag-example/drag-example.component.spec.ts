import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragExampleComponent } from './drag-example.component';

describe('DragExampleComponent', () => {
  let component: DragExampleComponent;
  let fixture: ComponentFixture<DragExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
