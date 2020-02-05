import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
import { AuthGuard } from '../../guards/auth.guard';
import { UserSearch } from '../../shared/search.model';

import { CreateService } from './create.service';
import { CreateUserModel } from './create.model';
import { ROLES } from './roles.model';
import { STATUS } from './status.model';

@Component({
	selector: 'create-user',
	templateUrl: './create.component.html',
	styleUrls: [ './create.component.css' ],
})

export class CreateUserComponent implements OnInit {
	// users: UserSearch[];
    user = new CreateUserModel();
	username: string;
	roles = ROLES;
	status = STATUS;
	mode: string = 'determinate';
	spinnerValue = 100;
	spinnerColor: string = 'accent';
git 
	constructor (
		private router: Router,
		private progressBarService: ProgressBarService,
		private notificationsService: NotificationsService,
		private createService: CreateService,
		private location: Location,
		private authGuard: AuthGuard
        ) { }

	ngOnInit() {
		this.progressBarService.queryFinished();
		// this.user.username = 'amin';
		// this.user.password = 'password';
		this.user.coins = 500;

		this.user.level = 1;
		this.user.score = 2000;
		this.user.weekly_score = 2000;
		this.user.trophies = 200;
		this.user.role = 'ROLE_PLAYER';
		this.user.status = 'ACTIVE';

		var currentUser = this.authGuard.getUser();
		if (currentUser.role === 'ROLE_CRM') {
			console.log('it is crm');
			this.roles = this.roles.filter(function(row) {
				return row.value === 'ROLE_PLAYER';
			});
		}
	}

    createUser(): void {
		this.progressBarService.queryInProgress();
		this.createService.create(this.user)
		.then(s => {
			this.notificationsService.success("انجام شد", "کابر ساخته شد", { timeOut: 1500 });
			this.user.username = "";
			this.user.password = "";
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "خطا در ساخت کاربر", { timeOut: 1500 });
			this.user.password = "";
			this.progressBarService.queryFinished();
		});	

		// this.scrollToTop.scrollToTop();
		// console.log(this.user);
    }

	onBlur(): void {
		if (this.user.username && this.user.username.length > 0) {
			this.progressBarService.queryInProgress();
			this.mode = 'indeterminate';
			this.createService.usernameNotAvailable(this.user.username).then(
				notAvailable => {
					this.progressBarService.queryFinished();
					this.mode = 'determinate';
					if (notAvailable === true) {
						this.notificationsService.alert("خطا", "نام کاربری قبلا انتخاب شده", { timeOut: 1500 });	
					}
				},
				error => {
					this.progressBarService.queryFinished();
					this.mode = 'determinate';
					this.notificationsService.alert("خطا", "خطا در ارسال درخواست به سرور", { timeOut: 1500 });	
				}
			);
		}
	}

	goBack(): void {
		this.location.back();
	}
}
