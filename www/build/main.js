webpackJsonp([0],{

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heroes_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, service, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.heroList = [];
        this.allHeroList = [];
        this.currntUser = null;
        this.service.getHeroes().subscribe(function (x) { _this.heroList = x.slice(1, 4); _this.allHeroList = x; });
    }
    HomePage.prototype.openLogin = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'username',
                    placeholder: 'User name'
                },
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        //cancel
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        var user = _this.allHeroList.find(function (x) { return x.name == data.username && x.password == data.password; });
                        if (user) {
                            _this.currntUser = user;
                        }
                        else {
                            alert.setMessage('Please insert valid user name and password!');
                            return false;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.LogOut = function () {
        this.currntUser = null;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\projecToDemo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n      <button *ngIf="!currntUser" ion-button  small float-right margin-top  margin-right (click)="openLogin()">\n        Login\n      </button>\n      <button *ngIf="currntUser" ion-button  small float-right margin-top margin-right (click)="LogOut()">\n          LogOut\n        </button>\n      <p margin-left *ngIf="currntUser" class="name">\n         Hello,{{currntUser.name}}\n      </p>\n</ion-header>\n\n<ion-content padding>\n      <h3 margin-left>\n          Top heroes for this year\n        </h3>\n  <hr>\n    <ion-card *ngFor="let hero of  heroList">\n\n        <img src="../../assets/imgs/Cart-Hero.png"/>\n    \n        <ion-card-content>\n          <ion-card-title>\n           {{hero.name}}\n          </ion-card-title>\n          <p>\n            {{hero.description}} \n          </p>\n        </ion-card-content>\n    \n        <ion-row no-padding>\n          <ion-col text-right>\n            <button ion-button clear small color="calm" icon-start>\n              <ion-icon name=\'logo-twitter\'></ion-icon>\n              {{hero.twitter}}\n            </button>\n          </ion-col>\n        </ion-row>\n    \n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\projecToDemo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__heroes_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heroes_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_comments__ = __webpack_require__(248);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, service, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.modal = modal;
        this.heroList = [];
        this.heroListToFind = [];
        this.commentList = [];
        this.search = "";
        this.service.getHeroes().subscribe(function (x) { _this.heroList = x; _this.heroListToFind = x; });
        this.service.getComments().subscribe(function (x) { return _this.commentList = x; });
    }
    ListPage.prototype.showComment = function (hero) {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__comments_comments__["a" /* Comments */], { id: hero });
        modal.present();
    };
    ListPage.prototype.getNumOfComment = function (id) {
        return this.commentList.filter(function (x) { return x.heroId == id; }).length;
    };
    ListPage.prototype.AddLike = function (hero) {
        if (document.getElementById('btnHeart' + hero.id).getAttribute("voted") == "false") {
            document.getElementById('btnHeart' + hero.id).style.color = "red";
            hero.likes += 1;
            document.getElementById('btnHeart' + hero.id).setAttribute("voted", "true");
            this.heroListToFind = this.heroList;
        }
    };
    ListPage.prototype.onInput = function (ev) {
        var val = ev.target.value;
        this.heroList = this.heroListToFind;
        if (val && val.trim() !== '') {
            this.heroList = this.heroList.filter(function (item) {
                return item.name.toLowerCase().includes(val.toLowerCase());
            });
        }
    };
    ListPage.prototype.onCancel = function ($event) {
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\projecToDemo\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Heroes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list">\n    <ion-header>\n\n        <ion-navbar no-border-bottom>\n          <ion-title>Our heroes</ion-title>\n        </ion-navbar>\n      \n        <ion-toolbar no-border-top>\n          <ion-searchbar placeholder="Filter heroes..." (ionInput)="onInput($event)" [(ngModel)]="search"></ion-searchbar>\n        </ion-toolbar>\n      \n      </ion-header>\n\n    <ion-card *ngFor="let hero of  heroList">\n\n        <img src="../../assets/imgs/Cart-Hero.png"/>\n    \n        <ion-card-content>\n          <ion-card-title>\n           {{hero.name}}\n          </ion-card-title>\n            <p>\n              {{hero.description}} \n            </p>\n  \n        </ion-card-content>\n    \n        <ion-row no-padding>\n            <ion-col>\n                <button ion-button icon-left clear small color="light" class="btnHeart" id="btnHeart{{hero.id}}" (click)="AddLike(hero);"  voted="false">\n                  <ion-icon name="heart" id="heart"></ion-icon>\n                  <div>{{hero.likes}} Likes</div>\n                </button>\n             </ion-col>\n             <ion-col>\n                <button ion-button icon-left clear small color="calm">\n                  <ion-icon name=\'logo-twitter\'></ion-icon>\n                  {{hero.twitter}}\n                </button>\n              </ion-col>\n             <ion-col>\n                <button ion-button icon-left clear small style="color:#32DBEC" (click)="showComment(hero.id)">\n                  <ion-icon name="text"></ion-icon>\n                  <div>{{getNumOfComment(hero.id)}} Comments</div>\n                </button>\n              </ion-col>\n        </ion-row>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\projecToDemo\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__heroes_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ModalController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Comments; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heroes_service__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Comments = /** @class */ (function () {
    function Comments(service, params, viewCtrl) {
        var _this = this;
        this.service = service;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.commentsList = [];
        var id = this.params.get('id');
        this.service.getComments().subscribe(function (x) { return _this.commentsList = x.filter(function (x) { return x.heroId == id; }); });
    }
    Comments.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Comments = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'comments',template:/*ion-inline-start:"C:\projecToDemo\src\pages\comments\comments.html"*/'<ion-header>\n\n        <ion-toolbar>\n\n          <ion-title>\n\n            Comments\n\n          </ion-title>\n\n          <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n              <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n              <ion-icon name="md-close" showWhen="android, windows"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-toolbar>\n\n      </ion-header>\n\n      <ion-content>\n\n        <ion-list>\n\n            <ion-item *ngFor="let comment of commentsList">\n\n              <ion-avatar item-start>\n\n                <img src="../../assets/imgs/avatar-ts-buzz.png">\n\n              </ion-avatar>\n\n              <h2>{{comment.name}}</h2>\n\n              <p>{{comment.description}}</p>\n\n              <ion-note item-end class="time">\n\n                    {{comment.time}}\n\n               </ion-note>\n\n            </ion-item>\n\n        </ion-list>\n\n      </ion-content>'/*ion-inline-end:"C:\projecToDemo\src\pages\comments\comments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__heroes_service__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */]])
    ], Comments);
    return Comments;
}());

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(toast) {
        this.toast = toast;
        this.relationship = "aboutUs";
        this.images = ['1.png', '2.png', '3.jpg', '4.png'];
    }
    AboutUsComponent.prototype.selectedAboutUs = function () {
        this.relationship = 'aboutUs';
    };
    AboutUsComponent.prototype.selectedVolunteering = function () {
        this.relationship = 'volunteering';
    };
    AboutUsComponent.prototype.showToast = function () {
        var toast = this.toast.create({
            message: 'You can also join us... go to register! ',
            duration: 3000,
            position: 'middle',
            cssClass: "toast",
        });
        toast.present();
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'about-us',template:/*ion-inline-start:"C:\projecToDemo\src\pages\about-us\about-us.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>About us</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n      <ion-segment  small [(ngModel)]="relationship" color="primary">\n        <ion-segment-button value="aboutUs" (ionSelect)="selectedAboutUs()">\n          About us\n        </ion-segment-button>\n        <ion-segment-button value="volunteering" (ionSelect)="selectedVolunteering()">\n          Volunteering\n        </ion-segment-button>\n      </ion-segment>\n      <div *ngIf="relationship==\'aboutUs\'" class="contain">\n          <p>Our association is a non-profit association that help to child,adults and animals...</p>\n          <p>we choose <a (click)="showToast()">our heroes</a></p>\n      </div>\n      <div *ngIf="relationship==\'volunteering\'" class="contain">\n          <h3>Our volunteering</h3>\n          <ion-slides class="image-slider" loop="true" slidesPerView="2">\n              <ion-slide *ngFor="let img of images">\n                <img src="../../assets/imgs/slide/{{img}}" class="thumb-img" imageViewer/>\n              </ion-slide>\n            </ion-slides>\n       </div>\n    </ion-content>\n'/*ion-inline-end:"C:\projecToDemo\src\pages\about-us\about-us.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Register = /** @class */ (function () {
    function Register() {
        this.list = [];
        this.list = [{
                name: "Adults",
                icon: "ios-people-outline",
                color: "calm",
                checked: true
            },
            {
                name: "Child",
                icon: "ios-tennisball-outline",
                color: "royal",
                checked: false
            },
            {
                name: "Animal",
                icon: "ios-paw-outline",
                color: "danger",
                checked: false
            }];
    }
    Register = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'about-us',template:/*ion-inline-start:"C:\projecToDemo\src\pages\register\register.html"*/'<ion-header>\n\n        <ion-navbar>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-title>Register</ion-title>\n\n        </ion-navbar>\n\n      </ion-header>\n\n<ion-content>\n\n<ion-item>\n\n        <ion-label stacked color="primary">Mobile</ion-label>\n\n        <ion-input type="tel" value=""></ion-input>\n\n        <ion-icon color="primary" item-end ios="ios-chatbubbles-outline" md="md-chatbubbles"></ion-icon>\n\n        <ion-icon color="primary" item-end ios="ios-call-outline" md="md-call"></ion-icon>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label stacked color="primary">Email</ion-label>\n\n        <ion-icon color="primary" item-end ios="ios-mail-outline" md="md-mail"></ion-icon>\n\n        <ion-input type="email" value=""></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label stacked color="primary">Birthday</ion-label>\n\n        <ion-icon color="primary" item-end ios="ios-calendar-outline" md="md-calendar"></ion-icon>\n\n        <ion-datetime displayFormat="MMM/DD/YYYY"></ion-datetime>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label stacked color="primary">Address</ion-label>\n\n        <ion-icon color="primary" item-end ios="ios-home-outline" md="md-home"></ion-icon>\n\n        <ion-input type="text" value=""></ion-input>\n\n      </ion-item>\n\n      \n\n      <ion-label stacked color="primary" style="margin-left:16px;">Help to:</ion-label>\n\n      <ion-item *ngFor="let item of list" radio-group>\n\n            <ion-icon  [ios]="item.icon" item-start color="{{item.color}}"></ion-icon>\n\n            <ion-label>{{item.name}}</ion-label>\n\n            <ion-radio value="item.name" name="rb" [checked]="item.checked"></ion-radio>\n\n        </ion-item>\n\n\n\n </ion-content>\n\n  '/*ion-inline-end:"C:\projecToDemo\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], Register);
    return Register;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(259);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_comments_comments__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__heroes_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_comments_comments__["a" /* Comments */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* Register */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_comments_comments__["a" /* Comments */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_us_about_us__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* Register */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__heroes_service__["a" /* HeroService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_us_about_us__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Heroes', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'About us', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_us_about_us__["a" /* AboutUsComponent */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* Register */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\projecToDemo\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\projecToDemo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
    }
    HeroService.prototype.getHeroes = function () {
        return this.http.get('./assets/json/heroes.json');
    };
    HeroService.prototype.getComments = function () {
        return this.http.get('./assets/json/comments.json');
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HeroService);
    return HeroService;
}());

//# sourceMappingURL=heroes.service.js.map

/***/ })

},[251]);
//# sourceMappingURL=main.js.map