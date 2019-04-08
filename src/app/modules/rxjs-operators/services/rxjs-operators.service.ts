import { Injectable } from '@angular/core';

import { Observable, from, merge, forkJoin, concat, combineLatest, fromEvent, Subject, of } from 'rxjs';
import { map, filter, switchMap, first, take, takeUntil, mergeMap, mapTo, scan, reduce } from 'rxjs/operators';

import { MessagesStorage } from 'src/app/shared/models/messages-storage';
import { CUSTOM_MESSAGE_TYPES } from 'src/app/shared/constants/message-types.constants';
import { fruits, numbers } from 'src/app/shared/constants/simple-data';
import { IEmployee } from 'src/app/shared/models/employee';
import { IMockResponse } from 'src/app/shared/models/mock-response';
import { MockApiService } from 'src/app/shared/services/mock-api.service';
import { employees } from 'src/app/shared/constants/employees.constants';
import { Person, IPerson } from 'src/app/shared/models/person';

@Injectable()
export class RxjsOperatorsService extends MessagesStorage {
  private employees$: Array<Observable<IMockResponse<IEmployee>>>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private mockApi: MockApiService) {
    super();
  }

  createMapExample(): void {
    const fruitsObservable: Observable<string> = from(fruits).pipe(map((fruit: string) => `fruit's name is ${fruit}`));

    this.subscribeToObservable(fruitsObservable);
  }

  createFilterExample(): void {
    const numbersObservable: Observable<number> = from(numbers).pipe(filter((n: number) => n > 2));

    this.subscribeToObservable(numbersObservable);
  }

  createFilterRequestExample(showErrors: boolean): void {
    this.resetEmployees$();

    const getEmployees$: Observable<string> = merge(...this.employees$).pipe(
      filter(
        (employeeResponse: IMockResponse<IEmployee>) =>
          (employeeResponse.error !== null && showErrors) || (employeeResponse.error === null && !showErrors)
      ),
      map((employeeResponse: IMockResponse<IEmployee>) => {
        const employeeInfo = employeeResponse.data.getInfo();
        if (employeeResponse.error !== null) {
          return `${employeeInfo} ran into a ${employeeResponse.error.message}`;
        } else {
          return employeeInfo;
        }
      })
    );

    this.subscribeToObservable(getEmployees$);
  }

  createForkJoinExample(): void {
    this.resetEmployees$();

    const getAllEmployeesAtOnce$: Observable<string> = forkJoin(this.employees$).pipe(
      switchMap((employeesResponse: Array<IMockResponse<IEmployee>>) => {
        return from(employeesResponse);
      }),
      map((employeeResponse: IMockResponse<IEmployee>) => {
        return `${employeeResponse.data.getInfo()}`;
      })
    );

    this.subscribeToObservable(getAllEmployeesAtOnce$);
  }

  createFirstExample(): void {
    this.resetEmployees$();

    const getFirstEmployee$: Observable<string> = concat(...this.employees$).pipe(
      first(),
      map((employeeResponse: IMockResponse<IEmployee>) => `${employeeResponse.data.getInfo()}`)
    );

    this.subscribeToObservable(getFirstEmployee$);
  }

  createTakeExample(): void {
    this.resetEmployees$();

    const getFirstTwoEmployees$: Observable<string> = merge(...this.employees$).pipe(
      take(2),
      map((employeeResponse: IMockResponse<IEmployee>) => `${employeeResponse.data.getInfo()}`)
    );

    this.subscribeToObservable(getFirstTwoEmployees$);
  }

  createCombineLatestAndFromEventExample(): void {
    this.destroySubscriptions();
    this.resetEmployees$();
    this.checkIfUnsubscribeStoppedAndRecreate();

    const clickEvent$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');
    const fruits$: Observable<number> = from(numbers);

    const combineLatestNumberAndClickEventPosition$: Observable<string> = combineLatest(fruits$, clickEvent$).pipe(
      map(([num, clickEvent]: [number, MouseEvent]) => {
        const x: number = clickEvent.clientX;
        const y: number = clickEvent.clientY;

        return `latest number: ${num} and its position is x: ${x}, y: ${y}`;
      }),
      takeUntil(this.unsubscribe$)
    );

    this.subscribeToObservable(combineLatestNumberAndClickEventPosition$);
  }

  createMergeMapExample(): void {
    const mergeIdWithPersonInfo$: Observable<string> = of(1).pipe(
      mergeMap((num: number) => {
        const uncleBob: IPerson = new Person('Uncle Bob', 67);
        return this.mockApi.simulateDataRequest<IPerson>(uncleBob).pipe(
          map((persoResponse: IMockResponse<IPerson>) => {
            return `${persoResponse.data.getInfo()} and his id: ${num}`;
          })
        );
      })
    );

    this.subscribeToObservable(mergeIdWithPersonInfo$);
  }

  destroySubscriptions(): void {
    if (!this.unsubscribe$.isStopped) {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    }
  }

  private resetEmployees$(): void {
    this.employees$ = employees.map((employee: IEmployee) => this.mockApi.simulateDataRequest<IEmployee>(employee));
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
