import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { navigationLinks } from './constants/navigation.constants';

const routes: Routes = [
  ...navigationLinks,
  {
    path: '**',
    redirectTo: '/observable'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {}
