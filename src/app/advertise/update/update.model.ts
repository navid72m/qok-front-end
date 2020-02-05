export class UpdateReq {
  ad_id : number;
  publisher_id: number;
  ad_type:string;
  title: string;
  text: string;
  initial_budget: number;
  budget: number;
  status: string;
  cost_per_click: number;
  cost_per_view: number;
  link: string;
}

export class Category_Id {
  category_id : number;
}

export class AdsDetails {
  ad_id : number;
  publisher_id: number;
  ad_type: string;
  platform: string;
  title: string;
  text: string;
  initial_budget: number;
  budget: number;
  status: string;
  category_ids: Category_Id[];
  cost_per_click: number;
  cost_per_view: number;
  link: string;
  clicks: number;
  created_at: string;
  expiration_at: string;
  is_internal : number;
}
