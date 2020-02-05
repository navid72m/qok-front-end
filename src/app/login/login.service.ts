import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { LoginURL } from '../config';
import { AuthenticatedUser } from '../guards/auth';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	authenticate(username: string, password: string): Promise<AuthenticatedUser> {
		var body = { username: username, password: password }
		return this.http
			.post(LoginURL, JSON.stringify(body), { headers: this.headers })
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return body.data.user || [];
		}
		return [];
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
