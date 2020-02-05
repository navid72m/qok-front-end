import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { UserView } from './view.model';
import {
    UserUpdateURL,
    UserUnblockLoginURL,
    UserUpdatePasswordURL,
    IncreaseCoinsSingleURL,
    ChangeUserNameURL,
    UserUnblockIpUrl, PushNewsToUserURL
} from '../../config';
import {  IncreaseGoldCupURL, IncreaseSilverCupURL, IncreaseBronzeCupURL } from '../../config';
import {  IncreaseWeeklyGoldCupURL, IncreaseWeeklySilverCupURL, IncreaseWeeklyBronzeCupURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UpdateService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	update(id: number , username: string, email: string, score: number, weekly_score: number, coins: number, trophies: number,  password: string, status: string, level: number, username_change_time: number): Promise<boolean> {
		var body = {id: id , username: username, email: email, score: score, weekly_score: weekly_score, coins: coins, trophies: trophies, password: password, status: status, level: level, username_change_time: username_change_time}
		return this.http
			.post(UserUpdateURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	increaseUserCoins(id: number, coins: number) {
		var body = {id: id , coins: coins}
		return this.http
			.post(IncreaseCoinsSingleURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	increaseUserWeeklyGoldCup(id: number, cups: number) {
		var body = {id: id , cups: cups}
		return this.http
			.post(IncreaseWeeklyGoldCupURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	increaseUserWeeklySilverCup(id: number, cups: number) {
		var body = {id: id , cups: cups}
		return this.http
			.post(IncreaseWeeklySilverCupURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	increaseUserWeeklyBronzeCup(id: number, cups: number) {
		var body = {id: id , cups: cups}
		return this.http
			.post(IncreaseWeeklyBronzeCupURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	increaseUserGoldCup(id: number, cups: number) {
		var body = {id: id , cups: cups}
		return this.http
			.post(IncreaseGoldCupURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	increaseUserSilverCup(id: number, cups: number) {
		var body = {id: id , cups: cups}
		return this.http
			.post(IncreaseSilverCupURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	increaseUserBronzeCup(id: number, cups: number) {
		var body = {id: id , cups: cups}
		return this.http
			.post(IncreaseBronzeCupURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

    changeUserName(id: number, username: string) {
        var body = {id: id , username: username}
        return this.http
            .post(ChangeUserNameURL, JSON.stringify(body), {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

	unblockLogin(id: number): Promise<boolean> {
		var body = {id: id}
		return this.http
			.post(UserUnblockLoginURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	unblockDeviceIp(id: number): Promise<boolean> {
		var body = {id: id}
		return this.http
			.post(UserUnblockIpUrl, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	resetPassword(id: number, password: string): Promise<boolean> {
		var body = {id: id, password: password}
		return this.http
			.post(UserUpdatePasswordURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

    publishUser(newsID: number, userID: number): Promise<boolean> {
        var body = { news_id: newsID, user_id: userID } ;
        return this.http
            .post(PushNewsToUserURL, JSON.stringify(body), {headers: this.headers})
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
