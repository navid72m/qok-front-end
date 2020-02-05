import { Component, OnInit } 		from '@angular/core';
import { Router } 					from '@angular/router';
import { ActivatedRoute, Params } 	from '@angular/router';
import { NgSwitch } from '@angular/common';
import { MdDialog, MdDialogRef } from '@angular/material';

import { NotificationsService } from 'angular2-notifications';

import { DialogResetPasswordComponent } from './dialog-reset-advertise/dialog-reset-advertise.component';
import { DialogResetPasswordModel } from './dialog-reset-advertise/dialog-reset-advertise.model';

import { AdsSummary } from './list.model';
import { ListService } from './list.service';

import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
// import { IDatatableSelectionEvent } from 'ng2-table/ng2-table';

@Component({
	selector: 'app-user-search',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.css' ],
})

export class AdvertiseListComponent implements OnInit {
	list: AdsSummary[];

	// dialogMessage = new DialogModel();
	dialogResetPasswordMessage = new DialogResetPasswordModel();

	constructor(
		private listService: ListService,
		private router: Router,
		private route: ActivatedRoute,
		private progressBarService: ProgressBarService,
		private notificationsService: NotificationsService,
		public dialog: MdDialog
	) { }

	ngOnInit() {
		this.progressBarService.queryInProgress();
		this.listService.getList().then(
			adSummaries => {
				this.list = adSummaries;
				this.notificationsService.success("Success", "Advertise Fetched", { timeOut: 500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationsService.error("Error", error);
				this.progressBarService.queryFinished();
			}
		);
	}

	onSelect(ads: AdsSummary): void {
		const url = `advertise/update/${ads.ad_id}`;
		this.router.navigateByUrl(url);
	}

	deleteRedis(ads: AdsSummary): void {
		console.log("DELLLLEEETTTEEE")

		let dialogRef = this.dialog.open(DialogResetPasswordComponent);
		dialogRef.afterClosed().subscribe(result => {
			this.dialogResetPasswordMessage = result;
			if (this.dialogResetPasswordMessage && this.dialogResetPasswordMessage.confirmed === true) {
				this.progressBarService.queryInProgress();
				this.listService.deleteRedis(ads.ad_id)
				.then(s => {
					this.notificationsService.success("انجام شد"," تبلیغ حذف شد", { timeOut: 1500 });
					this.progressBarService.queryFinished();
					// window.location.reload();
				})
				.catch(err => {
					this.notificationsService.error("خطا", "تبلیغ حذف نشد", { timeOut: 1500 });
					this.progressBarService.queryFinished();
					// window.location.reload();
				});
			}
		});
	}

	deactive(ads: AdsSummary, status: number){
		this.progressBarService.queryInProgress();
		this.listService.deactive(ads.ad_id, status)
		.then(s => {
			this.notificationsService.success("انجام شد"," تبلیغ غیرفعال شد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
			window.location.reload();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "تبلیغ غیرفعال نشد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
			window.location.reload();
		});
	}

	search(): void {

	}


}
