import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsSchedulerRoutingModule } from './rxjs-scheduler-routing.module';
import { RxjsSchedulerComponent } from './components/rxjs-scheduler/rxjs-scheduler.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RxjsSchedulerService } from './services/rxjs-scheduler.service';

@NgModule({
  declarations: [RxjsSchedulerComponent],
  imports: [CommonModule, RxjsSchedulerRoutingModule, MatListModule, MatButtonModule],
  providers: [RxjsSchedulerService]
})
export class RxjsSchedulerModule {}
