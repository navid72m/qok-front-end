import { Component, OnInit } 		from '@angular/core';
import { Router } 					from '@angular/router';
import { ActivatedRoute, Params } 	from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

import { AdsQuestionSummary } from './list_adquestions.model';
import { ListAdvertiseQuestionService } from './list_adquestions.service';

import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
// import { IDatatableSelectionEvent } from 'ng2-table/ng2-table';

@Component({
	selector: 'app-user-search',
	templateUrl: './list_adquestions.component.html',
	styleUrls: [ './list_adquestions.component.css' ],
})

export class AdvertiseQuestionsListComponent implements OnInit {
	list: AdsQuestionSummary[];

	constructor(
		private listService: ListAdvertiseQuestionService,
		private router: Router,
		private route: ActivatedRoute,
		private progressBarService: ProgressBarService,
		private notificationService: NotificationsService) { }

	ngOnInit() {

	}

	onSelect(ads: AdsQuestionSummary): void {
		const url = `question/view/${ads.question_id}/${ads.ad_id}`;
		this.router.navigateByUrl(url);
	}

	search(): void {
		this.progressBarService.queryInProgress();
		this.listService.getList().then(
			adSummaries => {
				this.list = adSummaries;
				this.notificationService.success("Success", "Advertise Question Fetched", { timeOut: 500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationService.error("Error", error);
				this.progressBarService.queryFinished();
			}
		);
	}


}
