import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsObserverRoutingModule } from './rxjs-observer-routing.module';
import { RxjsObserverComponent } from './components/rxjs-observer/rxjs-observer.component';

@NgModule({
  declarations: [RxjsObserverComponent],
  imports: [
    CommonModule,
    RxjsObserverRoutingModule
  ]
})
export class RxjsObserverModule { }
