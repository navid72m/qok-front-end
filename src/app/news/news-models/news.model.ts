import { Timestamp } from 'rxjs';

export class NewsCreateModel {
	id: number;
	title: string;
	text: string;
	link_title: string;
	link_url: string;
	image_file_name: string;
	created_at: number;
	expiration_time: any;
	created_by: number;
	updated_by: number;
	life_time_seconds: number;
	short_text: string;
	min_player_level: number;
	expiration_now: string;
}
