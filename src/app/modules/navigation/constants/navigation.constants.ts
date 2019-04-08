import { INavigationLink } from '../models/navigation-link.models';

export const navigationLinks: Array<INavigationLink> = [
    {
        path: 'intro',
        label: 'RxJs Intro',
        loadChildren: '../rxjs-intro/rxjs-intro.module#RxjsIntroModule'
    },
    {
        path: 'observable',
        label: 'Observable',
        loadChildren: '../rxjs-observable/rxjs-observable.module#RxjsObservableModule'
    },
    {
        path: 'observer',
        label: 'Observer',
        loadChildren: '../rxjs-observer/rxjs-observer.module#RxjsObserverModule'
    },
    {
        path: 'subscription',
        label: 'Subscription',
        loadChildren: '../rxjs-subscription/rxjs-subscription.module#RxjsSubscriptionModule'
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
    }
];

