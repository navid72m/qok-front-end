import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ActivatedRoute, Params, Router } from '@angular/router';

// basic services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
import { ScrollTopService } from '../../core/scroll-top.service';

// services
import { ViewService } from './view.service';
import { UpdateService} from './update.service';
import { LockDeviceService } from './services/lock-device.service';

// models
import { UserView } from './view.model';

import { UserCategoryStats } from './models/statistics-view.model';
import { UserStat } from './models/statistics-view.model';

import { DialogComponent } from './dialog-search/dialog-search.component';
import { DialogModel } from './dialog-search/dialog-search.model';

import { DialogResetPasswordComponent } from './dialog-reset-password/dialog-reset-password.component';
import { DialogResetPasswordModel } from './dialog-reset-password/dialog-reset-password.model';

// components
import { StatisticsViewComponent } from './statistics/statistics-view.component';
import { FriendsViewComponent } from './friends/friends-view.component';
import { PaymentsViewComponent } from './payment/payments-view.component';
import { GameStatisticsComponent } from './gamestatistics/gamestatistics.component';
import { FraudsViewComponent } from './fraud/fraud.component';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'app-user-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.css']
})

export class UserViewComponent implements OnInit {
//	type MyArrayType = Array<{id: number, text: string}>;
	userStat;

	// view
	userview: UserView;
	coinIncreaseAmount: number = 0;
	goldCupIncreaseAmount: number = 0;
	silverCupIncreaseAmount: number = 0;
	bronzeCupIncreaseAmount: number = 0;
	weeklyGoldCupIncreaseAmount: number = 0;
	weeklySilverCupIncreaseAmount: number = 0;
	weeklyBronzeCupIncreaseAmount: number = 0;
	newUserName : string = '';
	valid: Boolean = false;
	selectedIndexTab: number;

	// statistics
	statisticsDidGet: boolean = false;
	@ViewChild(StatisticsViewComponent)
  		private statisticsComponent: StatisticsViewComponent;

	// friends
	showFriends: boolean = false;
	friendsDisabled: boolean = false;
	// friendsDidGet: boolean = false;
	// @ViewChild(FriendsViewComponent)
  	// 	private friendsComponent: FriendsViewComponent;

	// payments
	paymentsDisabled: boolean = false;
	paymentsDidGet: boolean = false;
	@ViewChild(PaymentsViewComponent)
		  private paymentComponent: PaymentsViewComponent;

	// game stats
	gameStatsDidGet: boolean = false;
	@ViewChild(GameStatisticsComponent)
		  private gameStatsComponent: GameStatisticsComponent;

    fraudsDidGet: boolean = false;
	@ViewChild(FraudsViewComponent)
    private fraudsViewComponent: FraudsViewComponent;


	// category statisitcs
	// categories = 		CATEGORIES;
	userCategoryStats: 	UserCategoryStats[];
	statsDisabled: boolean = false;

	//user statistics
	userStatDisabled: boolean = false;

	statusChoices: Array<{ value: string}> = [
		{ value : "NOT_VERIFIED"},
		{ value : "NOT_VALIDATED"},
		{ value : "ACTIVE"},
		{ value : "DEACTIVATED"},
		{ value : "DELETED"},
		{ value : "LOCKED"},
		{ value : "EXPIRED"}
	];

	dialogMessage = new DialogModel();
	dialogResetPasswordMessage = new DialogResetPasswordModel();

