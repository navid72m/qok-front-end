import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { QuestionView } from '../shared/view.model';
import { QuestionUpdateURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UpdateQuestionService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	update(id: number , question: string, choice1: string, choice2: string, choice3: string, choice4: string, correct_answer: number, status: string, category_id: number): Promise<QuestionView> {
		var body = {id: id , question: question, choice1: choice1, choice2: choice2, choice3: choice3, choice4: choice4, correct_answer: correct_answer, category_id: category_id, status: status}
		return this.http
			.post(QuestionUpdateURL, JSON.stringify(body), {headers: this.headers})
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
