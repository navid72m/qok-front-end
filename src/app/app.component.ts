import { Component, OnInit, ViewEncapsulation, ViewChild, ViewContainerRef } from '@angular/core';

import { NotificationsService } from 'angular2-notifications';

import { AuthGuard } from './guards/auth.guard'
import { AppState } from './app.service';
import { Config } from './core/config/env.config';

import { ScrollTopService } from './core/scroll-top.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  authenticated: Boolean = false;

  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    animate: "fromLeft",
  }

  private sidenav: ViewContainerRef;
    @ViewChild('sidenav') set someDummySetterName(theElementRef: ViewContainerRef) {
      this.sidenav = theElementRef;
  }

  constructor( public appState: AppState,
               private authGuard: AuthGuard,
               private notificationsService: NotificationsService,
               private scrollTopService: ScrollTopService
             ) {
    
		this.authenticated = this.authGuard.isAuthenticated();
		this.authGuard.onAuthenticatedEvent.subscribe(
			  ( authenticated:Boolean ) => {
				  this.authenticated = authenticated;
			  }
		);
	}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
    this.scrollTopService.setScrollLink(document.getElementById("scroll"));
  }

}
