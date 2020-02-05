var ac_main =
webpackJsonpac__name_([11],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(43);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(50);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });



var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
        this.onAuthenticatedEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // console.log('in canActivate, The route is: ' + state.url);
        // console.log('User\'s role is: ' + this.getUser().role);
        if (this.getUser().role === 'ROLE_ADMIN') {
            // logged in so return true
            return true;
        }
        // does not have permossion, so redirect to dashboard page
        // console.log('not admin, going back to dashboard');
        this.router.navigate(['/dashboard']);
        return false;
    };
    AuthGuard.prototype.canLoad = function (route) {
        if (this.getUser()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        // console.log('not logged in, going back to login');
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.getUser = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser || null;
    };
    AuthGuard.prototype.isAuthenticated = function () {
        return (this.getUser()) ? true : false;
    };
    AuthGuard.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.onAuthenticatedEvent.emit(false);
    };
    AuthGuard.prototype.login = function (authUser) {
        localStorage.setItem('currentUser', JSON.stringify(authUser));
        this.onAuthenticatedEvent.emit(true);
    };
    return AuthGuard;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"])
], AuthGuard.prototype, "onAuthenticatedEvent", void 0);
AuthGuard = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], AuthGuard);



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(214);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(75);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(64);

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(212);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarService; });



var ProgressBarService = (function () {
    function ProgressBarService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        // this.subject.next();
    }
    ProgressBarService.prototype.setParams = function (color, value, bufferValue, mode) {
        if (color === void 0) { color = 'warn'; }
        if (value === void 0) { value = 100; }
        if (bufferValue === void 0) { bufferValue = 100; }
        if (mode === void 0) { mode = 'query'; }
        this.subject.next({ color: color, value: value, bufferValue: bufferValue, mode: mode });
    };
    ProgressBarService.prototype.getParams = function () {
        return this.subject.asObservable();
    };
    ProgressBarService.prototype.queryInProgress = function () {
        this.subject.next({ color: 'warn', value: 100, bufferValue: 100, mode: 'query' });
    };
    ProgressBarService.prototype.queryFinished = function () {
        this.subject.next({ color: 'warn', value: 100, bufferValue: 100, mode: 'determinate' });
    };
    return ProgressBarService;
}());
ProgressBarService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], ProgressBarService);



/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(13);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(0);

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(215);

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* unused harmony export DefaultRequestOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requestOptionsProvider; });



var DefaultRequestOptions = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](DefaultRequestOptions, _super);
    function DefaultRequestOptions() {
        var _this = _super.call(this) || this;
        // Needed for sending cookies in each request
        _this.withCredentials = true;
        return _this;
    }
    return DefaultRequestOptions;
}(__WEBPACK_IMPORTED_MODULE_2__angular_http__["BaseRequestOptions"]));
DefaultRequestOptions = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], DefaultRequestOptions);

var requestOptionsProvider = { provide: __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"], useClass: DefaultRequestOptions };


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });





var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
        ]
    })
], SharedModule);



/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(211);

/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(453);

/***/ }),
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });


var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState.prototype.convertUnixTimeToTimeStamp = function (unixDateTime) {
        var months_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var Date1 = new Date(unixDateTime);
        var year = Date1.getFullYear();
        var month = months_arr[Date1.getMonth()];
        var day = Date1.getDate();
        var hours = Date1.getHours();
        var minutes = "0" + Date1.getMinutes();
        var seconds = "0" + Date1.getSeconds();
        // Display date time in MM-dd-yyyy h:m:s format
        var convdataTime = month + '-' + day + '-' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        return convdataTime;
    };
    return AppState;
}());
AppState = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], AppState);



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTopService; });


var ScrollTopService = (function () {
    function ScrollTopService() {
    }
    ScrollTopService.prototype.setScrollLink = function (scrollLink) {
        this.scrollLink = scrollLink;
    };
    ScrollTopService.prototype.scrollToTop = function () {
        // scroll to the top
        this.scrollLink.click();
        console.log("Scrolled");
    };
    return ScrollTopService;
}());
ScrollTopService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [])
], ScrollTopService);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });







