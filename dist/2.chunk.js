webpackJsonpac__name_([2],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__default_request_options_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_list_user_list_user_component__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_list_user_list_user_service__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__update_view_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__update_view_service__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__update_update_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__update_statistics_statistics_view_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__update_statistics_update_percent_service__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__update_services_statistics_getstats_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__update_gamestatistics_gamestatistics_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__update_services_statistics_getuserstat_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__update_gamestatistics_update_gamepercent_service__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__update_friends_friends_view_component__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__update_services_friends_service__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__update_payment_payments_view_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__update_services_payments_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__update_fraud_fraud_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__update_services_frauds_service__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__create_create_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__create_create_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__update_services_lock_device_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__update_dialog_search_dialog_search_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__update_dialog_reset_password_dialog_reset_password_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__user_routing_module__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_hammerjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_notifications_index__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });































var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_28__user_routing_module__["a" /* UserRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__search_search_component__["a" /* UserSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__search_list_user_list_user_component__["a" /* ListUserComponent */],
            __WEBPACK_IMPORTED_MODULE_8__update_view_component__["a" /* UserViewComponent */],
            __WEBPACK_IMPORTED_MODULE_23__create_create_component__["a" /* CreateUserComponent */],
            __WEBPACK_IMPORTED_MODULE_26__update_dialog_search_dialog_search_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_27__update_dialog_reset_password_dialog_reset_password_component__["a" /* DialogResetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_11__update_statistics_statistics_view_component__["a" /* StatisticsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_14__update_gamestatistics_gamestatistics_component__["a" /* GameStatisticsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__update_friends_friends_view_component__["a" /* FriendsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_19__update_payment_payments_view_component__["a" /* PaymentsViewComponent */],
            __WEBPACK_IMPORTED_MODULE_21__update_fraud_fraud_component__["a" /* FraudsViewComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_30_angular2_notifications_index__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_3__default_request_options_service__["a" /* requestOptionsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__search_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_7__search_list_user_list_user_service__["a" /* UpdateMultipleService */],
            __WEBPACK_IMPORTED_MODULE_9__update_view_service__["a" /* ViewService */],
            __WEBPACK_IMPORTED_MODULE_10__update_update_service__["a" /* UpdateService */],
            __WEBPACK_IMPORTED_MODULE_24__create_create_service__["a" /* CreateService */],
            __WEBPACK_IMPORTED_MODULE_18__update_services_friends_service__["a" /* FriendsService */],
            __WEBPACK_IMPORTED_MODULE_20__update_services_payments_service__["a" /* PaymentsService */],
            __WEBPACK_IMPORTED_MODULE_22__update_services_frauds_service__["a" /* FraudsService */],
            __WEBPACK_IMPORTED_MODULE_13__update_services_statistics_getstats_service__["a" /* GetStatsService */],
            __WEBPACK_IMPORTED_MODULE_15__update_services_statistics_getuserstat_service__["a" /* GetUserStatsService */],
            __WEBPACK_IMPORTED_MODULE_12__update_statistics_update_percent_service__["a" /* UpdatePercentService */],
            __WEBPACK_IMPORTED_MODULE_16__update_gamestatistics_update_gamepercent_service__["a" /* UpdateGamePercentService */],
            __WEBPACK_IMPORTED_MODULE_26__update_dialog_search_dialog_search_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_27__update_dialog_reset_password_dialog_reset_password_component__["a" /* DialogResetPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_25__update_services_lock_device_service__["a" /* LockDeviceService */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_26__update_dialog_search_dialog_search_component__["a" /* DialogComponent */],
            __WEBPACK_IMPORTED_MODULE_27__update_dialog_reset_password_dialog_reset_password_component__["a" /* DialogResetPasswordComponent */]
        ],
    })
], UserModule);



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

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_push_notifications_module__ = __webpack_require__(544);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_simple_notifications_module__ = __webpack_require__(545);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_simple_notifications_module__["a"]; });




/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushNotificationsService; });



var PushNotificationsService = (function () {
    function PushNotificationsService() {
        this.permission = this.isSupported() ? Notification.permission : 'denied';
    }
    PushNotificationsService.prototype.requestPermission = function () {
        var _this = this;
        if ('Notification' in window)
            Notification.requestPermission(function (status) { return _this.permission = status; });
    };
    PushNotificationsService.prototype.isSupported = function () {
        return 'Notification' in window;
    };
    PushNotificationsService.prototype.create = function (title, options) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (obs) {
            if (!('Notification' in window)) {
                obs.error('Notifications are not available in this environment');
                obs.complete();
            }
            if (_this.permission !== 'granted') {
                obs.error("The user hasn't granted you permission to send push notifications");
                obs.complete();
            }
            var n = new Notification(title, options);
            n.onshow = function (e) { return obs.next({ notification: n, event: e }); };
            n.onclick = function (e) { return obs.next({ notification: n, event: e }); };
            n.onerror = function (e) { return obs.error({ notification: n, event: e }); };
            n.onclose = function () { return obs.complete(); };
        });
    };
    return PushNotificationsService;
}());
PushNotificationsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], PushNotificationsService);



/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notifications_service__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });





var NotificationComponent = (function () {
    function NotificationComponent(notificationService, domSanitizer, zone) {
        var _this = this;
        this.notificationService = notificationService;
        this.domSanitizer = domSanitizer;
        this.zone = zone;
        // Progress bar variables
        this.progressWidth = 0;
        this.stopTime = false;
        this.count = 0;
        this.instance = function () {
            _this.zone.runOutsideAngular(function () {
                _this.zone.run(function () { return _this.diff = (new Date().getTime() - _this.start) - (_this.count * _this.speed); });
                if (_this.count++ === _this.steps)
                    _this.zone.run(function () { return _this.remove(); });
                else if (!_this.stopTime) {
                    if (_this.showProgressBar)
                        _this.zone.run(function () { return _this.progressWidth += 100 / _this.steps; });
                    _this.timer = setTimeout(_this.instance, (_this.speed - _this.diff));
                }
            });
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        if (this.animate) {
            this.item.state = this.animate;
        }
        if (this.item.override) {
            this.attachOverrides();
        }
        if (this.timeOut !== 0) {
            this.startTimeOut();
        }
        this.safeSvg = this.domSanitizer.bypassSecurityTrustHtml(this.icon || this.item.icon);
    };
    NotificationComponent.prototype.startTimeOut = function () {
        var _this = this;
        this.steps = this.timeOut / 10;
        this.speed = this.timeOut / this.steps;
        this.start = new Date().getTime();
        this.zone.runOutsideAngular(function () { return _this.timer = setTimeout(_this.instance, _this.speed); });
    };
    NotificationComponent.prototype.onEnter = function () {
        if (this.pauseOnHover) {
            this.stopTime = true;
        }
    };
    NotificationComponent.prototype.onLeave = function () {
        if (this.pauseOnHover) {
            this.stopTime = false;
            setTimeout(this.instance, (this.speed - this.diff));
        }
    };
    NotificationComponent.prototype.setPosition = function () {
        return this.position !== 0 ? this.position * 90 : 0;
    };
    NotificationComponent.prototype.onClick = function ($e) {
        this.item.click.emit($e);
        if (this.clickToClose) {
            this.remove();
        }
    };
    // Attach all the overrides
    NotificationComponent.prototype.attachOverrides = function () {
        var _this = this;
        Object.keys(this.item.override).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = _this.item.override[a];
            }
        });
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timer);
    };
    NotificationComponent.prototype.remove = function () {
        var _this = this;
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.zone.run(function () { return _this.notificationService.set(_this.item, false); });
                }, 310);
            });
        }
        else {
            this.notificationService.set(this.item, false);
        }
    };
    return NotificationComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
], NotificationComponent.prototype, "timeOut", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Boolean)
], NotificationComponent.prototype, "showProgressBar", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Boolean)
], NotificationComponent.prototype, "pauseOnHover", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Boolean)
], NotificationComponent.prototype, "clickToClose", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
], NotificationComponent.prototype, "maxLength", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", String)
], NotificationComponent.prototype, "theClass", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Boolean)
], NotificationComponent.prototype, "rtl", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", String)
], NotificationComponent.prototype, "animate", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
], NotificationComponent.prototype, "position", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], NotificationComponent.prototype, "item", void 0);
NotificationComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'simple-notification',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('enterLeave', [
                // Enter from right
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* state */])('fromRight', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('* => fromRight', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(5%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* state */])('fromRightOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(-5%)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('fromRight => fromRightOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease-in-out')
                ]),
                // Enter from left
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* state */])('fromLeft', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('* => fromLeft', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(-5%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* state */])('fromLeftOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0, transform: 'translateX(5%)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('fromLeft => fromLeftOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'translateX(0)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms ease-in-out')
                ]),
                // Rotate
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* state */])('scale', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'scale(1)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('* => scale', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0, transform: 'scale(0)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* state */])('scaleOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0, transform: 'scale(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('scale => scaleOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'scale(1)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ]),
                // Scale
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* state */])('rotate', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'rotate(0deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('* => rotate', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0, transform: 'rotate(5deg)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["b" /* state */])('rotateOut', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0, transform: 'rotate(-5deg)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])('rotate => rotateOut', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1, transform: 'rotate(0deg)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')
                ])
            ])
        ],
        template: "\n        <div class=\"simple-notification\"\n            [@enterLeave]=\"item.state\"\n            (click)=\"onClick($event)\"\n            [class]=\"theClass\"\n\n            [ngClass]=\"{\n                'alert': item.type === 'alert',\n                'error': item.type === 'error',\n                'success': item.type === 'success',\n                'info': item.type === 'info',\n                'bare': item.type === 'bare',\n                'rtl-mode': rtl\n            }\"\n\n            (mouseenter)=\"onEnter()\"\n            (mouseleave)=\"onLeave()\">\n\n            <div *ngIf=\"!item.html\">\n                <div class=\"sn-title\">{{item.title}}</div>\n                <div class=\"sn-content\">{{item.content | max:maxLength}}</div>\n\n                <div class=\"icon\" *ngIf=\"item.icon !== 'bare'\" [innerHTML]=\"safeSvg\"></div>\n            </div>\n            <div *ngIf=\"item.html\" [innerHTML]=\"item.html\"></div>\n\n            <div class=\"sn-progress-loader\" *ngIf=\"showProgressBar\">\n                <span [ngStyle]=\"{'width': progressWidth + '%'}\"></span>\n            </div>\n\n        </div>\n    ",
        styles: ["\n        .simple-notification {\n            width: 100%;\n            padding: 10px 20px;\n            box-sizing: border-box;\n            position: relative;\n            float: left;\n            margin-bottom: 10px;\n            color: #fff;\n            cursor: pointer;\n            transition: all 0.5s;\n        }\n\n        .simple-notification .sn-title {\n            margin: 0;\n            padding: 0 50px 0 0;\n            line-height: 30px;\n            font-size: 20px;\n        }\n\n        .simple-notification .sn-content {\n            margin: 0;\n            font-size: 16px;\n            padding: 0 50px 0 0;\n            line-height: 20px;\n        }\n\n        .simple-notification .icon {\n            position: absolute;\n            box-sizing: border-box;\n            top: 0;\n            right: 0;\n            width: 70px;\n            height: 70px;\n            padding: 10px;\n        }\n\n        .simple-notification .icon svg {\n            fill: #fff;\n            width: 100%;\n            height: 100%;\n        }\n\n        .simple-notification.rtl-mode {\n            direction: rtl;\n        }\n\n        .simple-notification.rtl-mode .sn-content {\n            padding: 0 0 0 50px;\n        }\n\n        .simple-notification.rtl-mode svg {\n            left: 0;\n            right: auto;\n        }\n\n        .simple-notification.error { background: #F44336; }\n        .simple-notification.success { background: #8BC34A; }\n        .simple-notification.alert { background: #ffdb5b; }\n        .simple-notification.info { background: #03A9F4; }\n\n        .simple-notification .sn-progress-loader {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 5px;\n        }\n\n        .simple-notification .sn-progress-loader span {\n            float: left;\n            height: 100%;\n        }\n\n        .simple-notification.success .sn-progress-loader span { background: #689F38; }\n        .simple-notification.error .sn-progress-loader span { background: #D32F2F; }\n        .simple-notification.alert .sn-progress-loader span { background: #edc242; }\n        .simple-notification.info .sn-progress-loader span { background: #0288D1; }\n        .simple-notification.bare .sn-progress-loader span { background: #ccc; }\n    "]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_notifications_service__["a" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"]])
], NotificationComponent);



/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notifications_service__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleNotificationsComponent; });



var SimpleNotificationsComponent = (function () {
    function SimpleNotificationsComponent(_service) {
        this._service = _service;
        this.onCreate = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.onDestroy = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.notifications = [];
        this.position = ['bottom', 'right'];
        // Received values
        this.lastOnBottom = true;
        this.maxStack = 8;
        this.preventLastDuplicates = false;
        this.preventDuplicates = false;
        // Sent values
        this.timeOut = 0;
        this.maxLength = 0;
        this.clickToClose = true;
        this.showProgressBar = true;
        this.pauseOnHover = true;
        this.theClass = '';
        this.rtl = false;
        this.animate = 'fromRight';
    }
    Object.defineProperty(SimpleNotificationsComponent.prototype, "options", {
        set: function (opt) {
            this.attachChanges(opt);
        },
        enumerable: true,
        configurable: true
    });
    SimpleNotificationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Listen for changes in the service
        this.listener = this._service.getChangeEmitter()
            .subscribe(function (item) {
            switch (item.command) {
                case 'cleanAll':
                    _this.notifications = [];
                    break;
                case 'clean':
                    _this.cleanSingle(item.id);
                    break;
                case 'set':
                    if (item.add)
                        _this.add(item.notification);
                    else
                        _this.defaultBehavior(item);
                    break;
                default:
                    _this.defaultBehavior(item);
                    break;
            }
        });
    };
    // Default behavior on event
    SimpleNotificationsComponent.prototype.defaultBehavior = function (value) {
        this.notifications.splice(this.notifications.indexOf(value.notification), 1);
        this.onDestroy.emit(this.buildEmit(value.notification, false));
    };
    // Add the new notification to the notification array
    SimpleNotificationsComponent.prototype.add = function (item) {
        item.createdOn = new Date();
        var toBlock = this.preventLastDuplicates || this.preventDuplicates ? this.block(item) : false;
        // Save this as the last created notification
        this.lastNotificationCreated = item;
        if (!toBlock) {
            // Check if the notification should be added at the start or the end of the array
            if (this.lastOnBottom) {
                if (this.notifications.length >= this.maxStack)
                    this.notifications.splice(0, 1);
                this.notifications.push(item);
            }
            else {
                if (this.notifications.length >= this.maxStack)
                    this.notifications.splice(this.notifications.length - 1, 1);
                this.notifications.splice(0, 0, item);
            }
            this.onCreate.emit(this.buildEmit(item, true));
        }
    };
    // Check if notifications should be prevented
    SimpleNotificationsComponent.prototype.block = function (item) {
        var toCheck = item.html ? this.checkHtml : this.checkStandard;
        if (this.preventDuplicates && this.notifications.length > 0) {
            for (var i = 0; i < this.notifications.length; i++) {
                if (toCheck(this.notifications[i], item)) {
                    return true;
                }
            }
        }
        if (this.preventLastDuplicates) {
            var comp = void 0;
            if (this.preventLastDuplicates === 'visible' && this.notifications.length > 0) {
                if (this.lastOnBottom) {
                    comp = this.notifications[this.notifications.length - 1];
                }
                else {
                    comp = this.notifications[0];
                }
            }
            else if (this.preventLastDuplicates === 'all' && this.lastNotificationCreated) {
                comp = this.lastNotificationCreated;
            }
            else {
                return false;
            }
            return toCheck(comp, item);
        }
        return false;
    };
    SimpleNotificationsComponent.prototype.checkStandard = function (checker, item) {
        return checker.type === item.type && checker.title === item.title && checker.content === item.content;
    };
    SimpleNotificationsComponent.prototype.checkHtml = function (checker, item) {
        return checker.html ? checker.type === item.type && checker.title === item.title && checker.content === item.content && checker.html === item.html : false;
    };
    // Attach all the changes received in the options object
    SimpleNotificationsComponent.prototype.attachChanges = function (options) {
        var _this = this;
        Object.keys(options).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = options[a];
            }
        });
    };
    SimpleNotificationsComponent.prototype.buildEmit = function (notification, to) {
        var toEmit = {
            createdOn: notification.createdOn,
            type: notification.type,
            icon: notification.icon,
            id: notification.id
        };
        if (notification.html) {
            toEmit.html = notification.html;
        }
        else {
            toEmit.title = notification.title;
            toEmit.content = notification.content;
        }
        if (!to) {
            toEmit.destroyedOn = new Date();
        }
        return toEmit;
    };
    SimpleNotificationsComponent.prototype.cleanSingle = function (id) {
        var indexOfDelete = 0;
        var doDelete = false;
        this.notifications.forEach(function (notification, idx) {
            if (notification.id === id) {
                indexOfDelete = idx;
                doDelete = true;
            }
        });
        if (doDelete) {
            this.notifications.splice(indexOfDelete, 1);
        }
    };
    SimpleNotificationsComponent.prototype.ngOnDestroy = function () {
        if (this.listener) {
            this.listener.unsubscribe();
        }
    };
    return SimpleNotificationsComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Object])
], SimpleNotificationsComponent.prototype, "options", null);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], SimpleNotificationsComponent.prototype, "onCreate", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], SimpleNotificationsComponent.prototype, "onDestroy", void 0);
SimpleNotificationsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'simple-notifications',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        template: "\n        <div class=\"simple-notification-wrapper\" [ngClass]=\"position\">\n            <simple-notification\n                *ngFor=\"let a of notifications; let i = index\"\n                [item]=\"a\"\n                [timeOut]=\"timeOut\"\n                [clickToClose]=\"clickToClose\"\n                [maxLength]=\"maxLength\"\n                [showProgressBar]=\"showProgressBar\"\n                [pauseOnHover]=\"pauseOnHover\"\n                [theClass]=\"theClass\"\n                [rtl]=\"rtl\"\n                [animate]=\"animate\"\n                [position]=\"i\"\n                >\n            </simple-notification>\n        </div>\n    ",
        styles: ["\n        .simple-notification-wrapper {\n            position: fixed;\n            width: 300px;\n            z-index: 1000;\n        }\n        \n        .simple-notification-wrapper.left { left: 20px; }\n        .simple-notification-wrapper.top { top: 20px; }\n        .simple-notification-wrapper.right { right: 20px; }\n        .simple-notification-wrapper.bottom { bottom: 20px; }\n        \n        @media (max-width: 340px) {\n            .simple-notification-wrapper {\n                width: auto;\n                left: 20px;\n                right: 20px;\n            }\n        }\n    "]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_notifications_service__["a" /* NotificationsService */]])
], SimpleNotificationsComponent);



