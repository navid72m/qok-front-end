
export class ClanView {
	clan_id: number;
	shard_id:string;
	unique_clan_id: number;
	title: string;
	score: number;
	status: string;
	perfect_games: number;
	games_played: number;
	won_count: number;
	tie_count: number;
	lost_count: number;
}

export class UserView {
	user_id: number;
	username:string;
}


export class ClanInfo {
	clan_details: ClanView;
	user_details: UserView;
}