var LoginComponent = (function () {
    function LoginComponent(loginService, authGuard, router, progressBarService, notificationsService) {
        this.loginService = loginService;
        this.authGuard = authGuard;
        this.router = router;
        this.progressBarService = progressBarService;
        this.notificationsService = notificationsService;
        this.showErr = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authGuard.logout();
        this.progressBarService.setParams("accent", 100, 100, "determinate");
        this.progressBarService.queryFinished();
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.progressBarService.queryInProgress();
        this.loginService.authenticate(username, password)
            .then(function (res) {
            _this.progressBarService.queryFinished();
            _this.authGuard.login(res);
            var link = "/dashboard";
            _this.router.navigateByUrl(link);
        })
            .catch(function (err) {
            _this.notificationsService.error("خطا", "نام کاربری یا رمز عبور اشتباه است");
            _this.progressBarService.queryFinished();
        });
    };
    return LoginComponent;
}());
LoginComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        moduleId: module.i + "",
        selector: 'login',
        template: __webpack_require__(117),
        styles: [__webpack_require__(123)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */],
        __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_6__core_progress_bar_progress_bar_service__["a" /* ProgressBarService */],
        __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["b" /* NotificationsService */]])
], LoginComponent);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });





var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
    }
    LoginService.prototype.authenticate = function (username, password) {
        var body = { username: username, password: password };
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* LoginURL */], JSON.stringify(body), { headers: this.headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        if (body.status == true) {
            return body.data.user || [];
        }
        return [];
    };
    LoginService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return LoginService;
}());
LoginService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
], LoginService);



/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(94);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(213);

