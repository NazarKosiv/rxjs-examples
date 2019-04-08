import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsSchedulerRoutingModule } from './rxjs-scheduler-routing.module';
import { RxjsSchedulerComponent } from './components/rxjs-scheduler/rxjs-scheduler.component';

@NgModule({
  declarations: [RxjsSchedulerComponent],
  imports: [
    CommonModule,
    RxjsSchedulerRoutingModule
  ]
})
export class RxjsSchedulerModule { }
