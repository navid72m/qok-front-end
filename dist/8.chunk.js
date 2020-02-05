webpackJsonpac__name_([8],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__default_request_options_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cminer_routing_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_question_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_notifications_src_simple_notifications_services_notifications_service__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cminer_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_search_search_service__ = __webpack_require__(293);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CminerModule", function() { return CminerModule; });











var CminerModule = (function () {
    function CminerModule() {
    }
    return CminerModule;
}());
CminerModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__cminer_routing_module__["a" /* CminerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__question_question_component__["a" /* QuestionComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__default_request_options_service__["a" /* requestOptionsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_9__cminer_service__["a" /* CminerService */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_notifications_src_simple_notifications_services_notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_10__user_search_search_service__["a" /* SearchService */]
        ],
        entryComponents: [],
    })
], CminerModule);



/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CATEGORIES_bool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CATEGORIES_bool_false; });
var CATEGORIES = [
    { title: 'سینما', engtitle: "cinema", id: 2 },
    { title: "برنامه های تلویزیونی", engtitle: "TV", id: 3 },
    { title: "ادبیات", engtitle: "literature", id: 4 },
    { title: "موسیقی", engtitle: "music", id: 6 },
    { title: "تاریخ", engtitle: "history", id: 9 },
    { title: "زبان انگلیسی", engtitle: "english", id: 10 },
    { title: "تکنولوژی", engtitle: "technology", id: 12 },
    { title: "علم و دانش", engtitle: "science", id: 13 },
    { title: "جغرافیا", engtitle: "geography", id: 17 },
    { title: "فرهنگ و هنر", engtitle: "art", id: 20 },
    { title: "بازیهای کامپیوتری", engtitle: "computer_game", id: 22 },
    { title: "اطلاعات عمومی", engtitle: "general_knowledge", id: 23 },
    { title: "ورزشی", engtitle: "sport", id: 29 },
    { title: "طبیعت", engtitle: "nature", id: 41 },
    { title: "مذهبی", engtitle: "religious", id: 88 },
    { title: "ریاضی و هوش", engtitle: "math", id: 139 },
    { title: "لوگو و سرگرمی", engtitle: "logo", id: 140 },
    { title: "غذا و نوشیدنی", engtitle: "food", id: 141 },
    { title: "فوتبال", engtitle: "football", id: 142 },
];
var CATEGORIES_bool = [
    { title: ' سینما', engtitle: "cinema", id: 2, checked: true },
    { title: " برنامه های تلویزیونی", engtitle: "TV", id: 3, checked: true },
    { title: " ادبیات", engtitle: "literature", id: 4, checked: true },
    { title: "موسیقی", engtitle: "music", id: 6, checked: true },
    { title: "تاریخ", engtitle: "history", id: 9, checked: true },
    { title: "زبان انگلیسی", engtitle: "english", id: 10, checked: true },
    { title: "تکنولوژی", engtitle: "technology", id: 12, checked: true },
    { title: "علم و دانش", engtitle: "science", id: 13, checked: true },
    { title: "جغرافیا", engtitle: "geography", id: 17, checked: true },
    { title: "فرهنگ و هنر", engtitle: "art", id: 20, checked: true },
    { title: "بازیهای کامپیوتری", engtitle: "computer_game", id: 22, checked: true },
    { title: "اطلاعات عمومی", engtitle: "general_knowledge", id: 23, checked: true },
    { title: "ورزشی", engtitle: "sport", id: 29, checked: true },
    { title: "طبیعت", engtitle: "nature", id: 41, checked: true },
    { title: "مذهبی", engtitle: "religious", id: 88, checked: true },
    { title: "ریاضی و هوش", engtitle: "math", id: 139, checked: true },
    { title: "لوگو و سرگرمی", engtitle: "logo", id: 140, checked: true },
    { title: "غذا و نوشیدنی", engtitle: "food", id: 141, checked: true },
    { title: "فوتبال ", engtitle: "football", id: 142, checked: true },
];
var CATEGORIES_bool_false = [
    { title: ' سینما', engtitle: "cinema", id: 2, checked: false },
    { title: " برنامه های تلویزیونی", engtitle: "TV", id: 3, checked: false },
    { title: " ادبیات", engtitle: "literature", id: 4, checked: false },
    { title: "موسیقی", engtitle: "music", id: 6, checked: false },
    { title: "تاریخ", engtitle: "history", id: 9, checked: false },
    { title: "زبان انگلیسی", engtitle: "english", id: 10, checked: false },
    { title: "تکنولوژی", engtitle: "technology", id: 12, checked: false },
    { title: "علم و دانش", engtitle: "science", id: 13, checked: false },
    { title: "جغرافیا", engtitle: "geography", id: 17, checked: false },
    { title: "فرهنگ و هنر", engtitle: "art", id: 20, checked: false },
    { title: "بازیهای کامپیوتری", engtitle: "computer_game", id: 22, checked: false },
    { title: "اطلاعات عمومی", engtitle: "general_knowledge", id: 23, checked: false },
    { title: "ورزشی", engtitle: "sport", id: 29, checked: false },
    { title: "طبیعت", engtitle: "nature", id: 41, checked: false },
    { title: "مذهبی", engtitle: "religious", id: 88, checked: false },
    { title: "ریاضی و هوش", engtitle: "math", id: 139, checked: false },
    { title: "لوگو و سرگرمی", engtitle: "logo", id: 140, checked: false },
    { title: "غذا و نوشیدنی", engtitle: "food", id: 141, checked: false },
    { title: "فوتبال ", engtitle: "football", id: 142, checked: false },
];


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_icons__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });




