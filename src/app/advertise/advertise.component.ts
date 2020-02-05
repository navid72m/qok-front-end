
import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';


// Common services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../core/progress-bar/progress-bar.service';

// models
import { Advertise } from './advertise.model';
import { Location } from '@angular/common';
import { CreateAdvertiseService } from './advertise.service';
import { CATEGORIES_bool } from '../shared/categories.model';
import { statusChoices, AdTypes, Platforms } from './advertise.model';
import { GetPublishersService } from './services/get-publisher.service';
import { PublisherSummary } from './services/publisher.model';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'advertise',
	templateUrl: './advertise.component.html',
	styleUrls: ['./advertise.component.css']
})



export class AdvertiseComponent implements OnInit {

	@Output() onCreateAds = new EventEmitter<Advertise>();
	@Output() getAdId = new EventEmitter<number>();
	@Output() getCategories = new EventEmitter<Array <number>>();

	advertise = new Advertise();

	public cats = CATEGORIES_bool;
	cat_ids = new Array <number>();
	public statChoices = statusChoices;
	public platforms = Platforms;
	public adTypes = AdTypes;
	public publishers : PublisherSummary[];


	constructor (
        private notificationsService: NotificationsService,
      	private createAdvertiseService: CreateAdvertiseService,
				private getPublisherService: GetPublishersService,
				private progressBarService: ProgressBarService,
				private location: Location,

    ) {}

	ngOnInit(): void {
		this.advertise.status = "ACTIVE";
		this.getPublisherService.getPublishersList()
		.then(publisher_list => this.publishers = publisher_list);
	}

    InsertAdvertise(): void {


        this.progressBarService.queryInProgress();
				this.cat_ids.length=0;
				for (var i=0; i <this.cats.length ; i++){
					if(this.cats[i].checked === true){
						this.cat_ids.push(this.cats[i].id);
					}
				}
		this.onCreateAds.emit(this.advertise);
		this.getCategories.emit(this.cat_ids);
		if(this.advertise.is_internal)
			this.advertise.is_internal = 1;
		else
            this.advertise.is_internal = 0;
		this.createAdvertiseService.update(this.advertise.publisher_id, this.advertise.ad_type, this.advertise.title, this.advertise.text, this.advertise.initial_budget, this.advertise.budget, this.advertise.status, this.advertise.cost_per_click, this.advertise.cost_per_view, this.cat_ids, this.advertise.link, this.advertise.platform, this.advertise.clicks , this.advertise.is_internal)
		.then(s => {
			this.getAdId.emit(s);
			this.notificationsService.success("Sucess", "Creating advertise succeed.", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("Error", "Creating advertise failed.", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
    }





		goBack(): void {
			this.location.back();
		}





    // onInputChange(event: any) {
    //     console.log(event);
    // }
}
