import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
import { AuthGuard } from '../../guards/auth.guard';

import { NewsCreateService } from './news-create.service';

import { NewsCreateModel } from '../news-models/news.model';

@Component({
	selector: 'news-create',
	templateUrl: './news-create.component.html',
	styleUrls: [ './news-create.component.css' ],
})

export class NewsCreateComponent implements OnInit {
	
    news = new NewsCreateModel();

	constructor (
		private router: Router,
		private location: Location,
		private progressBarService: ProgressBarService,
		private notificationsService: NotificationsService,
		private authGuard: AuthGuard,
		private newsCreateService: NewsCreateService,
        ) { }

	ngOnInit() {
		this.progressBarService.queryFinished();
	}

    createNews(): void {
		this.progressBarService.queryInProgress();

		var currentUser = this.authGuard.getUser();
		this.news.created_by = currentUser.id;
		this.news.updated_by = this.news.created_by;
		// this.news.created_by = 4;
		// this.news.updated_by = 4;
		console.log(this.news);
		// this.news.life_time_seconds = 1234;
		
		this.newsCreateService.create(this.news)
		.then(s => {
			this.notificationsService.success("Sucess", "خبر ساخته شد!", { timeOut: 1500 });
			this.clearInputFields();
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("Error", "خبر ساخته نشد.  دوباره امتحان کنید!", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});	
    }

	goBack(): void {
		this.location.back();
	}

	clearInputFields(): void {
		this.news.title = " ";
		this.news.text = " ";
		this.news.short_text = " ";
		this.news.image_file_name = " ";
		this.news.link_title = " ";
		this.news.link_url = " ";
		this.news.expiration_time = " ";
		this.news.life_time_seconds = null;
	}

	onChangeNews(news: NewsCreateModel): void {
		this.news = news;
	}
}
