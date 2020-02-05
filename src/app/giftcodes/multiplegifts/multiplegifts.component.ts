import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ROLES } from './roles.model';
import { STATUS } from './status.model';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import {multipleGiftModel, MultipleStatusModel} from "./multiplegifts.model";
import {GiftscodesService} from "../giftscodes.service";
import {ProgressBarService} from "../../core/progress-bar/progress-bar.service";
import {NotificationsService} from "angular2-notifications";

@Component({
	selector: 'app-multiplebatch',
	templateUrl: './multiplegifts.component.html',
	styleUrls: [ './multiplegifts.component.css' ],
})

export class MultiplegiftsComponent implements OnInit {



	public multipleGift =new multipleGiftModel();
	public multipleCheck = new MultipleStatusModel();
	public myDatePickerOptions: IMyOptions = {
		// other options...
		dateFormat: 'yyyy-mm-dd 23:59:59',
		showClearDateBtn: false,
		editableDateField: false,
		openSelectorOnInputClick: true,
		disableUntil: {year: 2016, month: 8, day: 10},
	};

	constructor (
		private router: Router,
		private batchService: GiftscodesService,
		private route: ActivatedRoute,
		private progressBarService: ProgressBarService,
		private notificationService: NotificationsService
        ) {

	}

	ngOnInit() {

	}


	stopCreateBatch(){
		this.progressBarService.queryInProgress();
		this.batchService.stopCreateMultipleGiftsService().then(
			data => {

				this.notificationService.success("انجام شد", "ساخت گیفت متوقیف شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			},
			error => {
				let errorMessage = JSON.parse(error._body);
				this.notificationService.error("خطا", errorMessage.message);
				this.progressBarService.queryFinished();
			}
		);
	}

	checkMultipleGift(){

		this.batchService.checkMultipleGiftStatusService().then(
			data => {
				this.multipleCheck.created_count = data.created_count;
				this.multipleCheck.is_active = data.is_active;
				this.notificationService.success("انجام شد", "اطلاعات دریافت شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			},
			error => {
				let errorMessage = JSON.parse(error._body);
				this.notificationService.error("خطا", errorMessage.message);
				this.progressBarService.queryFinished();
			}
		);


	}
	createMultiple(){


		if (this.multipleGift.start_date.hasOwnProperty('date') && this.multipleGift.stop_date.hasOwnProperty('date')) {
			this.multipleGift.start_date = this.multipleGift.start_date['formatted'];
			this.multipleGift.stop_date = this.multipleGift.stop_date['formatted'];
		}

		let CopyOfBatchIDS = this.multipleGift.batch_ids;
		this.multipleGift.batch_ids = '['+ this.multipleGift.batch_ids +']';
			this.progressBarService.queryInProgress();
			console.log(this.multipleGift);
			this.batchService.createMultipleGiftsService(this.multipleGift).then(
				data => {
					this.multipleGift.batch_ids = CopyOfBatchIDS;

					this.notificationService.success("انجام شد", "بچ مورد نظر ساخته شد", { timeOut: 1500 });
					this.progressBarService.queryFinished();
				},
				error => {
					this.multipleGift.batch_ids = CopyOfBatchIDS;
					let errorMessage = JSON.parse(error._body);
					this.notificationService.error("خطا", errorMessage.message);
					this.progressBarService.queryFinished();
				}
			);


	}

}
