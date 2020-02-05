import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { GetAdvertiseURL } from '../../config';
import { AdsDetails } from './update.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetAdvertiseService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }



	getDetails(ad_id : number): Promise<AdsDetails>{
		var body = {ad_id : ad_id}
		return this.http
			.post(GetAdvertiseURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}


	private extractData(res: Response) {
    let body = res.json();
    if (body.status == true) {
      return body.data.ads_details || [];
    } else {
      return []
    }
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
