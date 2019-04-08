import { TestBed } from '@angular/core/testing';

import { NavigationStorageService } from './navigation-storage.service';

describe('NavigationStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationStorageService = TestBed.get(NavigationStorageService);
    expect(service).toBeTruthy();
  });
});
