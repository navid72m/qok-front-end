import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ROLES } from './roles.model';
import { STATUS } from './status.model';
import {GiftscodesService} from "../giftscodes.service";
import {ProgressBarService} from "../../core/progress-bar/progress-bar.service";
import {NotificationsService} from "angular2-notifications";
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import {getGiftsDetailsModel, giftUsageModel, SinglegiftsModel} from "./singlegifts.model";


@Component({
	selector: 'app-singlebatches',
	templateUrl: './singlegifts.component.html',
	styleUrls: [ './singlegifts.component.css' ],
})

export class SinglegiftsComponent implements OnInit {
	@ViewChild('getDetailModal') bsModal: any;
	@ViewChild('checkUsageModal') checkUsage: any;
	public detailsData :any =[];
	public SinglegiftsModel = new SinglegiftsModel();
	public getGiftsDetails = new getGiftsDetailsModel();
	public checkedgiftStatus = new giftUsageModel();
	public giftBatchIds:any;
	public giftDetailCode:string;
	public giftCheck:string;
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


	createSingleBatch(){

		if (this.SinglegiftsModel.start_date.hasOwnProperty('date') && this.SinglegiftsModel.stop_date.hasOwnProperty('date')) {
			this.SinglegiftsModel.start_date = this.SinglegiftsModel.start_date['formatted'];
			this.SinglegiftsModel.stop_date = this.SinglegiftsModel.stop_date['formatted'];
		}

		this.progressBarService.queryInProgress();
		this.SinglegiftsModel.batch_ids = -1;
		this.batchService.createSingleGiftsService(this.SinglegiftsModel).then(
			data => {
				this.notificationService.success("انجام شد", "بچ مورد نظر ساخته شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			},
			error => {
				let errorMessage = JSON.parse(error._body);
				this.notificationService.error("خطا", errorMessage.message);
				this.progressBarService.queryFinished();
			}
		);
	}

	getSingleGiftDetaile(){


		this.progressBarService.queryInProgress();
		this.batchService.getSingleGiftDetailService({code: this.giftDetailCode }).then(
			data => {
				this.progressBarService.queryFinished();
				this.detailsData = data;
				this.getGiftsDetails = this.detailsData['gift'];
				this.giftBatchIds = this.detailsData['batch_ids'];
				this.bsModal.open();

			},
			error => {
				let errorMessage = JSON.parse(error._body);
				this.notificationService.error("خطا", errorMessage.message);
				this.progressBarService.queryFinished();
			}
		);
	}

	checkGiftUsage(){


		this.progressBarService.queryInProgress();
		this.batchService.getCheckSingleGiftStatusService({code: this.giftCheck }).then(
			data => {
				this.progressBarService.queryFinished();
				this.checkedgiftStatus = data;
				this.checkUsage.open();

			},
			error => {
				let errorMessage = JSON.parse(error._body);
				this.notificationService.error("خطا", errorMessage.message);
				this.progressBarService.queryFinished();
			}
		);
	}
}
