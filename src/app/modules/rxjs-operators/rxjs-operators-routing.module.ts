import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';

const routes: Routes = [{
  path: '',
  component: RxjsOperatorsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsOperatorsRoutingModule { }
