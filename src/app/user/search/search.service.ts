import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';

import {RecipeList, UserSearch} from './search.model';
import { ClanSearch } from './search.model';

import {
	UserSearchURL,
	UserSearchLevenURL,
	SearchClanMembers,
	SearchClanMembers1,
	SearchRecipeUrl
} from '../../config';

import 'rxjs/add/operator/toPromise';
import * as leven from 'js-levenshtein';
// const levenshtein = require('js-levenshtein');

@Injectable()
export class SearchService {
	private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	search(name: string, code: string): Promise<UserSearch[]> {
		var body = { username: name, code: code }
		return this.http
			.post(UserSearchURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	leven(name: string): Promise<UserSearch[]> {
		var body = { username: name }
		return this.http
			.post(UserSearchLevenURL, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractLevenData)
			.catch(this.handleError);
	}

	getClans(title: string): Promise<ClanSearch[]> {
		var body = { title: title };
		return this.http
			.post(SearchClanMembers, JSON.stringify(body), this.options)
			.toPromise()
			.then(this.extractClanData)
			.catch(this.handleError);
	}

	getRecipe(data): Promise<RecipeList[]> {
		return this.http
			.post(SearchRecipeUrl, JSON.stringify(data), this.options)
			.toPromise()
			.then(this.extractRecipeData)
			.catch(this.handleError);

	}
	private extractRecipeData(res: Response) {
		let body = res.json();

		if (body.status == true) {
			return body.data.payments || [];
		} else {
			return []
		}
	}

	private extractData(res: Response) {
		let body = res.json();

		if (body.status == true) {
			return body.data.users || [];
		} else {
			return []
		}	
	}

	private extractLevenData(res: Response) {
		let body = res.json();
		
		return body.players || [];
	}	

	private extractClanData(res: Response) {
		let body = res.json();
	//	console.log(body)
		return body.clans || [];
	}


	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
