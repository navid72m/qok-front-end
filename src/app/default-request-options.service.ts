import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
	constructor() {
		super();

		// Needed for sending cookies in each request
		this.withCredentials = true
	}
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };
