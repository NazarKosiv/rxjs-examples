import { TestBed } from '@angular/core/testing';

import { RxjsSchedulerService } from './rxjs-scheduler.service';

describe('RxjsSchedulerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxjsSchedulerService = TestBed.get(RxjsSchedulerService);
    expect(service).toBeTruthy();
  });
});
