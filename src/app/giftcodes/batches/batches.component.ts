import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ROLES } from './roles.model';
import { STATUS } from './status.model';
import {ProgressBarService} from "../../core/progress-bar/progress-bar.service";
import {NotificationsService} from "angular2-notifications";
import {batchesModel} from "./batches.model";
import {GiftscodesService} from "../giftscodes.service";


@Component({
	selector: 'app-batches',
	templateUrl: './batches.component.html',
	styleUrls: [ './batches.component.css' ],
	encapsulation: ViewEncapsulation.None
})

export class BatchesComponent implements OnInit {
	selectedIndexTab: number;
	batches :batchesModel[] =[];
	newBatchName:string;
	newBatchId:number =null;
	giftIdForAssign:any=[];
	giftIdForDelete:any=[];
	downloadBatchtype:any=[];
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

	getbaches(){
		this.progressBarService.queryInProgress();
		this.batchService.getBatchesService().then(
			data => {
				this.batches = data;
				this.batches.reverse();
				this.notificationService.success("انجام شد", "بچ ها دریافت شدند", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationService.error("خطا", "خطا در دریافت بچ");
				this.progressBarService.queryFinished();
			}
		);
	}

	createBatch(){

		this.progressBarService.queryInProgress();
		this.batchService.createBatchService({
			title: this.newBatchName
		}).then(
			data => {

				this.newBatchId = data.Id;
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
	assignGift(batchId){
		this.progressBarService.queryInProgress();
		this.batchService.assignBatchService({
			gift_id: parseInt(this.giftIdForAssign[batchId]),
			batch_id:batchId
		}).then(
			data => {

				this.notificationService.success("انجام شد", "گیفت به بچ اضافه شد", { timeOut: 1500 });

				this.progressBarService.queryFinished();
			},
			error => {
				let errorMessage = JSON.parse(error._body);
				this.notificationService.error("خطا", errorMessage.message);
				this.progressBarService.queryFinished();
			}
		);

	}

	unAssignBatch(batchId){
		this.progressBarService.queryInProgress();
		this.batchService.removeBatchGiftService({
			gift_id: parseInt(this.giftIdForDelete[batchId]),
			batch_id:batchId
		}).then(
			data => {

				this.notificationService.success("انجام شد", "گیفت از بچ جدا شد ", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			},
			error => {
				let errorMessage = JSON.parse(error._body);
				this.notificationService.error("خطا", errorMessage.message);
				this.progressBarService.queryFinished();
			}
		);

	}

	downloadBatch(batchId){
		this.progressBarService.queryInProgress();
		this.batchService.downloadbatchService({
			output_type: this.downloadBatchtype[batchId],
			batch_id:parseInt(batchId)
		}).then(
			data => {

				this.notificationService.success("انجام شد", "گیفت از بچ جدا شد ", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			},
			error => {
				let errorMessage = JSON.parse(error._body);
				this.notificationService.error("خطا", errorMessage.message);
				this.progressBarService.queryFinished();
			}
		);

	}

}
