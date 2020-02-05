import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { StatViewModel } from './clan-stat-view.model';
import { ClanstatsView } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClanStatViewService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	fetch(date: string): Promise<StatViewModel> {
		var body = { created_at: date }
				
		return this.http
			.post(ClanstatsView, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
        let body = res.json();
        // console.log(body.data.created_at);
        // let date = body.data.created_at;
        // console.log(body.data.created_at);
        // var date: Date = new Date(body.data.created_at);
        // console.log(date);
        // body.data.created_at_disp = {
        //     date: {
        //         year: date.getFullYear(),
        //         month: date.getMonth(),
        //         day: date.getDate()
        //     }
        // }
        console.log("1");
        // console.log(body.data.created_at_disp);
		return body.data || [];
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
