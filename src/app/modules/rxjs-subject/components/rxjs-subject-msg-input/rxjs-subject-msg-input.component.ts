import { Component, OnInit } from '@angular/core';
import { RxjsSubjectService } from '../../services/rxjs-subject.service';
import { CUSTOM_MESSAGE_TYPES } from 'src/app/shared/constants/message-types.constants';

@Component({
  selector: 'app-rxjs-subject-msg-input',
  templateUrl: './rxjs-subject-msg-input.component.html',
  styleUrls: ['./rxjs-subject-msg-input.component.scss']
})
export class RxjsSubjectMsgInputComponent implements OnInit {
  constructor(private subjectService: RxjsSubjectService) {}

  ngOnInit() {}

  onSubmit(message: string): void {
    this.subjectService.addMessage(message, CUSTOM_MESSAGE_TYPES.NEXT);
  }
}
