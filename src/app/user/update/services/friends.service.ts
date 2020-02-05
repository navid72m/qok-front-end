import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { Friend } from '../models/friends-view.model';
import { FriendsURL } from '../../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FriendsService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	searchFriends(id: number): Promise<Friend[]> {
		var body = { userId : id  }
		return this.http
			.post(FriendsURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return body.data.friends_list || [];
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