var NotificationsService = (function () {
    function NotificationsService() {
        this.emitter = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.icons = __WEBPACK_IMPORTED_MODULE_3__interfaces_icons__["a" /* defaultIcons */];
    }
    NotificationsService.prototype.set = function (notification, to) {
        notification.id = notification.override && notification.override.id ? notification.override.id : Math.random().toString(36).substring(3);
        notification.click = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.emitter.next({ command: 'set', notification: notification, add: to });
        return notification;
    };
    ;
    NotificationsService.prototype.getChangeEmitter = function () {
        return this.emitter;
    };
    //// Access methods
    NotificationsService.prototype.success = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'success', icon: this.icons.success, override: override }, true);
    };
    NotificationsService.prototype.error = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'error', icon: this.icons.error, override: override }, true);
    };
    NotificationsService.prototype.alert = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'alert', icon: this.icons.alert, override: override }, true);
    };
    NotificationsService.prototype.info = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'info', icon: this.icons.info, override: override }, true);
    };
    NotificationsService.prototype.bare = function (title, content, override) {
        return this.set({ title: title, content: content || '', type: 'bare', icon: 'bare', override: override }, true);
    };
    // With type method
    NotificationsService.prototype.create = function (title, content, type, override) {
        return this.set({ title: title, content: content, type: type, icon: 'bare', override: override }, true);
    };
    // HTML Notification method
    NotificationsService.prototype.html = function (html, type, override) {
        return this.set({ html: html, type: type, icon: 'bare', override: override }, true);
    };
    // Remove all notifications method
    NotificationsService.prototype.remove = function (id) {
        if (id)
            this.emitter.next({ command: 'clean', id: id });
        else
            this.emitter.next({ command: 'cleanAll' });
    };
    return NotificationsService;
}());
NotificationsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], NotificationsService);



/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultIcons; });
var defaultIcons = {
    alert: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/>\n        </svg>",
    error: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0V0z\" fill=\"none\"/>\n            <path d=\"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/>\n        </svg>\n    ",
    info: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z\"/>\n        </svg>\n    ",
    success: "\n        <svg class=\"simple-notification-svg\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\">\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n            <path d=\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\"/>\n        </svg>\n    "
};


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });





