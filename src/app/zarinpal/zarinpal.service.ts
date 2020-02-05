import { Injectable } from '@angular/core';
import {RequestOptions, Headers, Http, Response, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {ZarinpalModel} from "./zarinpal/zarinpal.model";

@Injectable()
export class ZarinpalService {

	private zarinPalToke = '913d755f54c77d13575d8c4717fd4dedcd4cdd7480258bbbb6aa3c62ae15fecb677d91fa1235767f';
	private headers = new Headers({'Content-Type': 'application/json;'});
	private options = new RequestOptions({ headers: this.headers });
	private zarinPalUrlFrist = 'https://api.zarinpal.com/rest/v3/transaction.json?purseId=2&status=all&';
	constructor(private http: Http) { }



	getTransactionData(data,type):Promise<ZarinpalModel> {
		this.headers.set('Authorization','Bearer '+this.zarinPalToke);


		return this.http
			.get(this.zarinPalUrlFrist+type+'='+data,this.options)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}


	private  extractData(res: Response) {
		let body = res.json();

		return body.data;
	}
	private handleError(error: any): Promise<any> {
		return Promise.reject(error.message || error);
	}



}
