import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

import { ViewQuestionService } from './view.service';
import { CATEGORIES } from '../../shared/categories.model';
import { UpdateQuestionService } from '../shared/update.service';
import { QuestionView } from '../shared/view.model';
import { statusChoices } from '../shared/view.model';


import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-question-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.css']
})

export class QuestionViewComponent implements OnInit {
	showErr: Boolean = false;
	questionview = new QuestionView();
	public statChoices = statusChoices;
	public advertiseId : number;
	valid: Boolean = false;

  correct_answerChoices: Array<{ value: Number}> = [
		{ value : 1 },
		{ value : 2 },
		{ value : 3 },
		{ value : 4 }

	]



	public cats = CATEGORIES;
	constructor( private viewQuestionService: ViewQuestionService,
				 private updateQuestionService: UpdateQuestionService,
				 private route: ActivatedRoute,
				 private location: Location ) {}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) =>

				this.viewQuestionService.view(+params['id'])


		)
			.subscribe(questionview_result => this.questionview = questionview_result);
			console.log(this.questionview.question);
			this.advertiseId = +this.route.params['ad_id'];
         }

	updateDetails(): void{
		this.updateQuestionService.update(+this.questionview.id,this.questionview.question, this.questionview.choice1, this.questionview.choice2, this.questionview.choice3, this.questionview.choice4, +this.questionview.correct_answer, this.questionview.status, +this.questionview.category_id)
	}

	goBack(): void {
		this.location.back();
	}
}
