import { Component, Input, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications/index';
import { ProgressBarService } from '../../../core/progress-bar/progress-bar.service';
import { FraudsService } from '../services/frauds.service';
import { Frauds } from '../models/frauds.model';

@Component({
	selector: 'view-frauds',
	templateUrl: './fraud.component.html',
	styleUrls: [ './fraud.component.css' ]
})

export class FraudsViewComponent implements OnInit {


    frauds : Frauds ;
    // Components input
    @Input() id: number;
	constructor (
        private router: Router,
        private notificationsService: NotificationsService,
        private progressBarService:   ProgressBarService,
        private fraudsService: FraudsService,
    ) {}

    ngOnInit(): void {
		console.log('fraud init called');
	}

    getFraudsStats(): void {
        this.progressBarService.queryInProgress();
        this.fraudsService.getFraudsStats(this.id).then(
            userFrauds => {
                this.frauds =userFrauds;
                this.notificationsService.success("انجام شد", "تخلفات کاربر دریافت شدند", { timeOut: 1500 });
                this.progressBarService.queryFinished();
            },
            error => {
                this.notificationsService.error("خطا", "خطا در انجام جست و جو", { timeOut: 1500 });
                this.progressBarService.queryFinished();
            }
        );
    }

}
