import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { IMockResponse, MockResponse } from '../models/mock-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  constructor() {}

  simulateDataRequest<T>(mockData: T): Observable<IMockResponse<T>> {
    const responseTime = Math.random() * 1000;
    const isError = responseTime > 500;

    return timer(responseTime).pipe(
      map(() => {
        const error: Error = isError ? new Error('😲 big oopsie!') : null;
        const mockResponse: IMockResponse<T> = new MockResponse<T>(mockData, error);

        return mockResponse;
      })
    );
  }
}
