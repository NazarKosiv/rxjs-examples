import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { RxjsObservableRoutingModule } from './rxjs-observable-routing.module';
import { RxjsObservableComponent } from './components/rxjs-observable/rxjs-observable.component';
import { RxjsObservavleService } from './services/rxjs-observavle.service';

@NgModule({
  declarations: [RxjsObservableComponent],
  imports: [CommonModule, RxjsObservableRoutingModule, MatListModule, MatButtonModule],
  providers: [RxjsObservavleService]
})
export class RxjsObservableModule {}
