export class UserCategoryStats {
	category_id: number;
	category : string;
	percent: number;
	disabled: boolean;
    added_correct_answered : number;
}

export class UserStat {
	won_percent : number;
	tie_percent : number;
	lost_percent: number;

	won_number : number;
	tie_number : number;
	lost_number: number;
	perfect_number : number;
	games_played: number;

	won_number_inp : number;
	tie_number_inp : number;
	lost_number_inp: number;
	perfect_number_inp : number;

	disabled: boolean;
}
