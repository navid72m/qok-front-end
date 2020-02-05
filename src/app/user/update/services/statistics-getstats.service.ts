import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { UserCategoryStats } from '../models/statistics-view.model';
import { CATEGORIES } from '../../../shared/categories.model';
import { GetUserCategoryStatsURL } from '../../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetStatsService {
	private headers = new Headers({'Content-Type': 'application/json'});

	// private categories = CATEGORIES;

	constructor(private http: Http) { }

	getStats(id: number): Promise<UserCategoryStats[]> {
		var body = { id: id }
		return this.http
			.post(GetUserCategoryStatsURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		let cats = CATEGORIES;
		if (body.status === true) {
			let stats = body.data.user_category_stats;
			for (let stat of stats) {
				stat.disabled = true;
				stat.category = cats.filter(cat => stat.category_id === cat.id)[0].title;
			}
			return  stats;
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
