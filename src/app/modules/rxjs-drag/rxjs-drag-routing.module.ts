import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragExampleComponent } from './components/drag-example/drag-example.component';

const routes: Routes = [
  {
    path: '',
    component: DragExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsDragRoutingModule { }
