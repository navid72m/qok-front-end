export class UserSearch {
	user_id: number;
	username: string;
	invitation_code: string;
	role: string;
}

export class ClanSearch {
	unique_clan_id: number; // unique_clan_id
	title: string;
}

export class RecipeList {

	 id: number;
	 player_id: number;
	 package_id:number;
	 status: string;
	 amount: number;
	 receipt: string;
	 payload: string;
	 store_id: number;
	 created_at: string;

}