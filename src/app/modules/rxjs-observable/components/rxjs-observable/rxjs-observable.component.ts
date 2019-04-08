import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RxjsObservavleService } from '../../services/rxjs-observavle.service';

@Component({
  selector: 'app-rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styleUrls: ['./rxjs-observable.component.scss']
})
export class RxjsObservableComponent implements OnInit {
  messages$: Observable<Array<string>> = this.observableService.messages$;

  constructor(private observableService: RxjsObservavleService) {}

  ngOnInit() {}

  showSimpleObservableExample(): void {
    this.observableService.createSimpleObservableExample();
  }

  showMultyValueObservableExample(): void {
    this.observableService.createMultyvalueObservableExample();
  }

  showErrorObservableExample(): void {
    this.observableService.createErrorObservableExample();
  }

  showHotObservableExample(): void {
    this.observableService.createHotObservableExample();
  }

  showColdObservableExample(): void {
    this.observableService.createColdObservableExample();
  }

  clearView(): void {
    this.observableService.clearMessages();
    this.observableService.destroySubscriptions();
  }
}
