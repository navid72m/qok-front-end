import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

import { LoginService } from './login.service';
import { AuthGuard } from '../guards/auth.guard';
import { ProgressBarService } from '../core/progress-bar/progress-bar.service';

@Component({
	moduleId: module.id + "",
	selector:    'login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})

export class LoginComponent implements OnInit {
	showErr: Boolean = false;

	constructor(private loginService: LoginService,
		private authGuard: AuthGuard,
		private router: Router,
		private progressBarService: ProgressBarService,
		private notificationsService: NotificationsService
		) {}

	ngOnInit(): void {
		this.authGuard.logout();
		this.progressBarService.setParams("accent", 100, 100, "determinate");
		this.progressBarService.queryFinished();
	}

	login(username: string, password: string): void {
		this.progressBarService.queryInProgress();
		this.loginService.authenticate(username, password)
			.then(res => {
				this.progressBarService.queryFinished();
				this.authGuard.login(res)
				let link = `/dashboard`;
				this.router.navigateByUrl(link);
			})
			.catch(err => {
				this.notificationsService.error("خطا", "نام کاربری یا رمز عبور اشتباه است");
				this.progressBarService.queryFinished();
			});
	}
}