/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaxPipe; });


var MaxPipe = (function () {
    function MaxPipe() {
    }
    MaxPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!value)
            return value;
        var allowed = args[0];
        var received = value.length;
        if (received > allowed && allowed !== 0) {
            var toCut = allowed - received;
            return value.slice(0, toCut);
        }
        return value;
    };
    return MaxPipe;
}());
MaxPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'max' })
], MaxPipe);



/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_service__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_model__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__roles_model__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__status_model__ = __webpack_require__(566);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserComponent; });











var CreateUserComponent = (function () {
    function CreateUserComponent(router, progressBarService, notificationsService, createService, location, authGuard) {
        this.router = router;
        this.progressBarService = progressBarService;
        this.notificationsService = notificationsService;
        this.createService = createService;
        this.location = location;
        this.authGuard = authGuard;
        // users: UserSearch[];
        this.user = new __WEBPACK_IMPORTED_MODULE_8__create_model__["a" /* CreateUserModel */]();
        this.roles = __WEBPACK_IMPORTED_MODULE_9__roles_model__["a" /* ROLES */];
        this.status = __WEBPACK_IMPORTED_MODULE_10__status_model__["a" /* STATUS */];
        this.mode = 'determinate';
        this.spinnerValue = 100;
        this.spinnerColor = 'accent';
    }
    CreateUserComponent.prototype.ngOnInit = function () {
        this.progressBarService.queryFinished();
        // this.user.username = 'amin';
        // this.user.password = 'password';
        this.user.coins = 500;
        this.user.level = 1;
        this.user.score = 2000;
        this.user.weekly_score = 2000;
        this.user.trophies = 200;
        this.user.role = 'ROLE_PLAYER';
        this.user.status = 'ACTIVE';
        var currentUser = this.authGuard.getUser();
        if (currentUser.role === 'ROLE_CRM') {
            console.log('it is crm');
            this.roles = this.roles.filter(function (row) {
                return row.value === 'ROLE_PLAYER';
            });
        }
    };
    CreateUserComponent.prototype.createUser = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.createService.create(this.user)
            .then(function (s) {
            _this.notificationsService.success("انجام شد", "کابر ساخته شد", { timeOut: 1500 });
            _this.user.username = "";
            _this.user.password = "";
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "خطا در ساخت کاربر", { timeOut: 1500 });
            _this.user.password = "";
            _this.progressBarService.queryFinished();
        });
        // this.scrollToTop.scrollToTop();
        // console.log(this.user);
    };
    CreateUserComponent.prototype.onBlur = function () {
        var _this = this;
        if (this.user.username && this.user.username.length > 0) {
            this.progressBarService.queryInProgress();
            this.mode = 'indeterminate';
            this.createService.usernameNotAvailable(this.user.username).then(function (notAvailable) {
                _this.progressBarService.queryFinished();
                _this.mode = 'determinate';
                if (notAvailable === true) {
                    _this.notificationsService.alert("خطا", "نام کاربری قبلا انتخاب شده", { timeOut: 1500 });
                }
            }, function (error) {
                _this.progressBarService.queryFinished();
                _this.mode = 'determinate';
                _this.notificationsService.alert("خطا", "خطا در ارسال درخواست به سرور", { timeOut: 1500 });
            });
        }
    };
    CreateUserComponent.prototype.goBack = function () {
        this.location.back();
    };
    return CreateUserComponent;
}());
CreateUserComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'create-user',
        template: __webpack_require__(636),
        styles: [__webpack_require__(670)],
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_5__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["b" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_7__create_service__["a" /* CreateService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
        __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]])
], CreateUserComponent);



/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateService; });





var CreateService = (function () {
    function CreateService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CreateService.prototype.create = function (user) {
        var body = {
            username: user.username,
            password: user.password,
            coins: user.coins,
            status: user.status,
            role: user.role,
            level: user.level,
            score: user.score,
            weekly_score: user.weekly_score,
            trophies: user.trophies,
        };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_20" /* CreateNewUserURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CreateService.prototype.usernameNotAvailable = function (username) {
        var body = {
            username: username
        };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_21" /* UsernameExistURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CreateService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data.username_exist;
    };
    CreateService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return CreateService;
}());
CreateService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], CreateService);



/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateMultipleService; });







var UpdateMultipleService = (function () {
    function UpdateMultipleService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UpdateMultipleService.prototype.blockMultiple = function (ids) {
        var body = { ids: ids };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["z" /* BlockMultipleURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateMultipleService.prototype.unblockMultiple = function (ids) {
        var body = { ids: ids };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["A" /* UnBlockMultipleURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateMultipleService.prototype.increaseCoins = function (ids, data) {
        var body = { ids: ids, data: data };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["B" /* IncreaseCoinsURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateMultipleService.prototype.increaseGoldCup = function (ids, data) {
        var body = { ids: ids, data: data };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["C" /* IncreaseGoldCupURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateMultipleService.prototype.extractData = function (res) {
        var body = res.json();
        return body.status;
    };
    UpdateMultipleService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return UpdateMultipleService;
}());
UpdateMultipleService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], UpdateMultipleService);



/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchComponent; });







var UserSearchComponent = (function () {
    function UserSearchComponent(searchService, router, route, progressBarService, notificationService) {
        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.progressBarService = progressBarService;
        this.notificationService = notificationService;
        this.selectedUsers = [];
        this.selectedClans = [];
        this.recivedRecipe = [];
        this.noRecipe = false;
    }
    UserSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.progressBarService.queryFinished();
        this.route.params.subscribe(function (params) {
            if (params['usr'] !== 'nil' && params['usr'] !== undefined) {
                _this.leven(params['usr']);
            }
            else if (params['inv'] !== 'nil' && params['inv'] !== undefined) {
                _this.searchCode(params['inv']);
            }
            else if (params['clanname'] !== 'nil' && params['clanname'] !== undefined)
                _this.clanMembers(params['clanname']);
        });
    };
    UserSearchComponent.prototype.onSelect = function (user) {
        var url = "user/view/" + user.user_id;
        this.router.navigateByUrl(url);
    };
    UserSearchComponent.prototype.onAddUser = function (user) {
        if (!(this.selectedUsers.indexOf(user, 0) > -1)) {
            this.selectedUsers.push(user);
        }
    };
    UserSearchComponent.prototype.onSelectUserId = function (userId) {
        this.router.navigate(['/question/identifier/' + userId]);
    };
    UserSearchComponent.prototype.onClearUser = function (selectedUsers) {
        this.selectedUsers = selectedUsers;
    };
    UserSearchComponent.prototype.onSelectClan = function (clan) {
        var url = "clan/view/" + clan.unique_clan_id;
        this.router.navigateByUrl(url);
    };
    UserSearchComponent.prototype.onClearClan = function (selectedClans) {
        this.selectedClans = selectedClans;
    };
    UserSearchComponent.prototype.search = function (name) {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.searchService.search(name, "").then(function (users) {
            _this.users = users;
            _this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationService.error("خطا", "خطا در دریافت کاربران");
            _this.progressBarService.queryFinished();
        });
    };
    UserSearchComponent.prototype.searchCode = function (code) {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.searchService.search("", code).then(function (users) {
            _this.users = users;
            _this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationService.error("خطا", "خطا در دریافت کاربران");
            _this.progressBarService.queryFinished();
        });
    };
    UserSearchComponent.prototype.leven = function (name) {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.searchService.leven(name).then(function (users) {
            _this.users = users;
            _this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationService.error("خطا", "خطا در دریافت کاربران");
            _this.progressBarService.queryFinished();
        });
    };
    UserSearchComponent.prototype.clanMembers = function (clan) {
        var _this = this;
        this.clanName = clan;
        this.progressBarService.queryInProgress();
        this.searchService.getClans(clan).then(function (clans) {
            _this.clans = clans;
            _this.notificationService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationService.error("خطا", "خطا در دریافت کاربران");
            _this.progressBarService.queryFinished();
        });
    };
    UserSearchComponent.prototype.searchRecipe = function () {
        var _this = this;
        this.noRecipe = false;
        this.progressBarService.queryInProgress();
        this.recivedRecipe = [];
        this.searchService.getRecipe({
            receipt: this.recipeNumber,
            type: this.recipeType
        }).then(function (data) {
            _this.progressBarService.queryFinished();
            if (data[0] != null) {
                for (var i in data) {
                    data[i].created_at = data[i].created_at.replace("T", " ");
                }
                _this.recivedRecipe = data;
            }
            _this.notificationService.success("انجام شد", "لیست رسید دریافت شد", { timeOut: 500 });
            if (!data[0] || data[0] == null) {
                _this.noRecipe = true;
            }
        }, function (error) {
            _this.notificationService.error("خطا", "خطا در دریافت رسید,اگر نوع پرداخت را انتخاب نکرده اید آن را انتخاب کنید");
            _this.progressBarService.queryFinished();
        });
    };
    return UserSearchComponent;
}());
UserSearchComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-user-search',
        template: __webpack_require__(638),
        styles: [__webpack_require__(672)],
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__search_service__["a" /* SearchService */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_5__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */]])
], UserSearchComponent);



/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_reset_password_model__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogResetPasswordComponent; });




var DialogResetPasswordComponent = (function () {
    function DialogResetPasswordComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.dialogMessage = new __WEBPACK_IMPORTED_MODULE_3__dialog_reset_password_model__["a" /* DialogResetPasswordModel */]();
    }
    DialogResetPasswordComponent.prototype.resetPassword = function (confirmed) {
        this.dialogMessage.confirmed = confirmed;
        this.dialogRef.close(this.dialogMessage);
    };
    return DialogResetPasswordComponent;
}());
DialogResetPasswordComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'dialog-reset-password',
        template: __webpack_require__(639),
        styles: [__webpack_require__(673)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */]])
], DialogResetPasswordComponent);



/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogResetPasswordModel; });
var DialogResetPasswordModel = (function () {
    function DialogResetPasswordModel() {
    }
    return DialogResetPasswordModel;
}());



/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_search_model__ = __webpack_require__(408);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });




// import { ClanViewComponent } from '../../search/search.component';
var DialogComponent = (function () {
    function DialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.dialogMessage = new __WEBPACK_IMPORTED_MODULE_3__dialog_search_model__["a" /* DialogModel */]();
    }
    DialogComponent.prototype.searchInvcode = function () {
        this.dialogMessage.isSearchByUsername = false;
        this.dialogRef.close(this.dialogMessage);
    };
    DialogComponent.prototype.searchUser = function () {
        this.dialogMessage.isSearchByUsername = true;
        this.dialogRef.close(this.dialogMessage);
    };
    DialogComponent.prototype.searchClan = function () {
        this.dialogMessage.isSearchByUsername = false;
        this.dialogMessage.isSearchByClanname = true;
        this.dialogRef.close(this.dialogMessage);
    };
    return DialogComponent;
}());
DialogComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'dialog-search',
        template: __webpack_require__(640),
        styles: [__webpack_require__(674)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialogRef */]])
], DialogComponent);



/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogModel; });
var DialogModel = (function () {
    function DialogModel() {
    }
    return DialogModel;
}());



/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications_index__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_frauds_service__ = __webpack_require__(413);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FraudsViewComponent; });







var FraudsViewComponent = (function () {
    function FraudsViewComponent(router, notificationsService, progressBarService, fraudsService) {
        this.router = router;
        this.notificationsService = notificationsService;
        this.progressBarService = progressBarService;
        this.fraudsService = fraudsService;
    }
    FraudsViewComponent.prototype.ngOnInit = function () {
        console.log('fraud init called');
    };
    FraudsViewComponent.prototype.getFraudsStats = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.fraudsService.getFraudsStats(this.id).then(function (userFrauds) {
            _this.frauds = userFrauds;
            _this.notificationsService.success("انجام شد", "تخلفات کاربر دریافت شدند", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationsService.error("خطا", "خطا در انجام جست و جو", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    return FraudsViewComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
], FraudsViewComponent.prototype, "id", void 0);
FraudsViewComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'view-frauds',
        template: __webpack_require__(641),
        styles: [__webpack_require__(675)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_4_angular2_notifications_index__["a" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_5__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_6__services_frauds_service__["a" /* FraudsService */]])
], FraudsViewComponent);



/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_statistics_getuserstat_service__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update_gamepercent_service__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameStatisticsComponent; });


// Common services





