import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { ClanView } from './view.model';
import { UserView } from './view.model';
import { ClanInfo } from './view.model';

import { ClanViewURL } from '../../config';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ViewService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	view(id: number): Promise<ClanInfo> {
		var body = { id: id }
		return this.http
			.post(ClanViewURL, JSON.stringify(body), {headers: this.headers})
			.toPromise()
			.then(res => {
				var body = res.json();
				if (body.status === true) {
					console.log(body.data);
				//	var ret = body.data.clan_details as ClanView;
					//let devices = body.data.devices as DeviceView[];
				//	let allDevices = body.data.all_devices as DeviceView[];
				//	ret.devices = devices;
				//	ret.all_devices = allDevices;
				var ret = body.data as ClanInfo ;
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
			return body.data.clan_details || [];
		} else {
			return []
		}
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
