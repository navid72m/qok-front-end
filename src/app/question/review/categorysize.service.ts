import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { QuestionSize , QuestionCategorySize } from './size.model';
import { QuestionGetCategorySizeURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionCategorySizeService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getsize(status: string): Promise<QuestionCategorySize[]> {
		var body = { status: status };
		return this.http
			.post(QuestionGetCategorySizeURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status === true) {
			return body.data.counter_list || [];
		} else {
			return [];
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
