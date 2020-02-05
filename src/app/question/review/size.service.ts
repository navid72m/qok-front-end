import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { QuestionSize } from './size.model';
import { QuestionGetSizeURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionSizeService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getsize(status: string, categoryid: number): Promise<number> {
		var body = { status: status , categoryid: categoryid };
		return this.http
			.post(QuestionGetSizeURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status === true) {
			return body.data.counter || [];
		} else {
			return [];
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
