import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { RxjsDragRoutingModule } from './rxjs-drag-routing.module';
import { DragExampleComponent } from './components/drag-example/drag-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragNDropDirective } from './directives/drag-n-drop.directive';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DragExampleComponent, DragNDropDirective],
  imports: [
    CommonModule,
    RxjsDragRoutingModule,
    DragDropModule,
    MaterialModule
  ]
})
export class RxjsDragModule { }
