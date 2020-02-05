import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// import { UserView } from './view.model';
import { LockDeviceURL } from '../../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LockDeviceService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	blockDevice(id: number): Promise<boolean> {
		var body = { id: id }
		return this.http
			.post(LockDeviceURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return body.data.status || [];
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
