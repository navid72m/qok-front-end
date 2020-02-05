
import { Component, OnInit, Input } from '@angular/core';

// Common services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../../core/progress-bar/progress-bar.service';

// models
import { UserStat } from '../models/statistics-view.model';

import { GetUserStatsService } from '../services/statistics-getuserstat.service';
import { UpdateGamePercentService } from './update-gamepercent.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'gamestatistics',
	templateUrl: './gamestatistics.component.html',
	styleUrls: ['./gamestatistics.component.css']
})

export class GameStatisticsComponent implements OnInit {

	// category statisitcs
	userStat : UserStat;
    @Input() id: number;


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
		private updateGamePercent: UpdateGamePercentService,
		private getUserStatsService: GetUserStatsService,

    ) {}

	ngOnInit(): void {}

    updatePercent(stat: UserStat): void {
        stat.disabled = true;
        this.progressBarService.queryInProgress();
		this.updateGamePercent.updatePercent(this.id, stat.won_number, stat.tie_number, stat.lost_number, stat.perfect_number, stat.won_number_inp, stat.tie_number_inp, stat.lost_number_inp, stat.perfect_number_inp)
		.then(s => {
			this.getUserStat();
			this.notificationsService.success("Sucess", "Updating category statistics", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("Error", "Updating category statistics Failed", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
    }

    sliderChanged(stat : UserStat) {
        stat.disabled = false;
        // console.log("Hello");
    }

		fix_percent(stat : UserStat, isWon : boolean){

			let total = stat.tie_percent + stat.lost_percent + stat.won_percent;
			if(total > 100){
				stat.tie_percent = stat.tie_percent -(total-100);
			}
			if(isWon === false){
				if( total < 100 ){
					stat.won_percent = stat.won_percent + (100-total);
				}
			}
			else if(isWon === true){
				if( total < 100 ){
					stat.lost_percent = stat.lost_percent + (100-total);
				}

			}
		}

		winChanged(stat : UserStat){

			this.sliderChanged(stat);
			let diff = 100 - (stat.won_percent + stat.lost_percent + stat.tie_percent);
			let lost_diff = 0;
			let tie_diff = 0;

			if(stat.lost_percent != 0) {
				 lost_diff = Math.round(diff * (stat.lost_percent /(stat.lost_percent + stat.tie_percent)));
			}

			if(stat.tie_percent !=0) {
				 tie_diff = Math.round(diff * (stat.tie_percent /(stat.lost_percent + stat.tie_percent)));
			}
			stat.tie_percent = stat.tie_percent + tie_diff;
			stat.lost_percent = stat.lost_percent + lost_diff;
			this.fix_percent(stat, true);


		}

		tieChanged(stat : UserStat){

			this.sliderChanged(stat);

			let diff = 100 - (stat.won_percent + stat.lost_percent + stat.tie_percent);

			stat.lost_percent = stat.lost_percent + diff;


			if(stat.lost_percent <0){
				stat.tie_percent = stat.lost_percent + stat.tie_percent;
				stat.lost_percent = 0;
			}

			this.fix_percent(stat, false);
		}

		lostChanged(stat : UserStat){

			this.sliderChanged(stat);

			let diff = 100 - (stat.won_percent + stat.lost_percent + stat.tie_percent);


			stat.tie_percent = stat.tie_percent + diff;

			if(stat.tie_percent <0){
				stat.lost_percent = stat.lost_percent + stat.tie_percent;
				stat.tie_percent = 0;
			}

			this.fix_percent(stat, false);
		}

    // onInputChange(event: any) {
    //     console.log(event);
	// }

	// provide data for gamestatistics

	getUserStat(): void{
		this.progressBarService.queryInProgress();
		this.getUserStatsService.getUserStats(this.id).then (
			stats => {
				console.log(stats.disabled);
				this.userStat = stats;
				this.notificationsService.success("انجام شد", ".اطلاعات جمع آوری شد", { timeOut: 500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationsService.error("خطا", "خطا در دریافت آمارها");
				this.progressBarService.queryFinished();
			}
		);
	}


}