	constructor (
					// basics
					private route: ActivatedRoute,
					private router: Router,
					public dialog: MdDialog,

					// common
					private progressBarService: ProgressBarService,
					private notificationsService: NotificationsService,

					// component
					private viewService: ViewService,
					private updateService: UpdateService,

					// children
					private lockDevice: LockDeviceService
				) {}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => {
				this.progressBarService.queryInProgress();
				return this.viewService.view(+params['id'])
			})
			.subscribe(userview_result => {
                userview_result.unlimited_games_expires_at =  userview_result.unlimited_games_expires_at.replace("T", " ");
                userview_result.unlimited_games_expires_at =  userview_result.unlimited_games_expires_at.replace("Z", " ");
				this.userview = userview_result;
				// extracting the unique devices
				var obj = {};
				if (this.userview.devices) {
					for ( var i=0, len=this.userview.devices.length; i < len; i++ )
					obj[this.userview.devices[i]['updated_at']] = this.userview.devices[i];

					this.userview.devices = new Array();
					for ( var key in obj )
						this.userview.devices.push(obj[key]);
				}
				this.progressBarService.queryFinished();
			});
    }

	updateDetails(): void {
		this.progressBarService.queryInProgress();
		this.updateService.update(+this.userview.id,this.userview.username, this.userview.email, +this.userview.score, +this.userview.weekly_score, +this.userview.coins, +this.userview.trophies, this.userview.password, this.userview.status, +this.userview.level, +this.userview.username_change_time)
		.then(s => {
			this.notificationsService.success("انجام شد", "اطلاعات کاربر بروز رسانی شد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "بروز رسانی با مشکل مواجه شد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
	}

	unblockLogin(): void {
		this.progressBarService.queryInProgress();
		this.updateService.unblockLogin(+this.userview.id)
		.then(s => {
			this.notificationsService.success("انجام شد", "کاربر از بلاک در آمد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
	}

	unblockIp(): void {
		this.progressBarService.queryInProgress();
		this.updateService.unblockDeviceIp(+this.userview.id)
			.then(s => {
				this.notificationsService.success("انجام شد", "آی پی کاربر آزاد شد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			})
			.catch(err => {
				this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			});
	}

    alertToUser(user_id : number , news_id : number): void {

        if (confirm('آیا اطمینان دارید ؟‌')) {
            this.progressBarService.queryInProgress();
            this.updateService.publishUser (news_id  , user_id)
                .then(s => {
                    this.notificationsService.success("انجام شد", "هشدار ارسال شد", { timeOut: 1500 });
                    this.progressBarService.queryFinished();
                })
                .catch(err => {
                    this.notificationsService.error("خطا", "هشدار ارسال نشد", { timeOut: 1500 });
                    this.progressBarService.queryFinished();
                });
        } else {
            // Do nothing!
        }


	}

	onTabIndexChange(e) {
        let arrayEvent = e.target.id.split("-");
         let index = arrayEvent[4];
		if (index == 1) {
			this.statisticsDidGet = false;
			this.statisticsComponent.getUserCategoryStats();
		} else if (index == 2) {
			 this.paymentsDidGet = false;
			this.paymentComponent.getPayments();
		} else if (index == 3) {
			this.gameStatsDidGet = false;
			this.fraudsDidGet = false ;
			this.gameStatsComponent.getUserStat();
		} else if (index == 4) {
			console.log('inja');
			this.fraudsViewComponent.getFraudsStats();
			this.statisticsDidGet = false;
			this.paymentsDidGet = false;
			this.gameStatsDidGet = false;
			this.fraudsDidGet = true;
			this.showFriends = false;
		}
		// this.selectedIndexTab = index % 4;
	}

	openDialog() {
    	let dialogRef = this.dialog.open(DialogComponent);
		dialogRef.afterClosed().subscribe(result => {
			this.dialogMessage = result;
			if (this.dialogMessage && this.dialogMessage.isSearchByUsername === true) {
				const url = `user/search/${this.dialogMessage.searchTerm}/nil`;
				this.router.navigateByUrl(url);
			} else if (this.dialogMessage && this.dialogMessage.isSearchByClanname === true ) {
				const url = `user/searchclan/${this.dialogMessage.searchTerm}`;
				this.router.navigateByUrl(url);
			}else if (this.dialogMessage) {
				const url = `user/search/nil/${this.dialogMessage.searchTerm}`;
				this.router.navigateByUrl(url);
			}
		});
	}

	increaseCoin(): void {
		console.log(this.coinIncreaseAmount);
		this.progressBarService.queryInProgress();
		this.updateService.increaseUserCoins(+this.userview.id, this.coinIncreaseAmount)
		.then(s => {
			this.userview.coins += this.coinIncreaseAmount;
			this.notificationsService.success("انجام شد", "سکه ها افزایش یافت", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
	}

    changeUserName(): void {
        this.progressBarService.queryInProgress();
        this.updateService.changeUserName(+this.userview.id, this.newUserName)
            .then(s => {
                this.userview.username = this.newUserName;
                this.notificationsService.success("انجام شد", "سکه ها افزایش یافت", { timeOut: 1500 });
                this.progressBarService.queryFinished();
            })
            .catch(err => {
                this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
                this.progressBarService.queryFinished();
            });
    }

	increaseWeeklyGoldCup(): void {
		console.log(this.weeklyGoldCupIncreaseAmount);
		this.progressBarService.queryInProgress();
		this.updateService.increaseUserWeeklyGoldCup(+this.userview.id, this.weeklyGoldCupIncreaseAmount)
		.then(s => {
			this.userview.award_details.weekly_gold_cup += this.weeklyGoldCupIncreaseAmount;
			this.notificationsService.success("انجام شد", "کاپ  هفتگی افزایش یافت", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
	}

	increaseWeeklySilverCup(): void {
		console.log(this.weeklySilverCupIncreaseAmount);
		this.progressBarService.queryInProgress();
		this.updateService.increaseUserWeeklySilverCup(+this.userview.id, this.weeklySilverCupIncreaseAmount)
		.then(s => {
			this.userview.award_details.weekly_silver_cup += this.weeklySilverCupIncreaseAmount;
			this.notificationsService.success("انجام شد", "کاپ  هفتگی افزایش یافت", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
	}

	increaseWeeklyBronzeCup(): void {
		console.log(this.weeklyBronzeCupIncreaseAmount);
		this.progressBarService.queryInProgress();
		this.updateService.increaseUserWeeklyBronzeCup(+this.userview.id, this.weeklyBronzeCupIncreaseAmount)
		.then(s => {
			this.userview.award_details.weekly_bronze_cup += this.weeklyBronzeCupIncreaseAmount;
			this.notificationsService.success("انجام شد", "کاپ  هفتگی افزایش یافت", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
	}

	increaseGoldCup(): void {
		console.log(this.goldCupIncreaseAmount);
		this.progressBarService.queryInProgress();
		this.updateService.increaseUserGoldCup(+this.userview.id, this.goldCupIncreaseAmount)
		.then(s => {
			this.userview.award_details.gold_cup += this.goldCupIncreaseAmount;
			this.notificationsService.success("انجام شد", "کاپ ها افزایش یافت", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
	}

	increaseSilverCup(): void {
		console.log(this.silverCupIncreaseAmount);
		this.progressBarService.queryInProgress();
		this.updateService.increaseUserSilverCup(+this.userview.id, this.silverCupIncreaseAmount)
		.then(s => {
			this.userview.award_details.silver_cup += this.silverCupIncreaseAmount;
			this.notificationsService.success("انجام شد", "کاپ ها افزایش یافت", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
	}

	increaseBronzeCup(): void {
		console.log(this.silverCupIncreaseAmount);
		this.progressBarService.queryInProgress();
		this.updateService.increaseUserBronzeCup(+this.userview.id, this.bronzeCupIncreaseAmount)
		.then(s => {
			this.userview.award_details.bronze_cup += this.bronzeCupIncreaseAmount;
			this.notificationsService.success("انجام شد", "کاپ ها افزایش یافت", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
			this.progressBarService.queryFinished();
		});
	}

	resetPassword() {
		let dialogRef = this.dialog.open(DialogResetPasswordComponent);
		dialogRef.afterClosed().subscribe(result => {
			this.dialogResetPasswordMessage = result;
			if (this.dialogResetPasswordMessage && this.dialogResetPasswordMessage.confirmed === true) {
				this.progressBarService.queryInProgress();
				this.updateService.resetPassword(+this.userview.id, "123456")
				.then(s => {
					this.notificationsService.success("انجام شد", "کلمه‌ی عبور ریست شد", { timeOut: 1500 });
					this.progressBarService.queryFinished();
				})
				.catch(err => {
					this.notificationsService.error("خطا", "کلمه‌ی عبور ریست نشد", { timeOut: 1500 });
					this.progressBarService.queryFinished();
				});
			}
		});
	}

	blockDevice(){
		this.progressBarService.queryInProgress();
		this.lockDevice.blockDevice(this.userview.id).then(
			stats => {
				if (stats == true){
				this.notificationsService.success("انجام شد", ".کاربر مسدود شد", { timeOut: 500 });
				this.progressBarService.queryFinished();
			}

		},
		error => {
			this.notificationsService.error("خطا", "مشکل در بلاک کردن دستگاه");
			this.progressBarService.queryFinished();
		}

		);

	}

	showFriendsFunc(): void {
		this.showFriends = this.showFriends ? false : true;
	}


	// searchFriends(id: number): void {

	// }

	// getPayments(id: number): void {

	// }

	// getUserStat(id: number): void {

	// }

	// getUserCategoryStats(id: number): void {

	// }
}
