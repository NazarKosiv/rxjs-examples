import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsIntroComponent } from './components/rxjs-intro/rxjs-intro.component';
const routes: Routes = [{
    path: '',
    component: RxjsIntroComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RxjsIntroRoutingModule { }
