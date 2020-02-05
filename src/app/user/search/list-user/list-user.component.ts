import { Component, OnInit, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

// Common services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../../core/progress-bar/progress-bar.service';

import { UpdateMultipleService } from './list-user.service';

// models
import { UserSearch } from '../search.model';
import { ClanSearch } from '../search.model';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'list-user',
	templateUrl: './list-user.component.html',
	styleUrls: [ './list-user.component.css' ]
})/*
@Component({
	selector: 'list-clan',
	templateUrl: './clan-list-user.component.html',
	styleUrls: [ './clan-list-user.component.css' ]
})*/

export class ListUserComponent implements OnInit, DoCheck {	
    
	// Component inputs
    @Input() users: UserSearch[];
    @Input() clans: ClanSearch[];
    @Output() onClearUser = new EventEmitter<UserSearch[]>();
    @Output() onClearClan = new EventEmitter<ClanSearch[]>();

    doesUserExist: boolean = true;
    queryInProgress: boolean = false;
    mode: string = 'indeterminate';
    coins = 500;

	constructor (
        // private router: Router,
        private notificationsService: NotificationsService,
        private progressBarService:   ProgressBarService,
        private updateMultiple:       UpdateMultipleService
    ) {}

	ngOnInit(): void {}

    ngDoCheck() {
        this.doesUserExist = this.users.length > 0 ?  true : false;
    }

    clearUser(user: UserSearch): void {
		this.users = this.users.filter(u => u !== user);
        this.onClearUser.emit(this.users);

    }
    
    clearClan(clan: ClanSearch): void {
		this.clans = this.clans.filter(u => u !== clan);
        this.onClearClan.emit(this.clans);
	}

    emitUsersEmpty(): void {
        this.users = [];
        this.onClearUser.emit(this.users);
    }

    extractIDs(): number[] {
        let ids: number[] = [];
        for (let user of this.users) {
            ids.push(user.user_id);
        }

        return ids;
    }

    blockMultiple(): void {
        this.queryInProgress = true;
		this.updateMultiple.blockMultiple(this.extractIDs()).then(
			res => {
                // this.emitUsersEmpty();
				this.notificationsService.success("Success", "کاربران بلاک شدند", { timeOut: 700 });
				this.queryInProgress = false;
			},
			error => {
				this.notificationsService.error("Error", error), { timeOut: 1000 };
				this.queryInProgress = false;
			}
		);
    }

    unblockMultiple(): void {
        this.queryInProgress = true;
		this.updateMultiple.unblockMultiple(this.extractIDs()).then(
			res => {
                // this.emitUsersEmpty();
				this.notificationsService.success("Success", "کاربران بلاک شدند", { timeOut: 700 });
				this.queryInProgress = false;
			},
			error => {
				this.notificationsService.error("Error", error), { timeOut: 1000 };
				this.queryInProgress = false;
			}
		);
    }

    increaseCoins(): void {
        this.queryInProgress = true;
		this.updateMultiple.increaseCoins(this.extractIDs(), this.coins).then(
			res => {
                // this.emitUsersEmpty();
				this.notificationsService.success("Success", "سکه‌ی کاربران افزایش یافت", { timeOut: 700 });
				this.queryInProgress = false;
			},
			error => {
				this.notificationsService.error("Error", error, { timeOut: 1000 });
				this.queryInProgress = false;
			}
		);
    }

    increaseGoldCup(): void {
        this.queryInProgress = true;
		this.updateMultiple.increaseGoldCup(this.extractIDs(), this.coins).then(
			res => {
                // this.emitUsersEmpty();
				this.notificationsService.success("Success", "سکه‌ی کاربران افزایش یافت", { timeOut: 700 });
				this.queryInProgress = false;
			},
			error => {
				this.notificationsService.error("Error", error, { timeOut: 1000 });
				this.queryInProgress = false;
			}
		);
    }

    clearList(): void {
        this.emitUsersEmpty();
    }
}