var GameStatisticsComponent = (function () {
    function GameStatisticsComponent(notificationsService, progressBarService, updateGamePercent, getUserStatsService) {
        this.notificationsService = notificationsService;
        this.progressBarService = progressBarService;
        this.updateGamePercent = updateGamePercent;
        this.getUserStatsService = getUserStatsService;
        // md-slider configuration
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.step = 1;
        this.thumbLabel = true;
        this.showTicks = false;
        this.tickInterval = 10;
        this.vertical = false;
    }
    GameStatisticsComponent.prototype.ngOnInit = function () { };
    GameStatisticsComponent.prototype.updatePercent = function (stat) {
        var _this = this;
        stat.disabled = true;
        this.progressBarService.queryInProgress();
        this.updateGamePercent.updatePercent(this.id, stat.won_number, stat.tie_number, stat.lost_number, stat.perfect_number, stat.won_number_inp, stat.tie_number_inp, stat.lost_number_inp, stat.perfect_number_inp)
            .then(function (s) {
            _this.getUserStat();
            _this.notificationsService.success("Sucess", "Updating category statistics", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("Error", "Updating category statistics Failed", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    GameStatisticsComponent.prototype.sliderChanged = function (stat) {
        stat.disabled = false;
        // console.log("Hello");
    };
    GameStatisticsComponent.prototype.fix_percent = function (stat, isWon) {
        var total = stat.tie_percent + stat.lost_percent + stat.won_percent;
        if (total > 100) {
            stat.tie_percent = stat.tie_percent - (total - 100);
        }
        if (isWon === false) {
            if (total < 100) {
                stat.won_percent = stat.won_percent + (100 - total);
            }
        }
        else if (isWon === true) {
            if (total < 100) {
                stat.lost_percent = stat.lost_percent + (100 - total);
            }
        }
    };
    GameStatisticsComponent.prototype.winChanged = function (stat) {
        this.sliderChanged(stat);
        var diff = 100 - (stat.won_percent + stat.lost_percent + stat.tie_percent);
        var lost_diff = 0;
        var tie_diff = 0;
        if (stat.lost_percent != 0) {
            lost_diff = Math.round(diff * (stat.lost_percent / (stat.lost_percent + stat.tie_percent)));
        }
        if (stat.tie_percent != 0) {
            tie_diff = Math.round(diff * (stat.tie_percent / (stat.lost_percent + stat.tie_percent)));
        }
        stat.tie_percent = stat.tie_percent + tie_diff;
        stat.lost_percent = stat.lost_percent + lost_diff;
        this.fix_percent(stat, true);
    };
    GameStatisticsComponent.prototype.tieChanged = function (stat) {
        this.sliderChanged(stat);
        var diff = 100 - (stat.won_percent + stat.lost_percent + stat.tie_percent);
        stat.lost_percent = stat.lost_percent + diff;
        if (stat.lost_percent < 0) {
            stat.tie_percent = stat.lost_percent + stat.tie_percent;
            stat.lost_percent = 0;
        }
        this.fix_percent(stat, false);
    };
    GameStatisticsComponent.prototype.lostChanged = function (stat) {
        this.sliderChanged(stat);
        var diff = 100 - (stat.won_percent + stat.lost_percent + stat.tie_percent);
        stat.tie_percent = stat.tie_percent + diff;
        if (stat.tie_percent < 0) {
            stat.lost_percent = stat.lost_percent + stat.tie_percent;
            stat.tie_percent = 0;
        }
        this.fix_percent(stat, false);
    };
    // onInputChange(event: any) {
    //     console.log(event);
    // }
    // provide data for gamestatistics
    GameStatisticsComponent.prototype.getUserStat = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.getUserStatsService.getUserStats(this.id).then(function (stats) {
            console.log(stats.disabled);
            _this.userStat = stats;
            _this.notificationsService.success("انجام شد", ".اطلاعات جمع آوری شد", { timeOut: 500 });
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationsService.error("خطا", "خطا در دریافت آمارها");
            _this.progressBarService.queryFinished();
        });
    };
    return GameStatisticsComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
], GameStatisticsComponent.prototype, "id", void 0);
GameStatisticsComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'gamestatistics',
        template: __webpack_require__(643),
        styles: [__webpack_require__(677)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["b" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_3__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_5__update_gamepercent_service__["a" /* UpdateGamePercentService */],
        __WEBPACK_IMPORTED_MODULE_4__services_statistics_getuserstat_service__["a" /* GetUserStatsService */]])
], GameStatisticsComponent);



/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateGamePercentService; });





var UpdateGamePercentService = (function () {
    function UpdateGamePercentService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UpdateGamePercentService.prototype.updatePercent = function (id, won, tie, lost, perfect_game, won_inc, tie_inc, lost_inc, perfect_game_inc) {
        var body = { id: id, won: won, tie: tie, lost: lost, perfect_game: perfect_game, won_inc: won_inc, tie_inc: tie_inc, lost_inc: lost_inc, perfect_game_inc: perfect_game_inc };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_12" /* UpdateUserStatURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateGamePercentService.prototype.extractData = function (res) {
        var body = res.json();
        return body.status;
    };
    UpdateGamePercentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UpdateGamePercentService;
}());
UpdateGamePercentService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], UpdateGamePercentService);



/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_payments_service__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsViewComponent; });



// Common services




var PaymentsViewComponent = (function () {
    function PaymentsViewComponent(router, notificationsService, progressBarService, paymentsService) {
        this.router = router;
        this.notificationsService = notificationsService;
        this.progressBarService = progressBarService;
        this.paymentsService = paymentsService;
    }
    PaymentsViewComponent.prototype.ngOnInit = function () {
        console.log('payment init called');
        //this.setUserId();
    };
    /*setUserId():void{
        console.log('set user id !',this.id);
    }*/
    PaymentsViewComponent.prototype.getPayments = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.paymentsService.getPayments(this.id).then(function (payments) {
            _this.payments = payments;
            _this.notificationsService.success("انجام شد", "پرداخت ها دریافت شد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationsService.error("خطا", "خطا در دریافت پرداخت ها"), { timeOut: 1500 };
            _this.progressBarService.queryFinished();
        });
    };
    PaymentsViewComponent.prototype.checkUserAvatar = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        console.log('check ! ', this.id, this.avatar_id);
        this.paymentsService.checkUserAvatar1(this.id, this.avatar_id).then(function (buyCount) {
            console.log(buyCount);
            _this.buyCount = buyCount;
            _this.notificationsService.success("انجام شد", "لیست کاربران دریافت شد", { timeOut: 500 });
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationsService.error("خطا", "خطا در دریافت کاربران");
            _this.progressBarService.queryFinished();
        });
    };
    return PaymentsViewComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
], PaymentsViewComponent.prototype, "id", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
], PaymentsViewComponent.prototype, "avatar_id", void 0);
PaymentsViewComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'view-payments',
        template: __webpack_require__(644),
        styles: [__webpack_require__(678)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_4__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_5__services_payments_service__["a" /* PaymentsService */]])
], PaymentsViewComponent);



/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FraudsService; });





var FraudsService = (function () {
    function FraudsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    FraudsService.prototype.getFraudsStats = function (id) {
        var body = { id: id };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["_16" /* FraudsURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    FraudsService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.status == true) {
            return body.data.frauds || [];
        }
        else {
            return [];
        }
    };
    FraudsService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return FraudsService;
}());
FraudsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], FraudsService);



/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsService; });





var FriendsService = (function () {
    function FriendsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    FriendsService.prototype.searchFriends = function (id) {
        var body = { userId: id };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_19" /* FriendsURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    FriendsService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.status == true) {
            return body.data.friends_list || [];
        }
        else {
            return [];
        }
    };
    FriendsService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return FriendsService;
}());
FriendsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], FriendsService);



/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockDeviceService; });



// import { UserView } from './view.model';


var LockDeviceService = (function () {
    function LockDeviceService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
    }
    LockDeviceService.prototype.blockDevice = function (id) {
        var body = { id: id };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_11" /* LockDeviceURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    LockDeviceService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.status == true) {
            return body.data.status || [];
        }
        else {
            return [];
        }
    };
    LockDeviceService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return LockDeviceService;
}());
LockDeviceService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], LockDeviceService);



/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsService; });





var PaymentsService = (function () {
    function PaymentsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    PaymentsService.prototype.getPayments = function (id) {
        var body = { id: id };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_17" /* PaymentsURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    PaymentsService.prototype.checkUserAvatar1 = function (id, avatar_id) {
        var body = { id: id, avatar_id: avatar_id };
        console.log(body);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_18" /* CheckUserAvatarURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    PaymentsService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.status == true) {
            return body.data || [];
        }
        else {
            return [];
        }
    };
    PaymentsService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return PaymentsService;
}());
PaymentsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], PaymentsService);



/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_categories_model__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetStatsService; });






var GetStatsService = (function () {
    // private categories = CATEGORIES;
    function GetStatsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
    }
    GetStatsService.prototype.getStats = function (id) {
        var body = { id: id };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__config__["_15" /* GetUserCategoryStatsURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    GetStatsService.prototype.extractData = function (res) {
        var body = res.json();
        var cats = __WEBPACK_IMPORTED_MODULE_3__shared_categories_model__["a" /* CATEGORIES */];
        if (body.status === true) {
            var stats = body.data.user_category_stats;
            var _loop_1 = function (stat) {
                stat.disabled = true;
                stat.category = cats.filter(function (cat) { return stat.category_id === cat.id; })[0].title;
            };
            for (var _i = 0, stats_1 = stats; _i < stats_1.length; _i++) {
                var stat = stats_1[_i];
                _loop_1(stat);
            }
            return stats;
        }
        else {
            return [];
        }
    };
    GetStatsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return GetStatsService;
}());
GetStatsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], GetStatsService);



/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUserStatsService; });





var GetUserStatsService = (function () {
    // private categories = CATEGORIES;
    function GetUserStatsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
    }
    GetUserStatsService.prototype.getUserStats = function (id) {
        var body = { id: id };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_14" /* GetUserStatURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    GetUserStatsService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.status == true) {
            var stat = body.data.user_stats;
            stat.disabled = true;
            return stat;
        }
        else {
            return [];
        }
    };
    GetUserStatsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return GetUserStatsService;
}());
GetUserStatsService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], GetUserStatsService);



/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_statistics_getstats_service__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__update_percent_service__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsViewComponent; });


// Common services





var StatisticsViewComponent = (function () {
    function StatisticsViewComponent(notificationsService, progressBarService, updatePercentService, getStatsService) {
        this.notificationsService = notificationsService;
        this.progressBarService = progressBarService;
        this.updatePercentService = updatePercentService;
        this.getStatsService = getStatsService;
        // md-slider configuration
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.step = 1;
        this.thumbLabel = true;
        this.showTicks = false;
        this.tickInterval = 10;
        this.vertical = false;
    }
    StatisticsViewComponent.prototype.ngOnInit = function () {
    };
    StatisticsViewComponent.prototype.updatePercent = function (stat) {
        var _this = this;
        stat.disabled = true;
        this.progressBarService.queryInProgress();
        this.updatePercentService.updatePercent(this.id, stat.category_id, stat.percent, stat.added_correct_answered)
            .then(function (s) {
            _this.getUserCategoryStats();
            _this.notificationsService.success("Sucess", "Updating category statistics", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("Error", "Updating category statistics Failed", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    // provide data for statistics-view.component
    StatisticsViewComponent.prototype.getUserCategoryStats = function () {
        var _this = this;
        console.log(this.id);
        this.progressBarService.queryInProgress();
        this.getStatsService.getStats(this.id).then(function (stats) {
            _this.userCategoryStats = stats;
            _this.notificationsService.success("انجام شد", ".اطلاعات جمع آوری شد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationsService.error("خطا", "خطا در دریافت آمارها", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    StatisticsViewComponent.prototype.onSliderChange = function (stat) {
        stat.disabled = false;
        // console.log("Hello");
    };
    StatisticsViewComponent.prototype.onInputChange = function (stat) {
        stat.disabled = false;
    };
    return StatisticsViewComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
], StatisticsViewComponent.prototype, "id", void 0);
StatisticsViewComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'view-statistics',
        template: __webpack_require__(645),
        styles: [__webpack_require__(679)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["b" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_3__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_5__update_percent_service__["a" /* UpdatePercentService */],
        __WEBPACK_IMPORTED_MODULE_4__services_statistics_getstats_service__["a" /* GetStatsService */]])
], StatisticsViewComponent);



/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePercentService; });





var UpdatePercentService = (function () {
    function UpdatePercentService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Accept': 'application/json', 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UpdatePercentService.prototype.updatePercent = function (id, category_id, percent, added_correct_answered) {
        var body = { id: id, category_id: category_id, percent: percent, added_correct_answered: added_correct_answered };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_13" /* UserCategoryStatsURL */], JSON.stringify(body), this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdatePercentService.prototype.extractData = function (res) {
        var body = res.json();
        return body.status;
    };
    UpdatePercentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UpdatePercentService;
}());
UpdatePercentService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], UpdatePercentService);



/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateService; });







