import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { CreatePublisherURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UpdatePublisherService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }



	update( title: string, status: string, total_budget: number): Promise<boolean> {
		var body = { title: title, status: status, total_budget: total_budget}
		return this.http
			.post(CreatePublisherURL, JSON.stringify(body), {headers: this.headers})
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
