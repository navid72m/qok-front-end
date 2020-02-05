export class SinglegiftsModel {
    title:string;
    code:string;
    description:string;
    new_player_only:boolean = true;
    pattern:string;
    start_date:string;
    stop_date:string;
    coin:number;
    quantity:number;
    batch_ids:any;

}

export class getGiftsDetailsModel {
    Code: string;
    Coin: number;
    CreatedAt: string;
    Description: string;
    Id: number;
    NewPlayerOnly: boolean;
    Quantity: number;
    StartDate: string;
    Status: string;
    StopDate: string;
    Title: string;
    UpdatedAt: string;
    Used: number;
}

export class giftUsageModel {

    GiftId: string;
    PlayerId: number;
    CreatedAt: string;

}