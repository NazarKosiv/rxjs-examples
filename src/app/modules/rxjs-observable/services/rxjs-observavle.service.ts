import { Injectable } from '@angular/core';

import { Observable, Subscriber, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MessagesStorage } from 'src/app/shared/models/messages-storage';
import { CUSTOM_MESSAGE_TYPES } from 'src/app/shared/constants/message-types.constants';

@Injectable()
export class RxjsObservavleService extends MessagesStorage {
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor() {
    super();
  }

  createSimpleObservableExample(): void {
    const obs$: Observable<string> = new Observable((observer: Subscriber<string>) => {
      observer.next('Hey from observable mate! :D');
      observer.complete();
    });

    this.subscribeToObservable(obs$);
  }

  createErrorObservableExample(): void {
    const obs$: Observable<string> = new Observable((observer: Subscriber<string>) => {
      observer.next('Hey from observable mate! :D');
      observer.error(new Error('oopsie!'));
      observer.complete();
    });

    this.subscribeToObservable(obs$);
  }

  createMultyvalueObservableExample(): void {
    this.checkIfUnsubscribeStoppedAndRecreate();

    const obs$: Observable<number> = new Observable((observer: Subscriber<number>) => {
      let counter = 0;

      // Multy value observable
      const interval = setInterval(() => {
        observer.next(counter);
        counter++;
      }, 1000);

      // Function which gets called once we unsubscibe
      return () => {
        clearInterval(interval);
      };
    }).pipe(takeUntil(this.unsubscribe$));

    this.subscribeToObservable(obs$);
  }

  destroySubscriptions(): void {
    if (!this.unsubscribe$.isStopped) {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  }

  createHotObservableExample(): void {
    // Hot observable. Producer is outside
    const randomNumber = Math.random(); // a producer
    const obs$: Observable<number> = new Observable((observer: Subscriber<number>) => {
      observer.next(randomNumber);
    });

    // Will log the same values
    this.subscribeToObservable(obs$);
    this.subscribeToObservable(obs$);
  }

  createColdObservableExample(): void {
    // Cold observable. Producer is inside
    const obs$: Observable<number> = new Observable((observer: Subscriber<number>) => {
      const randomNumber = Math.random(); // a producer
      observer.next(randomNumber);
    });

    // Will log the different values
    this.subscribeToObservable(obs$);
    this.subscribeToObservable(obs$);
  }

  private subscribeToObservable(observable$: Observable<any>): void {
    observable$.subscribe(
      (message: any) => this.addMessage(`next: ${message}`, CUSTOM_MESSAGE_TYPES.NEXT),
      (err: Error) => this.addMessage(`error: ${err.message}`, CUSTOM_MESSAGE_TYPES.ERROR),
      () => this.addMessage('complete: done!', CUSTOM_MESSAGE_TYPES.COMPLETE)
    );
  }

  private checkIfUnsubscribeStoppedAndRecreate(): void {
    if (this.unsubscribe$.isStopped) {
      this.unsubscribe$ = new Subject<void>();
    }
  }
}
