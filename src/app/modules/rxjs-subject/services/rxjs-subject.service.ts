import { Injectable } from '@angular/core';
import { MessagesStorage } from 'src/app/shared/models/messages-storage';

@Injectable()
export class RxjsSubjectService extends MessagesStorage {
  constructor() {
    super();
  }
}
