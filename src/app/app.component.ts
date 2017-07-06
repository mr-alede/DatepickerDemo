import { Component, ViewContainerRef, OnInit } from '@angular/core';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/combineLatest';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  isSignedIn = false;
  isAuthenticated = false;

  isMenuCollapsed = false;

  pageHeader = '';
  alerts = [];
  search = '';

  constructor() {
  };

  ngOnInit() {
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  submitSearch() {
  }

  onConfirmationModalLoaded(event) {
  }
}
