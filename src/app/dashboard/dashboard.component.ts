import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

@Component({
	selector:    'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
	username: string;
	role: string;

	constructor(
		private authGuard: AuthGuard,
		private router: Router
				) {}

	ngOnInit(): void {
		var currentUser = this.authGuard.getUser();
		if (currentUser) {
			this.username = currentUser.username;
			this.role = currentUser.role;
		} else {
			this.username = "Unknown";
			this.role = "Unknown";
		}
	}

	exit(): void {
		this.authGuard.logout();
		this.router.navigate(['/login']);
	}

	search(): void {
		this.router.navigate(['/user/search']);
	}
}
