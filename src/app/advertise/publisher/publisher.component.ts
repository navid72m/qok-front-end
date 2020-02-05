
import { Component, OnInit, Input } from '@angular/core';


// Common services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';

// models
import { Publisher } from '../advertise.model';
import { Location } from '@angular/common';
import {  UpdatePublisherService } from './publisher.service';
import { CATEGORIES_bool } from '../shared/categories.model';
import { statusChoices } from '../advertise.model';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'publisher',
	templateUrl: './publisher.component.html',
	styleUrls: ['./publisher.component.css']
})



export class PublisherComponent implements OnInit {


	publisher = new Publisher();
	public statChoices = statusChoices;


	constructor (
        private notificationsService: NotificationsService,
      	private updatePublisherService: UpdatePublisherService,
				private progressBarService: ProgressBarService,
				private location: Location,

    ) {}

	ngOnInit(): void {
		this.publisher.status = "ACTIVE";
	}

    InsertPublisher(): void {


    this.progressBarService.queryInProgress();
		this.updatePublisherService.update(this.publisher.title, this.publisher.status , this.publisher.total_budget)
		.then(s => {
			this.notificationsService.success("Sucess", "Creating publisher succeed.", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("Error", "Creating publisher failed.", { timeOut: 1500 });
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
