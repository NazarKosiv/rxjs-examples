import { Component, OnInit } from '@angular/core';
import { RxjsSchedulerService } from '../../services/rxjs-scheduler.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-scheduler',
  templateUrl: './rxjs-scheduler.component.html',
  styleUrls: ['./rxjs-scheduler.component.scss']
})
export class RxjsSchedulerComponent implements OnInit {
  messages$: Observable<Array<string>> = this.schedulerService.messages$;

  constructor(private schedulerService: RxjsSchedulerService) {}

  ngOnInit() {}

  showSyncExample(): void {
    this.schedulerService.createSyncExample();
  }

  showAsyncExample(): void {
    this.schedulerService.createAsyncExample();
  }

  clearMessages(): void {
    this.schedulerService.clearMessages();
  }
}