/***/ }),
/* 86 */,
/* 87 */,
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BaseURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserSearchURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserSearchLevenURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_21", function() { return UsernameExistURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return BlockMultipleURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return UnBlockMultipleURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return IncreaseCoinsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_23", function() { return IncreaseCoinsSingleURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return IncreaseGoldCupURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_29", function() { return ChangeUserNameURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_27", function() { return IncreaseSilverCupURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_28", function() { return IncreaseBronzeCupURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_24", function() { return IncreaseWeeklyGoldCupURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_25", function() { return IncreaseWeeklySilverCupURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_26", function() { return IncreaseWeeklyBronzeCupURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_33", function() { return UserViewURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_22", function() { return UserUpdateURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_32", function() { return UserUpdatePasswordURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_30", function() { return UserUnblockLoginURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_31", function() { return UserUnblockIpUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_19", function() { return FriendsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_16", function() { return FraudsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_13", function() { return UserCategoryStatsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_15", function() { return GetUserCategoryStatsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_14", function() { return GetUserStatURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_12", function() { return UpdateUserStatURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_11", function() { return LockDeviceURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_17", function() { return PaymentsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_18", function() { return CheckUserAvatarURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SearchRecipeUrl; });
/* unused harmony export TestURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return getQuestionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return getQuestionStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_20", function() { return CreateNewUserURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return CreateAdvertiseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return CreatePublisherURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return RecentAdsClickDaysStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UpdateAdvertiseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return ListAdvertiseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return GetAdvertiseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return GetPublishersURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return ListAdvertiseQuestionURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return DeleteAdvertiseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return DeactiveAdvertiseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_3", function() { return QuestionViewURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_2", function() { return QuestionUpdateURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_7", function() { return QuestionPreReviewDownloadURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_9", function() { return QuestionPreReviewUploadURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_8", function() { return QuestionPreReviewIndexURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_5", function() { return QuestionConfirmationDownloadURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_10", function() { return QuestionConfirmationUploadURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_4", function() { return UploadedFileURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_6", function() { return QuestionConfirmationIndexURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_1", function() { return QuestionGetSizeURL; });
/* unused harmony export CreateQuestionURL */
/* unused harmony export AdvertiseQuestionURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return NewAdvertiseQuestionURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return CreateNewsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return UpdateNewsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return FetchNewsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return ViewNewsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return DeleteNewsURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return PushNewsToUserURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return PushNewsToAllURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_0", function() { return QuestionGetCategorySizeURL; });
/* unused harmony export SearchClanMembers1 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SearchClanMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return ClanViewURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return ClanUpdateURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return ChangeClanNameURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return ClanstatsView; });
/* unused harmony export ClanstatsList */
/* unused harmony export DashboardStatisticsURL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RecentDaysStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return RecentMonthStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GetAllBatchesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return CreateBatchesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return AssignBatchesUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return RemoveBatchGiftUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return DownloadBatchUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return MultipleGiftsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return StopMultipleGiftsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return CheckMultipleGiftsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return CreateSingleGiftsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getSingleGiftsDetailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return CheckSingleGiftlUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UserQuestionsViewUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SingleQuestionViewUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UpdateQuestionUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return UpdateQuestionCategoryUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return AcceptedStatusQuestionUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RejectedStatusQuestionUrl; });
// this file contains the urls used for backend services
// export const BaseURL = `http://backend.palang.co:8000`;
// export const BaseURL = `http://127.0.0.1:8103`;
// export const BaseURL = `http://185.105.186.203:8104`;
// this file contains the urls used for backend services
var BaseURL = "https://portal-backend.quizofkings.com";
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
var LoginURL = BaseURL + "/auth/login";
// User
var UserSearchURL = BaseURL + "/user/search";
var UserSearchLevenURL = BaseURL + "/user/search/leven";
var UsernameExistURL = BaseURL + "/user/username/exist";
var BlockMultipleURL = BaseURL + "/user/block/multiple";
var UnBlockMultipleURL = BaseURL + "/user/unblock/multiple";
var IncreaseCoinsURL = BaseURL + "/user/increase/coins";
var IncreaseCoinsSingleURL = BaseURL + "/user/increase/coins/single";
var IncreaseGoldCupURL = BaseURL + "/user/increase/goldcup";
var ChangeUserNameURL = BaseURL + "/user/change_username";
var IncreaseSilverCupURL = BaseURL + "/user/increase/silvercup";
var IncreaseBronzeCupURL = BaseURL + "/user/increase/bronzecup";
var IncreaseWeeklyGoldCupURL = BaseURL + "/user/increase/weeklygoldcup";
var IncreaseWeeklySilverCupURL = BaseURL + "/user/increase/weeklysilvercup";
var IncreaseWeeklyBronzeCupURL = BaseURL + "/user/increase/weeklybronzecup";
var UserViewURL = BaseURL + "/user/view";
var UserUpdateURL = BaseURL + "/user/update";
var UserUpdatePasswordURL = BaseURL + "/user/update/password";
var UserUnblockLoginURL = BaseURL + "/user/unblock/login";
var UserUnblockIpUrl = BaseURL + "/user/remove_restriction";
var FriendsURL = BaseURL + "/user/friends";
var FraudsURL = BaseURL + "/user/frauds";
var UserCategoryStatsURL = BaseURL + "/user/updatecategorystats";
var GetUserCategoryStatsURL = BaseURL + "/user/categorystats";
var GetUserStatURL = BaseURL + "/user/stats";
var UpdateUserStatURL = BaseURL + "/user/updatestats";
var LockDeviceURL = BaseURL + "/user/lockdevice";
var PaymentsURL = BaseURL + "/payment/user";
var CheckUserAvatarURL = BaseURL + "/user/checkavatar";
var SearchRecipeUrl = BaseURL + '/payment/find_by_receipt';
var TestURL = BaseURL + "/user/test";
// Question
var getQuestionList = BaseURL + '/question/user_questions_list';
var getQuestionStat = BaseURL + '/question/categorystat';
// export const getQuestionList = BaseURL + '/user/search/leven';
var CreateNewUserURL = BaseURL + '/user/create';
var CreateAdvertiseURL = BaseURL + '/ads/create';
var CreatePublisherURL = BaseURL + '/ads/createpublisher';
var RecentAdsClickDaysStats = BaseURL + "/ads/get_latest_ads_click_count";
var UpdateAdvertiseURL = BaseURL + '/ads/update';
var ListAdvertiseURL = BaseURL + "/ads/list";
var GetAdvertiseURL = BaseURL + "/ads/getdetails";
var GetPublishersURL = BaseURL + "/ads/publishers_list";
var ListAdvertiseQuestionURL = BaseURL + "/ads/ads_question_list";
var DeleteAdvertiseURL = BaseURL + "/ads/delete";
var DeactiveAdvertiseURL = BaseURL + "/ads/deactivate";
var QuestionViewURL = BaseURL + "/question/view";
var QuestionUpdateURL = BaseURL + "/question/update";
var QuestionPreReviewDownloadURL = BaseURL + "/question/pre-review/download";
var QuestionPreReviewUploadURL = BaseURL + "/question/pre-review/upload";
var QuestionPreReviewIndexURL = BaseURL + "/question/pre-review/index";
var QuestionConfirmationDownloadURL = BaseURL + "/question/confirmation/download";
var QuestionConfirmationUploadURL = BaseURL + "/question/confirmation/async_upload";
var UploadedFileURL = BaseURL + "/question/confirmation/get_uploaded_file_stat";
var QuestionConfirmationIndexURL = BaseURL + "/question/confirmation/index";
var QuestionGetSizeURL = BaseURL + "/question/size";
var CreateQuestionURL = BaseURL + "/question/create";
var AdvertiseQuestionURL = BaseURL + "/question/advertise_question";
var NewAdvertiseQuestionURL = BaseURL + "/question/new_advertise_question";
// News
var CreateNewsURL = BaseURL + "/news/news";
var UpdateNewsURL = BaseURL + "/news/update";
var FetchNewsURL = BaseURL + "/news/fetch";
var ViewNewsURL = BaseURL + "/news/view";
var DeleteNewsURL = BaseURL + "/news/delete";
var PushNewsToUserURL = BaseURL + "/news/push/user";
var PushNewsToAllURL = BaseURL + "/news/push/all";
var QuestionGetCategorySizeURL = BaseURL + "/question/categorysize";
// Clan
var SearchClanMembers1 = BaseURL + "/clan/search";
var SearchClanMembers = BaseURL + "/clan/members";
var ClanViewURL = BaseURL + "/clan/view";
var ClanUpdateURL = BaseURL + "/clan/update";
var ChangeClanNameURL = BaseURL + "/clan/change_clan_name";
// Clanstats
var ClanstatsView = BaseURL + "/clan/stats/view";
var ClanstatsList = BaseURL + "/clan/stats/list";
// Statistic
var DashboardStatisticsURL = BaseURL + "/statistics/abstract";
// Advertise Statistics
var RecentDaysStats = BaseURL + "/statistics/get_recently_days";
var RecentMonthStats = BaseURL + "/statistics/get_recently_month";
// Gifts
var GetAllBatchesUrl = BaseURL + "/gift/get_batches";
var CreateBatchesUrl = BaseURL + "/gift/create_batch";
var AssignBatchesUrl = BaseURL + "/gift/add_gift_to_batch";
var RemoveBatchGiftUrl = BaseURL + "/gift/remove_gift_from_batch";
var DownloadBatchUrl = BaseURL + "/gift/download_batch";
var MultipleGiftsUrl = BaseURL + "/gift/create_multiple";
var StopMultipleGiftsUrl = BaseURL + "/gift/stop_create_multiple";
var CheckMultipleGiftsUrl = BaseURL + "/gift/check_create_multiple";
var CreateSingleGiftsUrl = BaseURL + "/gift/create_gift";
var getSingleGiftsDetailUrl = BaseURL + "/gift/get_details";
var CheckSingleGiftlUrl = BaseURL + "/gift/check_usage";
// CMINER
var UserQuestionsViewUrl = BaseURL + "/question/user_question";
var SingleQuestionViewUrl = BaseURL + "/question/view";
var UpdateQuestionUrl = BaseURL + "/question/update_choice";
var UpdateQuestionCategoryUrl = BaseURL + "/question/change_question_category";
var AcceptedStatusQuestionUrl = BaseURL + "/question/accepted";
var RejectedStatusQuestionUrl = BaseURL + "/question/rejected";
// zarinpal


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(553);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(540);

/***/ }),
/* 91 */,
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__(7);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });




var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: function() { return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, 279))  .then( function(module) { return module['DashboardModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user', loadChildren: function() { return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 284))  .then( function(module) { return module['UserModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'question', loadChildren: function() { return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 282))  .then( function(module) { return module['QuestionModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'news', loadChildren: function() { return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 281))  .then( function(module) { return module['NewsModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'advertise', loadChildren: function() { return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 275))  .then( function(module) { return module['AdvertiseModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'clan', loadChildren: function() { return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 277))  .then( function(module) { return module['ClanModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'clanstats', loadChildren: function() { return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 276))  .then( function(module) { return module['ClanStatModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'statistic', loadChildren: function() { return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, 283))  .then( function(module) { return module['StatisticModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'giftcodes', loadChildren: function() { return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 280))  .then( function(module) { return module['GiftcodesModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'cminer', loadChildren: function() { return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, 278))  .then( function(module) { return module['CminerModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'zarinpal', loadChildren: function() { return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 285))  .then( function(module) { return module['ZarinpalModule']; } ); }, canLoad: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(routes, { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_2__angular_router__["PreloadAllModules"] })],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_scroll_top_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });






/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState, authGuard, notificationsService, scrollTopService) {
        var _this = this;
        this.appState = appState;
        this.authGuard = authGuard;
        this.notificationsService = notificationsService;
        this.scrollTopService = scrollTopService;
        this.authenticated = false;
        this.options = {
            position: ["bottom", "left"],
            timeOut: 5000,
            animate: "fromLeft",
        };
        this.authenticated = this.authGuard.isAuthenticated();
        this.authGuard.onAuthenticatedEvent.subscribe(function (authenticated) {
            _this.authenticated = authenticated;
        });
    }
    Object.defineProperty(AppComponent.prototype, "someDummySetterName", {
        set: function (theElementRef) {
            this.sidenav = theElementRef;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
        this.scrollTopService.setScrollLink(document.getElementById("scroll"));
    };
    return AppComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('sidenav'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"]])
], AppComponent.prototype, "someDummySetterName", null);
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__(122)],
        template: __webpack_require__(115)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppState */],
        __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */],
        __WEBPACK_IMPORTED_MODULE_2_angular2_notifications__["b" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_5__core_scroll_top_service__["a" /* ScrollTopService */]])
], AppComponent);



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angularclass_hmr__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environment__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_resolver__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_core_module__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_notifications__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__default_request_options_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__styles_styles_scss__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__styles_headings_css__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__styles_headings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__styles_headings_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });




/*
 * Platform and Environment providers/directives/pipes
 */

// App is our top level component


// App Root


// Routing Module

// Core Module


// Shared Module


// Feature Module

// Guards


// themig styles


// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_5__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppState */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__["a" /* SidebarComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_notifications__["a" /* SimpleNotificationsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__core_core_module__["a" /* CoreModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14__login_login_module__["a" /* LoginModule */]
            // MdDataTableModule,
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS,
            __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__default_request_options_service__["a" /* requestOptionsProvider */]
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppState */]])
], AppModule);



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });




var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_bar_progress_bar_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_bar_progress_bar_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_scroll_to__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scroll_top_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });











