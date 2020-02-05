import { Component, OnInit } 		from '@angular/core';
import { Router } 					from '@angular/router';
import { ActivatedRoute, Params } 	from '@angular/router';
import { CATEGORIES } from '../../shared/categories.model';
import 'rxjs/add/observable/of';
import { NotificationsService } from 'angular2-notifications';

import 'rxjs/add/observable/of';

import {StatQuestionSummary} from './list_statquestions.component.model';
import { ListStatisticsQuestionService } from './list_statquestions.service';

import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
// import { IDatatableSelectionEvent } from 'ng2-table/ng2-table';

@Component({
	selector: 'app-user-search',
	templateUrl: './list_statquestions.component.html',
	styleUrls: [ './list_statquestions.component.css' ],
})

export class StatisticsQuestionsListComponent implements OnInit {
	public list: StatQuestionSummary[];
	public enableSearchButton : boolean;
	public enableList : boolean;
	public enableHomisonFilter : boolean;
	public enableCatSearchButton : boolean;
	public alltogether : boolean;
	public rejectReason =false;
	public totalState = false ;
	public cats = [];
	public catId = 0;
	public newHomison = 0;
	public oldHomison = 0;
	public notHomison = 0;
	public categoryModelList = [];
	public allList = [];
	public totalQuestionsStats = [];

	constructor(
		private listService: ListStatisticsQuestionService,
		private router: Router,
		private route: ActivatedRoute,
		private progressBarService: ProgressBarService,
		private notificationService: NotificationsService) { }

	ngOnInit()
	{
	}
    showRejectReason()
	{
		this.rejectReason = true;
	}
    hiddenRejectReason()
	{
        this.rejectReason = false;
	}
	showCatList()
	{
		this.enableList = true;
		this.enableHomisonFilter = true;
		this.enableSearchButton = false;
		this.cats =CATEGORIES;
	}
	showSearchButton()
	{
		this.enableSearchButton = true;
        this.enableCatSearchButton = false;
		this.enableHomisonFilter = true;
		this.enableList = false;
	}
	getalltogether()
	{
            this.rejectReason = false;
			this.totalState =false;
			this.alltogether = true;
			this.cats =CATEGORIES;
			this.allList = [];
			this.categoryModelList = [];
			this.totalQuestionsStats['ACCEPTED'] = 0;
			this.totalQuestionsStats['REJECTED'] = 0;
			this.totalQuestionsStats['NEW_ADDED'] = 0;
			this.totalQuestionsStats['REPORTED'] = 0;
			this.totalQuestionsStats['WAITING_FOR_CONFIRMATION'] = 0;
			this.totalQuestionsStats['WAITING_FOR_PREREVIEW'] = 0;
			this.totalQuestionsStats['rejected_review'] = 0;
			this.totalQuestionsStats['rejected_prereview'] = 0;
			this.totalQuestionsStats['rejected_factory'] = 0;
			for(var cat in this.cats)
			{
				this.progressBarService.queryInProgress();
				this.listService.getCatStat(this.cats[cat].id,this.newHomison ,this.oldHomison ,this.notHomison).then(
					list => {
						this.list = list;
						this.allList.push(list);
						if(this.allList.length == 19)
						{
							this.notificationService.success("انجام شد", "لیست وضعیت سوال ها دریافت شد", { timeOut: 1000 });
							this.progressBarService.queryFinished();
                            for(var i in this.allList)
                            {
                                this.totalQuestionsStats['ACCEPTED'] += this.allList[i]['accepted'];
                                this.totalQuestionsStats['REJECTED'] += this.allList[i]['rejected_total'];
                                this.totalQuestionsStats['NEW_ADDED'] += this.allList[i]['new_added'];
                                this.totalQuestionsStats['REPORTED'] += this.allList[i]['reported'];
                                this.totalQuestionsStats['WAITING_FOR_CONFIRMATION'] += this.allList[i]['waiting_for_confirmation'];
                                this.totalQuestionsStats['WAITING_FOR_PREREVIEW'] += this.allList[i]['waiting_for_prereview'];
                                this.totalQuestionsStats['rejected_review'] += this.allList[i]['rejected_review'];
                                this.totalQuestionsStats['rejected_prereview'] += this.allList[i]['rejected_prereview'];
                                this.totalQuestionsStats['rejected_factory'] += this.allList[i]['rejected_factory'];
                            }
							this.totalState =true ;
						}
					},
					error => {
						this.notificationService.error("خطا", "خطا در دریافت سوالات");
						this.progressBarService.queryFinished();
					}
				);
			}


	}
	setCatId(cat_id : number)
	{

		this.catId = cat_id;
        this.enableCatSearchButton = true;

	}
    getCatStat()
	{
		this.rejectReason = false;
        this.totalState =false;
        this.alltogether = false;
        this.list = null;
        this.allList = [];
        this.progressBarService.queryInProgress();
        this.listService.getCatStat(this.catId , this.newHomison ,this.oldHomison ,this.notHomison).then(
        	list => {
        		this.list = list;
        		this.notificationService.success("انجام شد", "لیست وضعیت سوال ها دریافت شد", { timeOut: 500 });
        		this.progressBarService.queryFinished();
        	},
        	error => {
        		this.notificationService.error("خطا", "خطا در دریافت سوالات");
        		this.progressBarService.queryFinished();
        	}
        );
	}
    setOldHomison(e)
	{
		this.oldHomison = 1 ;
		this.newHomison = 0;
		this.notHomison = 0;
	}
    setNewHomison(e)
    {

        this.oldHomison = 0 ;
        this.newHomison = 1;
        this.notHomison = 0;
    }
    setNotHomison(e)
    {
        this.oldHomison = 0 ;
        this.newHomison = 0;
        this.notHomison = 1;
    }
    withOutHomison(e)
    {
        this.oldHomison = 0 ;
        this.newHomison = 0;
        this.notHomison = 0;
    }

}
