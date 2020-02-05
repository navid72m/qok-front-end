import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { StatQuestionSummary } from './list_statquestions.component.model';
import { getQuestionStat } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListStatisticsQuestionService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });
	constructor(private http: Http) { }
	getCatStat(cat_id: number , new_homison : number ,old_homison : number,not_homison : number): Promise<StatQuestionSummary[]> {
		var body = { category_id: cat_id, new :new_homison , old :old_homison , not : not_homison };
		return this.http
            .post(getQuestionStat, JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
	}
	private extractData(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return body.data.statistics || [];
		} else {
			return []
		}
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
