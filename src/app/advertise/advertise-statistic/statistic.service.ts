import { Injectable } from '@angular/core';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {  RecentDaysStats } from '../../config';
import {  RecentMonthStats } from '../../config';
import {  RecentAdsClickDaysStats } from '../../config';
import { Daily } from './statistics.model';
import { Monthly } from './statistics.model';
@Injectable()
export class AdvertiseStatisticService {
    private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
    private options = new RequestOptions({ headers: this.headers });
    constructor(private http: Http) { }
    getRecentDaysStats(days: number): Promise<Daily[]> {
        var body = {days: days} ;
        return this.http
            .post(RecentDaysStats, JSON.stringify(body), {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getRecentMonthStats(month: number): Promise<Monthly[]> {
        var body = {month: month} ;
        return this.http
            .post(RecentMonthStats, JSON.stringify(body), {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getRecentAdsClickDaysStats(days: number): Promise< any> {
        console.log(days);
        var body = {days: days} ;
        return this.http
            .post(RecentAdsClickDaysStats, JSON.stringify(body), {headers: this.headers})
            .toPromise()
            .then(this.extractDataClickCount)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let body = res.json();
        if (body.status == true) {
            console.log(body);
            return body.data.advertise_stat || [];
        } else {
            return []
        }
    }


    private extractDataClickCount(res: Response) {
        let body = res.json();
        if (body.status == true) {
            console.log(body);
            return body.data.count;
        } else {
            return []
        }
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}


