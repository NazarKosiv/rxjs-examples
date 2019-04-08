import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsOperatorsRoutingModule } from './rxjs-operators-routing.module';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { RxjsOperatorsService } from './services/rxjs-operators.service';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [RxjsOperatorsComponent],
  imports: [CommonModule, RxjsOperatorsRoutingModule, MatListModule, MatButtonModule],
  providers: [RxjsOperatorsService]
})
export class RxjsOperatorsModule {}
