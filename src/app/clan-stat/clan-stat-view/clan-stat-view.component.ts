import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';

import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';

import { StatViewModel } from './clan-stat-view.model';

import { ClanStatViewService } from './clan-stat-view.service';

import '../../shared/date-ext';

@Component({
	selector: 'clan-stat-view',
	templateUrl: './clan-stat-view.component.html',
	styleUrls: [ './clan-stat-view.component.css' ],
})

export class ClanStatViewComponent implements OnInit {
	
	stat: StatViewModel;
	selectedDate: IMyDateModel;
    myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd mmm yyyy',
		showClearDateBtn: false,
		editableDateField: false,
		openSelectorOnInputClick: true,
		disableUntil: {year: 2016, month: 8, day: 10},
    };

	constructor (
		private router: Router,
		private location: Location,
		private progressBarService: ProgressBarService,
        private notificationsService: NotificationsService,
        private clanStatViewService: ClanStatViewService,
        ) { }

	ngOnInit() {
		
	}

	onDateChanged(event: IMyDateModel) {
        this.progressBarService.queryInProgress();
		var date = event.jsdate.toYMDStart();

		this.clanStatViewService.fetch(date)
		.then(s => {
			this.notificationsService.success("Sucess", "آمار دریافت شد!", { timeOut: 1500 });
            this.progressBarService.queryFinished();
			this.stat = s;
		})
		.catch(err => {
			this.notificationsService.error("Error", "دوباره امتحان کنید!", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});	
    }

	onViewDetails(id: number): void {
		const url = `clanstats/view/${id}`;
		this.router.navigateByUrl(url);
	}

	goBack(): void {
		this.location.back();
	}
}
