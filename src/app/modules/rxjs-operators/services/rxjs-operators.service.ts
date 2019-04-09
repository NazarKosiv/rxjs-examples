import { Injectable } from '@angular/core';

import { Observable, from, merge, forkJoin, concat, combineLatest, fromEvent, Subject, of } from 'rxjs';
import { map, filter, switchMap, first, take, takeUntil, mergeMap, debounceTime, concatMap } from 'rxjs/operators';

import { MessagesStorage } from 'src/app/shared/models/messages-storage';
import { CUSTOM_MESSAGE_TYPES } from 'src/app/shared/constants/message-types.constants';
import { IEmployee } from 'src/app/shared/models/employee';
import { IMockResponse } from 'src/app/shared/models/mock-response';
import { MockApiService } from 'src/app/shared/services/mock-api.service';
import { employees } from 'src/app/shared/constants/employees.constants';
import { Person, IPerson } from 'src/app/shared/models/person';
import { fruits, numbers } from 'src/app/shared/constants/simple-data';

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

  createOfExample(): void {
    const numbers$: Observable<string> = of(numbers).pipe(
      map((nums: Array<number>) => `all at once ${nums.join(', ')}`)
    );

    this.subscribeToObservable(numbers$);
  }

  createFromExample(): void {
    const yoda: Promise<IPerson> = Promise.resolve(new Person('Yoda', Infinity));

    const numbers$: Observable<string> = from(numbers).pipe(map((num: number) => `one by one ${num}`));
    const yoda$: Observable<string> = from(yoda).pipe(map((y: IPerson) => `yoda talks about power ${y.getInfo()}`));

    this.subscribeToObservable(numbers$);
    this.subscribeToObservable(yoda$);
  }

  createFilterExample(): void {
    const numbers$: Observable<number> = from(numbers).pipe(filter((n: number) => n > 2));

    this.subscribeToObservable(numbers$);
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
        return of(...employeesResponse);
      }),
      map((employeeResponse: IMockResponse<IEmployee>) => {
        return `${employeeResponse.data.getInfo()}`;
      })
    );

    this.subscribeToObservable(getAllEmployeesAtOnce$);
  }

  createConcatExample(): void {
    this.resetEmployees$();

    const getEmployeesOneAtTime$: Observable<string> = concat(...this.employees$).pipe(
      map((employeeResponse: IMockResponse<IEmployee>) => `${employeeResponse.data.getInfo()}`)
    );

    this.subscribeToObservable(getEmployeesOneAtTime$);
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
    this.checkIfUnsubscribeSubjectStoppedAndRecreate();

    const clickEvent$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');
    const mouseMoveEvent$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'mousemove');

    const combineLatestNumberAndClickEventPosition$: Observable<string> = combineLatest(
      mouseMoveEvent$,
      clickEvent$
    ).pipe(
      debounceTime(500),
      map(([mouseMoveEvent, clickEvent]: Array<MouseEvent>) => {
        const mouseMoveX: number = mouseMoveEvent.clientX;
        const mouseMoveY: number = mouseMoveEvent.clientY;
        const clickX: number = clickEvent.clientX;
        const clickY: number = clickEvent.clientY;
        const clickedElement: HTMLElement = document.elementFromPoint(clickX, clickY) as HTMLElement;

        return `Mouse coordinates are x: ${mouseMoveX}, y: ${mouseMoveY}.
          Last clicked element is ${clickedElement.tagName} ${clickedElement.className}`;
      }),
      takeUntil(this.unsubscribe$)
    );

    this.subscribeToObservable(combineLatestNumberAndClickEventPosition$);
  }

  createConcatMapExample(): void {
    const mergeIdWithPersonInfo$: Observable<string> = of(1, 2, 3).pipe(
      concatMap((num: number) => {
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

  private checkIfUnsubscribeSubjectStoppedAndRecreate(): void {
    if (this.unsubscribe$.isStopped) {
      this.unsubscribe$ = new Subject<void>();
    }
  }
}
