export class Payment {
	id: number;
	amount: number;
	store: string;
	created_at: Date;
	updated_at: Date;
}

export class UserPayments {
	userpayments : Payment[];
	payment_count : number;
	total : number;
	total_with_sibche : number;
	total_apple : number;
}

export class UserBuyAvatarCount {
	buy_count : number;
}