import { Component, OnInit } 		from '@angular/core';
import { Router } 					from '@angular/router';
import { ActivatedRoute, Params } 	from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

import { QuestionsList } from './list_idquestions.model';
import { ListFindByIdQuestionService } from './list_idquestions.service';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
// import { IDatatableSelectionEvent } from 'ng2-table/ng2-table';

@Component({
	selector: 'app-question-identifier',
	templateUrl: './list_idquestions.component.html',
	styleUrls: [ './list_idquestions.component.css' ],
})

export class FindByIdQuestionsListComponent implements OnInit {
	list: QuestionsList[];

	constructor(
		private listService: ListFindByIdQuestionService,
		private router: Router,
		private route: ActivatedRoute,
		private progressBarService: ProgressBarService,
		private notificationService: NotificationsService) { }

	ngOnInit() {
		this.progressBarService.queryFinished();
		this.route.params.subscribe((params) => {
			this.getList(+params['user_id']);
		});
	}
	goToQuestionView(questionId : number)
	{
		this.router.navigate(['/question/view/'+questionId]);
	}
	getList(created_by: number): void {
		this.progressBarService.queryInProgress();
		this.listService.getList(created_by).then(
			list => {
				this.list = list;
				this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationService.error("خطا", "خطا در دریافت سوالات");
				this.progressBarService.queryFinished();
			}
		);
	}



}
