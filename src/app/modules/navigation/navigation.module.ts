import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, NavigationRoutingModule, MatTabsModule],
  exports: [NavigationComponent, NavigationRoutingModule]
})
export class NavigationModule {}
