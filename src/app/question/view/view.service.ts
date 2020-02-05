import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { QuestionView } from '../shared/view.model';
import { QuestionViewURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ViewQuestionService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	view(id: number): Promise<QuestionView> {
		console.log(id);
		var body = { id: id }
		return this.http
			.post(QuestionViewURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return body.data.question_details || [];
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
