import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ROLES } from './roles.model';
import {ProgressBarService} from "../../core/progress-bar/progress-bar.service";
import {NotificationsService} from "angular2-notifications";
import {
	SingleQuestionViewModel, UpdateQuestionCategory,
	UpdateQuestionModel,
	UserQuestionResponseModel,
	UserQuestionViewModel
} from "./question.model";
import {SearchService} from "../../user/search/search.service";
import {CminerService} from "../cminer.service";
import {CATEGORIES} from "../../shared/categories.model";



@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrls: [ './question.component.css' ],
	encapsulation: ViewEncapsulation.None

})

export class QuestionComponent implements OnInit {
	@ViewChild('autoCompelete') element;
	@ViewChild('search') input;
	public users:any;
	public showUserQuestionTable:boolean=false;
	public showSingleQuestionTable:boolean=false;
	public userQuestion = new UserQuestionViewModel();
	public userQuestionsData: any = [];
	public singleQuestionSearch = new SingleQuestionViewModel();
	public singleQuestionData :any =[];
	public cats = CATEGORIES;
	public updateQuestion = new UpdateQuestionModel();
	public updateCategory = new UpdateQuestionCategory();


	constructor (
		private router: Router,
		private route: ActivatedRoute,
		private progressBarService: ProgressBarService,
		private notificationService: NotificationsService,
		private searchService: SearchService,
		private cminerService: CminerService,
        ) {
	}
	ngOnInit() {
		this.userQuestion.player_id= 0;
	}

	leven(name: string): void {
		this.progressBarService.queryInProgress();
		this.searchService.leven(name).then(
			users => {
				this.users = users;
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationService.error("خطا", "خطا در دریافت کاربران");
				this.progressBarService.queryFinished();
			}
		);
	}
	ClearSeach(){
		this.userQuestion.player_id = null;
		this.singleQuestionSearch.id = null;
		this.users = null;
		this.userQuestionsData = [];
		this.showUserQuestionTable = false;
		this.showSingleQuestionTable = false;
		this.singleQuestionData = [];
		this.input.nativeElement.value = '';
	}
	SelectUser(id){
		this.userQuestion.player_id = id;
		this.users = null;
		this.element.nativeElement.style.display = 'none';
	}
	SearchUserQuestions(){
		this.cminerService.viewUserQuestionService(this.userQuestion)
			.then(s => {
				this.userQuestionsData = s.question;
				this.showUserQuestionTable = true;
				this.notificationService.success("Sucess", "سوالات کاربر یافت شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();

			})
			.catch(err => {
				this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			});
	}
	SearchQuestionById(){
		this.cminerService.SingleSearchQuestionService(this.singleQuestionSearch)
			.then(s => {
				this.singleQuestionData = s;
				this.updateCategory.question_id = s.question_details.id;
				this.updateCategory.category_id = s.question_details.category_id;
				this.showSingleQuestionTable = true;
				this.notificationService.success("Sucess", "سوالات یافت شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();

			})
			.catch(err => {
				this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			});
	}
	  getCategory(id): string{

		let val = '';

		 this.cats.forEach(cat=>{
			if (cat.id == id){

				val= cat.title;
			}
		});

		return val;
	}

	transformToUpdate(){
			for (let key in this.updateQuestion){
					this.updateQuestion[key] = this.singleQuestionData.question_details[key];
			}
	}
	UpdateQuestionCrud(){

		this.cminerService.UpdateQuestuinService(this.updateQuestion)
			.then(s => {

				this.notificationService.success("Sucess", "سوال بروز رسانی شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
				this.UpdateQuestionCategory();
			})
			.catch(err => {
				this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			});
	}

	UpdateQuestionCategory(){

		this.cminerService.UpdateQuestionCategory(this.updateCategory)
			.then(s => {

				this.notificationService.success("Sucess", "موضوع سوال تغییر کرد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
				console.log(this.updateCategory)
			})
			.catch(err => {
				this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			});
	}

	RejectQuestion(item){

		this.cminerService.RejectQuestionService({id:item.id})
			.then(s => {

				this.notificationService.success("Sucess", "سوال ریجکت شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
				this.StatusEvent(s['question_details'],true);
			})
			.catch(err => {
				this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			});
	}

	AcceptQuestion(item){
		this.cminerService.AcceptQuestionService({id:item.id})
			.then(s => {

				this.notificationService.success("Sucess", "سوال قبول شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
				this.StatusEvent(s['question_details'],true);

			})
			.catch(err => {
				this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			});
	}

	StatusEvent(item,type):string{

		if (type){
			let elem:Element = document.getElementById("el-"+item.id);


			if (item.status == "ACCEPTED"){
				elem.innerHTML = '<i  class="material-icons sticky-shortcut red-color">check</i>';
			}
			else{
				elem.innerHTML = '<i  class="material-icons sticky-shortcut red-color">close</i>';
			}
		}
		return item.status;

	}
}
