import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ROLES } from './roles.model';
import {ProgressBarService} from "../../core/progress-bar/progress-bar.service";
import {NotificationsService} from "angular2-notifications";
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import {ZarinpalService} from "../zarinpal.service";
import {ZarinpalModel} from "./zarinpal.model";



@Component({
	selector: 'app-question',
	templateUrl: './zarinpal.component.html',
	styleUrls: [ './zarinpal.component.css' ],
	encapsulation: ViewEncapsulation.None

})

export class ZarinpalComponent implements OnInit {

	private zarinPalModel = new ZarinpalModel();
	private zarinPalpanData =[];

	constructor (
		private router: Router,
		private route: ActivatedRoute,
		private progressBarService: ProgressBarService,
		private notificationService: NotificationsService,
		private zarinpalService: ZarinpalService,

        ) {
	}
	ngOnInit() {

	}

	checkTransaction(){

		this.progressBarService.queryInProgress();
		this.zarinpalService.getTransactionData(this.zarinPalModel.pan,this.zarinPalModel.type)
			.then(s => {
				this.zarinPalpanData = [];
				this.zarinPalpanData.push(s);
				this.notificationService.success("Sucess", "اطلاعات پرداخت دریافت شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
				this.zarinPalpanData = this.zarinPalpanData[0];
			})
			.catch(err => {
				this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			});



	}

	downloadZarinpal(){
		let defaultName = 'zarinpal.csv';
		let type = 'text/json';

		let File = new Angular2Csv(this.zarinPalpanData, 'My Report');

		let blob = new Blob([File], { type: type });
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

	CutTheTime(time){

		return time.substr(10);

	}


}
