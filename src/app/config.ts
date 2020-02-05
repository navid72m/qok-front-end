 // this file contains the urls used for backend services

// export const BaseURL = `http://backend.palang.co:8000`;
// export const BaseURL = `http://127.0.0.1:8103`;

// export const BaseURL = `http://185.105.186.203:8104`;

 export const BaseURL = `https://portal-backend.quizofkings.com`;
 // export const BaseURL = `http://sf-cent.quizofkings.com:8106`;
 // export const BaseURL = `http://saeed-srv.dev.quizofkings.com:8102`;
// export const BaseURL = `http://marketing-backend.quizofkings.com`;
 // export const BaseURL =  `http://s13.palang.co:4102`; // `http://s13.palang.co:18011`;
 // export const BaseURL =  `http://leila-srv.dev.quizofkings.com:8000`;
 // export const BaseURL =  `http://s13.palang.co:5535`;

// export const BaseURL = `http://s23.palang.co:8000`;

 // export const BaseURL = `http://s16.palang.co:4106`;
 // export const BaseURL = `http://s16.palang.co:4105`;


 // export const BaseURL = `http://s25.palang.co:8586`;
 // export const BaseURL = `http://s6.palang.co:8585`;
// export const BaseURL = `http://localhost:8000`

// Login
export const LoginURL = BaseURL + `/auth/login`;

// User
export const UserSearchURL = BaseURL + `/user/search`;
export const UserSearchLevenURL = BaseURL + `/user/search/leven`;
export const UsernameExistURL = BaseURL + `/user/username/exist`;
export const BlockMultipleURL = BaseURL + `/user/block/multiple`;
export const UnBlockMultipleURL = BaseURL + `/user/unblock/multiple`;
export const IncreaseCoinsURL = BaseURL + `/user/increase/coins`;
export const IncreaseCoinsSingleURL = BaseURL + `/user/increase/coins/single`;
export const IncreaseGoldCupURL = BaseURL + `/user/increase/goldcup`;
export const ChangeUserNameURL = BaseURL + `/user/change_username`;
export const IncreaseSilverCupURL = BaseURL + `/user/increase/silvercup`;
export const IncreaseBronzeCupURL = BaseURL + `/user/increase/bronzecup`;
export const IncreaseWeeklyGoldCupURL = BaseURL + `/user/increase/weeklygoldcup`;
export const IncreaseWeeklySilverCupURL = BaseURL + `/user/increase/weeklysilvercup`;
export const IncreaseWeeklyBronzeCupURL = BaseURL + `/user/increase/weeklybronzecup`;


export const UserViewURL = BaseURL + `/user/view`;
export const UserUpdateURL = BaseURL + `/user/update`;
export const UserUpdatePasswordURL = BaseURL + `/user/update/password`;
export const UserUnblockLoginURL = BaseURL + `/user/unblock/login`;
export const UserUnblockIpUrl = BaseURL + `/user/remove_restriction`;
export const FriendsURL = BaseURL + `/user/friends`;
export const FraudsURL = BaseURL + `/user/frauds`;
export const UserCategoryStatsURL = BaseURL + `/user/updatecategorystats`;
export const GetUserCategoryStatsURL = BaseURL + `/user/categorystats`;
export const GetUserStatURL = BaseURL + `/user/stats`;
export const UpdateUserStatURL = BaseURL + `/user/updatestats`;
export const LockDeviceURL = BaseURL + `/user/lockdevice`;
export const PaymentsURL = BaseURL + `/payment/user`;
export const CheckUserAvatarURL = BaseURL + `/user/checkavatar`;
export const SearchRecipeUrl = BaseURL + '/payment/find_by_receipt';
export const TestURL = BaseURL + `/user/test`;

