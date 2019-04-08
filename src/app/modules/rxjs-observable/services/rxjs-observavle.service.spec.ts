import { TestBed } from '@angular/core/testing';

import { RxjsObservavleService } from './rxjs-observavle.service';

describe('RxjsObservavleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsObservavleService = TestBed.get(RxjsObservavleService);
    expect(service).toBeTruthy();
  });
});
