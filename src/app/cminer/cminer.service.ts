import { Injectable } from '@angular/core';
import {RequestOptions, Headers, Http, Response, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {
	AcceptedStatusQuestionUrl,
	RejectedStatusQuestionUrl,
	SingleQuestionViewUrl, UpdateQuestionCategoryUrl,
	UpdateQuestionUrl,
	UserQuestionsViewUrl
} from "../config";
import {UpdateQuestionCategory, UpdateQuestionModel, UserQuestionResponseModel} from "./question/question.model";


@Injectable()
export class CminerService {
	private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
	private options = new RequestOptions({ headers: this.headers });

	constructor(private http: Http) { }

	viewUserQuestionService(data):Promise<UserQuestionResponseModel> {
		this.headers.delete('Content-Type');
	    let test = new FormData();
		test.append('player_id',data.player_id);
		return this.http
			.post(UserQuestionsViewUrl,test, this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	SingleSearchQuestionService(data):Promise<UserQuestionResponseModel> {
		this.headers.delete('Content-Type');
		let test = new FormData();
		test.append('id',data.id);
		return this.http
			.post(SingleQuestionViewUrl,test, this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	UpdateQuestuinService(data):Promise<UpdateQuestionModel> {
		this.headers.delete('Content-Type');
		let test = new FormData();
		for (let key in data){
			test.append(key,data[key]);
		}

		return this.http
			.post(UpdateQuestionUrl,test, this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	AcceptQuestionService(data):Promise<UserQuestionResponseModel> {
		this.headers.delete('Content-Type');
		let test = new FormData();
		test.append('id',data.id);
		return this.http
			.post(AcceptedStatusQuestionUrl,test, this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	RejectQuestionService(data):Promise<UserQuestionResponseModel> {
		this.headers.delete('Content-Type');
		let test = new FormData();
		test.append('id',data.id);
		return this.http
			.post(RejectedStatusQuestionUrl,test, this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	UpdateQuestionCategory(data):Promise<UpdateQuestionCategory> {
		this.headers.delete('Content-Type');
		let test = new FormData();
		for (let key in data){
			test.append(key,data[key]);
		}

		return this.http
			.post(UpdateQuestionCategoryUrl,test, this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private  extractData(res: Response) {
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
