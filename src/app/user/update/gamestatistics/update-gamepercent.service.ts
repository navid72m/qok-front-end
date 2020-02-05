import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { UserCategoryStats } from '../models/statistics-view.model';
import { UpdateUserStatURL } from '../../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UpdateGamePercentService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	updatePercent(id: number, won: number, tie: number, lost: number, perfect_game: number, won_inc: number, tie_inc: number, lost_inc: number, perfect_game_inc: number): Promise<boolean> {
		var body = { id : id, won: won, tie: tie, lost: lost, perfect_game: perfect_game, won_inc: won_inc, tie_inc: tie_inc, lost_inc: lost_inc, perfect_game_inc: perfect_game_inc}
		return this.http
			.post(UpdateUserStatURL, JSON.stringify(body), this.options)
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
