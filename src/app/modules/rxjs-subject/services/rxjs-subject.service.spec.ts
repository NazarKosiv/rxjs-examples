import { TestBed } from '@angular/core/testing';

import { RxjsSubjectService } from './rxjs-subject.service';

describe('RxjsSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsSubjectService = TestBed.get(RxjsSubjectService);
    expect(service).toBeTruthy();
  });
});
