import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { AdsSummary } from './list.model';
import { ListAdvertiseURL, DeleteAdvertiseURL ,DeactiveAdvertiseURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	getList(): Promise<AdsSummary[]> {
		var body = { }
		return this.http
			.post(ListAdvertiseURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	deleteRedis(ad_id: number): Promise<any>{

		var body = {"ad_id":ad_id }
		return this.http
				.post(DeleteAdvertiseURL, JSON.stringify(body), this.options)
				.toPromise()
				.then(this.extractData)
				.catch(this.handleError);
	}

	deactive(ad_id: number, status :number): Promise<any>{

		var body = { ad_id:ad_id, status: status }
		return this.http
				.post(DeactiveAdvertiseURL, JSON.stringify(body), this.options)
				.toPromise()
				.then(this.extractData)
				.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return body.data.ads_list || [];
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
