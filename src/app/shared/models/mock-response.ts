export interface IMockResponse<T> {
  data: T;
  error: Error | null;
}

export class MockResponse<T> implements IMockResponse<T> {
  constructor(public data: T, public error: Error | null) {}
}
