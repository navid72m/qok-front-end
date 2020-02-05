import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// basic services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';


// services
 import { ViewService } from './view.service';
 import { UpdateService} from '../update.service';


// models
 import { ClanView } from './view.model';
 import { UserView } from './view.model';
 import { ClanInfo } from './view.model';
import { ClanRoutingModule } from './clan-routing.module';


import 'rxjs/add/operator/switchMap';
import { UserSearch } from '../../user/search/search.model';

@Component({
	selector: 'app-user-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.css']
})

export class ClanViewComponent implements OnInit {
	// view
	 clanview: ClanView;
	 usersview: UserView;
	 claninfo : ClanInfo;
     selectedUsers: UserSearch[] = [];
     newClanName : string = '';
	 statusChoices: Array<{ value: string}> = [
		{ value : "ACTIVE"},
		{ value : "INACTIVE"},
	];

	constructor(
		private viewService: ViewService,
		private router: Router,
		private route: ActivatedRoute,
		private updateService: UpdateService,
		private progressBarService: ProgressBarService,
		private notificationService: NotificationsService,
	) {}
	ngOnInit(): void {
		//this.progressBarService.queryFinished();
		this.route.params.subscribe((params) => {
			if (params['id'] !== 'nil') {
				this.leven(params['id']);
			}
		});
    }

	leven(id: number): void {
		this.progressBarService.queryInProgress();
		console.log("clanview");

		this.viewService.view(id).then(
			claninfo => {
				console.log(claninfo);
				this.claninfo = claninfo;
				this.clanview = claninfo.clan_details ;
				this.usersview = claninfo.user_details ;
				console.log(this.usersview);
				this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationService.error("خطا", "خطا در دریافت کاربران");
				this.progressBarService.queryFinished();
			}
		);
	}

	onSelectUserId(userId: number): void {
		this.router.navigate(['user/view/'+userId]);
	}

	updateDetails(): void {
		this.updateService.update(this.clanview.unique_clan_id,this.clanview.lost_count, this.clanview.tie_count, this.clanview.won_count, this.clanview.perfect_games, this.clanview.games_played, this.clanview.score)
		.then(s => {
			this.notificationService.success("انجام شد", "اطلاعات گروه بروز رسانی شد", { timeOut: 1500 });
		//	this.progressBarService.queryFinished();
		})
		.catch(err => {
			this.notificationService.error("خطا", "بروز رسانی با مشکل مواجه شد", { timeOut: 1500 });
		//	this.progressBarService.queryFinished();
		});
	}

    onClearUser(selectedUsers: UserSearch[]): void {
        this.selectedUsers = selectedUsers;
    }

    onAddUser(user: UserSearch): void {
        if ( !(this.selectedUsers.indexOf(user, 0) > -1) ) {
            this.selectedUsers.push(user);
        }
    }

    onSelectClanUserId(userId: number): void {
        this.router.navigate(['/question/identifier/'+userId]);
    }

    changeClanName(): void {
        this.progressBarService.queryInProgress();
        this.updateService.changeClanName(+this.clanview.unique_clan_id, this.newClanName)
            .then(s => {
                this.clanview.title = this.newClanName;
                this.notificationService.success("انجام شد","تغییر نام گروه با موفقیت ", { timeOut: 1500 });
                this.progressBarService.queryFinished();
            })
            .catch(err => {
                this.notificationService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
                this.progressBarService.queryFinished();
            });
    }


	
}
