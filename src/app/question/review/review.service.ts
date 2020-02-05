import { Injectable } from '@angular/core';
import { ResponseContentType, RequestOptions, Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { CSVSetting, Index } from './review.model';
import { QuestionView } from './view.model';
import { QuestionPreReviewDownloadURL } from '../config';

// import  * as FileSaver from 'file-saver';
// import { saveAs } from 'file-saver';
import * as saveAs from 'file-saver';

import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx' ;

@Injectable()
export class ReviewQuestionService {
	private headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/csv' });
	csvData: any[] = [];
	index : Index;

	constructor(private http: Http) {
	}

	download( page: number,url: string,url_index: string,mode: string,category: number, engtitle: string ): Observable<File> {
		var body = { page: page, pagesize: CSVSetting.Default_PageSize, categoryid: category };

		let options = new RequestOptions({ headers: this.headers, responseType: ResponseContentType.Blob });
		return this.http
			.post(url, JSON.stringify(body), options)
			.map( (res) =>
					this.getIndex(page, url_index,category)
					.subscribe((res_index) => {
						this.index=res_index;
						var filename = 'questions_' + engtitle.toString() + '_' + mode.toString() +'_from_'+res_index.first_id+ '_to_'+ res_index.last_id +'_pNo'+ page.toString()+ '.csv';
						console.log(res)
						this.downloadFile(res, filename);
					})
		)
			.catch(this.handleError);
	}

	public downloadFile( data: Response, filename: string ) {
		var blob = new Blob( [data.blob()], { type: 'text/csv' });

		// saveAs(blob, filename);
		// var uri = 'data:text/csv;charset=utf-8,' + str;
		var url = window.URL.createObjectURL(blob);

		var downloadLink = document.createElement('a');
		downloadLink.href = url;
		downloadLink.download = filename;

		document.body.appendChild( downloadLink );
		downloadLink.click();
		document.body.removeChild( downloadLink );

  		// window.open(url);

	}

	getIndex( page: number,url_index: string, category: number): Observable<Index> {
		var body = { page: page, pagesize: CSVSetting.Default_PageSize, categoryid: category };
		return this.http
			.post(url_index, JSON.stringify(body), {headers: this.headers})
			.map((res) => this.extractData(res))
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		if (body.status === true) {
			return body.data || [];
		} else {
			return [];
		}
	}



  // private extractData(res: Response) {
	//
  //   let csvData = res['_body'] || '';
  //   let allTextLines = csvData.split('/\r\n|\n/');
  //   let headers = allTextLines[0].split(',');
  //   let lines = [];
	//
  //   for ( let i = 0; i < allTextLines.length; i++) {
  //       // split content based on comma
  //       let data = allTextLines[i].split(',');
  //       if (data.length == headers.length) {
  //           let tarr = [];
  //           for ( let j = 0; j < headers.length; j++) {
  //               tarr.push(data[j]);
  //           }
  //           lines.push(tarr);
  //       }
  //   }
  //   this.csvData = lines;
  // }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
