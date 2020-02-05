import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';

import { NewsCreateModel } from '../news-models/news.model';
import { NewsExtractExpirationService } from '../news-services/news-extract-expiration.service';

@Component({
	selector: 'news-inputs',
	templateUrl: './news-inputs.component.html',
	styleUrls: [ './news-inputs.component.css' ],
})

export class NewsInputsComponent implements OnInit {
	
    @Input() public news = new NewsCreateModel();
	@Output() onChangeNews = new EventEmitter<NewsCreateModel>();
    public expirationDate : any = {date:{year:2019, month:1, day:1 }};
	selectedDate: object;
	selDate: IMyDate = {year: 0, month: 0, day: 0};
	myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'yyyy-mm-dd 23:59:59',
		showClearDateBtn: false,
		editableDateField: false,
		openSelectorOnInputClick: true,
		disableUntil: {year: 2016, month: 8, day: 10},
    };

	constructor (
		private newsExtractExpirationService: NewsExtractExpirationService,
	) { }

	ngOnInit() {
		let now: Date = new Date();
		this.selDate.year = now.getFullYear();
		this.selDate.month = now.getMonth() + 1;
		this.selDate.day = now.getDate();
		this.myDatePickerOptions.disableUntil = {
			year: now.getFullYear(),
			month: now.getMonth() + 1,
			day: now.getDate(),
		};
	 }

	onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
		var now: Date = new Date();
		var timeDiff = Math.abs(event.jsdate.getTime() - now.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
		this.news.life_time_seconds = diffDays * 3600 * 24;
		// this.onChangeNews.emit(this.news);
    }
}
