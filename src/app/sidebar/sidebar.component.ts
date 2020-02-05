import { Component, OnInit } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { MenuItem }   from './menu_item.model';
import { MENU_ITEMS, MENU_ITEMS_CRM } from './menu_items.model';

@Component({
	selector   :    'app-sidebar',
	templateUrl:    './sidebar.component.html',
	styleUrls  :    [ './sidebar.component.css' ]
})

export class SidebarComponent implements OnInit {
	menuitems = MENU_ITEMS_CRM;
	role: string;

	constructor (private authGuard: AuthGuard) {
		let role = this.authGuard.getUser().role;
		var userId = this.authGuard.getUser().id;
		var channelArray = [4, 683185689, 680200151, 680222081];
		//console.log('user: ' + userId);
		// if (channelArray.includes(userId)) {
		if (userId === 4 || userId === 683185689 || userId === 680200151 || userId === 680222081) {
			this.menuitems = MENU_ITEMS;
		}
		this.menuitems[0].title = 'خروج';
		this.menuitems = this.menuitems.filter(function(row) {	
			if (row.role === 'ROLE_CRM') {
				return true;
			} else {
				return role === 'ROLE_ADMIN';
			}
		});
	}

	ngOnInit () {}
}
