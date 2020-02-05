import { Component, OnInit } from '@angular/core';
import { StatisticService } from './statistic.service';

import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';

// Retention Model
import { Retention } from "./retention.model";
// import { RetentionData } from '../retention.model';

// Register Stat Model
import { Registered } from './register-stat.model';
import { UNRegistered } from './register-stat.model';
// import { RegisteredData } from '../register-stat.model';
// import { UNRegisteredData } from '../register-stat.model';

// Payment Model
import { Daily } from './payment.model';
import { Monthly } from './payment.model';
import { TodayDetailed } from './payment.model';
import { TodayDirectDetailed } from './payment.model';

@Component({
    selector   :    'app-statistic',
    templateUrl:    './statistic.component.html',
    styleUrls  :    [ './statistic.component.css' ]
})

export class StatisticComponent implements OnInit {
    // public retentiondata  = RetentionData;
    // public registerdata   = RegisteredData;
    // public unregisterdata = UNRegisteredData;
    //
    // public dailydata = Daily;
    // public monthlydata = Monthly;
    // public todaydetaileddata = TodayDetailed;

    retention       : Retention[];
    registered      : Registered[];
    unregistered    : UNRegistered[];
    daily           : Daily[];
    monthly         : Monthly[];
    today_detailed  : TodayDetailed[];
    today_direct_detailed  :TodayDirectDetailed[];
    MounthNumber : number;
    DaysNumber : number;

    constructor(private api : StatisticService) { }

    ngOnInit(): void {
        this.api.getAllstat().then(

            res => {
                this.retention         = res.retention;
                this.registered        = res.register_stats.registered;
                this.unregistered      = res.register_stats.unregistered;
                this.daily             = res.payment.daily;
                this.DaysNumber        =  5;
                this.monthly           = res.payment.monthly;
                this.MounthNumber           = 5;
                this.today_detailed    = res.payment.today_detailed;
                this.today_direct_detailed    = res.payment.today_direct_detailed;
		//                this.notificationService.success("انجام شد", "لیست وضعیت سوال ها دریافت شد", { timeOut: 500 });
        //this.progressBarService.queryFinished();
            },
            error => {

	    //this.notificationService.error("خطا", "خطا در دریافت سوالات");
	    //  this.progressBarService.queryFinished();
            }
        );

    }

}
