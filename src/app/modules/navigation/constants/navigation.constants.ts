import { INavigationLink } from '../models/navigation-link.models';

export const navigationLinks: Array<INavigationLink> = [
  {
    path: 'observable',
    label: 'Observable',
    loadChildren: '../rxjs-observable/rxjs-observable.module#RxjsObservableModule'
  },
  {
    path: 'operators',
    label: 'Operators',
    loadChildren: '../rxjs-operators/rxjs-operators.module#RxjsOperatorsModule'
  },
  {
    path: 'subject',
    label: 'Subject',
    loadChildren: '../rxjs-subject/rxjs-subject.module#RxjsSubjectModule'
  },
  {
    path: 'scheduler',
    label: 'Scheduler',
    loadChildren: '../rxjs-scheduler/rxjs-scheduler.module#RxjsSchedulerModule'
  },
  {
    path: 'dynamic-forms',
    label: 'Dynamic forms',
    loadChildren: '../rxjs-dynamic-forms/rxjs-dynamic-forms.module#RxjsDynamicFormsModule'
  },
  {
    path: 'rxjs-drag',
    label: `drag 'n' drop`,
    loadChildren: '../rxjs-drag/rxjs-drag.module#RxjsDragModule'
  }
];