// Question
export const getQuestionList = BaseURL + '/question/user_questions_list';
export const getQuestionStat = BaseURL + '/question/categorystat';
// export const getQuestionList = BaseURL + '/user/search/leven';
export const CreateNewUserURL = BaseURL + '/user/create';
export const CreateAdvertiseURL = BaseURL + '/ads/create';
export const CreatePublisherURL = BaseURL + '/ads/createpublisher';
export const RecentAdsClickDaysStats = BaseURL +`/ads/get_latest_ads_click_count`;
export const UpdateAdvertiseURL = BaseURL + '/ads/update';
export const ListAdvertiseURL = BaseURL +`/ads/list`;
export const GetAdvertiseURL = BaseURL +`/ads/getdetails`;
export const GetPublishersURL = BaseURL +`/ads/publishers_list`;
export const ListAdvertiseQuestionURL = BaseURL +`/ads/ads_question_list`;
export const DeleteAdvertiseURL = BaseURL +`/ads/delete`;
export const DeactiveAdvertiseURL = BaseURL + `/ads/deactivate`;
export const QuestionViewURL = BaseURL + `/question/view`;
export const QuestionUpdateURL = BaseURL + `/question/update`;
export const QuestionPreReviewDownloadURL = BaseURL + `/question/pre-review/download`;
export const QuestionPreReviewUploadURL = BaseURL +`/question/pre-review/upload`;
export const QuestionPreReviewIndexURL = BaseURL +`/question/pre-review/index`;
export const QuestionConfirmationDownloadURL = BaseURL + `/question/confirmation/download`;
export const QuestionConfirmationUploadURL = BaseURL +`/question/confirmation/async_upload`;
export const UploadedFileURL = BaseURL +`/question/confirmation/get_uploaded_file_stat`;
export const QuestionConfirmationIndexURL = BaseURL +`/question/confirmation/index`;
export const QuestionGetSizeURL = BaseURL +`/question/size`;
export const CreateQuestionURL = BaseURL + `/question/create`;
export const AdvertiseQuestionURL = BaseURL + `/question/advertise_question`;
export const NewAdvertiseQuestionURL = BaseURL + `/question/new_advertise_question`;

// News
export const CreateNewsURL = BaseURL + `/news/news`;
export const UpdateNewsURL = BaseURL + `/news/update`;
export const FetchNewsURL  = BaseURL + `/news/fetch`;
export const ViewNewsURL   = BaseURL + `/news/view`;
export const DeleteNewsURL = BaseURL + `/news/delete`;
export const PushNewsToUserURL = BaseURL + `/news/push/user`;
export const PushNewsToAllURL = BaseURL + `/news/push/all`;
export const QuestionGetCategorySizeURL = BaseURL +`/question/categorysize`;

// Clan
export const SearchClanMembers1 = BaseURL + `/clan/search`;
export const SearchClanMembers = BaseURL + `/clan/members`;
export const ClanViewURL = BaseURL + `/clan/view`;
export const ClanUpdateURL = BaseURL + `/clan/update`;
export const ChangeClanNameURL = BaseURL + `/clan/change_clan_name`;

// Clanstats
export const ClanstatsView = BaseURL + `/clan/stats/view`;
export const ClanstatsList = BaseURL + `/clan/stats/list`;

// Statistic
export const DashboardStatisticsURL = BaseURL +`/statistics/abstract`;


// Advertise Statistics

 export const  RecentDaysStats = BaseURL +`/statistics/get_recently_days`;
 export const  RecentMonthStats = BaseURL +`/statistics/get_recently_month`;

 // Gifts

 export const  GetAllBatchesUrl = BaseURL +`/gift/get_batches`;
 export const  CreateBatchesUrl = BaseURL +`/gift/create_batch`;
 export const  AssignBatchesUrl = BaseURL +`/gift/add_gift_to_batch`;
 export const  RemoveBatchGiftUrl = BaseURL +`/gift/remove_gift_from_batch`;
 export const  DownloadBatchUrl = BaseURL +`/gift/download_batch`;
 export const  MultipleGiftsUrl = BaseURL +`/gift/create_multiple`;
 export const  StopMultipleGiftsUrl = BaseURL +`/gift/stop_create_multiple`;
 export const  CheckMultipleGiftsUrl = BaseURL +`/gift/check_create_multiple`;
 export const  CreateSingleGiftsUrl = BaseURL +`/gift/create_gift`;
 export const  getSingleGiftsDetailUrl = BaseURL +`/gift/get_details`;
 export const  CheckSingleGiftlUrl = BaseURL +`/gift/check_usage`;

 // CMINER

 export const  UserQuestionsViewUrl = BaseURL +`/question/user_question`;
 export const  SingleQuestionViewUrl = BaseURL +`/question/view`;
 export const  UpdateQuestionUrl = BaseURL +`/question/update_choice`;
 export const  UpdateQuestionCategoryUrl = BaseURL +`/question/change_question_category`;
 export const  AcceptedStatusQuestionUrl = BaseURL +`/question/accepted`;
 export const  RejectedStatusQuestionUrl = BaseURL +`/question/rejected`;

 // zarinpal


