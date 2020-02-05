
export class UserQuestionViewModel {

    player_id:number;

}

export class SingleQuestionViewModel {
    id:number;
}

export class UserQuestionResponseModel {

    id:number;
    question: string;
    choice1: string;
    choice2: string;
    choice3: string;
    choice4: string;
    correct_answer: string;
    status: string;
    category_id: number;
    question_details:any =null;
}
export class UpdateQuestionModel {

    id:number =null;
    question: string =null;
    choice1: string =null;
    choice2: string =null;
    choice3: string =null;
    choice4: string =null;
   

}
export class UpdateQuestionCategory {

    category_id:number = null;
    question_id:number = null;

}