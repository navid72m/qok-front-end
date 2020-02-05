import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { CreateAdvertiseURL } from '../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CreateAdvertiseService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }



	update(publisher_id: number , ad_type: string, title: string, text: string, initial_budget: number, budget: number, status: string, cost_per_click: number, cost_per_view: number, category_ids: Array <number>, link: string, platform: string, clicks: number , is_internal : number): Promise<number> {
		var body = {publisher_id: publisher_id , ad_type: ad_type, title: title, text: text, initial_budget: initial_budget, budget: budget, status: status, cost_per_click: cost_per_click, cost_per_view: cost_per_view, category_ids: category_ids, link: link, platform: platform, clicks:clicks , is_internal : is_internal}
		return this.http
			.post(CreateAdvertiseURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}


	private extractData(res: Response) {
		let body = res.json();
		return body.data.ad_id;
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
