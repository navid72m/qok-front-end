import { Component, OnInit } from '@angular/core';
import { AdvertiseStatisticService } from './statistic.service';

// Payment Model
import { Daily } from './statistics.model';
import { Monthly } from './statistics.model';
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';


@Component({
    selector   :    'advertise-statistic',
    templateUrl:    './statistic.component.html',
    styleUrls  :    [ './statistic.component.css' ]
})

export class AdvertiseStatisticComponent implements OnInit {
    daily  : Daily[];
    monthly  : Monthly[];
    clickCount : number ;

    constructor(
        private api : AdvertiseStatisticService,
        private progressBarService: ProgressBarService,
        private notificationService: NotificationsService
    ) { }

    ngOnInit(): void {


        this.onSubmitClickDay(1);
        this.api.getRecentDaysStats(5).then(
            res => {
                this.daily  = res;
            },
            error => {

            }
        );

        this.api.getRecentMonthStats(5).then(
            res => {
                res = this.seperateMonthAndYear(res);
                this.monthly  = res;
            },
            error => {

            }
        );
    }

    seperateMonthAndYear(obj : Monthly[]) : Monthly[] {

        for (var i in obj)
        {
            obj[i].click_month = obj[i].click_month.slice(0, 4) + '-' + obj[i].click_month.slice(4) ;
        }
        return obj ;
    }

    onSubmitDay(day : number) :void {
        this.daily = [] ;
        this.api.getRecentDaysStats(day).then(

            res => {
                this.daily  = res;
            },
            error => {

            }
        );
    }

    onSubmitClickDay(day : number) :void {
        this.progressBarService.queryInProgress();
        this.api.getRecentAdsClickDaysStats(day).then(
            res => {
                this.clickCount  = res;
                this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
                this.progressBarService.queryFinished();
            },
            error => {
                this.notificationService.error("خطا", "خطا در دریافت کاربران");
                this.progressBarService.queryFinished();
            }
        );
    }


    onSubmitMonth(month : number) :void {
        this.monthly = [] ;
        this.api.getRecentMonthStats(month).then(
            res => {
                res = this.seperateMonthAndYear(res);
                this.monthly  = res;
            },
            error => {

            }
        );
    }

}
