import { Component, OnInit } 		from '@angular/core';
import { Router } 					from '@angular/router';
import { ActivatedRoute, Params } 	from '@angular/router';

import { NotificationsService } from 'angular2-notifications';

import {RecipeList, UserSearch} from './search.model';
import { ClanSearch } from './search.model';
import { SearchService } from './search.service';

import { ProgressBarService } from '../../core/progress-bar/progress-bar.service';
@Component({
	selector: 'app-user-search',
	templateUrl: './search.component.html',
	styleUrls: [ './search.component.css' ],
})

export class UserSearchComponent implements OnInit {
	users: UserSearch[];
	selectedUsers: UserSearch[] = [];
	clanName: string;
	recipeType:string;
	recipeNumber:string;
	clans: ClanSearch[];
	selectedClans: ClanSearch[] = [];
	recivedRecipe:RecipeList[] =[];
	noRecipe :boolean = false;
	constructor(
		private searchService: SearchService,
		private router: Router,
		private route: ActivatedRoute,
		private progressBarService: ProgressBarService,
		private notificationService: NotificationsService) { }

	ngOnInit() {
		this.progressBarService.queryFinished();
		this.route.params.subscribe((params) => {
			if (params['usr'] !== 'nil'  && params['usr'] !== undefined) {
				this.leven(params['usr']);
			} else if (params['inv'] !== 'nil' && params['inv'] !== undefined) {
				this.searchCode(params['inv']);
			}
			else if (params['clanname'] !== 'nil' && params['clanname'] !== undefined)
			this.clanMembers(params['clanname']);
		});
	}

	onSelect(user: UserSearch): void {
		const url = `user/view/${user.user_id}`;
		this.router.navigateByUrl(url);
	}

	onAddUser(user: UserSearch): void {
		if ( !(this.selectedUsers.indexOf(user, 0) > -1) ) {
			this.selectedUsers.push(user);	
		}
	}
	onSelectUserId(userId: number): void {
		this.router.navigate(['/question/identifier/'+userId]);
	}

	onClearUser(selectedUsers: UserSearch[]): void {
		this.selectedUsers = selectedUsers;
	}

	onSelectClan(clan: ClanSearch): void {
		const url = `clan/view/${clan.unique_clan_id}`;
		this.router.navigateByUrl(url);
	}

	onClearClan(selectedClans: ClanSearch[]): void {
		this.selectedClans = selectedClans;
	}

	search(name: string): void {
		this.progressBarService.queryInProgress();
		this.searchService.search(name, "").then(
			users => {
				this.users = users;
				this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationService.error("خطا", "خطا در دریافت کاربران");
				this.progressBarService.queryFinished();
			}
		);
	}

	searchCode(code: string): void {
		this.progressBarService.queryInProgress();
		this.searchService.search("", code).then(
			users => {
				this.users = users;
				this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationService.error("خطا", "خطا در دریافت کاربران");
				this.progressBarService.queryFinished();
			}
		);
	}

	leven(name: string): void {
		this.progressBarService.queryInProgress();
		this.searchService.leven(name).then(
			users => {
				this.users = users;
				this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationService.error("خطا", "خطا در دریافت کاربران");
				this.progressBarService.queryFinished();
			}
		);
	}

	clanMembers(clan: string): void {
		this.clanName = clan;
		this.progressBarService.queryInProgress();
		this.searchService.getClans(clan).then(
			clans => {
				this.clans = clans;
				this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationService.error("خطا", "خطا در دریافت کاربران");
				this.progressBarService.queryFinished();
			}
		);
	}

	searchRecipe():void{
		this.noRecipe =false;
		this.progressBarService.queryInProgress();
		this.recivedRecipe =[];
		this.searchService.getRecipe({
			receipt:this.recipeNumber,
			type:this.recipeType
		}).then(data=>{
			this.progressBarService.queryFinished();
			if (data[0] !=null){
				for(var i in data)
				{
                    data[i].created_at = data[i].created_at.replace("T", " ");
				}
				this.recivedRecipe = data;
			}
				this.notificationService.success("انجام شد", "لیست رسید دریافت شد", { timeOut: 500 });

			if (!data[0] || data[0]==null){
				this.noRecipe =true;
			}
		},
			error=>{
				this.notificationService.error("خطا", "خطا در دریافت رسید,اگر نوع پرداخت را انتخاب نکرده اید آن را انتخاب کنید");
				this.progressBarService.queryFinished();
			}

		);
	}
}