var UpdateService = (function () {
    function UpdateService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
    }
    UpdateService.prototype.update = function (id, username, email, score, weekly_score, coins, trophies, password, status, level, username_change_time) {
        var body = { id: id, username: username, email: email, score: score, weekly_score: weekly_score, coins: coins, trophies: trophies, password: password, status: status, level: level, username_change_time: username_change_time };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_22" /* UserUpdateURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.increaseUserCoins = function (id, coins) {
        var body = { id: id, coins: coins };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_23" /* IncreaseCoinsSingleURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.increaseUserWeeklyGoldCup = function (id, cups) {
        var body = { id: id, cups: cups };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_24" /* IncreaseWeeklyGoldCupURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.increaseUserWeeklySilverCup = function (id, cups) {
        var body = { id: id, cups: cups };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_25" /* IncreaseWeeklySilverCupURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.increaseUserWeeklyBronzeCup = function (id, cups) {
        var body = { id: id, cups: cups };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_26" /* IncreaseWeeklyBronzeCupURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.increaseUserGoldCup = function (id, cups) {
        var body = { id: id, cups: cups };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["C" /* IncreaseGoldCupURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.increaseUserSilverCup = function (id, cups) {
        var body = { id: id, cups: cups };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_27" /* IncreaseSilverCupURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.increaseUserBronzeCup = function (id, cups) {
        var body = { id: id, cups: cups };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_28" /* IncreaseBronzeCupURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.changeUserName = function (id, username) {
        var body = { id: id, username: username };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_29" /* ChangeUserNameURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.unblockLogin = function (id) {
        var body = { id: id };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_30" /* UserUnblockLoginURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.unblockDeviceIp = function (id) {
        var body = { id: id };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_31" /* UserUnblockIpUrl */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.resetPassword = function (id, password) {
        var body = { id: id, password: password };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_32" /* UserUpdatePasswordURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.publishUser = function (newsID, userID) {
        var body = { news_id: newsID, user_id: userID };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["R" /* PushNewsToUserURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UpdateService.prototype.extractData = function (res) {
        var body = res.json();
        return body.status;
    };
    UpdateService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return UpdateService;
}());
UpdateService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], UpdateService);



/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_service__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__update_service__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_lock_device_service__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialog_search_dialog_search_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialog_search_dialog_search_model__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dialog_reset_password_dialog_reset_password_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dialog_reset_password_dialog_reset_password_model__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__statistics_statistics_view_component__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__payment_payments_view_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gamestatistics_gamestatistics_component__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fraud_fraud_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_switchMap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserViewComponent; });




// basic services


// services







// components





var UserViewComponent = (function () {
    function UserViewComponent(
        // basics
        route, router, dialog, 
        // common
        progressBarService, notificationsService, 
        // component
        viewService, updateService, 
        // children
        lockDevice) {
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.progressBarService = progressBarService;
        this.notificationsService = notificationsService;
        this.viewService = viewService;
        this.updateService = updateService;
        this.lockDevice = lockDevice;
        this.coinIncreaseAmount = 0;
        this.goldCupIncreaseAmount = 0;
        this.silverCupIncreaseAmount = 0;
        this.bronzeCupIncreaseAmount = 0;
        this.weeklyGoldCupIncreaseAmount = 0;
        this.weeklySilverCupIncreaseAmount = 0;
        this.weeklyBronzeCupIncreaseAmount = 0;
        this.newUserName = '';
        this.valid = false;
        // statistics
        this.statisticsDidGet = false;
        // friends
        this.showFriends = false;
        this.friendsDisabled = false;
        // friendsDidGet: boolean = false;
        // @ViewChild(FriendsViewComponent)
        // 	private friendsComponent: FriendsViewComponent;
        // payments
        this.paymentsDisabled = false;
        this.paymentsDidGet = false;
        // game stats
        this.gameStatsDidGet = false;
        this.fraudsDidGet = false;
        this.statsDisabled = false;
        //user statistics
        this.userStatDisabled = false;
        this.statusChoices = [
            { value: "NOT_VERIFIED" },
            { value: "NOT_VALIDATED" },
            { value: "ACTIVE" },
            { value: "DEACTIVATED" },
            { value: "DELETED" },
            { value: "LOCKED" },
            { value: "EXPIRED" }
        ];
        this.dialogMessage = new __WEBPACK_IMPORTED_MODULE_10__dialog_search_dialog_search_model__["a" /* DialogModel */]();
        this.dialogResetPasswordMessage = new __WEBPACK_IMPORTED_MODULE_12__dialog_reset_password_dialog_reset_password_model__["a" /* DialogResetPasswordModel */]();
    }
    UserViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.progressBarService.queryInProgress();
            return _this.viewService.view(+params['id']);
        })
            .subscribe(function (userview_result) {
            userview_result.unlimited_games_expires_at = userview_result.unlimited_games_expires_at.replace("T", " ");
            userview_result.unlimited_games_expires_at = userview_result.unlimited_games_expires_at.replace("Z", " ");
            _this.userview = userview_result;
            // extracting the unique devices
            var obj = {};
            if (_this.userview.devices) {
                for (var i = 0, len = _this.userview.devices.length; i < len; i++)
                    obj[_this.userview.devices[i]['updated_at']] = _this.userview.devices[i];
                _this.userview.devices = new Array();
                for (var key in obj)
                    _this.userview.devices.push(obj[key]);
            }
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.updateDetails = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.updateService.update(+this.userview.id, this.userview.username, this.userview.email, +this.userview.score, +this.userview.weekly_score, +this.userview.coins, +this.userview.trophies, this.userview.password, this.userview.status, +this.userview.level, +this.userview.username_change_time)
            .then(function (s) {
            _this.notificationsService.success("انجام شد", "اطلاعات کاربر بروز رسانی شد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "بروز رسانی با مشکل مواجه شد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.unblockLogin = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.updateService.unblockLogin(+this.userview.id)
            .then(function (s) {
            _this.notificationsService.success("انجام شد", "کاربر از بلاک در آمد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.unblockIp = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.updateService.unblockDeviceIp(+this.userview.id)
            .then(function (s) {
            _this.notificationsService.success("انجام شد", "آی پی کاربر آزاد شد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.alertToUser = function (user_id, news_id) {
        var _this = this;
        if (confirm('آیا اطمینان دارید ؟‌')) {
            this.progressBarService.queryInProgress();
            this.updateService.publishUser(news_id, user_id)
                .then(function (s) {
                _this.notificationsService.success("انجام شد", "هشدار ارسال شد", { timeOut: 1500 });
                _this.progressBarService.queryFinished();
            })
                .catch(function (err) {
                _this.notificationsService.error("خطا", "هشدار ارسال نشد", { timeOut: 1500 });
                _this.progressBarService.queryFinished();
            });
        }
        else {
            // Do nothing!
        }
    };
    UserViewComponent.prototype.onTabIndexChange = function (e) {
        var arrayEvent = e.target.id.split("-");
        var index = arrayEvent[4];
        if (index == 1) {
            this.statisticsDidGet = false;
            this.statisticsComponent.getUserCategoryStats();
        }
        else if (index == 2) {
            this.paymentsDidGet = false;
            this.paymentComponent.getPayments();
        }
        else if (index == 3) {
            this.gameStatsDidGet = false;
            this.fraudsDidGet = false;
            this.gameStatsComponent.getUserStat();
        }
        else if (index == 4) {
            console.log('inja');
            this.fraudsViewComponent.getFraudsStats();
            this.statisticsDidGet = false;
            this.paymentsDidGet = false;
            this.gameStatsDidGet = false;
            this.fraudsDidGet = true;
            this.showFriends = false;
        }
        // this.selectedIndexTab = index % 4;
    };
    UserViewComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__dialog_search_dialog_search_component__["a" /* DialogComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogMessage = result;
            if (_this.dialogMessage && _this.dialogMessage.isSearchByUsername === true) {
                var url = "user/search/" + _this.dialogMessage.searchTerm + "/nil";
                _this.router.navigateByUrl(url);
            }
            else if (_this.dialogMessage && _this.dialogMessage.isSearchByClanname === true) {
                var url = "user/searchclan/" + _this.dialogMessage.searchTerm;
                _this.router.navigateByUrl(url);
            }
            else if (_this.dialogMessage) {
                var url = "user/search/nil/" + _this.dialogMessage.searchTerm;
                _this.router.navigateByUrl(url);
            }
        });
    };
    UserViewComponent.prototype.increaseCoin = function () {
        var _this = this;
        console.log(this.coinIncreaseAmount);
        this.progressBarService.queryInProgress();
        this.updateService.increaseUserCoins(+this.userview.id, this.coinIncreaseAmount)
            .then(function (s) {
            _this.userview.coins += _this.coinIncreaseAmount;
            _this.notificationsService.success("انجام شد", "سکه ها افزایش یافت", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.changeUserName = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.updateService.changeUserName(+this.userview.id, this.newUserName)
            .then(function (s) {
            _this.userview.username = _this.newUserName;
            _this.notificationsService.success("انجام شد", "سکه ها افزایش یافت", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.increaseWeeklyGoldCup = function () {
        var _this = this;
        console.log(this.weeklyGoldCupIncreaseAmount);
        this.progressBarService.queryInProgress();
        this.updateService.increaseUserWeeklyGoldCup(+this.userview.id, this.weeklyGoldCupIncreaseAmount)
            .then(function (s) {
            _this.userview.award_details.weekly_gold_cup += _this.weeklyGoldCupIncreaseAmount;
            _this.notificationsService.success("انجام شد", "کاپ  هفتگی افزایش یافت", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.increaseWeeklySilverCup = function () {
        var _this = this;
        console.log(this.weeklySilverCupIncreaseAmount);
        this.progressBarService.queryInProgress();
        this.updateService.increaseUserWeeklySilverCup(+this.userview.id, this.weeklySilverCupIncreaseAmount)
            .then(function (s) {
            _this.userview.award_details.weekly_silver_cup += _this.weeklySilverCupIncreaseAmount;
            _this.notificationsService.success("انجام شد", "کاپ  هفتگی افزایش یافت", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.increaseWeeklyBronzeCup = function () {
        var _this = this;
        console.log(this.weeklyBronzeCupIncreaseAmount);
        this.progressBarService.queryInProgress();
        this.updateService.increaseUserWeeklyBronzeCup(+this.userview.id, this.weeklyBronzeCupIncreaseAmount)
            .then(function (s) {
            _this.userview.award_details.weekly_bronze_cup += _this.weeklyBronzeCupIncreaseAmount;
            _this.notificationsService.success("انجام شد", "کاپ  هفتگی افزایش یافت", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.increaseGoldCup = function () {
        var _this = this;
        console.log(this.goldCupIncreaseAmount);
        this.progressBarService.queryInProgress();
        this.updateService.increaseUserGoldCup(+this.userview.id, this.goldCupIncreaseAmount)
            .then(function (s) {
            _this.userview.award_details.gold_cup += _this.goldCupIncreaseAmount;
            _this.notificationsService.success("انجام شد", "کاپ ها افزایش یافت", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.increaseSilverCup = function () {
        var _this = this;
        console.log(this.silverCupIncreaseAmount);
        this.progressBarService.queryInProgress();
        this.updateService.increaseUserSilverCup(+this.userview.id, this.silverCupIncreaseAmount)
            .then(function (s) {
            _this.userview.award_details.silver_cup += _this.silverCupIncreaseAmount;
            _this.notificationsService.success("انجام شد", "کاپ ها افزایش یافت", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.increaseBronzeCup = function () {
        var _this = this;
        console.log(this.silverCupIncreaseAmount);
        this.progressBarService.queryInProgress();
        this.updateService.increaseUserBronzeCup(+this.userview.id, this.bronzeCupIncreaseAmount)
            .then(function (s) {
            _this.userview.award_details.bronze_cup += _this.bronzeCupIncreaseAmount;
            _this.notificationsService.success("انجام شد", "کاپ ها افزایش یافت", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "درخواست شما انجام نشد", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.resetPassword = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_11__dialog_reset_password_dialog_reset_password_component__["a" /* DialogResetPasswordComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.dialogResetPasswordMessage = result;
            if (_this.dialogResetPasswordMessage && _this.dialogResetPasswordMessage.confirmed === true) {
                _this.progressBarService.queryInProgress();
                _this.updateService.resetPassword(+_this.userview.id, "123456")
                    .then(function (s) {
                    _this.notificationsService.success("انجام شد", "کلمه‌ی عبور ریست شد", { timeOut: 1500 });
                    _this.progressBarService.queryFinished();
                })
                    .catch(function (err) {
                    _this.notificationsService.error("خطا", "کلمه‌ی عبور ریست نشد", { timeOut: 1500 });
                    _this.progressBarService.queryFinished();
                });
            }
        });
    };
    UserViewComponent.prototype.blockDevice = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.lockDevice.blockDevice(this.userview.id).then(function (stats) {
            if (stats == true) {
                _this.notificationsService.success("انجام شد", ".کاربر مسدود شد", { timeOut: 500 });
                _this.progressBarService.queryFinished();
            }
        }, function (error) {
            _this.notificationsService.error("خطا", "مشکل در بلاک کردن دستگاه");
            _this.progressBarService.queryFinished();
        });
    };
    UserViewComponent.prototype.showFriendsFunc = function () {
        this.showFriends = this.showFriends ? false : true;
    };
    return UserViewComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_13__statistics_statistics_view_component__["a" /* StatisticsViewComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", __WEBPACK_IMPORTED_MODULE_13__statistics_statistics_view_component__["a" /* StatisticsViewComponent */])
], UserViewComponent.prototype, "statisticsComponent", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_14__payment_payments_view_component__["a" /* PaymentsViewComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", __WEBPACK_IMPORTED_MODULE_14__payment_payments_view_component__["a" /* PaymentsViewComponent */])
], UserViewComponent.prototype, "paymentComponent", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_15__gamestatistics_gamestatistics_component__["a" /* GameStatisticsComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", __WEBPACK_IMPORTED_MODULE_15__gamestatistics_gamestatistics_component__["a" /* GameStatisticsComponent */])
], UserViewComponent.prototype, "gameStatsComponent", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_16__fraud_fraud_component__["a" /* FraudsViewComponent */]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", __WEBPACK_IMPORTED_MODULE_16__fraud_fraud_component__["a" /* FraudsViewComponent */])
], UserViewComponent.prototype, "fraudsViewComponent", void 0);
UserViewComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-user-view',
        template: __webpack_require__(646),
        styles: [__webpack_require__(680)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */],
        __WEBPACK_IMPORTED_MODULE_5__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["b" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_6__view_service__["a" /* ViewService */],
        __WEBPACK_IMPORTED_MODULE_7__update_service__["a" /* UpdateService */],
        __WEBPACK_IMPORTED_MODULE_8__services_lock_device_service__["a" /* LockDeviceService */]])
], UserViewComponent);



/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewService; });





var ViewService = (function () {
    function ViewService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
    }
    ViewService.prototype.view = function (id) {
        var body = { id: id };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["_33" /* UserViewURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            var body = res.json();
            if (body.status === true) {
                var ret = body.data.user_details;
                var devices = body.data.devices;
                var allDevices = body.data.all_devices;
                var award_details = body.data.award_details;
                ret.award_details = award_details;
                ret.devices = devices;
                ret.all_devices = allDevices;
                return ret;
            }
            else {
                return [];
            }
        })
            .catch(this.handleError);
    };
    ViewService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.status == true) {
            return body.data.user_details || [];
        }
        else {
            return [];
        }
    };
    ViewService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ViewService;
}());
ViewService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], ViewService);



/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__push_notifications_services_push_notifications_service__ = __webpack_require__(355);
/* unused harmony namespace reexport */
/* unused harmony export PushNotificationsModule */




var PushNotificationsModule = (function () {
    function PushNotificationsModule() {
    }
    return PushNotificationsModule;
}());
PushNotificationsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_2__push_notifications_services_push_notifications_service__["a" /* PushNotificationsService */]]
    })
], PushNotificationsModule);



/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_notifications_components_simple_notifications_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simple_notifications_components_notification_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__simple_notifications_pipes_max_pipe__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__simple_notifications_services_notifications_service__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__simple_notifications_interfaces_icons__ = __webpack_require__(291);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__simple_notifications_services_notifications_service__["a"]; });
/* unused harmony export SimpleNotificationsModule */













var SimpleNotificationsModule = SimpleNotificationsModule_1 = (function () {
    function SimpleNotificationsModule() {
    }
    SimpleNotificationsModule.forRoot = function () {
        return {
            ngModule: SimpleNotificationsModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_7__simple_notifications_services_notifications_service__["a" /* NotificationsService */]]
        };
    };
    return SimpleNotificationsModule;
}());
SimpleNotificationsModule = SimpleNotificationsModule_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__simple_notifications_components_simple_notifications_component__["a" /* SimpleNotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__simple_notifications_components_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__simple_notifications_pipes_max_pipe__["a" /* MaxPipe */]
        ],
        providers: [],
        exports: [__WEBPACK_IMPORTED_MODULE_4__simple_notifications_components_simple_notifications_component__["a" /* SimpleNotificationsComponent */]]
    })
], SimpleNotificationsModule);

var SimpleNotificationsModule_1;


/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserModel; });
var CreateUserModel = (function () {
    function CreateUserModel() {
    }
    return CreateUserModel;
}());



/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROLES; });
var ROLES = [
    { viewValue: 'ADMIN', value: 'ROLE_ADMIN' },
    { viewValue: 'CONTENT', value: 'ROLE_CONTENT' },
    { viewValue: 'PLAYER', value: 'ROLE_PLAYER' },
    { viewValue: 'HAMISUN REVIEWER', value: 'ROLE_HAMISUN_REVIEWER' },
    { viewValue: 'HAMISUN ADMIN', value: 'ROLE_HAMISUN_ADMIN' },
    { viewValue: 'CRM', value: 'ROLE_CRM' },
];


/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STATUS; });
var STATUS = [
    { value: "NOT_VERIFIED", viewValue: 'VERIFIED' },
    { value: "NOT_VALIDATED", viewValue: 'VALIDATED' },
    { value: "ACTIVE", viewValue: 'ACTIVE' },
    { value: "DEACTIVATED", viewValue: 'DEACTIVATED' },
    { value: "DELETED", viewValue: 'DELETED' },
    { value: "LOCKED", viewValue: 'LOCKED' },
    { value: "EXPIRED", viewValue: 'EXPIRED' }
];


/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_user_service__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListUserComponent; });


// Common services




var ListUserComponent = (function () {
    function ListUserComponent(
        // private router: Router,
        notificationsService, progressBarService, updateMultiple) {
        this.notificationsService = notificationsService;
        this.progressBarService = progressBarService;
        this.updateMultiple = updateMultiple;
        this.onClearUser = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.onClearClan = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.doesUserExist = true;
        this.queryInProgress = false;
        this.mode = 'indeterminate';
        this.coins = 500;
    }
    ListUserComponent.prototype.ngOnInit = function () { };
    ListUserComponent.prototype.ngDoCheck = function () {
        this.doesUserExist = this.users.length > 0 ? true : false;
    };
    ListUserComponent.prototype.clearUser = function (user) {
        this.users = this.users.filter(function (u) { return u !== user; });
        this.onClearUser.emit(this.users);
    };
    ListUserComponent.prototype.clearClan = function (clan) {
        this.clans = this.clans.filter(function (u) { return u !== clan; });
        this.onClearClan.emit(this.clans);
    };
    ListUserComponent.prototype.emitUsersEmpty = function () {
        this.users = [];
        this.onClearUser.emit(this.users);
    };
    ListUserComponent.prototype.extractIDs = function () {
        var ids = [];
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            ids.push(user.user_id);
        }
        return ids;
    };
    ListUserComponent.prototype.blockMultiple = function () {
        var _this = this;
        this.queryInProgress = true;
        this.updateMultiple.blockMultiple(this.extractIDs()).then(function (res) {
            // this.emitUsersEmpty();
            _this.notificationsService.success("Success", "کاربران بلاک شدند", { timeOut: 700 });
            _this.queryInProgress = false;
        }, function (error) {
            _this.notificationsService.error("Error", error), { timeOut: 1000 };
            _this.queryInProgress = false;
        });
    };
    ListUserComponent.prototype.unblockMultiple = function () {
        var _this = this;
        this.queryInProgress = true;
        this.updateMultiple.unblockMultiple(this.extractIDs()).then(function (res) {
            // this.emitUsersEmpty();
            _this.notificationsService.success("Success", "کاربران بلاک شدند", { timeOut: 700 });
            _this.queryInProgress = false;
        }, function (error) {
            _this.notificationsService.error("Error", error), { timeOut: 1000 };
            _this.queryInProgress = false;
        });
    };
    ListUserComponent.prototype.increaseCoins = function () {
        var _this = this;
        this.queryInProgress = true;
        this.updateMultiple.increaseCoins(this.extractIDs(), this.coins).then(function (res) {
            // this.emitUsersEmpty();
            _this.notificationsService.success("Success", "سکه‌ی کاربران افزایش یافت", { timeOut: 700 });
            _this.queryInProgress = false;
        }, function (error) {
            _this.notificationsService.error("Error", error, { timeOut: 1000 });
            _this.queryInProgress = false;
        });
    };
    ListUserComponent.prototype.increaseGoldCup = function () {
        var _this = this;
        this.queryInProgress = true;
        this.updateMultiple.increaseGoldCup(this.extractIDs(), this.coins).then(function (res) {
            // this.emitUsersEmpty();
            _this.notificationsService.success("Success", "سکه‌ی کاربران افزایش یافت", { timeOut: 700 });
            _this.queryInProgress = false;
        }, function (error) {
            _this.notificationsService.error("Error", error, { timeOut: 1000 });
            _this.queryInProgress = false;
        });
    };
    ListUserComponent.prototype.clearList = function () {
        this.emitUsersEmpty();
    };
    return ListUserComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Array)
], ListUserComponent.prototype, "users", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Array)
], ListUserComponent.prototype, "clans", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ListUserComponent.prototype, "onClearUser", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], ListUserComponent.prototype, "onClearClan", void 0);
ListUserComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'list-user',
        template: __webpack_require__(637),
        styles: [__webpack_require__(671)]
    }) /*
    @Component({
        selector: 'list-clan',
        template: require('./clan-list-user.component.html'),
        styles: [ require('./clan-list-user.component.css') ]
    })*/,
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["b" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_3__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_4__list_user_service__["a" /* UpdateMultipleService */]])
], ListUserComponent);



