import { Component, OnInit } from '@angular/core';
import { transition, animate, keyframes, style, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-drag-example',
  templateUrl: './drag-example.component.html',
  styleUrls: ['./drag-example.component.scss'],
  animations: [
    trigger('photoState', [
      state('scale',   style({
        transform: 'scale(1.5)',
      })),
      state('rotate',   style({
        transform: 'rotateY(180deg)',
      })),
      state('rotate-scale',   style({
        transform: 'scale(1.5) rotateY(180deg)',
      })),
      transition('* <=> *', animate('400ms ease-in-out')),
    ]),
    trigger('secondPhotoState', [
      state('scale',   style({
        transform: 'scale(1.5)',
      })),
      state('rotate',   style({
        transform: 'rotate(90deg)',
      })),
      state('rotate-scale',   style({
        transform: 'scale(1.5) rotate(90deg)',
      })),
      transition('* <=> *', animate('400ms ease-in-out')),
    ])
  ]
})
export class DragExampleComponent implements OnInit {

  position = '';
  secondPosition = '';

  constructor() { }

  ngOnInit() {
  }

  scale(): void {
    if (this.position.includes('rotate')) {
      this.position = 'rotate-scale';
    } else {
      this.position = 'scale';
    }
  }

  rotate(): void {
    if (this.position.includes('scale')) {
      this.position = 'rotate-scale';
    } else {
      this.position = 'rotate';
    }
  }

  secondScale(): void {
    if (this.secondPosition.includes('rotate')) {
      this.secondPosition = 'rotate-scale';
    } else {
      this.secondPosition = 'scale';
    }
  }

  secondRotate(): void {
    if (this.secondPosition.includes('scale')) {
      this.secondPosition = 'rotate-scale';
    } else {
      this.secondPosition = 'rotate';
    }
  }
}
