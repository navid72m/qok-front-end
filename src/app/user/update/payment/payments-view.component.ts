import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Common services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../../core/progress-bar/progress-bar.service';

import { PaymentsService } from '../services/payments.service';

// models
import { UserPayments } from '../models/payments-view.model';
import { UserBuyAvatarCount } from '../models/payments-view.model';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'view-payments',
	templateUrl: './payments-view.component.html',
	styleUrls: [ './payments-view.component.css' ]
})

export class PaymentsViewComponent implements OnInit {	
    
	// Component inputs
	@Input() id: number;
	@Input() avatar_id: number;


    payments: UserPayments;
    buyCount: UserBuyAvatarCount;

	constructor (
        private router: Router,
        private notificationsService: NotificationsService,
        private progressBarService:   ProgressBarService,
        private paymentsService: PaymentsService,
    ) {}

    ngOnInit(): void {
		console.log('payment init called');
		//this.setUserId();
	}
    /*setUserId():void{
		console.log('set user id !',this.id);
	}*/
    getPayments(): void {
		this.progressBarService.queryInProgress();
		this.paymentsService.getPayments(this.id).then(
			payments => {
				this.payments = payments;
				this.notificationsService.success("انجام شد", "پرداخت ها دریافت شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationsService.error("خطا", "خطا در دریافت پرداخت ها"), { timeOut: 1500 };
				this.progressBarService.queryFinished();
			}
		);
	}
	checkUserAvatar(): void {
		this.progressBarService.queryInProgress();
		console.log('check ! ',this.id,this.avatar_id);
		this.paymentsService.checkUserAvatar1(this.id,this.avatar_id ).then(
			buyCount => {
				console.log(buyCount);
				this.buyCount = buyCount;
				this.notificationsService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationsService.error("خطا", "خطا در دریافت کاربران");
				this.progressBarService.queryFinished();
			}
		);
	}

}