/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_friends_service__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsViewComponent; });



// Common services




var FriendsViewComponent = (function () {
    function FriendsViewComponent(router, notificationsService, progressBarService, friendsService) {
        this.router = router;
        this.notificationsService = notificationsService;
        this.progressBarService = progressBarService;
        this.friendsService = friendsService;
        this.onFindFriend = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    FriendsViewComponent.prototype.ngOnInit = function () {
        this.searchFriends();
    };
    FriendsViewComponent.prototype.onSelectFriend = function (friend) {
        var url = "user/view/" + friend.userId;
        this.friends = [];
        this.onFindFriend.emit(4);
        this.router.navigateByUrl(url);
    };
    FriendsViewComponent.prototype.searchFriends = function () {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.friendsService.searchFriends(this.id).then(function (friends) {
            _this.friends = friends;
            _this.notificationsService.success("انجام شد", "دوستان کاربر دریافت شدند", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        }, function (error) {
            _this.notificationsService.error("خطا", "خطا در انجام جست و جو", { timeOut: 1500 });
            _this.progressBarService.queryFinished();
        });
    };
    return FriendsViewComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Number)
], FriendsViewComponent.prototype, "id", void 0);
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], FriendsViewComponent.prototype, "onFindFriend", void 0);
FriendsViewComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'view-friends',
        template: __webpack_require__(642),
        styles: [__webpack_require__(676)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_4__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_5__services_friends_service__["a" /* FriendsService */]])
], FriendsViewComponent);



/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__update_view_component__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_create_component__ = __webpack_require__(401);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });






var routes = [
    { path: 'search', redirectTo: 'search/nil/nil', pathMatch: 'full' },
    { path: 'search/:usr/:inv', component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* UserSearchComponent */] },
    { path: 'searchclan/:clanname', component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* UserSearchComponent */] },
    { path: 'view/:id', component: __WEBPACK_IMPORTED_MODULE_4__update_view_component__["a" /* UserViewComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_5__create_create_component__["a" /* CreateUserComponent */] }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());
UserRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".create-user-card {\r\n    padding-bottom: 2em;\r\n}\r\n\r\n.input-full-width {\r\n    display: list-item;\r\n    width: 40%;\r\n    float: right;\r\n    margin-right: 2em;\r\n    margin-bottom: 2.5em;\r\n}\r\n\r\n.first {\r\n    width: 39%;\r\n    list-style-type: none;\r\n    margin-right: 1.5em;\r\n}\r\n\r\n.progress-spinner {\r\n    float: right;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: relative;\r\n    top: 1.7em;\r\n    right: 1em;\r\n}\r\n\r\n.buttons {\r\n    margin-top: -20px;\r\n    margin-right: 1.5em;\r\n    clear: both;\r\n}\r\n\r\n\r\n\r\n\r\n/*\r\ncheck icon\r\n*/\r\n\r\n.wrapper {\r\n  width: 100px;\r\n  margin: 4em auto 0;\r\n}\r\n\r\n.checkmark {\r\n  stroke: green;\r\n  stroke-dashoffset: 745.74853515625;\r\n  stroke-dasharray: 745.74853515625;\r\n  animation: dash 2s ease-out forwards;\r\n}\r\n\r\n@keyframes dash {\r\n  0% {\r\n    stroke-dashoffset: 745.74853515625;\r\n  }\r\n  100% {\r\n    stroke-dashoffset: 0;\r\n  }\r\n}", ""]);

// exports


/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "\r\nh3 {\r\n    font-family: IRANSansWeb !important;\r\n}\r\n\r\nmd-toolbar {\r\n    height: 3em;\r\n}\r\n\r\n.sticky-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.sticky-progress-spinner {\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n.sticky-shortcut, .sticky-progress-spinner {\r\n  /*padding: 0 14px;*/\r\n  position: relative;\r\n  bottom: 95%;\r\n}\r\n\r\n.header-button {\r\n    /* border-bottom: 1px solid #e3e3e3; */\r\n    width: 33%;\r\n    margin-left: 1%;\r\n    /* height: 24%; */\r\n}\r\n\r\n.card-content {\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n\r\n.material-icons:hover {\r\n    background-color: rgb(0, 188, 212);\r\n    cursor: pointer;\r\n}\r\n\r\n.coins-input {\r\n     /* margin-top: -0.6%;  */\r\n     width: 25%;\r\n}", ""]);

// exports


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".main-search-card {\r\n    margin-bottom: 2%;\r\n}\r\n\r\nmd-card {\r\n    padding: 0;\r\n}\r\n\r\n.card-content {\r\n     padding: 1px; \r\n     margin-bottom: 2px;\r\n     margin-top: 2px;\r\n}\r\n\r\n.card-content:last-child {\r\n    margin-bottom: 20px;\r\n}\r\n\r\nmat-button-ripple {\r\n    display: none;\r\n}\r\n\r\n.users-list {\r\n     width: 45%; \r\n    /* margin-top: -6.5%; */\r\n     float: right; \r\n}\r\n\r\n list-user {\r\n    float: right;\r\n    width: 53%;\r\n    margin-right: 2%;\r\n} \r\n\r\nh3 {\r\n    font-family: IRANSansWeb !important;\r\n}\r\n\r\n.sticky {\r\n\tposition: -webkit-sticky;  \r\n\tposition: sticky;\r\n\ttop: 0;\r\n    z-index: 2;\r\n}\r\n\r\n.show-details {\r\n    padding-right: 1em !important;\r\n}\r\n\r\n.show-details:hover {\r\n    /* background-color: rgb(0, 188, 212); */\r\n    border: 2px dashed rgb(0, 188, 212);\r\n    cursor: pointer;\r\n}\r\n\r\n.show-details:last-child {\r\n    margin-right: 3%;\r\n}\r\n\r\n .footer {\r\n    clear: both;\r\n}\r\n\r\n.radio-holder > md-radio-button{\r\n    font-size: 16px;\r\n    vertical-align: sub;\r\n    padding: 0 10px;\r\n}\r\n.recipe-block{\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    font-size: 16px;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n\r\n}\r\n.list-container{\r\n    border-top: 1px solid #757575;\r\n    padding: 10px 0;\r\n\r\n}\r\n\r\n.list-container .mat-ripple{\r\n    overflow: visible !important;\r\n}\r\n.list-container:first-child{\r\n    border-top: 0;\r\n}\r\n\r\n@media (max-width: 757px) {\r\n    .mat-radio-button{\r\n        width: 100%;\r\n    }\r\n    .responsive-margin{\r\n        margin: 20px 0;\r\n    }\r\n}\r\n\r\nspan.gray{\r\n    color: #757575;\r\n}\r\nspan.black{\r\n    color: #000;\r\n}\r\n/*rgb(228, 245, 247)*/\r\n/*rgb(227, 231, 234)*/", ""]);

// exports


/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "/*.centered {\r\n    margin: auto;\r\n    width: 50%;\r\n}*/\r\n\r\n.dialog-input {\r\n    width: 95%;\r\n}", ""]);

// exports


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "/*.centered {\r\n    margin: auto;\r\n    width: 50%;\r\n}*/\r\n\r\n.dialog-input {\r\n    width: 95%;\r\n}", ""]);

// exports


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".red-color\r\n{\r\n    color: #fe6565;\r\n}\r\n.gray-color\r\n{\r\n    color:gray;\r\n}", ""]);

// exports


/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".sticky {\r\n    height: 3em;\r\n}\r\n\r\n.sticky-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n.sticky-shortcut {\r\n    position: relative;\r\n    bottom: 95%;\r\n}\r\n\r\n.friends-card-info {\r\n    margin-bottom: 25px;\r\n}\r\n\r\nh3 {\r\n    font-family: IRANSansWeb !important;\r\n}\r\n\r\nmd-list-item {\r\n    width: 30% !important;\r\n    float: right;\r\n}\r\n\r\nmd-list-item:hover {\r\n    background-color: rgb(0, 188, 212);\r\n    cursor: pointer;\r\n}\r\n\r\n.footer {\r\n    clear: both;\r\n}", ""]);

// exports


/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".percent-info-card {\r\n     /* margin-right: 7.5% !important; */\r\n    /* width: 100%;   */\r\n}\r\n\r\n.card-content {\r\n    /* margin-right: 7.5% !important; */\r\n     width: 80%; \r\n}\r\n.sticky {\r\n\t/* position: -webkit-sticky;\r\n\tposition: sticky; */\r\n\t/* top: 0; */\r\n    /* height: 3em; */\r\n    /* z-index: 2; */\r\n}\r\n\r\n.sticky-shortcut {\r\n\r\n}\r\n\r\n.slider {\r\n    top: 15px;\r\n    width: 80%;\r\n    /* direction: ltr; */\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".sticky {\r\n    height: 3em;\r\n}\r\n\r\n.sticky-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n.sticky-shortcut {\r\n    position: relative;\r\n    bottom: 95%;\r\n}\r\n\r\n.friends-info-card {\r\n    z-index: 1;\r\n}\r\n.holder{\r\n    padding: 20px;\r\n}\r\nh3 {\r\n    font-family: IRANSansWeb !important;\r\n}\r\n\r\nmd-list-item:hover {\r\n    background-color: rgb(0, 188, 212);\r\n    cursor: pointer;\r\n}\r\n\r\n.buttons > button{\r\n    text-align: center;\r\n    font-size:17px;\r\n    border-radius: 3px;\r\n}\r\n/*table, th, td {\r\n    border: 1px solid black;\r\n}*/", ""]);

// exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".sticky {\r\n    height: 3em;\r\n}\r\n/*.example-icon {\r\n  padding: 0 14px;\r\n}*/\r\n.sticky-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n.sticky-shortcut {\r\n  /*padding: 0 14px;*/\r\n    position: relative;\r\n    bottom: 95%;\r\n}\r\n\r\n.percent-info-card {\r\n    z-index: 1;\r\n}\r\n\r\n.slider {\r\n    width: 80%;\r\n    top: 15px;\r\n    direction: ltr;\r\n}\r\n\r\n\r\nth ,td {\r\n    text-align: center !important;\r\n}\r\n\r\n#stat {\r\n    font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\n#stat td, #stat th {\r\n    border: 1px solid #ddd;\r\n    padding: 8px;\r\n}\r\n\r\n#stat tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#stat tr:hover {background-color: #ddd;}\r\n\r\n#stat th {\r\n    padding-top: 12px;\r\n    padding-bottom: 12px;\r\n    text-align: center;\r\n    background-color: #3f51b5;\r\n    color: white;\r\n}", ""]);

// exports


/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "/deep/ .mat-tab-label{\r\n  font-family: IRANSansWeb !important;\r\n}\r\n\r\n.sticky {\r\n\t  /* position: -webkit-sticky;     */\r\n\t position: sticky; \r\n\t  top: 0;  \r\n    height: 3em;   \r\n    z-index: 2;  \r\n}\r\n\r\n/* .sticky-row {\r\n  position: relative;\r\n  bottom: 70px !important;\r\n} */\r\n\r\n/* .tabs {\r\n  position: relative;\r\n  z-index: 1;\r\n} */\r\n\r\n/*.example-icon {\r\n  padding: 0 14px;\r\n}*/\r\n\r\n\r\n.time-class\r\n{\r\n    direction: ltr;\r\n    text-align: center;\r\n}\r\n.sticky-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.sticky-shortcut {\r\n  /*padding: 0 14px;*/\r\n   margin-right: 20px;\r\n  /* position: relative;\r\n  bottom: 95%;  */\r\n}\r\n\r\n.material-icons:hover {\r\n    /*background-color: rgb(0, 188, 212);*/\r\n    cursor: pointer;\r\n}\r\n\r\n.user-info-card {\r\n  position: relative;\r\n  z-index: 1;\r\n  /*float: right;*/\r\n  padding-bottom: 2em;\r\n  padding-top: 2em;\r\n  margin-bottom: 3em;\r\n}\r\n\r\n.device-info-card {\r\n  padding-top: 1.5em;\r\n  /*float: right;*/\r\n  /*width: 15%;*/\r\n}\r\n\r\n.user-info-title {\r\n  /*margin-top: 10px;*/\r\n  margin-right: 2em;\r\n  display: inline;\r\n}\r\n\r\n.friends-card {\r\n  margin-bottom: 50px;\r\n}\r\n\r\nh3 {\r\n    font-family: IRANSansWeb !important;\r\n}\r\n\r\nmd-list-item:hover {\r\n    background-color: rgb(0, 188, 212);\r\n    cursor: pointer;\r\n}\r\n\r\ntable, th, td {\r\n    border: 1px solid black;\r\n}\r\n\r\n.paying-image {\r\n  width: 40px;\r\n  height: 40px;\r\n  /*margin-right: 1%;*/\r\n  /*margin-left: -4%;*/\r\n  /* background: red; */\r\n  /* display: inline-block; */\r\n  /* margin: 3em; */\r\n  /* background-image: url('../../../assets/img/dollar-coins.png');  */\r\n  /* background-size: contain; */\r\n  /* background-repeat: no-repeat; */\r\n  /* z-index: 1000; */\r\n}\r\n\r\n.increase-coin {\r\n  display: inline-block;\r\n  width: 12%;\r\n   margin-right: 2%; \r\n}\r\n\r\n.increase-coin-button {\r\n  position: relative;\r\n  top: 0.5em;\r\n}\r\n\r\n.user-info {\r\n    display: list-item;\r\n    list-style-type: none;\r\n    width: 25%;\r\n    float: left;\r\n    margin-left: 5em;\r\n    /*margin-bottom: 1.7em;*/\r\n    padding-bottom: 1em;\r\n}\r\n\r\n.user-info-stat {\r\n  margin-top: 1em !important;\r\n}\r\n\r\n.user-select {\r\n  margin-right: 3em;\r\n  /*margin-bottom: 2em;*/\r\n  /*display: block;*/\r\n}\r\n\r\n.devices-info-title {\r\n  margin-right: 1em;\r\n  margin-top: 1.5em;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.device-info {\r\n  width: 9%;\r\n  margin-right: 2em;\r\n}\r\n\r\n.device-container {\r\n  width: 90%;\r\n  padding: 2em;\r\n  border-bottom: 2px solid #e3e3e3;\r\n}\r\n\r\n.device-container:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.footer {\r\n  clear: both; \r\n}\r\n\r\n.hide {\r\n  /* display:none; */\r\n  /* visibility: hidden; */\r\n}", ""]);

// exports


