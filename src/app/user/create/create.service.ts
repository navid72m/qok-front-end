import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import { CreateUserModel } from './create.model';
import { CreateNewUserURL, UsernameExistURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CreateService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	create(user: CreateUserModel): Promise<boolean> {
		var body = {
                    username: user.username,
                    password: user.password,
                    coins: user.coins,
                    status: user.status,
                    role: user.role,
                    level: user.level,
                    score: user.score,
                    weekly_score: user.weekly_score,
                    trophies: user.trophies,
                    }
		return this.http
			.post(CreateNewUserURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	usernameNotAvailable(username: string): Promise<boolean> {
		var body = {
                    username: username
		}
		return this.http
			.post(UsernameExistURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
        return body.data.username_exist;
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}
}