var CoreModule = CoreModule_1 = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_8__progress_bar_progress_bar_service__["a" /* ProgressBarService */], __WEBPACK_IMPORTED_MODULE_10__scroll_top_service__["a" /* ScrollTopService */]]
        };
    };
    return CoreModule;
}());
CoreModule = CoreModule_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ng2_scroll_to__["ScrollToModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_7__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"], __WEBPACK_IMPORTED_MODULE_7__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */]]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()), __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"])()),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [CoreModule])
], CoreModule);

var CoreModule_1;
// providers: [ ProgressBarService, AuthGuard, requestOptionsProvider ]
/*
    http://stackoverflow.com/questions/39890722/provide-core-singleton-services-module-in-angular-2
*/


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_bar_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });



var ProgressBarComponent = (function () {
    function ProgressBarComponent(progressBarService) {
        this.progressBarService = progressBarService;
        this.color = 'accent';
        this.mode = 'determinate';
        this.value = 100;
        this.bufferValue = 100;
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.progressBarService.getParams().subscribe(function (res) {
            _this.color = res.color;
            _this.value = res.value;
            _this.bufferValue = res.bufferValue;
            _this.mode = res.mode;
        });
    };
    return ProgressBarComponent;
}());
ProgressBarComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'progress-bar',
        template: __webpack_require__(116),
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__progress_bar_service__["a" /* ProgressBarService */]])
], ProgressBarComponent);



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });




