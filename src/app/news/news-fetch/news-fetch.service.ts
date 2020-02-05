import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { NewsCreateModel } from '../news-models/news.model';
import { FetchNewsURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class NewsFetchService {
	

	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });


	constructor(private http: Http) { }

	fetch(): Promise<NewsCreateModel[]> {

		var body = {}
				
		return this.http
			.post(FetchNewsURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return body.data.news || [];
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
