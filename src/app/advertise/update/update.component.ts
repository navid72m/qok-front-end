
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


// Common services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';

// models
import { UpdateReq, AdsDetails, Category_Id} from './update.model';
import { Location } from '@angular/common';
import {  UpdateAdvertiseService } from './update.service';
import { GetAdvertiseService } from './get_details.service';
import { CATEGORIES_bool_false } from '../../shared/categories.model';
import { statusChoices, Platforms, AdTypes} from '../advertise.model';
import { GetPublishersService } from '../services/get-publisher.service';
import { PublisherSummary } from '../services/publisher.model';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'update-advertise',
	templateUrl: './update.component.html',
	// template : '<p> hi </p>',
	styleUrls: ['./update.component.css']
})



export class UpdateAdvertiseComponent implements OnInit {

	@Input () advertiseId : number;
	updateAdvertise = new UpdateReq();
	adsDetails = new AdsDetails();
	public adTypes = AdTypes;
	public cats = CATEGORIES_bool_false;
	cat_ids = new Array <number>();
	public checkBoxIsValid : boolean = false;
	public ad_id : number;
	// type MyType = {title : string, engtitle: string, id: number, checked: boolean};
	public statChoices = statusChoices;
	public platforms = Platforms;
	public publishers : PublisherSummary[];


	constructor (
				private route: ActivatedRoute,
        private notificationsService: NotificationsService,
      	private updateAdvertiseService: UpdateAdvertiseService,
				private getAdvertiseService : GetAdvertiseService,
				private getPublisherService: GetPublishersService,
				private progressBarService: ProgressBarService,
				private location: Location,

    ) {}

	ngOnInit(): void {
		// this.updateAdvertise.status = "ACTIVE";
		this.progressBarService.queryInProgress();

		this.getPublisherService.getPublishersList()
		.then(publisher_list => this.publishers = publisher_list);

		this.route.params
			.switchMap((params: Params) => {
				// if (this.advertiseId === null){
				// return this.getAdvertiseService.getDetails(+params['ad_id'])
			// } else if (params['ad_id'] === null){
				this.ad_id = +params['ad_id'];
				return this.getAdvertiseService.getDetails(+params['ad_id']);
			// }
			})
			.subscribe(adsDetails_result => {
				this.adsDetails = adsDetails_result;

					this.onChange ();

				this.progressBarService.queryFinished();
			});


	}

    UpdateAdvertise(): void {


        this.progressBarService.queryInProgress();
				this.adsDetails.category_ids.length=0;
				for (var i=0; i <this.cats.length ; i++){
					if(this.cats[i].checked === true){
						let category_id = new Category_Id();
						category_id.category_id = this.cats[i].id;
						this.adsDetails.category_ids.push(category_id);

					}
					console.log(this.cats[i].checked);
				}
				let category_ids = new Array< number>();

				for (var i=0; i< this.adsDetails.category_ids.length; i++){
					category_ids[i] = this.adsDetails.category_ids[i].category_id;
				}

        if(this.adsDetails.is_internal)
            this.adsDetails.is_internal = 1;
        else
            this.adsDetails.is_internal = 0;

		this.updateAdvertiseService.update(this.ad_id, this.adsDetails.publisher_id, this.adsDetails.ad_type, this.adsDetails.title, this.adsDetails.text, this.adsDetails.initial_budget, this.adsDetails.budget, this.adsDetails.status, this.adsDetails.cost_per_click, this.adsDetails.cost_per_view, category_ids, this.adsDetails.link, this.adsDetails.platform, this.adsDetails.clicks ,this.adsDetails.is_internal)
		.then(s => {
			this.notificationsService.success("Sucess", "Updating advertise succeed.", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("Error", "Updating advertise failed.", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
    }









		goBack(): void {
			this.location.back();
		}
		 onChange(){

			 for (var j=0; j<this.cats.length; j++){

					 this.cats[j].checked = false;

			 }

			 for (var i=0; i <this.adsDetails.category_ids.length ; i++){
				 // let cat_id = {title : string, engtitle: string, id: number, checked: boolean};
				 // 	this.cats.filter(cat => cat.id === this.adsDetails.category_ids[i].category_id)[0].checked = true;
				 for (var j=0; j<this.cats.length; j++){
					 if(this.cats[j].id === this.adsDetails.category_ids[i].category_id){
						 this.cats[j].checked = true;
						 console.log(j);
						 console.log(this.cats[j].title);

					 }


				 }


					 this.checkBoxIsValid = true;
			 }

		 }


}