var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild([
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */] }
            ])],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__default_request_options_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_routing_module__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });








var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7__login_routing_module__["a" /* LoginRoutingModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* LoginComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__default_request_options_service__["a" /* requestOptionsProvider */], __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_6__login_service__["a" /* LoginService */]],
    })
], LoginModule);



/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export USERS */
/* unused harmony export NEWS */
/* unused harmony export ADVERTISE */
/* unused harmony export QUESTION */
/* unused harmony export CLANSTATS */
/* unused harmony export STATISTIC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS_CRM; });
var USERS = [
    { title: 'جست‌و‌جوی کاربران', route: '/user/search' },
    { title: 'ساخت کاربر جدید', route: '/user/create' },
];
var NEWS = [
    { title: 'ساخت خبر جدید', route: '/news/create' },
    { title: 'مشاهده‌ی اخبار', route: '/news/fetch' },
];
var ADVERTISE = [
    { title: 'ساخت تبلیغ', route: '/advertise/create' },
    { title: 'ساخت تبلیغ کننده', route: '/advertise/createpublisher' },
    { title: 'لیست تبلیغات', route: '/advertise/list' },
    { title: 'مشاهده آمار', route: '/advertise/dashboard' },
];
var QUESTION = [
    { title: 'بارگذاری سوالات', route: '/question/review' },
    { title: 'ساخت سوال تبلیغاتی', route: '/question/create' },
    { title: 'لیست سوالات تبلیغاتی', route: '/question/list' },
    { title: 'آمار سوالات', route: '/question/statistics' },
    { title: 'سوالات', route: '/cminer' },
];
var CLANSTATS = [
    { title: 'مشاهده آمار', route: '/clanstats/view' },
    { title: 'مشاهده آمار', route: '/clanstats/list' },
];
var STATISTIC = [
    { title: 'مشاهده آمار بازی', route: '/statistic/dashboard' },
];
var MENU_ITEMS = [
    { title: 'ورود', route: '/login', subset: [], role: 'ROLE_CRM' },
    { title: 'کاربران', route: '', subset: USERS, role: 'ROLE_CRM' },
    { title: 'خبرها', route: '', subset: NEWS, role: 'ROLE_ADMIN' },
    { title: 'پرسش‌ها', route: '', subset: QUESTION, role: 'ROLE_ADMIN' },
    { title: 'تبلیغات', route: '/advertise', subset: ADVERTISE, role: 'ROLE_ADMIN' },
    // { title: 'آمار گروه',  route: '/clanstats', 	        subset: CLANSTATS, role: 'ROLE_ADMIN'},
    { title: 'آمار', route: '', subset: STATISTIC, role: 'ROLE_ADMIN' },
];
var MENU_ITEMS_CRM = [
    { title: 'ورود', route: '/login', subset: [], role: 'ROLE_CRM' },
    { title: 'کاربران', route: '', subset: USERS, role: 'ROLE_CRM' },
    { title: 'خبرها', route: '', subset: NEWS, role: 'ROLE_ADMIN' },
    { title: 'پرسش‌ها', route: '', subset: QUESTION, role: 'ROLE_ADMIN' },
    { title: 'تبلیغات', route: '/advertise', subset: ADVERTISE, role: 'ROLE_ADMIN' },
    { title: 'گیفت کد', route: '/giftcodes', subset: [], role: 'ROLE_CRM' },
    { title: 'زرین پال', route: '/zarinpal', subset: [], role: 'ROLE_CRM' },
];


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_items_model__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });




var SidebarComponent = (function () {
    function SidebarComponent(authGuard) {
        this.authGuard = authGuard;
        this.menuitems = __WEBPACK_IMPORTED_MODULE_3__menu_items_model__["a" /* MENU_ITEMS_CRM */];
        var role = this.authGuard.getUser().role;
        var userId = this.authGuard.getUser().id;
        var channelArray = [4, 683185689, 680200151, 680222081];
        //console.log('user: ' + userId);
        // if (channelArray.includes(userId)) {
        if (userId === 4 || userId === 683185689 || userId === 680200151 || userId === 680222081) {
            this.menuitems = __WEBPACK_IMPORTED_MODULE_3__menu_items_model__["b" /* MENU_ITEMS */];
        }
        this.menuitems[0].title = 'خروج';
        this.menuitems = this.menuitems.filter(function (row) {
            if (row.role === 'ROLE_CRM') {
                return true;
            }
            else {
                return role === 'ROLE_ADMIN';
            }
        });
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    return SidebarComponent;
}());
SidebarComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(118),
        styles: [__webpack_require__(124)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]])
], SidebarComponent);



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(66);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports
exports.i(__webpack_require__(106), "");
exports.i(__webpack_require__(107), "");

