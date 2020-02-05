import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

import {CreateQuestionURL, NewAdvertiseQuestionURL} from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CreateQuestionService {
	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	create(data): Promise<number> {

		this.headers.delete('Content-Type');
		let test = new FormData();
		for (let key in data){
			test.append(key,data[key]);
		}
		return this.http
			.post(NewAdvertiseQuestionURL, test, this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}


	private extractData(res: Response) {
		let body = res.json();
		return body.data.question_id;
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
