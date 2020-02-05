import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NewsInputsComponent } from '../news-inputs/news-inputs.component';
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
import { AuthGuard } from '../../guards/auth.guard';
import { NewsViewService } from './news-view.service';
import { NewsUpdateService } from './news-update.service';
import { NewsExtractExpirationService } from '../news-services/news-extract-expiration.service';
import { NewsCreateModel } from '../news-models/news.model';

@Component({
	selector: 'news-view',
	templateUrl: './news-view.component.html',
	styleUrls: [ './news-view.component.css' ],
})

export class NewsViewComponent implements OnInit,AfterViewInit {
	
    news = new NewsCreateModel();

	@ViewChild(NewsInputsComponent)
  	private newsInputsComponent: NewsInputsComponent;
	private expiration: Date;

	constructor (
		private route: ActivatedRoute,
		private router: Router,
		private location: Location,
		private progressBarService: ProgressBarService,
		private notificationsService: NotificationsService,
		private authGuard: AuthGuard,
		private newsViewService: NewsViewService,
		private newsUpdateService: NewsUpdateService,
		private newsExtractExpirationService: NewsExtractExpirationService,
        ) { }

	ngOnInit() {
		this.progressBarService.queryInProgress();
	}

	ngAfterViewInit() {
		
		this.route.params
			.switchMap((params: Params) => {
				return this.newsViewService.view(+params['id'])
			})
			.subscribe(res => {
				this.news = res;
				this.expiration = this.newsExtractExpirationService.extractDateSingle(this.news);

				// override the disable until
				let date: Date = new Date(this.news.created_at);
				let copy = JSON.parse(JSON.stringify(this.newsInputsComponent.myDatePickerOptions));
				copy.disableUntil =
					{
						year: date.getFullYear(),
						month: date.getMonth() + 1,
						day: date.getDate(),
					};
				this.newsInputsComponent.myDatePickerOptions = copy;
				var expValue = res.expiration_time;
				expValue = expValue.split('-')
				var expYear = expValue[0]
				var expMonth1 = expValue[1].charAt(0)
				var expMonth = expValue[1]

				if (expMonth1=="0") {
					var expMonth = expValue[1].charAt(1)
				}
				var expValue1 = expValue[2]
				expValue1 = expValue1.split('T')
				var expDay = expValue1[0]

				// set the expiration time
				this.news.expiration_time = { date: { year: expYear, month: expMonth, day: expDay, hour: 23, minute:59, second:59 } };
				
				this.progressBarService.queryFinished();
			});
	}

    updateNews(): void {
		this.progressBarService.queryInProgress();
		var currentUser = this.authGuard.getUser();
		this.news.updated_by = currentUser.id;
		// this.news.life_time_seconds = 144000;
		// console.log(this.news);
		this.newsUpdateService.update(this.news)
		.then(s => {
			this.notificationsService.success("Sucess", "خبر تغییر داده شد!", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("Error", "خطا در اعمال تغییرات.  دوباره امتحان کنید!", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});	
    }

	onChangeNews(news: NewsCreateModel): void {
		this.news = news;
	}

	goBack(): void {
		this.location.back();
	}
}
