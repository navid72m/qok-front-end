import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { ClanView } from './view.model';
import { ChangeClanNameURL, ClanUpdateURL } from '../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UpdateService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	update(id: number , lost_count: number, tie_count: number, won_count: number, perfect_games: number, games_played: number, score: number ): Promise<boolean> {
		var body = {id: id , lost_count: lost_count , tie_count: tie_count , won_count: won_count , perfect_games: perfect_games , games_played: games_played , score: score}
		return this.http
			.post(ClanUpdateURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
    changeClanName(id: number, clanname: string) {
        let body = {id: id , clan_name: clanname}
        return this.http
            .post(ChangeClanNameURL, JSON.stringify(body), {headers: this.headers})
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
