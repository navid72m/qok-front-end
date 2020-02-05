import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { PublisherSummary } from './publisher.model';
import { GetPublishersURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetPublishersService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	getPublishersList(): Promise<PublisherSummary[]> {
		var body = { }
		return this.http
			.post(GetPublishersURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return body.data.publishers_list || [];
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
