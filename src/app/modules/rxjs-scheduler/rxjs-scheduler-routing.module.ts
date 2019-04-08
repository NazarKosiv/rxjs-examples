import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsSchedulerComponent } from './components/rxjs-scheduler/rxjs-scheduler.component';

const routes: Routes = [{
  path: '',
  component: RxjsSchedulerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsSchedulerRoutingModule { }
