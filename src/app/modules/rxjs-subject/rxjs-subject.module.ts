import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { RxjsSubjectRoutingModule } from './rxjs-subject-routing.module';
import { RxjsSubjectComponent } from './components/rxjs-subject/rxjs-subject.component';
import { RxjsSubjectMsgInputComponent } from './components/rxjs-subject-msg-input/rxjs-subject-msg-input.component';
import { RxjsSubjectMsgOutputComponent } from './components/rxjs-subject-msg-output/rxjs-subject-msg-output.component';
import { RxjsSubjectService } from './services/rxjs-subject.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RxjsSubjectComponent, RxjsSubjectMsgInputComponent, RxjsSubjectMsgOutputComponent],
  imports: [CommonModule, RxjsSubjectRoutingModule, MatListModule, MatButtonModule, MatInputModule, FormsModule],
  providers: [RxjsSubjectService]
})
export class RxjsSubjectModule {}
