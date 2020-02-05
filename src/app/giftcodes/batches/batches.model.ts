export class batchesModel {
    Id:number;
    Title:string

}

export class  createBatch {

    title:string;
    Id:number;
}

export class addORremoveBatch {
    gift_id:number;
    batch_id:number;

}

export class downloadBatch {

    batch_id:number;
    output_type:string;

}