// const levenshtein = require('js-levenshtein');
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    SearchService.prototype.search = function (name, code) {
        var body = { username: name, code: code };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["b" /* UserSearchURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    SearchService.prototype.leven = function (name) {
        var body = { username: name };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["c" /* UserSearchLevenURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractLevenData)
            .catch(this.handleError);
    };
    SearchService.prototype.getClans = function (title) {
        var body = { title: title };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["d" /* SearchClanMembers */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractClanData)
            .catch(this.handleError);
    };
    SearchService.prototype.getRecipe = function (data) {
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["e" /* SearchRecipeUrl */], JSON.stringify(data), this.options)
            .toPromise()
            .then(this.extractRecipeData)
            .catch(this.handleError);
    };
    SearchService.prototype.extractRecipeData = function (res) {
        var body = res.json();
        if (body.status == true) {
            return body.data.payments || [];
        }
        else {
            return [];
        }
    };
    SearchService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.status == true) {
            return body.data.users || [];
        }
        else {
            return [];
        }
    };
    SearchService.prototype.extractLevenData = function (res) {
        var body = res.json();
        return body.players || [];
    };
    SearchService.prototype.extractClanData = function (res) {
        var body = res.json();
        //	console.log(body)
        return body.clans || [];
    };
    SearchService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return SearchService;
}());
SearchService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], SearchService);



/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CminerService; });





var CminerService = (function () {
    function CminerService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CminerService.prototype.viewUserQuestionService = function (data) {
        this.headers.delete('Content-Type');
        var test = new FormData();
        test.append('player_id', data.player_id);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["f" /* UserQuestionsViewUrl */], test, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CminerService.prototype.SingleSearchQuestionService = function (data) {
        this.headers.delete('Content-Type');
        var test = new FormData();
        test.append('id', data.id);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["g" /* SingleQuestionViewUrl */], test, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CminerService.prototype.UpdateQuestuinService = function (data) {
        this.headers.delete('Content-Type');
        var test = new FormData();
        for (var key in data) {
            test.append(key, data[key]);
        }
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["h" /* UpdateQuestionUrl */], test, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CminerService.prototype.AcceptQuestionService = function (data) {
        this.headers.delete('Content-Type');
        var test = new FormData();
        test.append('id', data.id);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["i" /* AcceptedStatusQuestionUrl */], test, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CminerService.prototype.RejectQuestionService = function (data) {
        this.headers.delete('Content-Type');
        var test = new FormData();
        test.append('id', data.id);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["j" /* RejectedStatusQuestionUrl */], test, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CminerService.prototype.UpdateQuestionCategory = function (data) {
        this.headers.delete('Content-Type');
        var test = new FormData();
        for (var key in data) {
            test.append(key, data[key]);
        }
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["k" /* UpdateQuestionCategoryUrl */], test, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CminerService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.status == true) {
            return body.data || [];
        }
        else {
            return [];
        }
    };
    CminerService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return CminerService;
}());
CminerService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], CminerService);



/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_model__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_search_search_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cminer_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_categories_model__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });









