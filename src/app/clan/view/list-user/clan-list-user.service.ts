import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { UserSearch }     from '../search.model';
import { BlockMultipleURL, UnBlockMultipleURL } from '../../../config';
import { IncreaseCoinsURL } from '../../../config';
import { IncreaseGoldCupURL } from '../../../config';
import { IncreaseSilverCupURL } from '../../../config';
import { IncreaseBronzeCupURL } from '../../../config';



import 'rxjs/add/operator/toPromise';

@Injectable()
export class UpdateMultipleService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	blockMultiple(ids: number[]): Promise<boolean> {
		var body = { ids: ids }
		return this.http
			.post(BlockMultipleURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	unblockMultiple(ids: number[]): Promise<boolean> {
		var body = { ids: ids }
		return this.http
			.post(UnBlockMultipleURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	increaseCoins(ids: number[], data: number): Promise<boolean> {
		var body = { ids: ids, data: data  }
		return this.http
			.post(IncreaseCoinsURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	increaseGoldCup(ids: number[], data: number): Promise<boolean> {
		var body = { ids: ids, data: data  }
		return this.http
			.post(IncreaseGoldCupURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
        return body.status;
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
