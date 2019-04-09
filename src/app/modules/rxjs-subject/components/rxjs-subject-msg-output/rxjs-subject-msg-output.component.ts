import { Component, OnInit } from '@angular/core';
import { RxjsSubjectService } from '../../services/rxjs-subject.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-subject-msg-output',
  templateUrl: './rxjs-subject-msg-output.component.html',
  styleUrls: ['./rxjs-subject-msg-output.component.scss']
})
export class RxjsSubjectMsgOutputComponent implements OnInit {
  messages$: Observable<Array<string>> = this.subjectService.messages$;

  constructor(private subjectService: RxjsSubjectService) {}

  ngOnInit() {}

  clearMessages(): void {
    this.subjectService.clearMessages();
  }
}
