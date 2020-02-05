export class MenuItem {
	title: string;
	route: string;
}

export class MenuItemContainer {
	title: string;
	route: string;
	role:  string;
	subset: MenuItem[];
}