import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { FraudsURL } from '../../../config';
import { Frauds } from '../models/frauds.model';

@Injectable()

export class FraudsService {
    private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8'});
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    getFraudsStats(id: number): Promise<Frauds> {
        var body = { id : id  }
        return this.http
            .post(FraudsURL, JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        if (body.status == true) {
            return body.data.frauds || [];
        } else {
            return []
        }
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }

}
