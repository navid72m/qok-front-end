import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// Common services
import { NotificationsService } from 'angular2-notifications';
import { ProgressBarService } from '../../../core/progress-bar/progress-bar.service';

import { FriendsService } from '../services/friends.service';

// models
import { Friend } from '../models/friends-view.model';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'view-friends',
	templateUrl: './friends-view.component.html',
	styleUrls: ['./friends-view.component.css']
})

export class FriendsViewComponent implements OnInit {

	// Component inputs
    friends: Friend[];
    @Input() id: number;
	@Output() onFindFriend = new EventEmitter<number>();



	constructor (
        private router: Router,
        private notificationsService: NotificationsService,
		private progressBarService:   ProgressBarService,
		private friendsService: FriendsService,
    ) {}

	ngOnInit(): void {
		this.searchFriends();
	}

    onSelectFriend(friend: Friend): void {
		const url = `user/view/${friend.userId}`;
		this.friends= [];
		this.onFindFriend.emit(4);
		this.router.navigateByUrl(url);
	}

	searchFriends(): void {
		this.progressBarService.queryInProgress();
		this.friendsService.searchFriends(this.id).then(
			friends => {
				this.friends = friends;
				this.notificationsService.success("انجام شد", "دوستان کاربر دریافت شدند", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			},
			error => {
				this.notificationsService.error("خطا", "خطا در انجام جست و جو", { timeOut: 1500 });
				this.progressBarService.queryFinished();
			}
		);
	}
}
