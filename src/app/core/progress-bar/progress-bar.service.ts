import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class ProgressBarService {
    private subject = new Subject<any>();
 
    constructor() { 
        // this.subject.next();
    }
 
    setParams(
        color: string = 'warn', value: number = 100,
        bufferValue: number = 100, mode: string = 'query'
        ) {
        this.subject.next({ color: color, value: value, bufferValue: bufferValue, mode: mode });
    }
 
    getParams(): Observable<any> {
        return this.subject.asObservable();
    }

    queryInProgress() {
        this.subject.next({ color: 'warn', value: 100, bufferValue: 100, mode: 'query' });
    }

    queryFinished() {
        this.subject.next({ color: 'warn', value: 100, bufferValue: 100, mode: 'determinate' });
    }
}