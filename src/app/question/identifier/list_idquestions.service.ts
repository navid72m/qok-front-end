import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { QuestionsList } from './list_idquestions.model';
import { getQuestionList } from '../../config';

import 'rxjs/add/operator/toPromise';
import * as leven from 'js-levenshtein';
// const levenshtein = require('js-levenshtein');

@Injectable()
export class ListFindByIdQuestionService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }



	getList(created_by: number): Promise<QuestionsList[]> {
		var body = { created_by: created_by };
		return this.http
            .post(getQuestionList, JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
	}
	private extractData(res: Response) {

		let body = res.json();
		return body.data || [];
	}
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}


}
