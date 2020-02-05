import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { NewsCreateModel } from '../news-models/news.model';
import { CreateNewsURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsCreateService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	create(news: NewsCreateModel): Promise<boolean> {
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
			expiration_time: news.expiration_time['formatted'],
		}

		return this.http
			.post(CreateNewsURL, JSON.stringify(body), this.options)
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
