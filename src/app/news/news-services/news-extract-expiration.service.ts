import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { NewsCreateModel } from '../news-models/news.model';
import 'rxjs/add/operator/toPromise';
import { AppState } from '../../app.service';
import { formatDate } from 'ngx-bootstrap/bs-moment/format';
const APP_PROVIDERS = [
	AppState
];

@Injectable()

export class NewsExtractExpirationService {
	constructor(
		private appState:  AppState
	) {}

	// takes an array of NewsCreateModel objects and fills the expiration time
	extractDate(news: NewsCreateModel[]): NewsCreateModel[] {
		for (let n of news) {
			var createdAtDate = new Date(n.created_at * 1000);
			var lifeTimeInDay = (n.life_time_seconds / 3600) / 24 ;
            createdAtDate.setDate(createdAtDate.getDate() + lifeTimeInDay);
            var formatDate = this.formatDate(createdAtDate);
            n.expiration_time = formatDate;

		}
		return news;
	}

    formatDate(date: Date): string {
        var dd = date.getDate();
        var ddString = dd.toString();

        var mm = date.getMonth() + 1;
        var mmString = mm.toString();


        var yyyy = date.getFullYear();
        var yyyyString = yyyy.toString();

        if(dd < 10) {
            ddString = '0' + ddString;
        }
        if (mm < 10) {
            mmString = '0' + mmString;
        }
         var dateString = yyyyString + '/' + mmString + '/' + ddString;
        return dateString ;
    }

	// takes an object of NewsCreateModel and fills the expiration time
	extractDateSingle(news: NewsCreateModel): Date {
		var date: Date = new Date(news.expiration_time);
	//	alert(date)
		// var date: Date = new Date(news.created_at);
		// date.setDate(date.getDate() + ((news.life_time_seconds / 3600) / 24));
		return date;
	}

}