/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "<form #formCtrl=\"ngForm\" class=\"user-form\">\r\n<md-card class=\"create-user-card\">\r\n\r\n    <!--<div md-card-avatar class=\"create-header-image\"></div>-->\r\n    <md-toolbar color=\"primary\">پنل ساخت کاربر</md-toolbar>\r\n    <!--<md-card-subtitle>Dog Breed</md-card-subtitle>-->\r\n\r\n  <!--<img md-card-image src=\"assets/img/examples/shiba2.jpg\">-->\r\n\r\n  <md-card-content>\r\n\r\n            <md-progress-spinner\r\n              class=\"progress-spinner\"\r\n              [color]=\"spinnerColor\"\r\n              [mode]=\"mode\"\r\n              [value]=\"spinnerValue\">\r\n            </md-progress-spinner>\r\n\r\n            <!--<div *ngIf=\"show\" class=\"wrapper\">\r\n              <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n                viewBox=\"0 0 98.5 98.5\" enable-background=\"new 0 0 98.5 98.5\" xml:space=\"preserve\">\r\n                <path class=\"checkmark\" fill=\"none\" stroke-width=\"8\" stroke-miterlimit=\"10\" d=\"M81.7,17.8C73.5,9.3,62,4,49.2,4\r\n                C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3\"/>\r\n              </svg>\r\n            </div>-->\r\n            <md-input-container class=\"input-full-width first\">\r\n            \r\n            <input mdInput [(ngModel)]=\"user.username\" placeholder=\"نام کاربری\"\r\n                   required type=\"text\" name=\"username\" (blur)=\"onBlur()\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"input-full-width\">\r\n            <input mdInput [(ngModel)]=\"user.password\" placeholder=\"رمز عبور\"\r\n                   required type=\"password\" name=\"password\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"input-full-width\">\r\n            <input mdInput [(ngModel)]=\"user.coins\" placeholder=\"تعداد سکه‌ها\" value=\"500\"\r\n                   required type=\"number\" name=\"coins\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"input-full-width\">\r\n            <input mdInput [(ngModel)]=\"user.level\" placeholder=\"سطح\"\r\n                   required type=\"number\" name=\"level\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"input-full-width\">\r\n            <input mdInput [(ngModel)]=\"user.score\" placeholder=\"امتیاز\"\r\n                   required type=\"number\" name=\"score\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"input-full-width\">\r\n            <input mdInput [(ngModel)]=\"user.weekly_score\" placeholder=\"امتیاز هفتگی\"\r\n                   required type=\"number\" name=\"weekly_score\">\r\n            </md-input-container>\r\n\r\n            <md-input-container class=\"input-full-width\">\r\n            <input mdInput [(ngModel)]=\"user.trophies\" placeholder=\"ستاره ها\"\r\n                   required type=\"number\" name=\"trophies\">\r\n            </md-input-container>\r\n\r\n            <md-select class=\"input-full-width\" required placeholder=\"نقش کاربر\" [(ngModel)]=\"user.role\" name=\"role\">\r\n              <md-option *ngFor=\"let role of roles\" [value]=\"role.value\">\r\n                {{role.viewValue}}\r\n              </md-option>\r\n            </md-select>\r\n\r\n            <md-select class=\"input-full-width\" required placeholder=\"وضعیت\" [(ngModel)]=\"user.status\" name=\"status\">\r\n              <md-option *ngFor=\"let stat of status\" [value]=\"stat.value\">\r\n                {{stat.viewValue}}\r\n              </md-option>\r\n            </md-select>\r\n\r\n\r\n  </md-card-content>\r\n\r\n  <md-card-actions class=\"buttons\">\r\n    <button md-button [disabled]=\"!formCtrl.form.valid\" (click)=\"createUser()\">ساختن</button>\r\n    <button md-button (click)=\"goBack()\">بازگشت</button>\r\n  </md-card-actions>\r\n</md-card>\r\n</form>\r\n"

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"users\" class=\"users-list\">\r\n    <md-toolbar color=\"primary\">\r\n        <md-toolbar-row>\r\n                  <span class=\"sticky-shortcut\">لیست کاربران انتخاب شده</span>\r\n                  <span class=\"sticky-spacer\"></span>\r\n                  <md-progress-spinner *ngIf=\"queryInProgress\"\r\n                    class=\"sticky-progress-spinner\"\r\n                    color=\"warn\"\r\n                    [mode]=\"mode\">\r\n                  </md-progress-spinner>\r\n        </md-toolbar-row>\r\n    </md-toolbar>\r\n\r\n    <md-card-header *ngIf=\"doesUserExist\">\r\n      <!-- <button class=\"header-button\" (click)=\"blockMultiple()\" md-button >بلاک</button> -->\r\n      <button class=\"header-button\" (click)=\"clearList()\" md-button >پاک کردن لیست</button>\r\n      <button class=\"header-button\" (click)=\"increaseCoins()\" md-button >افزایش سکه‌ها</button>\r\n      <button class=\"header-button\" (click)=\"unblockMultiple()\" md-button >آنبلاک</button>\r\n      <md-input-container class=\"coins-input\">\r\n\r\n        <input [(ngModel)]=\"coins\" mdInput type=\"number\" placeholder=\"سکه\">\r\n      </md-input-container>\r\n    </md-card-header>\r\n\r\n    <div class=\"card-content\" dir=\"rtl\">\r\n            <md-list>\r\n\r\n            <md-list-item *ngFor=\"let user of users\">\r\n\r\n                <h4 md-line *ngIf=\"user.username\">{{user.username}}</h4>\r\n                <h4 md-line *ngIf=\"user.code\">{{user.code}}</h4>\r\n                <i class=\"material-icons\" (click)=\"clearUser(user)\" mdTooltip=\"حذف از لیست\" >clear</i>\r\n            </md-list-item>\r\n            </md-list>\r\n    </div>\r\n</md-card>"

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"main-search-card\">\r\n    <md-toolbar color=\"primary\">جستجوی کاربران/گروه</md-toolbar>\r\n    <div class=\"card-content\">\r\n        <md-input-container>\r\n            <input #searchedName (keyup.enter)=\"leven(searchedName.value); searchedName.value=''\" mdInput placeholder=\"نام کاربری\">\r\n        </md-input-container>\r\n        <!-- <button (click)=\"search(searchedName.value); searchedName.value=''\"\r\n                class=\"btn\" md-raised-button color=\"primary\">جستجو\r\n        </button> -->\r\n\r\n        <button (click)=\"leven(searchedName.value); searchedName.value=''\"\r\n                class=\"btn\" md-raised-button color=\"primary\">جست و جو\r\n        </button>\r\n    </div>\r\n    <div class=\"card-content\">\r\n        <md-input-container>\r\n            <input #searchedClan (keyup.enter)=\"clanMembers(searchedClan.value)\" mdInput placeholder=\"نام گروه\">\r\n        </md-input-container>\r\n        <button (click)=\"clanMembers(searchedClan.value)\"\r\n            class=\"btn\" md-raised-button color=\"primary\">جست و جو\r\n        </button>\r\n    </div>\r\n    <div class=\"card-content\">\r\n        <md-input-container>\r\n            <input #searchedCode (keyup.enter)=\"searchCode(searchedCode.value); searchedCode.value=''\" mdInput placeholder=\"کد دعوت\">\r\n        </md-input-container>\r\n        <button (click)=\"searchCode(searchedCode.value); searchedCode.value=''\"\r\n                class=\"btn\" md-raised-button color=\"primary\">جست و جو\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"card-content recipe\">\r\n        <md-input-container>\r\n            <input  [(ngModel)]=\"recipeNumber\" mdInput placeholder=\"دریافت رسید\">\r\n        </md-input-container>\r\n        <md-radio-group [(ngModel)]=\"recipeType\" class=\"radio-holder\">\r\n            <md-radio-button value=\"direct\" class=\"md-primary\">مستقیم</md-radio-button>\r\n            <md-radio-button value=\"sibche\"> سیبچه </md-radio-button>\r\n            <md-radio-button value=\"other\">سایر موادر</md-radio-button>\r\n        </md-radio-group>\r\n        <button (click)=\"searchRecipe()\" class=\"btn responsive-margin\" md-raised-button color=\"primary\">\r\n            جست و جو\r\n        </button>\r\n    </div>\r\n\r\n</md-card>\r\n\r\n<div class=\"recipe-list\">\r\n    <md-card *ngIf=\"recivedRecipe.length > 0\">\r\n        <md-toolbar color=\"primary\">رسید</md-toolbar>\r\n        <div class=\"card-content\" dir=\"rtl\">\r\n            <md-list>\r\n                <h3 md-subheader>نتایج جست و جو</h3>\r\n                <md-list-item class=\"show-list list-container\" *ngFor=\"let recipe of recivedRecipe\">\r\n                        <div class=\"recipe-block\">\r\n                            <span class=\"gray\">شماره رسید :</span>\r\n                            <span class=\"black\">{{recipe.id}}</span>\r\n                        </div>\r\n                        <div class=\"recipe-block\">\r\n                            <span class=\"gray\">شماره بازیکن :</span>\r\n                            <span class=\"black\">{{recipe.player_id}}</span>\r\n                        </div>\r\n                        <div class=\"recipe-block\">\r\n                            <span class=\"gray\">مقدار :</span>\r\n                            <span class=\"black\">  {{recipe.amount}} تومان</span>\r\n                        </div>\r\n                        <div class=\"recipe-block\">\r\n                            <span class=\"gray\">وضعیت :</span>\r\n                            <span class=\"black\">{{recipe.status}}</span>\r\n                        </div>\r\n                        <div class=\"recipe-block\">\r\n                            <span class=\"gray\">شماره بسته :</span>\r\n                            <span class=\"black\">{{recipe.package_id}}</span>\r\n                        </div>\r\n                        <div class=\"recipe-block min-width\">\r\n                            <span class=\"gray\">date :</span>\r\n                            <span class=\"black\">{{recipe.created_at}}</span>\r\n                        </div>\r\n                </md-list-item>\r\n            </md-list>\r\n        </div>\r\n    </md-card>\r\n    <md-card *ngIf=\"noRecipe\">\r\n        <md-toolbar color=\"primary\">رسید</md-toolbar>\r\n        <div class=\"card-content\" dir=\"rtl\">\r\n            <md-list>\r\n                <h3 md-subheader>نتایج جست و جو</h3>\r\n                <md-list-item class=\"show-list\">\r\n\r\n                    رسیدی با این مشخصات موجود نمی باشد\r\n\r\n                </md-list-item>\r\n            </md-list>\r\n        </div>\r\n    </md-card>\r\n</div>\r\n<div class=\"clans-list\">\r\n    <md-card *ngIf=\"clans\">\r\n        <md-toolbar color=\"primary\">نتایج گروه</md-toolbar>\r\n        <div class=\"card-content\" dir=\"rtl\">\r\n                <md-list>\r\n                <h3 md-subheader>نتایج جست و جو</h3>\r\n                <md-list-item class=\"show-list\" *ngFor=\"let clan of clans\">\r\n                    <!-- <i md-list-icon class=\"material-icons\" (click)=\"onSelect(user)\" mdTooltip=\"مشاهده‌ی جزئیات\">open_in_new</i> -->\r\n\r\n                    <!-- <p  md-line *ngIf=\"user.username\">نام کاربری</p> -->\r\n                    <h4 class=\"show-details\" md-line (click)=\"onSelectClan(clan)\" *ngIf=\"clan.title\">{{clan.title}}</h4>\r\n                </md-list-item>\r\n                </md-list>\r\n        </div>\r\n    </md-card>\r\n    </div>\r\n<div class=\"users-list\">\r\n<md-card *ngIf=\"users\">\r\n    <md-toolbar color=\"primary\">نتایج کاربران</md-toolbar>\r\n    <div class=\"card-content\" dir=\"rtl\">\r\n            <md-list>\r\n            <h3 md-subheader>نتایج جست و جو</h3>\r\n            <md-list-item class=\"show-list\" *ngFor=\"let user of users\">\r\n\r\n                <h4 class=\"show-details\" md-line (click)=\"onSelect(user)\" *ngIf=\"user.username\">{{user.username}}</h4>\r\n\r\n                <h4 class=\"show-details\" md-line (click)=\"onSelect(user)\" *ngIf=\"user.code\">{{user.code}}</h4>\r\n                <i class=\"material-icons\" (click)=\"onAddUser(user)\"   mdTooltip=\"اضافه به لیست\">add</i>\r\n                <i class=\"material-icons\" (click)=\"onSelectUserId(user.user_id)\"   mdTooltip=\"لیست سوالات\">list</i>\r\n            </md-list-item>\r\n            </md-list>\r\n    </div>\r\n</md-card>\r\n</div>\r\n\r\n<list-user *ngIf=\"users\" class=\"sticky\" [users]=\"selectedUsers\" (onClearUser)=\"onClearUser($event)\"></list-user>\r\n\r\n<div class=\"footer\"></div>\r\n"

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports = "<div (keyup.enter)=\"resetPassword(true)\" dir=\"rtl\">\r\n    <h1 class=\"centered\" md-dialog-title>هشدار</h1>\r\n    <div md-dialog-content>آیا از ریست شدن تبلیغ اطمینان دارید؟</div>\r\n    <div md-dialog-actions>\r\n    <button md-button (click)=\"resetPassword(true)\">بله</button>\r\n    <button md-button (click)=\"resetPassword(false)\">خیر</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports = "<div dir=\"rtl\">\r\n    <h1 class=\"centered\" md-dialog-title>جست‌وجوی کاربران</h1>\r\n    <md-input-container class=\"dialog-input\">\r\n        <input mdInput placeholder=\"عبارت مورد نظر\"\r\n               [(ngModel)]=\"dialogMessage.searchTerm\"\r\n               (keyup.enter)=\"searchUser()\">\r\n    </md-input-container>\r\n    <div md-dialog-actions>\r\n    <button md-button (click)=\"searchUser()\">جستوجو با نام کاربری</button>\r\n    <button md-button (click)=\"searchInvcode()\">جستوجو با کد دعوت</button>\r\n    <button md-button (click)=\"searchClan()\">جستوجو با نام گروه</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 641:
/***/ (function(module, exports) {

module.exports = "<form #formCtrl=\"ngForm\" class=\"user-form\">\r\n  <md-card class=\"create-user-card\" *ngIf=\"frauds\">\r\n    <md-card-content>\r\n      <h2 md-subheader class=\"gray-color\">\r\n        <i class=\"material-icons sticky-shortcut red-color\">check_circle</i>\r\n        تخلفات بازی معمولی</h2>\r\n      <h3 md-subheader>\r\n        <i class=\"material-icons sticky-shortcut red-color\">description</i>\r\n        وضعیت فعلی\r\n      </h3>\r\n\r\n        <section class=\"user-select\" >\r\n        <md-checkbox [(ngModel)]=\"frauds.normal_game_free_state\" name=\"normalGameFreeState\"  >آزاد</md-checkbox>\r\n          <md-checkbox [(ngModel)]=\"frauds.normal_game_temp_block_state\"  name=\"normalGameTempBlockState\" >سه روز بلاک</md-checkbox>\r\n          <md-checkbox [(ngModel)]=\"frauds.normal_game_permanent_block_state\" name=\"normalGamePermanentBlockState\" >بلاک دائمی</md-checkbox>\r\n        </section>\r\n\r\n\r\n      <h3 md-subheader>\r\n        <i class=\"material-icons sticky-shortcut red-color\">description</i>\r\n        آخرین وضعیت\r\n      </h3>\r\n\r\n      <section class=\"user-select\" >\r\n        <md-checkbox [(ngModel)]=\"frauds.normal_game_free_last_state\" name=\"normalGameFreeLastState\" >آزاد</md-checkbox>\r\n        <md-checkbox [(ngModel)]=\"frauds.normal_game_temp_block_last_state\" name=\"normalGameTempBlockLastState\" >سه روز بلاک</md-checkbox>\r\n        <md-checkbox [(ngModel)]=\"frauds.normal_game_permanent_block_last_state\" name=\"normalGamePermanentBlockLastState\" >بلاک دائمی</md-checkbox>\r\n      </section>\r\n\r\n    </md-card-content>\r\n\r\n    <md-card-content>\r\n      <h2 md-subheader class=\"gray-color\">\r\n        <i class=\"material-icons sticky-shortcut red-color\">check_circle</i>\r\n        تخلفات بازی گروهی</h2>\r\n\r\n      <h3 md-subheader>\r\n        <i class=\"material-icons sticky-shortcut red-color\">description</i>\r\n        وضعیت فعلی\r\n      </h3>\r\n\r\n      <section class=\"user-select\" >\r\n        <md-checkbox [(ngModel)]=\"frauds.clan_game_free_state\"  name=\"clanGameFreeState\" >آزاد</md-checkbox>\r\n        <md-checkbox [(ngModel)]=\"frauds.clan_game_exception_state\" name=\"clanGameExeptionState\" >بلاک از بازی گروهی</md-checkbox>\r\n        <md-checkbox [(ngModel)]=\"frauds.clan_game_temp_block_state\"  name=\"clanGameTempBlockState\">سه روز بلاک</md-checkbox>\r\n        <md-checkbox [(ngModel)]=\"frauds.clan_game_permanent_block_state\" name=\"clanGamePermanentBlockState\">بلاک دائمی</md-checkbox>\r\n      </section>\r\n\r\n\r\n      <h3 md-subheader>\r\n        <i class=\"material-icons sticky-shortcut red-color\">description</i>\r\n        آخرین وضعیت\r\n      </h3>\r\n\r\n      <section class=\"user-select\" >\r\n        <md-checkbox [(ngModel)]=\"frauds.clan_game_free_last_state\" name=\"clanGameFreeLastState\" >آزاد</md-checkbox>\r\n        <md-checkbox [(ngModel)]=\"frauds.clan_game_exception_last_state\" name=\"clanGameExeptionLastState\">بلاک از بازی گروهی</md-checkbox>\r\n        <md-checkbox [(ngModel)]=\"frauds.clan_game_temp_block_last_state\" name=\"clanGameTempBlockLastState\" >سه روز بلاک</md-checkbox>\r\n        <md-checkbox [(ngModel)]=\"frauds.clan_game_permanent_block_last_state\" name=\"clanGamePermanentBlockLastState\" >بلاک دائمی</md-checkbox>\r\n      </section>\r\n    </md-card-content>\r\n\r\n    <md-card-content>\r\n      <h2 md-subheader>تخلفات لیگ ستاره (....coming soon)</h2>\r\n    </md-card-content>\r\n  </md-card>\r\n  </form>\r\n"

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"friends-card-info\">\r\n\r\n  <div class=\"card-content\" dir=\"rtl\">\r\n    <md-list>\r\n      <h3 md-subheader>لیست دوستان</h3>\r\n      <md-list-item class=\"item\" (click)=\"onSelectFriend(friend)\" *ngFor=\"let friend of friends\">\r\n        <!-- <md-icon md-list-icon>folder</md-icon> -->\r\n\r\n        <!-- <p md-line *ngIf=\"friend.username\">نام کاربری</p> -->\r\n        <h4 md-line *ngIf=\"friend.username\">{{friend.username}}</h4>\r\n\r\n      </md-list-item>\r\n      <div class=\"footer\"></div>\r\n    </md-list>\r\n  </div>\r\n</md-card>"

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"percent-info-card\" *ngIf=\"userStat\">\r\n    <div class=\"card-content\" dir=\"rtl\" >\r\n      <table style=\"width:100%\">\r\n       <tr>\r\n          <th><div >برد</div></th>\r\n          <th>\r\n            <md-input-container class=\"percentage-input\">\r\n                <input class=\"percent-input\" mdInput placeholder=\"تعداد\"\r\n                       type=\"number\" [(ngModel)]=\"userStat.won_number_inp\" >\r\n            </md-input-container>\r\n          </th>\r\n          <th>\r\n              <md-input-container class=\"percentage-input\">\r\n                  <input disabled class=\"percent-input\" mdInput placeholder=\"تعداد\"\r\n                         type=\"number\" [(ngModel)]=\"userStat.won_number\" >\r\n            </md-input-container>\r\n              <!-- <md-slider\r\n                class=\"slider\"\r\n                [(ngModel)]=\"userStat.won_percent\"\r\n                (change)=\"winChanged(userStat)\"\r\n                [max]=\"max\"\r\n                [min]=\"min\"\r\n                [step]=\"step\"\r\n                [thumb-label]=\"thumbLabel\"\r\n                [tick-interval]=\"tickInterval\"\r\n                [value]=\"userStat.won_percent\"\r\n                [disabled]=\"disabled\"\r\n                [invert]=\"invert\"\r\n                [vertical]=\"vertical\">\r\n              </md-slider> -->\r\n          </th>\r\n          <th><md-input-container class=\"percentage-input\">\r\n                <input disabled class=\"percent-input\" mdInput placeholder=\"درصد\"\r\n                       type=\"number\" [(ngModel)]=\"userStat.won_percent\" > <!--(change)=\"winChanged(userStat)\"-->\r\n          </md-input-container></th>\r\n          <!--(input)=\"onInputChange($event)\"-->\r\n       </tr>\r\n\r\n       <tr>\r\n          <th><div >باخت</div></th>\r\n          <th>\r\n            <md-input-container class=\"percentage-input\">\r\n                <input class=\"percent-input\" mdInput placeholder=\"تعداد\"\r\n                       type=\"number\" [(ngModel)]=\"userStat.lost_number_inp\" >\r\n          </md-input-container>\r\n          </th>\r\n          <th>\r\n              <md-input-container class=\"percentage-input\">\r\n                  <input  disabled class=\"percent-input\" mdInput placeholder=\"تعداد\"\r\n                         type=\"number\" [(ngModel)]=\"userStat.lost_number\" >\r\n            </md-input-container>\r\n              <!-- <md-slider\r\n                class=\"slider\"\r\n                [(ngModel)]=\"userStat.lost_percent\"\r\n                (change)=\"lostChanged(userStat)\"\r\n                [max]=\"max\"\r\n                [min]=\"min\"\r\n                [step]=\"step\"\r\n                [thumb-label]=\"thumbLabel\"\r\n                [tick-interval]=\"tickInterval\"\r\n                [value]=\"userStat.lost_percent\"\r\n                [disabled]=\"disabled\"\r\n                [invert]=\"invert\"\r\n                [vertical]=\"vertical\">\r\n              </md-slider> -->\r\n          </th>\r\n          <th><md-input-container class=\"percentage-input\">\r\n                <input disabled class=\"percent-input\" mdInput placeholder=\"درصد\"\r\n                       type=\"number\" [(ngModel)]=\"userStat.lost_percent\" > <!--(change)=\"lostChanged(userStat)\"-->\r\n          </md-input-container></th>\r\n          <!--(input)=\"onInputChange($event)\"-->\r\n       </tr>\r\n\r\n       <tr>\r\n          <th><div >مساوی</div></th>\r\n          <th>\r\n            <md-input-container class=\"percentage-input\">\r\n                <input class=\"percent-input\" mdInput placeholder=\"تعداد\"\r\n                       type=\"number\" [(ngModel)]=\"userStat.tie_number_inp\" >\r\n          </md-input-container>\r\n          </th>\r\n          <th>\r\n              <md-input-container class=\"percentage-input\">\r\n                  <input disabled class=\"percent-input\" mdInput placeholder=\"تعداد\"\r\n                         type=\"number\" [(ngModel)]=\"userStat.tie_number\" >\r\n            </md-input-container>\r\n              <!-- <md-slider\r\n                class=\"slider\"\r\n                [(ngModel)]=\"userStat.tie_percent\"\r\n                (change)=\"tieChanged(userStat)\"\r\n                [max]=\"max\"\r\n                [min]=\"min\"\r\n                [step]=\"step\"\r\n                [thumb-label]=\"thumbLabel\"\r\n                [tick-interval]=\"tickInterval\"\r\n                [value]=\"userStat.tie_percent\"\r\n                [disabled]=\"disabled\"\r\n                [invert]=\"invert\"\r\n                [vertical]=\"vertical\">\r\n              </md-slider> -->\r\n          </th>\r\n          <th><md-input-container class=\"percentage-input\">\r\n                <input disabled class=\"percent-input\" mdInput placeholder=\"درصد\"\r\n                       type=\"number\" [(ngModel)]=\"userStat.tie_percent\" > <!--(change)=\"tieChanged(userStat)\"-->\r\n          </md-input-container></th>\r\n          <!--(input)=\"onInputChange($event)\"-->\r\n       </tr>\r\n\r\n       <tr>\r\n          <th><div >بی اشتباه</div></th>\r\n          <th>\r\n            <md-input-container class=\"percentage-input\">\r\n                <input class=\"percent-input\" mdInput placeholder=\"تعداد\"\r\n                       type=\"number\" [(ngModel)]=\"userStat.perfect_number_inp\" >\r\n          </md-input-container>\r\n        </th>\r\n          <th>\r\n              <md-input-container class=\"percentage-input\">\r\n                  <input disabled class=\"percent-input\" mdInput placeholder=\"تعداد\"\r\n                         type=\"number\" [(ngModel)]=\"userStat.perfect_number\" >\r\n            </md-input-container>\r\n          </th>\r\n          <th></th>\r\n       </tr>\r\n\r\n       <tr>\r\n          <th><div >تعداد کل</div></th>\r\n          <th>\r\n              <md-input-container class=\"percentage-input\">\r\n                  <input  disabled class=\"percent-input\" mdInput placeholder=\"تعداد\"\r\n                         type=\"number\" [(ngModel)]=\"userStat.games_played\" >\r\n            </md-input-container>\r\n          </th>\r\n          <th></th>\r\n       </tr>\r\n\r\n\r\n     </table>\r\n\r\n     <button md-button  class=\"sticky-shortcut\" (click)=\"updatePercent(this.userStat)\" > <!--[disabled]=\"userStat.disabled\" -->\r\n               بروز‌ رسانی\r\n     </button>\r\n    </div>\r\n</md-card>\r\n"

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports = "<form #formCtrl=\"ngForm\" class=\"user-form\">\r\n  <md-card class=\"create-user-card\">\r\n\r\n    <md-card-content>\r\n      <div class=\"holder\">\r\n        <h3 md-subheader>چک کردن آواتار خریده شده</h3>\r\n\r\n        <!--<md-progress-spinner-->\r\n                <!--class=\"progress-spinner\"-->\r\n                <!--[color]=\"spinnerColor\"-->\r\n                <!--[mode]=\"mode\"-->\r\n                <!--[value]=\"spinnerValue\">-->\r\n        <!--</md-progress-spinner>-->\r\n\r\n        <md-input-container class=\"input-full-width first\">\r\n          <input disabled mdInput [(ngModel)]=\"id\" placeholder=\"شناسه کاربر\"\r\n                 type=\"text\" name=\"id\" >\r\n        </md-input-container>\r\n\r\n        <md-input-container class=\"input-full-width first\">\r\n          <input\r\n                  mdInput [(ngModel)]=\"avatar_id\" placeholder=\"کد آواتار\"\r\n                  required type=\"text\" name=\"avatar_id\">\r\n        </md-input-container>\r\n        <div *ngIf=\"buyCount\" >{{buyCount.buy_count}}</div>\r\n\r\n        <button md-button  [disabled]=\"!formCtrl.form.valid\" (click)=\"checkUserAvatar()\">ساختن</button>\r\n\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n\r\n  </md-card>\r\n  </form>\r\n<br/>\r\n<br/>\r\n<br/>\r\n\r\n<md-card *ngIf=\"payments\" class=\"payments-card-info\">\r\n  <div class=\"card-content\" dir=\"rtl\">\r\n    <md-list>\r\n      <h3 md-subheader>پرداخت ها</h3>\r\n      <table style=\"width:100%\">\r\n        <tr>\r\n          <!-- <th>شناسه</th> -->\r\n          <th>فروشگاه</th>\r\n          <th>مقدارخرید</th>\r\n          <th>زمان خرید</th>\r\n          <!-- <th>زمان مصرف</th> -->\r\n        </tr>\r\n\r\n        <tr *ngFor=\"let payment of payments.userpayments\">\r\n          <!-- <th>{{payment.id}}</th> -->\r\n          <th>{{payment.store}}</th>\r\n          <th>{{payment.amount}}</th>\r\n          <th>{{payment.created_at}}</th>\r\n          <!-- <th>{{payment.updated_at}}</th> -->\r\n        </tr>\r\n      </table>\r\n\r\n      <table>\r\n        <tr>\r\n          <th>کل خرید ریالی</th>\r\n          <th>کل خرید ریالی +اپ استور</th>\r\n          <th>اپ استور</th>\r\n        </tr>\r\n        <tr>\r\n          <th>{{payments.total}}</th>\r\n          <th>{{payments.total_with_sibche}}</th>\r\n          <th>{{payments.total_apple}}</th>\r\n        </tr>\r\n      </table>\r\n      <!-- </md-list-item> -->\r\n    </md-list>\r\n\r\n\r\n  </div>\r\n</md-card>"

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"percent-info-card\">\r\n  <div class=\"card-content\" dir=\"rtl\">\r\n    <table id=\"stat\" style=\"width:100%\">\r\n      <tr>\r\n        <th>بروز رسانی</th>\r\n        <th>موضوع</th>\r\n        <th>درصد</th>\r\n        <th>افزایش/کاهش تعداد پاسخ درست</th>\r\n        <th>تعداد پاسخ درست</th>\r\n        <th>تعداد کل</th>\r\n      </tr>\r\n\r\n      <tr *ngFor=\"let userCatStat of userCategoryStats\">\r\n        <td>\r\n          <button md-button [disabled]=\"userCatStat.disabled\" class=\"sticky-shortcut\" (click)=\"updatePercent(userCatStat)\">\r\n                      بروز‌ رسانی\r\n            </button>\r\n        </td>\r\n        <td>\r\n          <div>{{userCatStat.category}}</div>\r\n        </td>\r\n        <td>\r\n          <md-input-container class=\"percentage-input\">\r\n            <input disabled class=\"percent-input\" mdInput placeholder=\"درصد\" type=\"number\" [(ngModel)]=\"userCatStat.percent\" >\r\n          </md-input-container>\r\n        </td>\r\n        <td>\r\n        <md-input-container class=\"percentage-input\">\r\n          <input class=\"percent-input\" mdInput placeholder=\"تعداد\" type=\"number\" (change)=\"onInputChange(userCatStat)\" [(ngModel)]=\"userCatStat.added_correct_answered\">\r\n        </md-input-container>\r\n        </td>\r\n        <td>\r\n          <md-input-container class=\"percentage-input\">\r\n            <input disabled class=\"percent-input\" mdInput placeholder=\"تعداد پاسخ درست\" type=\"number\" [(ngModel)]=\"userCatStat.correct_answer\">\r\n          </md-input-container>\r\n        </td>\r\n        <td>\r\n          <md-input-container class=\"percentage-input\">\r\n            <input disabled class=\"percent-input\" mdInput placeholder=\"تعداد کل\" type=\"number\" [(ngModel)]=\"userCatStat.total_answer\">\r\n          </md-input-container>\r\n        </td>\r\n      </tr>\r\n\r\n\r\n    </table>\r\n  </div>\r\n</md-card>"

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" class=\"sticky\" *ngIf=\"userview\">\r\n  <!-- <md-toolbar-row class=\"sticky-row\"> -->\r\n    <!-- <span class=\"sticky-shortcut\">میانبر ها</span> -->            \r\n    <!-- <button md-button class=\"sticky-shortcut\" (click)=\"updateDetails()\">ذخیره</button> -->\r\n    <i class=\"material-icons sticky-shortcut\" (click)=\"updateDetails()\" mdTooltip=\"ذخیره\">save</i>\r\n    <i class=\"material-icons sticky-shortcut\" (click)=\"openDialog()\" mdTooltip=\"جست و جو\">search</i>\r\n    <i class=\"material-icons sticky-shortcut\" (click)=\"unblockLogin()\" mdTooltip=\"باز کردن ورود\">lock_open</i>\r\n    <i class=\"material-icons sticky-shortcut\" (click)=\"unblockIp()\" mdTooltip=\"باز کردن آی پی دستگاه \">phone_iphone</i>\r\n    <i class=\"material-icons sticky-shortcut\" (click)=\"alertToUser(userview.id , 281352)\" mdTooltip=\"هشدار به کاربر متخلف\">add_alert</i>\r\n    <i class=\"material-icons sticky-shortcut\" (click)=\"alertToUser(userview.id , 281403)\" mdTooltip=\"اخطار به مدیر و معاونین گروه\">call</i>\r\n    <i class=\"material-icons sticky-shortcut\" (click)=\"alertToUser(userview.id , 281404)\" mdTooltip=\"اخطار عضویت در گروه غیر اخلاقی \">warning</i>\r\n   <!-- <i class=\"material-icons sticky-shortcut\" (click)=\"blockDevice()\" mdTooltip=\"مسدود کردن\">block</i>\r\n    <i class=\"material-icons sticky-shortcut\" (click)=\"resetPassword()\" mdTooltip=\"ریست پسورد\">settings_backup_restore</i>-->\r\n    <span class=\"sticky-spacer\"></span> \r\n    <i class=\"material-icons sticky-shortcut\" (click)=\"showFriendsFunc()\" mdTooltip=\"دوستان\">people</i>\r\n  <!-- </md-toolbar-row> -->\r\n</md-toolbar>\r\n\r\n<md-tab-group class=\"tab-container\" (click)=\"onTabIndexChange($event)\" [selectedIndex]=\"selectedIndexTab\">\r\n  <md-tab class=\"tabs\" label=\"مشاهده جزئیات کاربر\">\r\n\r\n              <md-card class=\"user-info-card\" *ngIf=\"userview\">              \r\n                <img *ngIf=\"userview.is_paying == true\" src=\"../../../assets/img/dollar-coins.png\" class=\"paying-image\" mdTooltip=\"کاربر پرداخت‌ کننده\">\r\n                <md-card-title class=\"user-info-title\">{{userview.username}}</md-card-title>\r\n\r\n                  <md-input-container class=\"increase-coin\">\r\n                      <input mdInput [(ngModel)]=\"newUserName\" placeholder=\"تغییر نام کاربری\" type=\"text\">\r\n                  </md-input-container>\r\n                  <i class=\"material-icons increase-coin-button\" (click)=\"changeUserName()\" mdTooltip=\"تغییر نام کاربری\">check_circle_outline</i>\r\n\r\n\r\n                <md-input-container class=\"increase-coin\">\r\n                  <input mdInput [(ngModel)]=\"coinIncreaseAmount\" placeholder=\"افزایش سکه\" type=\"number\">\r\n                </md-input-container>\r\n                <i class=\"material-icons increase-coin-button\" (click)=\"increaseCoin()\" mdTooltip=\"افزایش تعداد سکه‌ها\">add_circle_outline</i>\r\n<br/>\r\n                &nbsp;&nbsp;&nbsp;&nbsp;\r\n                <md-input-container class=\"increase-gold-cup\">\r\n                  <input mdInput [(ngModel)]=\"goldCupIncreaseAmount\" placeholder=\"افزایش کاپ طلا\" type=\"number\">\r\n                </md-input-container>\r\n                <i class=\"material-icons increase-coin-button\" (click)=\"increaseGoldCup()\" mdTooltip=\"افزایش تعداد کاپ های طلا\">add_circle_outline</i>\r\n\r\n                &nbsp;&nbsp;&nbsp;&nbsp;\r\n                <md-input-container class=\"increase-silver-cup\">\r\n                  <input mdInput [(ngModel)]=\"silverCupIncreaseAmount\" placeholder=\"افزایش کاپ نقره\" type=\"number\">\r\n                </md-input-container>\r\n                <i class=\"material-icons increase-coin-button\" (click)=\"increaseSilverCup()\" mdTooltip=\"افزایش تعداد کاپ های نقره\">add_circle_outline</i>\r\n\r\n                &nbsp;&nbsp;&nbsp;&nbsp;\r\n                <md-input-container class=\"increase-bronze-cup\">\r\n                  <input mdInput [(ngModel)]=\"bronzeCupIncreaseAmount\" placeholder=\"افزایش کاپ برنز\" type=\"number\">\r\n                </md-input-container>\r\n                <i class=\"material-icons increase-coin-button\" (click)=\"increaseBronzeCup()\" mdTooltip=\"افزایش تعداد کاپ های برنز\">add_circle_outline</i>\r\n\r\n                <md-card-content>\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"تعداد کاپ برنز\" disabled value=\"{{userview.award_details.bronze_cup}}\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"تعداد کاپ نقره\" disabled value=\"{{userview.award_details.silver_cup}}\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"تعداد کاپ طلا\" disabled value=\"{{userview.award_details.gold_cup}}\">\r\n                  </md-input-container>\r\n                </md-card-content> \r\n\r\n\r\n\r\n                &nbsp;&nbsp;&nbsp;&nbsp;\r\n                <md-input-container class=\"increase-weekly-gold-cup\">\r\n                  <input mdInput [(ngModel)]=\"weeklyGoldCupIncreaseAmount\" placeholder=\"افزایش کاپ طلا هفتگی\" type=\"number\">\r\n                </md-input-container>\r\n                <i class=\"material-icons increase-coin-button\" (click)=\"increaseWeeklyGoldCup()\" mdTooltip=\"افزایش تعداد کاپ های طلا هفتگی\">add_circle_outline</i>\r\n\r\n                &nbsp;&nbsp;&nbsp;&nbsp;\r\n                <md-input-container class=\"increase-weekly-silver-cup\">\r\n                  <input mdInput [(ngModel)]=\"weeklySilverCupIncreaseAmount\" placeholder=\"افزایش کاپ نقره هفتگی\" type=\"number\">\r\n                </md-input-container>\r\n                <i class=\"material-icons increase-coin-button\" (click)=\"increaseWeeklySilverCup()\" mdTooltip=\"افزایش تعداد کاپ های نقره هفتگی\">add_circle_outline</i>\r\n\r\n                &nbsp;&nbsp;&nbsp;&nbsp;\r\n                <md-input-container class=\"increase-weekly-bronze-cup\">\r\n                  <input mdInput [(ngModel)]=\"weeklyBronzeCupIncreaseAmount\" placeholder=\"افزایش کاپ برنز هفتگی\" type=\"number\">\r\n                </md-input-container>\r\n                <i class=\"material-icons increase-coin-button\" (click)=\"increaseWeeklyBronzeCup()\" mdTooltip=\"افزایش تعداد کاپ های برنز هفتگی\">add_circle_outline</i>\r\n\r\n                <md-card-content>\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"تعداد کاپ برنز هفتگی\" disabled value=\"{{userview.award_details.weekly_bronze_cup}}\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"تعداد کاپ نقره هفتگی\" disabled value=\"{{userview.award_details.weekly_silver_cup}}\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"تعداد کاپ طلا هفتگی\" disabled value=\"{{userview.award_details.weekly_gold_cup}}\">\r\n                  </md-input-container>\r\n                </md-card-content>\r\n\r\n                <md-card-content>\r\n\r\n                  <view-friends *ngIf=\"showFriends\" class=\"friends-card\" [id]=\"userview.id\" (onFindFriend)=\"onTabIndexChange($event)\"></view-friends>\r\n\r\n                  <md-select class=\"user-info user-info-stat\" placeholder=\"وضعیت\" [(ngModel)]=\"userview.status\">\r\n                    <md-option class=\"user-info-stat\" *ngFor=\"let status of statusChoices\" [value]=\"status.value\">\r\n                      {{status.value}}\r\n                    </md-option>\r\n                  </md-select>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput [(ngModel)]=\"userview.coins\" placeholder=\"سکه‌ها\" type=\"number\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput [(ngModel)]=\"userview.level\" placeholder=\"سطح\" type=\"number\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput [(ngModel)]=\"userview.username_change_time\" placeholder=\"تعداد دفعات تغییر نام کاربری\" type=\"number\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput [(ngModel)]=\"userview.score\" placeholder=\"امتیاز\" type=\"number\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput [(ngModel)]=\"userview.weekly_score\" placeholder=\"امتیاز هفتگی\" type=\"number\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput [(ngModel)]=\"userview.trophies\" placeholder=\"جام‌ها\" type=\"number\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput [(ngModel)]=\"userview.email\" name=\"email\" placeholder=\"ایمیل\" type=\"text\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"زمان ساخت\" disabled value=\"{{userview.created_at}}\">\r\n                  </md-input-container>\r\n\r\n                  <div style=\"overflow: hidden; max-width: 0px; max-height: 0px;\">\r\n                    <input name=\"username\" class=\"hide\">\r\n                    <input name=\"password\" type=\"password\" class=\"hide\">\r\n                  </div>            \r\n\r\n                 <!-- <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"ID\" disabled value=\"{{userview.id}}\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"نام کاربری\" disabled value=\"{{userview.username}}\">\r\n                  </md-input-container>-->\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"کد دعوت\" disabled value=\"{{userview.invitation_code}}\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"نام گروه\" disabled value=\"{{userview.clan_name}}\">\r\n                  </md-input-container>\r\n\r\n                  <md-input-container class=\"user-info\">\r\n                    <input mdInput placeholder=\"شناسه گروه\" disabled value=\"{{userview.clan_unique_id}}\">\r\n                  </md-input-container>  \r\n\r\n                  <section class=\"user-select\">\r\n                    <md-checkbox [(ngModel)]=\"valid\" name=\"reset_pass\" value=\"reset_pass\">تغییر کلمه‌ی عبور</md-checkbox>\r\n                  </section>\r\n\r\n                  <md-input-container *ngIf=\"valid\" class=\"user-info\">\r\n                    <input mdInput [(ngModel)]=\"userview.password\" placeholder=\"کلمه‌ی عبور\" type=\"password\">\r\n                  </md-input-container>\r\n\r\n\r\n                    <md-input-container class=\"user-info\">\r\n                        <input mdInput [(ngModel)]=\"userview.username\"  disabled placeholder=\"نام کاربری\" type=\"text\">\r\n                    </md-input-container>\r\n\r\n\r\n                    <md-input-container class=\"user-info\">\r\n                        <input mdInput class=\"time-class\" [(ngModel)]=\"userview.unlimited_games_expires_at\"  disabled placeholder=\"آخرین زمان غیر فعال شدن بازی نامحدود\" type=\"text\">\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"user-info\">\r\n                        <input mdInput [(ngModel)]=\"userview.id\"  disabled placeholder=\"شناسه کاربری\" type=\"text\">\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"user-info\">\r\n                        <input mdInput [(ngModel)]=\"userview.invited_number\"  disabled placeholder=\"تعداد دعوت شونده\" type=\"text\">\r\n                    </md-input-container>\r\n\r\n                </md-card-content>\r\n\r\n                <div class=\"footer\"></div>\r\n              </md-card>\r\n\r\n              <md-card class=\"device-info-card\" *ngIf=\"userview\">\r\n                <md-card-title class=\"devices-info-title\">اطلاعات دستگاه‌های فعلی کاربر</md-card-title>\r\n\r\n                <md-card-content>\r\n                  <div class=\"device-container\" *ngFor=\"let device of userview.devices\">\r\n                    <md-input-container class=\"device-info\">\r\n                      <input mdInput placeholder=\"زمان ساخت\" disabled value=\"{{device.created_at}}\">\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"device-info\">\r\n                      <input mdInput placeholder=\"زمان به روز رسانی\" disabled value=\"{{device.updated_at}}\">\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"device-info\">\r\n                      <input mdInput placeholder=\"شناسه دستگاه\" disabled value=\"{{device.id}}\">\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"device-info\">\r\n                      <input mdInput placeholder=\"ورژن اپ\" disabled value=\"{{device.app_version}}\">                    \r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"device-info\">\r\n                      <input mdInput placeholder=\"مدل دستگاه\" disabled value=\"{{device.device_type}}\">\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"device-info\">\r\n                      <input mdInput placeholder=\"توکن\" disabled value=\"{{device.push_token}}\">\r\n                    </md-input-container>\r\n\r\n                    <md-input-container class=\"device-info\">\r\n                      <input mdInput placeholder=\"یودی آی دی\" disabled value=\"{{device.udid}}\">\r\n                    </md-input-container>\r\n\r\n                    <md-checkbox disabled class=\"device-info\" [checked]=\"device.is_root\">\r\n                      روت\r\n                    </md-checkbox>\r\n\r\n                    <md-checkbox disabled class=\"device-info\" [checked]=\"device.is_emulator\">\r\n                      امولاتور\r\n                    </md-checkbox>\r\n                  </div>            \r\n                </md-card-content>\r\n                <div class=\"footer\"></div>\r\n              </md-card>\r\n              <md-card class=\"device-info-card\" *ngIf=\"userview\">\r\n      <md-card-title class=\"devices-info-title\">اطلاعات کل دستگاه‌های  کاربر</md-card-title>\r\n\r\n      <md-card-content>\r\n        <div class=\"device-container\" *ngFor=\"let device of userview.all_devices\">\r\n          <md-input-container class=\"device-info\">\r\n            <input mdInput placeholder=\"زمان ساخت\" disabled value=\"{{device.created_at}}\">\r\n          </md-input-container>\r\n\r\n          <md-input-container class=\"device-info\">\r\n            <input mdInput placeholder=\"زمان به روز رسانی\" disabled value=\"{{device.updated_at}}\">\r\n          </md-input-container>\r\n          <md-input-container class=\"device-info\">\r\n            <input mdInput placeholder=\"شناسه دستگاه\" disabled value=\"{{device.id}}\">\r\n          </md-input-container>\r\n\r\n          <md-input-container class=\"device-info\">\r\n            <input mdInput placeholder=\"ورژن اپ\" disabled value=\"{{device.app_version}}\">\r\n          </md-input-container>\r\n\r\n          <md-input-container class=\"device-info\">\r\n            <input mdInput placeholder=\"مدل دستگاه\" disabled value=\"{{device.device_type}}\">\r\n          </md-input-container>\r\n\r\n          <md-input-container class=\"device-info\">\r\n            <input mdInput placeholder=\"توکن\" disabled value=\"{{device.push_token}}\">\r\n          </md-input-container>\r\n\r\n          <md-input-container class=\"device-info\">\r\n            <input mdInput placeholder=\"یودی آی دی\" disabled value=\"{{device.udid}}\">\r\n          </md-input-container>\r\n\r\n          <md-checkbox disabled class=\"device-info\" [checked]=\"device.is_root\">\r\n            روت\r\n          </md-checkbox>\r\n\r\n          <md-checkbox disabled class=\"device-info\" [checked]=\"device.is_emulator\">\r\n            امولاتور\r\n          </md-checkbox>\r\n        </div>\r\n      </md-card-content>\r\n      <div class=\"footer\"></div>\r\n    </md-card>\r\n\r\n              \r\n\r\n  </md-tab>\r\n  <md-tab class=\"tabs\" label=\"پاسخگویی\" mdTooltip=\"درصد پاسخگویی\" [disabled]=\"statsDisabled\">\r\n\r\n              <div *ngIf=\"userview\">\r\n                <view-statistics [id]=\"userview.id\"></view-statistics>\r\n              </div>\r\n\r\n  </md-tab>\r\n  <md-tab class=\"tabs\" label=\"پرداخت‌ها\" mdTooltip=\"دریافت لیست پرداخت‌ها\" [disabled]=\"paymentsDisabled\">\r\n\r\n              <div *ngIf=\"userview\">\r\n                <view-payments [id]=\"userview.id\"></view-payments>\r\n              </div>\r\n\r\n  </md-tab>\r\n  <md-tab class=\"tabs\" label=\"درصد برد و باخت\" mdTooltip=\"درصد برد و باخت\" [disabled]=\"userStatDisabled\">\r\n\r\n              <div *ngIf=\"userview\">\r\n                <gamestatistics [id]=\"userview.id\"></gamestatistics>\r\n              </div>\r\n\r\n  </md-tab>\r\n\r\n    <md-tab class=\"tabs\" label=\"آمار تخلفات\" mdTooltip=\"آمار تخلفات\" [disabled]=\"userStatDisabled\">\r\n\r\n\r\n        <div *ngIf=\"userview\">\r\n            <view-frauds [id]=\"userview.id\"></view-frauds>\r\n        </div>\r\n    </md-tab>\r\n</md-tab-group>\r\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(596);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(597);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(598);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(599);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(600);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(601);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(602);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(603);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(604);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(605);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(606);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=2.chunk.js.map