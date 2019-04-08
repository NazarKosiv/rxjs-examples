import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsSubjectComponent } from './components/rxjs-subject/rxjs-subject.component';

const routes: Routes = [{
  path: '',
  component: RxjsSubjectComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsSubjectRoutingModule { }
