import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsSubjectRoutingModule } from './rxjs-subject-routing.module';
import { RxjsSubjectComponent } from './components/rxjs-subject/rxjs-subject.component';

@NgModule({
  declarations: [RxjsSubjectComponent],
  imports: [
    CommonModule,
    RxjsSubjectRoutingModule
  ]
})
export class RxjsSubjectModule { }
