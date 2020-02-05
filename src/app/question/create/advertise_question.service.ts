import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { AdvertiseQuestionURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdvertiseQuestionService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }



	create(advertise_id: number, question_id: number, category_ids: Array <number>): Promise<boolean> {
		var body = {ad_id:advertise_id, question_id:question_id, category_ids:category_ids}
		return this.http
			.post(AdvertiseQuestionURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}


	private extractData(res: Response) {
		let body = res.json();
		return body.status;
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
