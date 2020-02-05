export class DeviceView {
	app_version: string;
	device_type: string;
	push_token : string;
}

export class AwardDetails {
	gold_cup: number;
	silver_cup: number;
	bronze_cup: number;
	weekly_gold_cup: number;
	weekly_silver_cup: number;
	weekly_bronze_cup: number;
}

export class UserView {
	id: number;
	username: string;
	invitation_code: string;
	coins: number;
	level: number;
	username_change_time: number;
	created_at: Date;
	score: number;
	weekly_score: number;
	trophies: number;
	email: string;
	password: string;
	status: string;
	is_paying: boolean;
	clan_unique_id: number;
	clan_name: string;
	devices: DeviceView[];
	all_devices: DeviceView[];
	award_details : AwardDetails;
    unlimited_games_expires_at : string;
    invited_number : string ;
}


 






