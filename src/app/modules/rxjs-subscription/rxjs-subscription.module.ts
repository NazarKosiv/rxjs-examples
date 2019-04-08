import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsSubscriptionRoutingModule } from './rxjs-subscription-routing.module';
import { RxjsSubscriptionComponent } from './components/rxjs-subscription/rxjs-subscription.component';

@NgModule({
  declarations: [RxjsSubscriptionComponent],
  imports: [
    CommonModule,
    RxjsSubscriptionRoutingModule
  ]
})
export class RxjsSubscriptionModule { }
