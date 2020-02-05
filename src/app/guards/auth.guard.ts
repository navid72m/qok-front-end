import { Injectable, Output, EventEmitter } from '@angular/core';
import { Route, Router, CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticatedUser } from './auth'

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
	@Output()
	onAuthenticatedEvent: EventEmitter<Boolean> = new EventEmitter<Boolean>();

	constructor(private router: Router) { }
	
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		// console.log('in canActivate, The route is: ' + state.url);
		// console.log('User\'s role is: ' + this.getUser().role);
		if (this.getUser().role === 'ROLE_ADMIN') {
			// logged in so return true
			return true;
		}
		
		// does not have permossion, so redirect to dashboard page
		// console.log('not admin, going back to dashboard');
		this.router.navigate(['/dashboard']);
		return false;
	}

	canLoad(route: Route) {
		
		if (this.getUser()) {
			// logged in so return true
			return true;
		}
		
		// not logged in so redirect to login page with the return url
		// console.log('not logged in, going back to login');
		this.router.navigate(['/login']);
		return false;
	}

	getUser(): AuthenticatedUser {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		return currentUser || null
	}

	isAuthenticated(): Boolean {
		return (this.getUser()) ? true : false;
	}

	logout() {
	        // remove user from local storage to log user out
	        localStorage.removeItem('currentUser');
     		this.onAuthenticatedEvent.emit(false);
    	}

	login(authUser: AuthenticatedUser) {
		localStorage.setItem('currentUser', JSON.stringify(authUser));
     		this.onAuthenticatedEvent.emit(true);
	}
}
