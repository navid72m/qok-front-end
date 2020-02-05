import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { NewsCreateModel } from '../news-models/news.model';
import { UpdateNewsURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsUpdateService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	update(news: NewsCreateModel): Promise<boolean> {
		
		var today = new Date(); 
		var dd = today.getDate(); 
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear(); 
		var h = today.getHours(); 
		var m = today.getMinutes(); 
		var s = today.getSeconds(); 
		 var month  : string;
		 var day  : string;
		month = ''+mm;
		var day = ''+dd;
		if (mm<10) month = "0"+mm ;
		if (dd<10) day = "0"+dd ;
		var	expiration_now_str = "";
		if (news.expiration_now ) {
			expiration_now_str = yyyy + "-" + month + "-" + day +" "+ h + ":" + m + ":" + s;
		}
		var body = {
						id:    news.id,
						title: news.title,
						text: news.text,
						link_title: news.link_title,
						link_url: news.link_url,
						image_file_name: news.image_file_name,
						updated_by: news.updated_by,
						life_time_seconds: news.life_time_seconds,
						short_text: news.short_text,
						min_player_level: news.min_player_level,
						expiration_now: expiration_now_str,
						expiration_time: news.expiration_time['formatted'],
					}
		return this.http
			.post(UpdateNewsURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
        return body.status;
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
