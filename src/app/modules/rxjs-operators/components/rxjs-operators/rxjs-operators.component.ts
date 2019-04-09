import { Component, OnInit } from '@angular/core';
import { RxjsOperatorsService } from '../../services/rxjs-operators.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.scss']
})
export class RxjsOperatorsComponent implements OnInit {
  messages$: Observable<Array<string>> = this.operatorsService.messages$;

  constructor(private operatorsService: RxjsOperatorsService) {}

  ngOnInit() {}

  showMapExample(): void {
    this.operatorsService.createMapExample();
  }

  showOfExample(): void {
    this.operatorsService.createOfExample();
  }

  showFromExample(): void {
    this.operatorsService.createFromExample();
  }

  showFilterExample(): void {
    this.operatorsService.createFilterExample();
  }

  showFilterRequestExample(showErrors = false): void {
    this.operatorsService.createFilterRequestExample(showErrors);
  }

  showConcatExample(): void {
    this.operatorsService.createConcatExample();
  }

  showForkJoinExample(): void {
    this.operatorsService.createForkJoinExample();
  }

  showFirstExample(): void {
    this.operatorsService.createFirstExample();
  }

  showTakeExample(): void {
    this.operatorsService.createTakeExample();
  }

  showCombineLatestAndFromEventExample(): void {
    this.operatorsService.createCombineLatestAndFromEventExample();
  }

  showConcatMapExample(): void {
    this.operatorsService.createConcatMapExample();
  }

  clearView(): void {
    this.operatorsService.clearMessages();
  }

  unsubscribe(): void {
    this.operatorsService.destroySubscriptions();
  }
}
