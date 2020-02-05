import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { UserCategoryStats } from '../models/statistics-view.model';
import { CATEGORIES } from '../../../shared/categories.model';
import { GetUserStatURL } from '../../../config';
import { UserStat } from '../models/statistics-view.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetUserStatsService {
	private headers = new Headers({'Content-Type': 'application/json'});

	// private categories = CATEGORIES;

	constructor(private http: Http) { }

	getUserStats(id: number): Promise<UserStat> {
		var body = { id: id }
		return this.http
			.post(GetUserStatURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();

    if (body.status == true) {
			let stat = body.data.user_stats
			stat.disabled = true
			return stat;
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
