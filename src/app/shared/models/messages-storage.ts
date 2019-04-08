import { BehaviorSubject, Observable } from 'rxjs';

import { customMessageType } from '../types/message.type';

export class MessagesStorage {
  private messagesSrc: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>([]);
  private get messages(): Array<string> {
    return this.messagesSrc.getValue();
  }
  messages$: Observable<Array<string>> = this.messagesSrc.asObservable();

  constructor() {}

  addMessage(message: string, messageType: customMessageType): void {
    const emoji: string = this.getEmoji(messageType);
    const messageWithEmoji = `${emoji} ${message}`;

    this.messagesSrc.next([...this.messages, messageWithEmoji]);
  }

  clearMessages(): void {
    this.messagesSrc.next([]);
  }

  private getEmoji(messageType: customMessageType): string {
    switch (messageType) {
      case 'next':
        return '📘';
      case 'error':
        return '📙';
      case 'complete':
        return '📗';
      default:
        return '📘';
    }
  }
}
