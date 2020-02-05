import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import {  UploadedFile } from './review.model';
import { UploadedFileURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UploadedFileService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getUploadedFileService(): Promise<UploadedFile[]> {
		var body = { };
		return this.http
			.post(UploadedFileURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status === true) {
			return body.data.uploaded_file_stat || [];
		} else {
			return [];
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
