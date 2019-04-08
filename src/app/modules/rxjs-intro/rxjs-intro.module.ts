import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsIntroComponent } from './components/rxjs-intro/rxjs-intro.component';
import { RxjsIntroRoutingModule } from './rx-js-intro-routing.module';

@NgModule({
  declarations: [RxjsIntroComponent],
  imports: [
    CommonModule,
    RxjsIntroRoutingModule
  ]
})
export class RxjsIntroModule { }
