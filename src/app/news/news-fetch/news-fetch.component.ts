import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { MdDialog, MdDialogRef } from '@angular/material';

import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';

import { DialogResetPasswordComponent } from '../dialog-reset-advertise/dialog-reset-advertise.component';
import { DialogResetPasswordModel } from '../dialog-reset-advertise/dialog-reset-advertise.model';

import { NewsCreateModel } from '../news-models/news.model';

import { NewsFetchService } from './news-fetch.service';
import { NewsPublishService } from './news-publish.service';
import { NewsExtractExpirationService } from '../news-services/news-extract-expiration.service';

import { DialogPublishAllComponent } from './dialog-publish-all/dialog-publish-all.component';
import { DialogPublishUserComponent } from './dialog-publish-user/dialog-publish-user.component';

@Component({
	selector: 'news-fetch',
	templateUrl: './news-fetch.component.html',
	styleUrls: [ './news-fetch.component.css' ],
})

export class NewsFetchComponent implements OnInit {
	
    fetchedNews: NewsCreateModel[];
	dialogResetPasswordMessage = new DialogResetPasswordModel();

	constructor (
		private router: Router,
		private location: Location,
		public  dialog: MdDialog,
		private progressBarService: ProgressBarService,
		private notificationsService: NotificationsService,
		private newsFetchService: NewsFetchService,
		private newsPublishService: NewsPublishService,
		private newsExtractExpirationService: NewsExtractExpirationService,
        ) { }

	ngOnInit() {
		this.progressBarService.queryInProgress();
		this.newsFetchService.fetch()
		.then(s => {
			this.notificationsService.success("Sucess", "خبرها دریافت شد!", { timeOut: 1500 });
			this.progressBarService.queryFinished();
			this.fetchedNews = this.newsExtractExpirationService.extractDate(s);
		})
		.catch(err => {
			this.notificationsService.error("Error", "دوباره امتحان کنید!", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});	
	}

	deleteNews(news: NewsCreateModel): void {
		var dialogRef = this.dialog.open(DialogResetPasswordComponent);
		dialogRef.afterClosed().subscribe(result => {
			this.dialogResetPasswordMessage = result;
			if (this.dialogResetPasswordMessage && this.dialogResetPasswordMessage.confirmed === true) {
				this.progressBarService.queryInProgress();
				this.newsPublishService.deleteRedis(news.id)
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

    onPublishAll(news: NewsCreateModel): void {
		let dialogRef = this.dialog.open(DialogPublishAllComponent);
		dialogRef.afterClosed().subscribe(result => {
			if (result && result.doPublish === true) {
				this.progressBarService.queryInProgress();
				this.newsPublishService.publishAll(news.id)
				.then(s => {
					this.notificationsService.success("Sucess", "!انجام شد", { timeOut: 1500 });
					this.progressBarService.queryFinished();
				})
				.catch(err => {
					this.notificationsService.error("Error", "!دوباره امتحان کنید", { timeOut: 1500 });
					this.progressBarService.queryFinished();
				});	
			}
		});
	}
	
	onPublishUser(news: NewsCreateModel): void {
		let dialogRef = this.dialog.open(DialogPublishUserComponent);
		dialogRef.afterClosed().subscribe(result => {
			if (result && result.userID) {
				this.progressBarService.queryInProgress();
				this.newsPublishService.publishUser(news.id, result.userID)
				.then(s => {
					this.notificationsService.success("Sucess", "!انجام شد", { timeOut: 1500 });
					this.progressBarService.queryFinished();
				})
				.catch(err => {
					this.notificationsService.error("Error", "!دوباره امتحان کنید", { timeOut: 1500 });
					this.progressBarService.queryFinished();
				});	
			}
		});
		
	}

	onViewDetails(news: NewsCreateModel): void {
		const url = `news/view/${news.id}`;
		this.router.navigateByUrl(url);
	}

	goBack(): void {
		this.location.back();
	}
}