var QuestionComponent = (function () {
    function QuestionComponent(router, route, progressBarService, notificationService, searchService, cminerService) {
        this.router = router;
        this.route = route;
        this.progressBarService = progressBarService;
        this.notificationService = notificationService;
        this.searchService = searchService;
        this.cminerService = cminerService;
        this.showUserQuestionTable = false;
        this.showSingleQuestionTable = false;
        this.userQuestion = new __WEBPACK_IMPORTED_MODULE_5__question_model__["a" /* UserQuestionViewModel */]();
        this.userQuestionsData = [];
        this.singleQuestionSearch = new __WEBPACK_IMPORTED_MODULE_5__question_model__["b" /* SingleQuestionViewModel */]();
        this.singleQuestionData = [];
        this.cats = __WEBPACK_IMPORTED_MODULE_8__shared_categories_model__["a" /* CATEGORIES */];
        this.updateQuestion = new __WEBPACK_IMPORTED_MODULE_5__question_model__["c" /* UpdateQuestionModel */]();
        this.updateCategory = new __WEBPACK_IMPORTED_MODULE_5__question_model__["d" /* UpdateQuestionCategory */]();
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.userQuestion.player_id = 0;
    };
    QuestionComponent.prototype.leven = function (name) {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.searchService.leven(name).then(function (users) {
            _this.users = users;
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationService.error("خطا", "خطا در دریافت کاربران");
            _this.progressBarService.queryFinished();
        });
    };
    QuestionComponent.prototype.ClearSeach = function () {
        this.userQuestion.player_id = null;
        this.singleQuestionSearch.id = null;
        this.users = null;
        this.userQuestionsData = [];
        this.showUserQuestionTable = false;
        this.showSingleQuestionTable = false;
        this.singleQuestionData = [];
        this.input.nativeElement.value = '';
    };
    QuestionComponent.prototype.SelectUser = function (id) {
        this.userQuestion.player_id = id;
        this.users = null;
        this.element.nativeElement.style.display = 'none';
    };
    QuestionComponent.prototype.SearchUserQuestions = function () {
        var _this = this;
        this.cminerService.viewUserQuestionService(this.userQuestion)
            .then(function (s) {
            _this.userQuestionsData = s.question;
            _this.showUserQuestionTable = true;
            _this.notificationService.success("Sucess", "سوالات کاربر یافت شد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    QuestionComponent.prototype.SearchQuestionById = function () {
        var _this = this;
        this.cminerService.SingleSearchQuestionService(this.singleQuestionSearch)
            .then(function (s) {
            _this.singleQuestionData = s;
            _this.updateCategory.question_id = s.question_details.id;
            _this.updateCategory.category_id = s.question_details.category_id;
            _this.showSingleQuestionTable = true;
            _this.notificationService.success("Sucess", "سوالات یافت شد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    QuestionComponent.prototype.getCategory = function (id) {
        var val = '';
        this.cats.forEach(function (cat) {
            if (cat.id == id) {
                val = cat.title;
            }
        });
        return val;
    };
    QuestionComponent.prototype.transformToUpdate = function () {
        for (var key in this.updateQuestion) {
            this.updateQuestion[key] = this.singleQuestionData.question_details[key];
        }
    };
    QuestionComponent.prototype.UpdateQuestionCrud = function () {
        var _this = this;
        this.cminerService.UpdateQuestuinService(this.updateQuestion)
            .then(function (s) {
            _this.notificationService.success("Sucess", "سوال بروز رسانی شد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
            _this.UpdateQuestionCategory();
        })
            .catch(function (err) {
            _this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    QuestionComponent.prototype.UpdateQuestionCategory = function () {
        var _this = this;
        this.cminerService.UpdateQuestionCategory(this.updateCategory)
            .then(function (s) {
            _this.notificationService.success("Sucess", "موضوع سوال تغییر کرد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
            console.log(_this.updateCategory);
        })
            .catch(function (err) {
            _this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    QuestionComponent.prototype.RejectQuestion = function (item) {
        var _this = this;
        this.cminerService.RejectQuestionService({ id: item.id })
            .then(function (s) {
            _this.notificationService.success("Sucess", "سوال ریجکت شد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
            _this.StatusEvent(s['question_details'], true);
        })
            .catch(function (err) {
            _this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    QuestionComponent.prototype.AcceptQuestion = function (item) {
        var _this = this;
        this.cminerService.AcceptQuestionService({ id: item.id })
            .then(function (s) {
            _this.notificationService.success("Sucess", "سوال قبول شد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
            _this.StatusEvent(s['question_details'], true);
        })
            .catch(function (err) {
            _this.notificationService.error("Error", "دوباره تلاش کنید", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    QuestionComponent.prototype.StatusEvent = function (item, type) {
        if (type) {
            var elem = document.getElementById("el-" + item.id);
            if (item.status == "ACCEPTED") {
                elem.innerHTML = '<i  class="material-icons sticky-shortcut red-color">check</i>';
            }
            else {
                elem.innerHTML = '<i  class="material-icons sticky-shortcut red-color">close</i>';
            }
        }
        return item.status;
    };
    return QuestionComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('autoCompelete'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], QuestionComponent.prototype, "element", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('search'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], QuestionComponent.prototype, "input", void 0);
QuestionComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-question',
        template: __webpack_require__(617),
        styles: [__webpack_require__(651)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_3__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["b" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_6__user_search_search_service__["a" /* SearchService */],
        __WEBPACK_IMPORTED_MODULE_7__cminer_service__["a" /* CminerService */]])
], QuestionComponent);



/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_question_component__ = __webpack_require__(366);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CminerRoutingModule; });




var routes = [
    { path: '', redirectTo: 'cminer-index', pathMatch: 'full' },
    { path: 'cminer-index', component: __WEBPACK_IMPORTED_MODULE_3__question_question_component__["a" /* QuestionComponent */] },
];
var CminerRoutingModule = (function () {
    function CminerRoutingModule() {
    }
    return CminerRoutingModule;
}());
CminerRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
    })
], CminerRoutingModule);



/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserQuestionViewModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SingleQuestionViewModel; });
/* unused harmony export UserQuestionResponseModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UpdateQuestionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UpdateQuestionCategory; });
var UserQuestionViewModel = (function () {
    function UserQuestionViewModel() {
    }
    return UserQuestionViewModel;
}());

var SingleQuestionViewModel = (function () {
    function SingleQuestionViewModel() {
    }
    return SingleQuestionViewModel;
}());

var UserQuestionResponseModel = (function () {
    function UserQuestionResponseModel() {
        this.question_details = null;
    }
    return UserQuestionResponseModel;
}());

var UpdateQuestionModel = (function () {
    function UpdateQuestionModel() {
        this.id = null;
        this.question = null;
        this.choice1 = null;
        this.choice2 = null;
        this.choice3 = null;
        this.choice4 = null;
    }
    return UpdateQuestionModel;
}());

var UpdateQuestionCategory = (function () {
    function UpdateQuestionCategory() {
        this.category_id = null;
        this.question_id = null;
    }
    return UpdateQuestionCategory;
}());



/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".batches-tab .tab{\r\n    font-size: 16px;\r\n}\r\nh3,.mat-ripple{\r\n    font-family: IRANSansWeb !important;\r\n}\r\n.question-content th,td{\r\n    font-family: IRANSansWeb !important;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: 13px;\r\n\r\n}\r\n\r\n.question-content td:nth-child(3),.question-content td:nth-child(4), .question-content td:nth-child(5),.question-content td:nth-child(6){\r\n    background: #f8bbd0;\r\n}\r\ntd:nth-child(7){\r\n    background: #b2dfdb;\r\n}\r\n.question-content{\r\n    width: 100%;\r\n\r\n    margin: 40px auto;\r\n    overflow: auto;\r\n}\r\n.question-content th{\r\n    background: #e7e7e7;\r\n}\r\n.question-content td:hover{\r\n    background: #e9e9e9;\r\n}\r\n.input-holder{\r\n    padding: 0 40px;\r\n\r\n}\r\n.d-inline-block{\r\n    display: inline-block;\r\n}\r\n.margin-right-20{\r\n    margin-right: 20px;\r\n}\r\n.radio-holder-batch{\r\n    margin-bottom: 10px;\r\n    display: inline-block;\r\n}\r\n.myAutoComplete{\r\n    background: white;\r\n    width: 300px;\r\n    position: absolute;\r\n    right: 0;\r\n    z-index: 1000;\r\n    top: 35px;\r\n    overflow: auto;\r\n    height: 200px;\r\n    box-shadow:0 3px 6px rgba(0,0,0,0.16);\r\n}\r\n.user-list{\r\n    padding: 0;\r\n}\r\n.hoverable{\r\n    list-style: none;\r\n    padding: 10px;\r\n}\r\n.hoverable:hover{\r\n    background: #e4e4e4;\r\n}\r\n.margin-top-fix{\r\n    margin-top: 30px;\r\n}\r\n.show-id{\r\n    background: mediumseagreen;\r\n    padding: 10px;\r\n    color: #fff;\r\n    width: 20%;\r\n    margin: 0 0 20px 0;\r\n}\r\n.text-center{\r\n    text-align: center;\r\n}\r\n.text-right{\r\n    text-align: right;\r\n}\r\n.batch-inner{\r\n    padding: 0 10px;\r\n}\r\n.card-parent{\r\n    min-height: 500px;\r\n}", ""]);

// exports


/***/ }),

/***/ 617:
/***/ (function(module, exports) {

module.exports = "\r\n<md-tab-group class=\"tab-container batches-tab\">\r\n    <md-tab class=\"tabs\" label=\"جستجو سوالات کاربر\">\r\n\r\n      <md-card class=\"card-content card-parent\">\r\n          <md-list>\r\n              <div class=\"card-content d-inline-block margin-padding-right-10\">\r\n                  <md-input-container class=\"input-full-width\">\r\n                      <input mdInput [value]=\"userQuestion.player_id\" placeholder=\"آیدی بازیکن انتخاب شده\" readonly>\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"input-full-width\">\r\n                      <input #search matInput autocomplete=\"off\" (keyup)=\"leven(search.value)\" placeholder=\"جستجو نام کاربر\">\r\n                      <div class=\"myAutoComplete\" *ngIf=\"users\" #autoCompelete>\r\n                          <ul class=\"user-list\">\r\n                              <li class=\"hoverable\" *ngFor=\"let user of users \" (click)=\"SelectUser(user.user_id)\">\r\n                                  <span>{{ user.username }}</span>\r\n                              </li>\r\n                          </ul>\r\n                      </div>\r\n\r\n                  </md-input-container>\r\n                  <button [disabled]=\"!userQuestion.player_id\" class=\"btn\" md-raised-button color=\"primary\" (click)=\"SearchUserQuestions()\">\r\n                     جستجو سولات کاربر\r\n                  </button>\r\n                  <button [disabled]=\"!userQuestionsData.length\"  class=\"btn\" md-raised-button color=\"warn\" (click)=\"ClearSeach()\">\r\n                      جستجو جدید\r\n                  </button>\r\n              </div>\r\n\r\n          </md-list>\r\n\r\n          <md-list *ngIf=\"showUserQuestionTable\">\r\n              <div class=\"batch-inner\">\r\n\r\n\r\n                  <div class=\"question-content\" >\r\n                      <table class=\"batch-table\" style=\"width:100%\">\r\n                          <tr>\r\n\r\n                              <th>شماره</th>\r\n                              <th>سوال</th>\r\n                              <th>گزینه 1</th>\r\n                              <th>گزینه 2</th>\r\n                              <th>گزینه 3</th>\r\n                              <th>گزینه 4</th>\r\n                              <th>پاسخ صحیح</th>\r\n                              <th>رد کردن</th>\r\n                              <th>قبول کردن</th>\r\n                              <th>وضعیت کنونی</th>\r\n                              <th>دسته سوال</th>\r\n\r\n                          </tr>\r\n\r\n                          <tr *ngFor=\"let data of userQuestionsData;\">\r\n\r\n                              <td>{{data.id}}</td>\r\n                              <td>{{data.question}}</td>\r\n                              <td>\r\n                                 {{data.choice1}}\r\n                              </td>\r\n                              <td>\r\n                                 {{data.choice2}}\r\n                              </td>\r\n                              <td>\r\n                                 {{data.choice3}}\r\n                              </td>\r\n                              <td>\r\n                                  {{data.choice4}}\r\n                              </td>\r\n                              <td>\r\n                                  {{data.correct_answer}}\r\n                              </td>\r\n                              <td>\r\n\r\n                                  <button (click)=\"RejectQuestion(data)\" class=\"btn\" md-raised-button color=\"warn\">\r\n                                    رد کردن سوال\r\n                                  </button>\r\n                              </td>\r\n                              <td>\r\n\r\n                                  <button (click)=\"AcceptQuestion(data)\" class=\"btn\" md-raised-button color=\"primary\">\r\n                                     قبول کردن سوال\r\n                                  </button>\r\n                              </td>\r\n                              <td>\r\n                                  <span id=\"el-{{data.id}}\">\r\n                                       <i *ngIf=\"StatusEvent(data,false) == 'REJECTED'\" class=\"material-icons sticky-shortcut red-color\">close</i>\r\n                                       <i *ngIf=\"StatusEvent(data,false) == 'ACCEPTED'\" class=\"material-icons sticky-shortcut red-color\">check</i>\r\n\r\n                                  </span>\r\n                              </td>\r\n                              <td>\r\n                                  {{getCategory(data.category_id)}}\r\n                              </td>\r\n                          </tr>\r\n                      </table>\r\n                  </div>\r\n\r\n              </div>\r\n\r\n          </md-list>\r\n      </md-card>\r\n\r\n    </md-tab>\r\n\r\n    <md-tab class=\"tabs\" label=\"جستجو سوال\">\r\n\r\n        <md-card class=\"card-content card-parent\">\r\n            <md-list>\r\n                <div class=\"card-content d-inline-block margin-padding-right-10\">\r\n                    <md-input-container class=\"input-full-width\">\r\n                        <input mdInput type=\"number\" [(ngModel)]=\"singleQuestionSearch.id\" placeholder=\"آیدی سوال\">\r\n                    </md-input-container>\r\n\r\n                    <button [disabled]=\"!singleQuestionSearch.id\" class=\"btn\" md-raised-button color=\"primary\" (click)=\"SearchQuestionById()\">\r\n                         جستجو سوال\r\n                    </button>\r\n                    <button [disabled]=\"!singleQuestionData.question_details\"  class=\"btn\" md-raised-button color=\"warn\" (click)=\"ClearSeach()\">\r\n                        جستجو جدید\r\n                    </button>\r\n                </div>\r\n\r\n            </md-list>\r\n\r\n            <md-list *ngIf=\"showSingleQuestionTable\">\r\n                <div class=\"batch-inner\">\r\n\r\n\r\n                    <div class=\"question-content\" >\r\n                        <table class=\"batch-table\" style=\"width:100%\">\r\n                            <tr>\r\n                                <th>شماره</th>\r\n                                <th>سوال</th>\r\n                                <th>گزینه 1</th>\r\n                                <th>گزینه 2</th>\r\n                                <th>گزینه 3</th>\r\n                                <th>گزینه 4</th>\r\n                                <th>پاسخ صحیح</th>\r\n                                <th>وضعیت</th>\r\n                                <th>دسته سوال</th>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{singleQuestionData.question_details.id}}</td>\r\n                                <td>\r\n                                    <mat-input-container>\r\n                                        <input mdInput type=\"text\" (keyup)=\"transformToUpdate()\" [(ngModel)]=\"singleQuestionData.question_details.question\">\r\n                                    </mat-input-container>\r\n                                </td>\r\n                                <td>\r\n                                    <mat-input-container>\r\n                                        <input mdInput type=\"text\" (keyup)=\"transformToUpdate()\" [(ngModel)]=\"singleQuestionData.question_details.choice1\">\r\n                                    </mat-input-container>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    <mat-input-container>\r\n                                        <input mdInput type=\"text\" (keyup)=\"transformToUpdate()\" [(ngModel)]=\"singleQuestionData.question_details.choice2\">\r\n                                    </mat-input-container>\r\n                                </td>\r\n                                <td>\r\n                                    <mat-input-container>\r\n                                        <input mdInput type=\"text\" (keyup)=\"transformToUpdate()\" [(ngModel)]=\"singleQuestionData.question_details.choice3\">\r\n                                    </mat-input-container>\r\n                                </td>\r\n                                <td>\r\n                                    <mat-input-container>\r\n                                        <input mdInput type=\"text\" (keyup)=\"transformToUpdate()\" [(ngModel)]=\"singleQuestionData.question_details.choice4\">\r\n                                    </mat-input-container>\r\n                                </td>\r\n                                <td>\r\n                                  {{singleQuestionData.question_details.correct_answer}}\r\n                                </td>\r\n                                <td>\r\n                                    <i *ngIf=\"singleQuestionData.question_details.status == 'REJECTED'\" class=\"material-icons sticky-shortcut red-color\">close</i>\r\n                                    <i *ngIf=\"singleQuestionData.question_details.status == 'ACCEPTED'\" class=\"material-icons sticky-shortcut red-color\">check</i>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    <md-select  (change)=\"transformToUpdate()\"  mdInput [(ngModel)]=\"updateCategory.category_id\" placeholder=\"موضوع\"  class=\"input-full-width text-right\" name=\"status\">\r\n                                        <md-option *ngFor=\"let cat of this.cats\" [value]=\"cat.id\" >\r\n                                            {{cat.title}}\r\n                                        </md-option>\r\n                                    </md-select>\r\n\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </md-list>\r\n            <button *ngIf=\"showSingleQuestionTable\" [disabled]=\"updateQuestion.id == null\"  class=\"btn margin-right-20\" md-raised-button color=\"primary\" (click)=\"UpdateQuestionCrud()\">\r\n                بروز رسانی\r\n            </button>\r\n        </md-card>\r\n    </md-tab>\r\n\r\n\r\n</md-tab-group>"

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(577);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=8.chunk.js.map