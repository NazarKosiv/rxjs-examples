import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DragNDropService } from 'src/app/shared/services/drag-n-drop.service';
import { ICoordinates } from './models/coordinates.model';

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
  private initialDragElementX: number = undefined;
  private initialDragElementY: number = undefined;
  private prevPageX: number;
  private prevPageY: number;
  private previousShiftX = 0;
  private previousShiftY = 0;

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
        this.setPrevPageCoords(event);
        this.initDragElementCoordsIfUndefined(event);
      });

    this.mouseMove$
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe((event: MouseEvent) => {
        if (!this.dragStarted) {
          return;
        }

        const currentPageX: number = event.pageX;
        const currentPageY: number = event.pageY;
        const shiftX: number = currentPageX - this.prevPageX;
        const shiftY: number = currentPageY - this.prevPageY;
        const translateX: number = this.previousShiftX + shiftX;
        const translateY: number = this.previousShiftY + shiftY;

        this.drag(translateX, translateY);
      });

    this.mouseUp$
      .pipe(
        takeUntil(this.onDestroy$)
      )
      .subscribe((event: MouseEvent) => {
        const shiftedDragElementCoords: ICoordinates = this.getShiftedCoords(event);
        const currentPageX: number = event.pageX;
        const currentPageY: number = event.pageY;
        const dragElementX: number = currentPageX - shiftedDragElementCoords.x;
        const dragElementY: number = currentPageY - shiftedDragElementCoords.y;

        this.dragStarted = false;
        this.setPrevShiftCoords(dragElementX, dragElementY);
      });
  }

  private drag(translateX: number, translateY: number): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translate3d(${translateX}px,${translateY}px,${0}px)`);
  }

  private setPrevPageCoords(event: MouseEvent): void {
    this.prevPageY = event.pageY;
    this.prevPageX = event.pageX;
  }

  private setPrevShiftCoords(dragElementX: number, dragElementY: number): void {
    this.previousShiftX = dragElementX - this.initialDragElementX;
    this.previousShiftY = dragElementY - this.initialDragElementY;
  }

  private initDragElementCoordsIfUndefined(event: MouseEvent): void {
    if (this.initialDragElementX === undefined && this.initialDragElementY === undefined) {
      const shiftedDragElementCoords: ICoordinates = this.getShiftedCoords(event);

      this.initialDragElementX = event.pageX - shiftedDragElementCoords.x;
      this.initialDragElementY = event.pageY - shiftedDragElementCoords.y;
    }
  }

  private getShiftedCoords(event: MouseEvent): ICoordinates {
    const scrollTop: number = window.pageYOffset;
    const scrollLeft: number = window.pageXOffset;
    const dragElementCoords: ClientRect = (this.elementRef.nativeElement as HTMLElement).getBoundingClientRect();
    const shiftX: number = event.pageX - (dragElementCoords.left + scrollLeft);
    const shiftY: number = event.pageY - (dragElementCoords.top + scrollTop);

    return {
      x: shiftX,
      y: shiftY
    };
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
