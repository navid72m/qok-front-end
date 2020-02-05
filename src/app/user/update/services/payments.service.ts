import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { UserPayments } from '../models/payments-view.model';
import { PaymentsURL, CheckUserAvatarURL } from '../../../config';
import { UserBuyAvatarCount } from '../models/payments-view.model';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PaymentsService {
	buyCount: UserBuyAvatarCount;
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	getPayments(id: number): Promise<UserPayments> {
		var body = { id : id  }
		return this.http
			.post(PaymentsURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	checkUserAvatar1(id: number,avatar_id : number): Promise<UserBuyAvatarCount> {
		var body = { id : id ,avatar_id:avatar_id }
		console.log(body);
		return this.http
			.post(CheckUserAvatarURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return body.data || [];
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
