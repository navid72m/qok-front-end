export class CSVSetting {
  public static Default_PageSize= 1000;
}

export class QuestionReview {
  id: number;
  question: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  correct_answer: number;
}

export class UploadedFile {
    id: number;
    name: string;
    upload_date: string;
    accepted_count: string;
    rejected_count: string;
    corrupted_count: string;
}

export class ArrayOfQuestions {
  array:  QuestionReview[];
}

export class Index {
  first_id: number;
  last_id: number;
}


export class StateModel {
		    constructor( public name: string,
		                 public state: string) {

            }

	}
