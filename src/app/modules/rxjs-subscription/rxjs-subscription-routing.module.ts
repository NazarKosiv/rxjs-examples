import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsSubscriptionComponent } from './components/rxjs-subscription/rxjs-subscription.component';

const routes: Routes = [{
  path: '',
  component: RxjsSubscriptionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsSubscriptionRoutingModule { }
