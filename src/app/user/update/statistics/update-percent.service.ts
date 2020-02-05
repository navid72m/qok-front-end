import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { UserCategoryStats } from '../models/statistics-view.model';
import { UserCategoryStatsURL } from '../../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UpdatePercentService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	updatePercent(id: number, category_id: number, percent: number , added_correct_answered :number): Promise<boolean> {
		var body = { id : id  , category_id: category_id, percent: percent , added_correct_answered :added_correct_answered}
		return this.http
			.post(UserCategoryStatsURL, JSON.stringify(body), this.options)
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
