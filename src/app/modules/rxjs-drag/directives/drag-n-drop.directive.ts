import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DragNDropService } from 'src/app/shared/services/drag-n-drop.service';

@Directive({
  selector: '[appDragNDrop]'
})
export class DragNDropDirective implements OnInit, OnDestroy {
  @Input() targetDepth = 3;

  private dragId: string;
  private mouseDown$: Observable<MouseEvent>;
  private mouseUp$: Observable<MouseEvent>;
  private mouseMove$: Observable<MouseEvent>;
  private onDestroy$: Subject<void> = new Subject<void>();
  private dragStarted = false;
  private initialTranslateX: number = undefined;
  private initialTranslateY: number = undefined;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private dragNDropService: DragNDropService
  ) { }

  ngOnInit(): void {
    this.initDragId();
    this.initEvents();
    this.listenToEvents();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private initDragId(): void {
    this.dragId = this.dragNDropService.uniqueDragId;
  }

  private initEvents(): void {
    (this.elementRef.nativeElement as HTMLElement).ondragstart = () => {
      return false;
    }

    this.renderer.addClass(this.elementRef.nativeElement, this.dragId);
    this.mouseDown$ = fromEvent<MouseEvent>(document, 'mousedown');
    this.mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');
    this.mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
  }

  private listenToEvents(): void {
    this.mouseDown$
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe((event: MouseEvent) => {
        if (!this.isLeftClick(event)) {
          return;
        }

        const target: HTMLElement = event.target as HTMLElement;
        if (!this.isDragElement(target)) {
          return;
        }

        this.dragStarted = true;
        this.initXnYIfNeeded(event);
      });

    this.mouseMove$
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe((event: MouseEvent) => {
        if (!this.dragStarted) {
          return;
        }

        const translateX = event.pageX - this.initialTranslateX;
        const translateY = event.pageY - this.initialTranslateY;

        this.drag(translateX, translateY);
      });

    this.mouseUp$
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe(() => {
        this.dragStarted = false;
      });
  }

  private drag(translateX: number, translateY: number): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(${translateX}px,${translateY}px,${0}px)`);
  }

  private initXnYIfNeeded(event: MouseEvent): void {
    if (this.initialTranslateX === undefined && this.initialTranslateY === undefined) {
      this.initialTranslateX = event.pageX;
      this.initialTranslateY = event.pageY;
    }
  }

  private isLeftClick(event: MouseEvent): boolean {
    return event.which === 1;
  }

  private isDragElement(target: HTMLElement): boolean {
    let element = target;
    let i = 0;

    do {
      if (element.classList.contains(this.dragId)) {
        return true;
      }

      element = element.parentNode as HTMLElement;
      if (!element) {
        return false;
      }

      i++;
    } while (element.parentNode && i < this.targetDepth);

    return false;
  }
}