// module
exports.push([module.i, "/* this file will be extracted to main dist folder and is imported in index.html */\n/* This file is for setting global styles  */\nnav {\n  margin-top: 16px; }\n\nnav a {\n  background-color: #00838F;\n  color: white;\n  padding: 8px 16px;\n  margin: 8px;\n  vertical-align: middle;\n  line-height: 1.25;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px; }\n\n.se-pre-con {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  background: url(" + __webpack_require__(113) + ") center no-repeat #fff; }\n\n.mat-tooltip {\n  font-family: IRANSansWeb !important; }\n\n.mat-progress-bar {\n  height: 3px !important; }\n\nbody.modal-open {\n  overflow: hidden;\n  /* Optional: hides body scroll bar when modal is open. */ }\n\n.modal {\n  opacity: 0;\n  /* Fade in/out animation. */\n  transition: opacity 0.2s ease-in; }\n\n.modal-content {\n  color: #333;\n  background-color: #fff;\n  padding: 25px;\n  width: 500px; }\n\n.modal-header {\n  display: flex;\n  padding-bottom: 14px; }\n\n.modal-header > h2 {\n  flex: 1; }\n\n.modal-header .close {\n  background-color: #fff;\n  font-weight: 100;\n  font-size: 2.5rem;\n  border: 0;\n  border-radius: 999px;\n  padding: 0;\n  margin: 0;\n  line-height: 1rem;\n  height: 4rem;\n  width: 4rem; }\n\n.modal-header .close:hover {\n  background-color: #ccc; }\n", ""]);

