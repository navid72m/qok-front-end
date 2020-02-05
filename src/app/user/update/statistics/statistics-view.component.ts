import { Component, OnInit, Input } from '@angular/core';

// Common services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../../core/progress-bar/progress-bar.service';

import { GetStatsService } from '../services/statistics-getstats.service';

// models
import { UserCategoryStats } from '../models/statistics-view.model';

import { UpdatePercentService } from './update-percent.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'view-statistics',
	templateUrl: './statistics-view.component.html',
	styleUrls: ['./statistics-view.component.css']
})

export class StatisticsViewComponent implements OnInit {

	// category statisitcs
    @Input() id: number;

    userCategoryStats: 	UserCategoryStats[];

    // md-slider configuration
    disabled = false;
    invert = false;
    max = 100;
    min = 0;
    step = 1;
    thumbLabel = true;
    showTicks = false;
    tickInterval = 10;
    vertical = false;

	constructor (
        private notificationsService: NotificationsService,
        private progressBarService: ProgressBarService,
        private updatePercentService: UpdatePercentService,
        private getStatsService: GetStatsService
    ) {}

	ngOnInit(): void {
	}

    updatePercent(stat: UserCategoryStats): void {
        stat.disabled = true;
				this.progressBarService.queryInProgress();
		this.updatePercentService.updatePercent(this.id, stat.category_id, stat.percent , stat.added_correct_answered)
		.then(s => {
            this.getUserCategoryStats();
			this.notificationsService.success("Sucess", "Updating category statistics", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("Error", "Updating category statistics Failed", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
    }

    // provide data for statistics-view.component
	getUserCategoryStats(): void {
		console.log(this.id);
		this.progressBarService.queryInProgress();
		this.getStatsService.getStats(this.id).then (
			stats => {
				this.userCategoryStats = stats;
				this.notificationsService.success("انجام شد", ".اطلاعات جمع آوری شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationsService.error("خطا", "خطا در دریافت آمارها", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			}
		);
	}

    onSliderChange(stat: UserCategoryStats) {
        stat.disabled = false;
        // console.log("Hello");
    }

    onInputChange(stat: UserCategoryStats) {
        stat.disabled = false;
    }

    // onInputChange(event: any) {
    //     console.log(event);
    // }
}
