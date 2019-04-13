import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, timer, Subscription } from 'rxjs';
import { tap, switchMap, filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  hideHeader = false;

  private hideHeaderOnScrollSub: Subscription;

  constructor() {}

  ngOnInit() {
    const hideHeaderOnScroll$: Observable<MouseEvent> = fromEvent<MouseEvent>(window, 'scroll');

    this.hideHeaderOnScrollSub = hideHeaderOnScroll$
      .pipe(
        tap(() => (this.hideHeader = true)),
        debounceTime(1000),
        tap(() => (this.hideHeader = false))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.hideHeaderOnScrollSub.unsubscribe();
  }
}