// exports


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "html, body{\r\n  /*height: 100%;*/\r\n  /*height: 2000px;*/\r\n  /*font-family: IRANSansWeb_Regular !important;*/\r\n}\r\n\r\na.active {\r\n  background-color: gray;\r\n}\r\n\r\n\r\n* {\r\n  font-family: IRANSansWeb;\r\n}\r\n\r\nmd-sidenav-layout.m2app-dark {\r\n  background: black;\r\n}\r\n\r\n.app-content {\r\n  padding: 20px;\r\n}\r\n\r\n.app-content md-card {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.card-content {\r\n  margin: 20px;\r\n  padding: 20px;\r\n}\r\n\r\n.app-sidenav {\r\n  min-width: 100px;\r\n}\r\n\r\n.app-content md-checkbox {\r\n  margin: 10px;\r\n}\r\n\r\n.app-toolbar-filler {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.app-toolbar-menu {\r\n  padding: 0 14px 0 14px;\r\n  color: white;\r\n}\r\n\r\n.app-icon-button {\r\n  box-shadow: none;\r\n  user-select: none;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  filter: none;\r\n  font-weight: normal;\r\n  height: auto;\r\n  line-height: inherit;\r\n  margin: 0;\r\n  min-width: 0;\r\n  padding: 0;\r\n  text-align: left;\r\n  text-decoration: none;\r\n}\r\n\r\n.app-action {\r\n  display: inline-block;\r\n  position: fixed;\r\n  bottom: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.app-spinner {\r\n  height: 30px;\r\n  width: 30px;\r\n  display: inline-block;\r\n}\r\n\r\n.app-input-icon {\r\n  font-size: 16px;\r\n}\r\n\r\n.app-list {\r\n  border: 1px solid rgba(0,0,0,0.12);\r\n  width: 350px;\r\n  margin: 20px;\r\n}\r\n\r\n.app-progress {\r\n  margin: 20px;\r\n}\r\n\r\n.material-icons {\r\n  margin-right: 1%;\r\n}\r\n.material-icons:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nprogress-bar {\r\n  height: 75%;\r\n}", ""]);

