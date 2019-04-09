import { Injectable } from '@angular/core';
import { MessagesStorage } from 'src/app/shared/models/messages-storage';
import { Observable, of, asyncScheduler } from 'rxjs';
import { CUSTOM_MESSAGE_TYPES } from 'src/app/shared/constants/message-types.constants';
import { fruits } from 'src/app/shared/constants/simple-data';

@Injectable()
export class RxjsSchedulerService extends MessagesStorage {
  constructor() {
    super();
  }

  createSyncExample(): void {
    const fruits$ = of(...fruits);

    this.subscribeToObservable(fruits$);
    this.addMessage('just random sync message', CUSTOM_MESSAGE_TYPES.NEXT);
  }

  createAsyncExample(): void {
    const fruits$ = of(...fruits, asyncScheduler);

    this.subscribeToObservable(fruits$);
    this.addMessage('just random async message', CUSTOM_MESSAGE_TYPES.NEXT);
  }

  private subscribeToObservable(observable$: Observable<any>): void {
    observable$.subscribe(
      (message: any) => this.addMessage(`next: ${message}`, CUSTOM_MESSAGE_TYPES.NEXT),
      (err: Error) => this.addMessage(`error: ${err.message}`, CUSTOM_MESSAGE_TYPES.ERROR),
      () => this.addMessage('complete: done!', CUSTOM_MESSAGE_TYPES.COMPLETE)
    );
  }
}
