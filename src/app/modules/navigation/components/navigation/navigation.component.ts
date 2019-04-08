import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { INavigationLink } from '../../models/navigation-link.models';
import { NavigationStorageService } from '../../services/navigation-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navLinks$: Observable<Array<INavigationLink>> = this.navigationStorageService.navLinks$;
  activeLink$: Observable<INavigationLink> = this.navigationStorageService.activeLink$;

  constructor(private navigationStorageService: NavigationStorageService) {}

  ngOnInit() {
    this.navigationStorageService.initActiveLink();
  }

  isLinkActive(link: INavigationLink, activeLink: INavigationLink): boolean {
    if (activeLink) {
      return activeLink.path === link.path;
    } else {
      return false;
    }
  }

  setActiveLink(activeLink: INavigationLink): void {
    this.navigationStorageService.setActiveLink(activeLink);
  }
}