// exports


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".login-form {\r\n  width: 30%;\r\n}\r\n\r\n.login-full-width {\r\n  width: 250px;\r\n}\r\n\r\n.loging-button {\r\n  margin-top: 1.5%;\r\n  width: 250px;\r\n}", ""]);

// exports


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".menu-button {\r\n    margin-right: -1.7em;\r\n}\r\n\r\n.menu-anchor {\r\n    font-family: IRANSansWeb;\r\n}", ""]);

// exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "h1 {\r\n  color: #00BCD4;\r\n}", ""]);

// exports


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b3419887896f982b4f2a1dcd83ef81bf.gif";

/***/ }),
/* 114 */,
/* 115 */
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fullscreen=\"true\">\r\n    <md-sidenav #sidenav *ngIf=\"authenticated == true\" mode=\"side\" opened=\"false\" align=\"end\" class=\"app-sidenav\">\r\n        <app-sidebar></app-sidebar>\r\n    </md-sidenav>\r\n    <md-toolbar id=\"head1\" color=\"primary\" dir=\"rtl\">\r\n        پنل مدیریت\r\n        <i *ngIf=\"authenticated == true\" class=\"material-icons\" (click)=\"sidenav.toggle()\">swap_horiz</i>\r\n        <span class=\"app-toolbar-filler\"></span>\r\n    </md-toolbar>\r\n    \r\n    \r\n    <div class=\"app-content\" dir=\"rtl\">\r\n        <progress-bar></progress-bar>    \r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <a scrollTo id=\"scroll\" href=\"#head1\"></a>\r\n    \r\n</md-sidenav-container>\r\n\r\n<simple-notifications [options]=\"options\"></simple-notifications>"

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "<md-progress-bar\r\n    class=\"progress-bar\"\r\n    [color]=\"color\"\r\n    [mode]=\"mode\"\r\n    [value]=\"value\"\r\n    [bufferValue]=\"bufferValue\">\r\n</md-progress-bar>"

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "<md-card class=\"no-padding\">\r\n    <md-toolbar color=\"primary\">صفحه ورود</md-toolbar>\r\n    <div class=\"card-content\">\r\n        <form (keyup.enter)=\"login(username.value, password.value); password.value=''\" class=\"login-form\">\r\n            <md-input-container class=\"login-full-width\">\r\n                <input mdInput placeholder=\"username\"\r\n                       required #username>\r\n            </md-input-container>\r\n            <md-input-container class=\"login-full-width\">\r\n                <input mdInput placeholder=\"password\"\r\n                       type=\"password\" required #password>\r\n            </md-input-container>\r\n        </form>\r\n        <button (click)=\"login(username.value, password.value); password.value=''\"\r\n                md-raised-button color=\"primary\" class=\"loging-button\">ورود\r\n        </button>\r\n    </div>\r\n</md-card>\r\n\r\n"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n    Quiz of Kings\r\n    <span class=\"app-toolbar-filler\"></span>\r\n</md-toolbar>\r\n<md-nav-list dir=\"rtl\">\r\n    <md-list-item *ngFor=\"let menuitem of menuitems\">\r\n        <a *ngIf=\"menuitem.subset.length === 0\" md-line routerLink=\"{{menuitem.route}}\">{{menuitem.title}}</a>\r\n        <div class=\"menu-list\" *ngIf=\"menuitem.subset.length > 0\">\r\n            <button class=\"menu-button\" md-button [mdMenuTriggerFor]=\"anchorMenu\">\r\n                <md-icon>more_vert</md-icon>\r\n                {{menuitem.title}}\r\n            </button>\r\n            <md-menu #anchorMenu=\"mdMenu\">\r\n                <a class=\"menu-anchor\" md-menu-item *ngFor=\"let subitem of menuitem.subset\" routerLink=\"{{subitem.route}}\">\r\n                    {{ subitem.title }}\r\n                </a>\r\n            </md-menu>\r\n        </div>\r\n    </md-list-item>\r\n</md-nav-list>\r\n\r\n"

/***/ }),
/* 119 */,
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(44)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(44)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./headings.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./headings.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(109);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(110);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(111);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(443);

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(445);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(451);

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(458);

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(463);

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(469);

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(486);

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(492);

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(493);

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(496);

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(502);

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(532);

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(537);

/***/ })
],[102]);
//# sourceMappingURL=main.bundle.js.map