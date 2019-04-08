import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsObserverComponent } from './components/rxjs-observer/rxjs-observer.component';

const routes: Routes = [{
  path: '',
  component: RxjsObserverComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsObserverRoutingModule { }
