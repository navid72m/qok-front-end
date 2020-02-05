import { MenuItem, MenuItemContainer } from './menu_item.model';

export const USERS: MenuItem[] = [
	{ title: 'جست‌و‌جوی کاربران',  route: '/user/search'},
	{ title: 'ساخت کاربر جدید',  route: '/user/create'},
];

export const NEWS: MenuItem[] = [
	{ title: 'ساخت خبر جدید',  route: '/news/create'},
	{ title: 'مشاهده‌ی اخبار',  route: '/news/fetch'},
];


export const ADVERTISE: MenuItem[] = [
	{ title: 'ساخت تبلیغ',        route: '/advertise/create'},
	{ title: 'ساخت تبلیغ کننده',  route: '/advertise/createpublisher'},
	{ title: 'لیست تبلیغات',      route: '/advertise/list'},
    { title: 'مشاهده آمار',  route: '/advertise/dashboard'},
];

export const QUESTION: MenuItem[] = [
	{ title: 'بارگذاری سوالات', route: '/question/review'},
	{ title: 'ساخت سوال تبلیغاتی',  route: '/question/create' },
	{ title: 'لیست سوالات تبلیغاتی',  route: '/question/list'},
	{ title:'آمار سوالات',  route: '/question/statistics'},
	{ title:'سوالات',  route: '/cminer'},
	// { title: 'جست و جو با شناسه سازنده',  route: '/question/identifier'},
];

export const CLANSTATS: MenuItem[] = [
	{ title: 'مشاهده آمار',  route: '/clanstats/view'},
	{ title: 'مشاهده آمار',  route: '/clanstats/list'},
];

export const STATISTIC: MenuItem[] = [
	{ title: 'مشاهده آمار بازی',  route: '/statistic/dashboard'},
];

export const MENU_ITEMS: MenuItemContainer[] = [
	{ title: 'ورود',    route: '/login', 				subset: [],   	   role: 'ROLE_CRM' },
	{ title: 'کاربران', route: '', 						subset: USERS, 	   role: 'ROLE_CRM' },
	{ title: 'خبرها', route: '', 						subset: NEWS, 	   role: 'ROLE_ADMIN' },
	{ title: 'پرسش‌ها',  route: '', 	 subset: QUESTION,        role: 'ROLE_ADMIN' },
	{ title: 'تبلیغات',  route: '/advertise', 	        subset: ADVERTISE, role: 'ROLE_ADMIN'},
	// { title: 'آمار گروه',  route: '/clanstats', 	        subset: CLANSTATS, role: 'ROLE_ADMIN'},
	{ title: 'آمار',  route: '', 	        subset: STATISTIC, role: 'ROLE_ADMIN'},
];

export const MENU_ITEMS_CRM: MenuItemContainer[] = [
	{ title: 'ورود',     route: '/login', 				subset: [],   	   role: 'ROLE_CRM' },
	{ title: 'کاربران',  route: '', 						subset: USERS, 	   role: 'ROLE_CRM' },
	{ title: 'خبرها',    route: '', 						subset: NEWS, 	   role: 'ROLE_ADMIN' },
	{ title: 'پرسش‌ها',   route: '', 	 subset: QUESTION,        role: 'ROLE_ADMIN' },
	{ title: 'تبلیغات',  route: '/advertise', 	        subset: ADVERTISE, role: 'ROLE_ADMIN'},
    { title:'گیفت کد',   route:'/giftcodes', subset:[] , role:'ROLE_CRM'},
    { title:'زرین پال',   route:'/zarinpal', subset:[] , role:'ROLE_CRM'},
	// { title: 'آمار گروه',  route: '/clanstats', 	        subset: CLANSTATS, role: 'ROLE_ADMIN'},
//	{ title: 'آمار',  route: '', 	        subset: STATISTIC, role: 'ROLE_ADMIN'},
];

