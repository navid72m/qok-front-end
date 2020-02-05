import { Component, OnInit, DoCheck, EventEmitter, Input, Output } from '@angular/core';


// Common services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../../core/progress-bar/progress-bar.service';

import { UpdateMultipleService } from './clan-list-user.service';

// models
import { UserSearch } from '../../../user/search/search.model';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'clan-list-user',
	templateUrl: './clan-list-user.component.html',
	styleUrls: [ './clan-list-user.component.css' ]
})

export class ListUserComponent implements OnInit, DoCheck {	
    
	// Component inputs
    @Input() usersview: UserSearch[];
    @Output() onClearUser = new EventEmitter<UserSearch[]>();

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
        this.doesUserExist = this.usersview.length > 0 ?  true : false;
    }

    clearUser(user: UserSearch): void {
		this.usersview = this.usersview.filter(u => u !== user);
        this.onClearUser.emit(this.usersview);

    }
    emitUsersEmpty(): void {
        this.usersview = [];
        this.onClearUser.emit(this.usersview);
    }

    extractIDs(): number[] {
        let ids: number[] = [];
        for (let user of this.usersview) {
            ids.push(user.user_id);
        }

        return ids;
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

    clearList(): void {
        this.emitUsersEmpty();
    }
}

