import { Injectable } from '@angular/core';
import {RequestOptions, Headers, Http, Response, ResponseContentType} from '@angular/http';

import {
	AssignBatchesUrl, CheckMultipleGiftsUrl, CheckSingleGiftlUrl,
	CreateBatchesUrl, CreateSingleGiftsUrl,
	DownloadBatchUrl,
	GetAllBatchesUrl, getSingleGiftsDetailUrl, MultipleGiftsUrl,
	RemoveBatchGiftUrl, StopMultipleGiftsUrl,

} from '../config';

import 'rxjs/add/operator/toPromise';
import {addORremoveBatch, createBatch, downloadBatch} from "./batches/batches.model";
import {promise} from "selenium-webdriver";
import * as FileSaver from "file-saver";
import {multipleGiftModel, MultipleStatusModel} from "./multiplegifts/multiplegifts.model";
import {getGiftsDetailsModel, giftUsageModel, SinglegiftsModel} from "./singlegifts/singlegifts.model";

@Injectable()
export class GiftscodesService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	getBatchesService(){

		return this.http
			.post(GetAllBatchesUrl,{}, this.options)
			.toPromise()
			.then(this.extractDataForGetBatches)
			.catch(this.handleError);
	}

	getCheckSingleGiftStatusService(data):Promise<giftUsageModel>{

		return this.http
			.post(CheckSingleGiftlUrl,data, this.options)
			.toPromise()
			.then(this.extractForGiftCheckUsage)
			.catch(this.handleError);
	}
	getSingleGiftDetailService(data):Promise<getGiftsDetailsModel>{

		return this.http
			.post(getSingleGiftsDetailUrl,data, this.options)
			.toPromise()
			.then(this.extractForGetGiftsDetails)
			.catch(this.handleError);
	}

	stopCreateMultipleGiftsService(){

		return this.http
			.post(StopMultipleGiftsUrl,{}, this.options)
			.toPromise()
			.then(this.extractMultipleGifts)
			.catch(this.handleError);
	}

	checkMultipleGiftStatusService():Promise<MultipleStatusModel>{
		return this.http
			.post(CheckMultipleGiftsUrl,{}, this.options)
			.toPromise()
			.then(this.extractForCheckMultiple)
			.catch(this.handleError);
	}
	createMultipleGiftsService(data):Promise<multipleGiftModel> {

		return this.http
			.post(MultipleGiftsUrl,data, this.options)
			.toPromise()
			.then(this.extractMultipleGifts)
			.catch(this.handleError);
	}
	createSingleGiftsService(data):Promise<SinglegiftsModel> {

		return this.http
			.post(CreateSingleGiftsUrl,data, this.options)
			.toPromise()
			.then(this.extractForSingleGiftCreations)
			.catch(this.handleError);
	}
	createBatchService(data):Promise<createBatch> {

		return this.http
			.post(CreateBatchesUrl,data, this.options)
			.toPromise()
			.then(this.extractDataForCreateBatches)
			.catch(this.handleError);
	}
	assignBatchService(data):Promise<addORremoveBatch>{
		return this.http
			.post(AssignBatchesUrl,data, this.options)
			.toPromise()
			.then(this.extractAssignCheck)
			.catch(this.handleError);
	}

	removeBatchGiftService(data):Promise<addORremoveBatch>{
		return this.http
			.post(RemoveBatchGiftUrl,data, this.options)
			.toPromise()
			.then(this.extractAssignCheck)
			.catch(this.handleError);
	}
	downloadbatchService(data):Promise<downloadBatch>{
		return this.http
			.post(DownloadBatchUrl,data, { responseType: ResponseContentType.Blob })
			.toPromise()
			.then(this.extractForDownload)
			.catch(this.handleError);
	}
	private  extractForGiftCheckUsage(res: Response) {
		let body = res.json();
		if (body.status == true) {

			return body.data.attributions || [];
		} else {
			return []
		}
	}
	private  extractForGetGiftsDetails(res: Response) {
		let body = res.json();
		if (body.status == true) {

			return body.data || [];
		} else {
			return []
		}
	}

	private  extractForSingleGiftCreations(res: Response) {
		let body = res.json();
		if (body.status == true) {

			return body.data.gift || [];
		} else {
			return []
		}
	}
	private  extractForCheckMultiple(res: Response) {
		let body = res.json();
		if (body.status == true) {

			return body.data || [];
		} else {
			return []
		}
	}

	private extractAssignCheck(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return true;
		} else {
			return false;
		}
	}

	private  extractDataForCreateBatches(res: Response) {
		let body = res.json();
		if (body.status == true) {

			return body.data.batch || [];
		} else {
			return []
		}
	}
	private  extractDataForGetBatches(res: Response) {
		let body = res.json();
		if (body.status == true) {

			return body.data.batches || [];
		} else {
			return []
		}
	}
	private  extractMultipleGifts(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return true;
		} else {
			return false;
		}
	}
	private  extractForDownload(res: Response) {
		let body = res.json();
				let defaultName = 'batches.json';
				let type = 'text/json';

				if(body.type == 'text/csv'){

					 defaultName = 'batches.csv';
					 type = 'text/csv';

				}
			let blob = new Blob([body], { type: type });
			let url = window.URL.createObjectURL(blob);

			if(navigator.msSaveOrOpenBlob) {
				navigator.msSaveBlob(blob, defaultName);
			} else {
				let a = document.createElement('a');
				a.href = url;
				a.download = defaultName;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			}
			return window.URL.revokeObjectURL(url);


	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
