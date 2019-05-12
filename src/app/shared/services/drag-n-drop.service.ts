import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragNDropService {
  private initialDragId = 'app-drag-n-drop';
  private lastDragInstanceNumber = -1;

  get uniqueDragId(): string {
    this.increaseLastDragInstanceId();
    return `${this.initialDragId}-${this.lastDragInstanceNumber}`;
  }

  constructor() { }

  private increaseLastDragInstanceId(): void {
    this.lastDragInstanceNumber++;
  }
}
