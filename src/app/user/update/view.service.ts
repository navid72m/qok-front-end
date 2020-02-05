import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { UserView, DeviceView,AwardDetails } from './view.model';
import { UserViewURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ViewService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	view(id: number): Promise<UserView> {
		var body = { id: id }
		return this.http
			.post(UserViewURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(res => {
				let body = res.json();
				if (body.status === true) {
					let ret = body.data.user_details as UserView;
					let devices = body.data.devices as DeviceView[];
					let allDevices = body.data.all_devices as DeviceView[];
					let award_details = body.data.award_details as AwardDetails;
					ret.award_details = award_details;
					ret.devices = devices;
					ret.all_devices = allDevices;
					return ret;
				} else {
					return []
				}
			})
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status == true) {
			return body.data.user_details || [];
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
