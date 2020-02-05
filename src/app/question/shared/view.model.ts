export class QuestionView {
	id: number;
	question: string;
	choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  correct_answer: number;
	category_id: number;
	status: string;
}

export class QuestionCreate {
	question: string;
	choice1: string;
    choice2: string;
    choice3: string;
    choice4: string;
    correct_answer: number;
	main_category_id: number;
    created_by: number;
}

export const statusChoices: Array<{ value: string}> = [
	{ value : "NOT_REVIEWED" },
	{ value : "PICKED_UP" },
	{ value : "PICKED_UP_BY_PLAYER"},
	{ value : "ACCEPTED"},
	{ value : "REJECTED"},
	{ value : "REPORTED"},
	{ value : "SKIPPED"},
	{ value : "NOT_SUITABLE"},
	{ value : "NEW_ADDED"},
	{ value : "ADMIN_REVIEW_NEEDED"},
	{ value : "WAITING_FOR_CONFIRMATION"},
	{ value : "WAITING_FOR_PREREVIEW"},



]

export const   Categories: Array <{title : string, engtitle: string, id: number}> =[
  {  title:' همه' , engtitle: "all", id : 0  },
  {  title:' سینما' , engtitle: "cinema", id : 2  },
  {  title:" برنامه های تلویزیونی" , engtitle: "TV", id : 3  },
  {  title:" ادبیات" , engtitle: "literature", id : 4  },
  {  title:"موسیقی" , engtitle: "music", id : 6},
  {  title:"تاریخ" , engtitle: "history",id : 9},
  {  title:"زبان انگلیسی", engtitle: "english",id : 10},
  {  title:"تکنولوژی" , engtitle: "technology",id : 12},
  {  title:"علم و دانش" , engtitle: "science",id : 13},
  {  title:"جغرافیا" , engtitle: "geography",id : 17},
  {  title:"فرهنگ و هنر" , engtitle: "art",id : 20},
  {  title:"بازیهای کامپیوتری" , engtitle: "computer_game",id : 22},
  {  title:"اطلاعات عمومی" , engtitle: "general_knowledge",id : 23},
  {  title:"ورزشی" , engtitle: "sport",id : 29},
  {  title:"طبیعت" , engtitle: "nature",id : 41},
  {  title:"مذهبی" , engtitle: "religious",id : 88},
  {  title:"ریاضی و هوش" , engtitle: "math",id : 139},
  {  title:"لوگو و سرگرمی" , engtitle: "logo",id : 140},
  {  title:"غذا و نوشیدنی" , engtitle: "food",id : 141},
  {  title:"فوتبال " , engtitle: "football",id : 142},
  ]
