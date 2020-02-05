export class Advertise {
    publisher_id: number;
    ad_type: string;
    platform: string;
    title: string;
    text: string;
    initial_budget: number;
    budget: number;
    status: string;
    cost_per_click: number;
    cost_per_view: number;
    link: string;
    clicks: number;
    is_internal: number;
}

export class Publisher {
	title: string;
	status: string;
	total_budget: number;
}

export const statusChoices : Array<{ value: string}> = [
	{ value : "ACTIVE"},
	{ value : "INACTIVATE"},
]

export const Platforms : Array<{ value: string }> = [
	{ value : "ANDROID" },
	{ value : "IOS"},
	{ value : "ALL"},
]

export const AdTypes : Array<{ value: string, title: string }> = [
	{ value : "ROUND_ADVERTISE" , title: "تبلیغ زیر سوال"},
	{ value : "GAME_ADVERTISE" , title: "تبلیغ زیر بازی"},
	{ value : "QUESTION_ADVERTISE" , title: "تبلیغ سوالی"},
]
