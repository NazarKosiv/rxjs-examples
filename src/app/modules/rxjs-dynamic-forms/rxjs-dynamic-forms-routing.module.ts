import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicFormWrapperComponent } from './components/dynamic-form-wrapper/dynamic-form-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicFormWrapperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsDynamicFormsRoutingModule {}
