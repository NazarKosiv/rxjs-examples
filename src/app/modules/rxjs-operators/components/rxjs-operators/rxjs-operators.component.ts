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

  showFilterExample(): void {
    this.operatorsService.createFilterExample();
  }

  showFilterRequestExample(showErrors = false): void {
    this.operatorsService.createFilterRequestExample(showErrors);
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

  showMergeMapExample(): void {
    this.operatorsService.createMergeMapExample();
  }

  clearView(): void {
    this.operatorsService.clearMessages();
    this.operatorsService.destroySubscriptions();
  }
}
