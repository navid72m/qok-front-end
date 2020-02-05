import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { NewsCreateModel } from '../news-models/news.model';
import { PushNewsToUserURL, DeleteNewsURL, PushNewsToAllURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsPublishService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	publishUser(newsID: number, userID: number): Promise<boolean> {
		var body = { news_id: newsID, user_id: userID }
				
		return this.http
			.post(PushNewsToUserURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	publishAll(newsID: number): Promise<boolean> {
		var body = { news_id: newsID }
				
		return this.http
			.post(PushNewsToAllURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.status;
	}

	deleteRedis(newsID: number): Promise<any>{

		var body = { 
			news_id:newsID }
		return this.http
				.post(DeleteNewsURL, JSON.stringify(body), this.options)
				.toPromise()
				.then(this.extractData)
				.catch(this.handleError);
	}
	
	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}