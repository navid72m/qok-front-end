
import {Component, OnInit, Input, ViewChild} from '@angular/core';


// Common services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';

// models
// import {  } from './advertise.model';
import { QuestionCreate } from '../shared/view.model';
import { Location } from '@angular/common';
import {  CreateQuestionService } from './create.service';
import {  AdvertiseComponent } from '../../advertise/advertise.component';
import { Advertise } from '../../advertise/advertise.model';
import { CreateAdvertiseService } from '../../advertise/advertise.service';
import { CATEGORIES } from '../../shared/categories.model';
import { statusChoices } from '../shared/view.model';

// import { GetPublishersService } from './services/get-publisher.service';
// import { PublisherSummary } from './services/publisher.model';

import 'rxjs/add/operator/switchMap';
import {SearchService} from "../../user/search/search.service";
import {UserSearch} from "../../user/search/search.model";

@Component({
	selector: 'create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})



export class CreateComponent implements OnInit {

	@ViewChild('autoCompelete') element;
	public advertise = new Advertise();
  //
	public cats = CATEGORIES;
	// cat_ids = new Array <number>();
	public statChoices = statusChoices;
	public showAdvertise : boolean = false;
	// public publishers : PublisherSummary[];
	public statusRejected : string = "REJECTED";
    public question = new QuestionCreate();
	public question_id :number;
	public advertise_id : number;
	public cat_ids : Array <number>;
	public users: UserSearch[];
	constructor (
        private notificationsService: NotificationsService,
      	private createQuestionService: CreateQuestionService,
				private progressBarService: ProgressBarService,
				private location: Location,
		        private searchService: SearchService,

    ) {}

	ngOnInit(): void {
		this.question.created_by = 0;
		// this.advertise.status = "ACTIVE";
		// this.getPublisherService.getPublishersList()
		// .then(publisher_list => this.publishers = publisher_list);
	}

    CreateQuestion(): void {


    this.progressBarService.queryInProgress();

		this.createQuestionService.create(this.question)
		.then(s => {
			this.showAdvertise = true;
			this.question_id = s;
			this.notificationsService.success("Sucess", "سوال ساخته شد", { timeOut: 1500 });
			this.progressBarService.queryFinished();

		})
		.catch(err => {
			this.notificationsService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
    }





		goBack(): void {
			this.location.back();
		}

		onCreateAdvertise(advertise){
			this.advertise = advertise;
		}

		getAdvertiseId(advertise_id){
			this.advertise_id = advertise_id;
		}

		getCategories(category_ids){
			this.cat_ids = category_ids;
		}

		leven(name: string): void {
			this.progressBarService.queryInProgress();
			this.searchService.leven(name).then(
				users => {
					this.users = users;
					// this.notificationsService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
					this.progressBarService.queryFinished();
				},
				error => {
					this.notificationsService.error("خطا", "خطا در دریافت کاربران");
					this.progressBarService.queryFinished();
				}
			);
		}

		SelectUser(id){

		    this.question.created_by = id;
		    this.users = null;
			this.element.nativeElement.style.display = 'none';
		}

    // onInputChange(event: any) {
    //     console.log(event);
    // }
}
