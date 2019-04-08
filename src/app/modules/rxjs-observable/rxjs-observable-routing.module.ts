import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsObservableComponent } from './components/rxjs-observable/rxjs-observable.component';

const routes: Routes = [{
  path: '',
  component: RxjsObservableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsObservableRoutingModule { }
