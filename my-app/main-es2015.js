(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/date/date.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/date/date.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n<nav>\n  <ul>\n    <li>\n      <a routerLink=\"/\">Главная</a>\n    </li>\n  </ul>\n</nav>\n<app-some></app-some>\n<p>Time: {{message}}</p>\n<ol>\n  <li *ngFor=\"let item of items\">{{item}}</li>\n</ol>\n\n<div *ngIf=\"loggedIn; else loggedOut\">\n  logged in.\n</div>\n\n<ng-template #loggedOut>\n  Please {{loggedout}}\n</ng-template>\n\n\n<button (click)=\"myEvent()\">click</button>\n\n<input type=\"text\" [(ngModel)]=\"text\">\n<p>{{text}}</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/field/field.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/field/field.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"field\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/game.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/game.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"center\">\n  <div class=\"wrapper\">\n    <div class=\"wrapper__item\">\n      <label for=\"size\">Введите размер поля</label>\n      <input type=\"number\" min=\"2\" name=\"size\" [(ngModel)]=\"mySize\" id=\"size\">\n    </div>\n    <div class=\"wrapper__item\">\n      <label for=\"count\">Введите количество ходов</label>\n      <input type=\"number\" min=\"1\" name=\"count\" [(ngModel)]=\"myCount\" id=\"count\">\n    </div>\n  </div>\n  <button class=\"button\" (click)=\"myClick()\">Начать игру</button>\n  <div class=\"show\"></div>\n</form>\n<div class=\"field\"></div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/some/some.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/some/some.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>some component works!</p>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n  color: rebeccapurple;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'web test';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _some_some_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./some/some.component */ "./src/app/some/some.component.ts");
/* harmony import */ var _date_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date/date.component */ "./src/app/date/date.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _new_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-service.service */ "./src/app/new-service.service.ts");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./field/field.component */ "./src/app/field/field.component.ts");











const appRoutes = [
    { path: '', component: _game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"] },
    { path: 'date', component: _date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"] },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _some_some_component__WEBPACK_IMPORTED_MODULE_5__["SomeComponent"],
            _date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"],
            _game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
            _field_field_component__WEBPACK_IMPORTED_MODULE_10__["FieldComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [_new_service_service__WEBPACK_IMPORTED_MODULE_9__["NewServiceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/date/date.component.css":
/*!*****************************************!*\
  !*** ./src/app/date/date.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n  color: rebeccapurple;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0ZS9kYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXRlL2RhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gIGNvbG9yOiByZWJlY2NhcHVycGxlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/date/date.component.ts":
/*!****************************************!*\
  !*** ./src/app/date/date.component.ts ***!
  \****************************************/
/*! exports provided: DateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _new_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-service.service */ "./src/app/new-service.service.ts");



let DateComponent = class DateComponent {
    constructor(svc) {
        this.items = ['Angular', 'React', 'Vue.js', 'Bootstrap'];
        this.loggedIn = true;
        this.loggedout = 'login';
        this.text = 'a table';
        this.title = 'date';
        svc.consoleText('text from service');
        const setTime = () => {
            return this.message = new Date().toLocaleTimeString();
        };
        setInterval(setTime, 1000);
    }
    myEvent() {
        console.log(this.text);
    }
    ngOnInit() {
    }
};
DateComponent.ctorParameters = () => [
    { type: _new_service_service__WEBPACK_IMPORTED_MODULE_2__["NewServiceService"] }
];
DateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-date',
        template: __webpack_require__(/*! raw-loader!./date.component.html */ "./node_modules/raw-loader/index.js!./src/app/date/date.component.html"),
        styles: [__webpack_require__(/*! ./date.component.css */ "./src/app/date/date.component.css")]
    })
], DateComponent);



/***/ }),

/***/ "./src/app/field/field.component.css":
/*!*******************************************!*\
  !*** ./src/app/field/field.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n  --grid: 3;\r\n  --size: 100px;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\n.field {\r\n  height: 100%;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.field__row {\r\n  display: grid;\r\n  grid-template-columns: repeat(var(--grid), var(--size));\r\n  grid-template-rows: repeat(var(--grid), var(--size));\r\n  border: 1px solid #000;\r\n}\r\n\r\n.field__item {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  font-weight: 800;\r\n  border: 1px solid #000;\r\n}\r\n\r\n.field__point {\r\n  position: relative;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #000;\r\n  transition: -webkit-transform 1s linear;\r\n  -webkit-transition: -webkit-transform 1s linear;\r\n  transition: transform 1s linear;\r\n  transition: transform 1s linear, -webkit-transform 1s linear;\r\n  -webkit-transform: var(--transform);\r\n  transform: var(--transform);\r\n  border-radius: 100%;\r\n  background-color: red;\r\n}\r\n\r\n.field__point:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  top: -18px;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n  border: 15px solid transparent;\r\n  border-bottom-color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmllbGQvZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdURBQXVEO0VBQ3ZELG9EQUFvRDtFQUNwRCxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsK0NBQStCO0VBQS9CLCtCQUErQjtFQUMvQiw0REFBNEQ7RUFDNUQsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2ZpZWxkL2ZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1ncmlkOiAzO1xyXG4gIC0tc2l6ZTogMTAwcHg7XHJcbn1cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZpZWxkX19yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tZ3JpZCksIHZhcigtLXNpemUpKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCh2YXIoLS1ncmlkKSwgdmFyKC0tc2l6ZSkpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbn1cclxuLmZpZWxkX19pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5maWVsZF9fcG9pbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAxcyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgbGluZWFyLCAtd2Via2l0LXRyYW5zZm9ybSAxcyBsaW5lYXI7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHZhcigtLXRyYW5zZm9ybSk7XHJcbiAgdHJhbnNmb3JtOiB2YXIoLS10cmFuc2Zvcm0pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbi5maWVsZF9fcG9pbnQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICB0b3A6IC0xOHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/field/field.component.ts":
/*!******************************************!*\
  !*** ./src/app/field/field.component.ts ***!
  \******************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FieldComponent = class FieldComponent {
    constructor() { }
    ngOnInit() {
    }
};
FieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-field',
        template: __webpack_require__(/*! raw-loader!./field.component.html */ "./node_modules/raw-loader/index.js!./src/app/field/field.component.html"),
        styles: [__webpack_require__(/*! ./field.component.css */ "./src/app/field/field.component.css")]
    })
], FieldComponent);



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n  --grid: 3;\r\n  --size: 80px;\r\n  --transform: translate(0);\r\n}\r\n\r\nlabel{\r\n  color: rebeccapurple;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\n.center{\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.show{\r\n  font-size: 18px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.wrapper{\r\n  display: -webkit-box;\r\n  display: flex;\r\n  padding-top: 50px;\r\n  margin-left: -20px;\r\n}\r\n\r\n.wrapper__item{\r\n  margin-left: 20px;\r\n}\r\n\r\n.field {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.field__row {\r\n  display: grid;\r\n  max-width: 500px;\r\n  grid-template-columns: repeat(var(--grid), var(--size));\r\n  grid-template-rows: repeat(var(--grid), var(--size));\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  border: 1px solid #000;\r\n}\r\n\r\n.field__item {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  font-weight: 800;\r\n  border: 1px solid #000;\r\n  color: #000000;\r\n}\r\n\r\n.field__item.start{\r\n  background-color: green;\r\n}\r\n\r\n.field__item.end{\r\n  background-color: red;\r\n}\r\n\r\n.field__point {\r\n  position: relative;\r\n  width: 30px;\r\n  height: 30px;\r\n  transition: -webkit-transform 1s linear;\r\n  -webkit-transition: -webkit-transform 1s linear;\r\n  transition: transform 1s linear;\r\n  transition: transform 1s linear, -webkit-transform 1s linear;\r\n  -webkit-transform: var(--transform);\r\n          transform: var(--transform);\r\n  border-radius: 100%;\r\n  background-color: rebeccapurple;\r\n}\r\n\r\n.field__point:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  top: -18px;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  border: 15px solid transparent;\r\n  border-bottom-color: rebeccapurple;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix1REFBdUQ7RUFDdkQsb0RBQW9EO0VBQ3BELHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVDQUF1QztFQUN2QywrQ0FBK0I7RUFBL0IsK0JBQStCO0VBQS9CLDREQUErQjtFQUMvQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1ncmlkOiAzO1xyXG4gIC0tc2l6ZTogODBweDtcclxuICAtLXRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG59XHJcblxyXG5sYWJlbHtcclxuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2VudGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnNob3d7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG59XHJcblxyXG4ud3JhcHBlcl9faXRlbXtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLmZpZWxkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZpZWxkX19yb3cge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1ncmlkKSwgdmFyKC0tc2l6ZSkpO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KHZhcigtLWdyaWQpLCB2YXIoLS1zaXplKSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcclxufVxyXG5cclxuLmZpZWxkX19pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uZmllbGRfX2l0ZW0uc3RhcnR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5maWVsZF9faXRlbS5lbmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4uZmllbGRfX3BvaW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDFzIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgbGluZWFyO1xyXG4gIHRyYW5zZm9ybTogdmFyKC0tdHJhbnNmb3JtKTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbn1cclxuXHJcbi5maWVsZF9fcG9pbnQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxuICB0b3A6IC0xOHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let myInt = null;
let GameComponent = class GameComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.mySize = 3;
        this.myCount = 10;
    }
    setField() {
        document.documentElement.style.setProperty(`--transform`, 'translateX(0) translateY(0) ');
        const field = document.querySelector('.field');
        const rend = this.renderer;
        const fieldRow = rend.createElement('div');
        fieldRow.classList.add('field__row');
        field.appendChild(fieldRow);
        document.documentElement.style.setProperty('--size', '80px');
        const size = document.documentElement.style.getPropertyValue('--size');
        function getCommands(fieldLength, power) {
            const fieldLengthLength = Math.floor(Math.sqrt(fieldLength.length));
            document.documentElement.style.setProperty(`--grid`, `${fieldLengthLength}`);
            const fragment = document.createDocumentFragment();
            for (let i = 0; i < fieldLength.length; i++) {
                const item = rend.createElement('div');
                rend.addClass(item, 'field__item');
                const text = rend.createText(fieldLength[i]);
                rend.appendChild(item, text);
                if (fieldLength[i] === 'S') {
                    rend.addClass(item, 'start');
                    const point = rend.createElement('div');
                    rend.addClass(point, 'field__point');
                    rend.appendChild(item, point);
                }
                else if (fieldLength[i] === 'T') {
                    rend.addClass(item, 'end');
                }
                rend.appendChild(fragment, item);
            }
            fieldRow.appendChild(fragment);
            const sideLength = Math.sqrt(fieldLength.length);
            let starti = 0;
            let startj = 0;
            let endi = 0;
            let endj = 0;
            for (let i = 0; i < sideLength; i++) {
                for (let j = 0; j < sideLength; j++) {
                    if (fieldLength[i * sideLength + j] === 'S') {
                        starti = i;
                        startj = j;
                    }
                    if (fieldLength[i * sideLength + j] === 'T') {
                        endi = i;
                        endj = j;
                    }
                }
            }
            const queue = [
                {
                    i: starti,
                    j: startj,
                    d: 'n',
                    p: power,
                    path: [],
                    visited: [[starti, startj].toString()]
                }
            ];
            while (queue.length > 0) {
                const s = queue.shift();
                const i = s.i;
                const j = s.j;
                const d = s.d;
                const p = s.p;
                const path = s.path;
                const visited = s.visited;
                if (i === endi && j === endj) {
                    return path.length <= power ? path : [];
                }
                if (i < 0 ||
                    i >= sideLength ||
                    j < 0 ||
                    j >= sideLength ||
                    fieldLength[i * sideLength + j] === '#' ||
                    p === 0) {
                    continue;
                }
                if (d === 'n') {
                    let temp = path.slice();
                    const v = visited.slice();
                    if (j + 1 < sideLength && v.indexOf([i, j + 1].toString()) === -1) {
                        temp.push('r');
                        queue.push({ i, j, d: 'e', p: p - 1, path: temp, visited: v });
                    }
                    temp = path.slice();
                    if (j - 1 >= 0 && v.indexOf([i, j - 1].toString()) === -1) {
                        temp.push('l');
                        queue.push({ i, j, d: 'w', p: p - 1, path: temp, visited: v });
                    }
                    temp = path.slice();
                    if (v.indexOf([i - 1, j].toString()) === -1) {
                        temp.push('f');
                        v.push([i - 1, j].toString());
                        queue.push({ i: i - 1, j, d: 'n', p: p - 1, path: temp, visited: v });
                    }
                }
                else if (d === 's') {
                    let temp = path.slice();
                    const v = visited.slice();
                    if (j + 1 < sideLength && v.indexOf([i, j + 1].toString()) === -1) {
                        temp.push('r');
                        queue.push({ i, j, d: 'w', p: p - 1, path: temp, visited: v });
                    }
                    temp = path.slice();
                    if (j - 1 >= 0 && v.indexOf([i, j - 1].toString()) === -1) {
                        temp.push('l');
                        queue.push({ i, j, d: 'e', p: p - 1, path: temp, visited: v });
                    }
                    temp = path.slice();
                    if (v.indexOf([i + 1, j].toString()) === -1) {
                        temp.push('f');
                        v.push([i + 1, j].toString());
                        queue.push({ i: i + 1, j, d: 's', p: p - 1, path: temp, visited: v });
                    }
                }
                else if (d === 'e') {
                    let temp = path.slice();
                    const v = visited.slice();
                    if (i + 1 < sideLength && v.indexOf([i + 1, j].toString()) === -1) {
                        temp.push('r');
                        queue.push({ i, j, d: 's', p: p - 1, path: temp, visited: v });
                    }
                    temp = path.slice();
                    if (i - 1 >= 0 && v.indexOf([i - 1, j].toString()) === -1) {
                        temp.push('l');
                        queue.push({ i, j, d: 'n', p: p - 1, path: temp, visited: v });
                    }
                    temp = path.slice();
                    if (v.indexOf([i, j + 1].toString()) === -1) {
                        temp.push('f');
                        v.push([i, j + 1].toString());
                        queue.push({ i, j: j + 1, d: 'e', p: p - 1, path: temp, visited: v });
                    }
                }
                else if (d === 'w') {
                    let temp = path.slice();
                    const v = visited.slice();
                    if (i - 1 >= 0 && v.indexOf([i - 1, j].toString()) === -1) {
                        temp.push('r');
                        queue.push({ i, j, d: 'n', p: p - 1, path: temp, visited: v });
                    }
                    temp = path.slice();
                    if (i + 1 < sideLength && v.indexOf([i + 1, j].toString()) === -1) {
                        temp.push('l');
                        queue.push({ i, j, d: 's', p: p - 1, path: temp, visited: v });
                    }
                    temp = path.slice();
                    if (v.indexOf([i, j - 1].toString()) === -1) {
                        temp.push('f');
                        v.push([i, j - 1].toString());
                        queue.push({ i, j: j - 1, d: 'w', p: p - 1, path: temp, visited: v });
                    }
                }
            }
            return [];
        }
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        function setString(numb) {
            const length = Math.pow(numb, 2);
            const myArray = [];
            for (let i = 0; i < length; i++) {
                myArray.push('.');
            }
            const randomStart = getRandomInt(0, length - 1);
            let randomEnd = null;
            myArray[randomStart] = 'S';
            function getRandomEnd() {
                let randomEndInner = getRandomInt(0, length - 1);
                if (randomStart === randomEndInner) {
                    randomEndInner = getRandomEnd();
                }
                return randomEndInner;
            }
            function getRandomWall() {
                let randomWallInner = getRandomInt(0, length - 1);
                if (randomStart === randomWallInner || randomEnd === randomWallInner) {
                    randomWallInner = getRandomWall();
                }
                return randomWallInner;
            }
            function getRandomWallOther() {
                let randomWallInnerOther = getRandomInt(0, length - 1);
                if (randomStart === randomWallInnerOther || randomEnd === randomWallInnerOther || randomWall === randomWallInnerOther) {
                    randomWallInnerOther = getRandomWallOther();
                }
                return randomWallInnerOther;
            }
            randomEnd = getRandomEnd();
            const randomWall = getRandomWall();
            myArray[randomEnd] = 'T';
            myArray[randomWall] = '#';
            if (length > 9) {
                const randomWallOther = getRandomWallOther();
                const randomWallAnother = getRandomWallOther();
                myArray[randomWallOther] = '#';
                myArray[randomWallAnother] = '#';
            }
            return myArray.join('');
        }
        const que = setString(this.mySize);
        const score = getCommands(que, this.myCount);
        if (!score.length) {
            document.querySelector('.show').textContent = `Ходов не хватило, попробуйте задать больше`;
        }
        else {
            document.querySelector('.show').textContent = `${score}`;
        }
        const direction = 'Y';
        const newQue = score.slice();
        function setTime() {
            for (let i = 0; i <= newQue.length; i++) {
                if (newQue[i] === 'r') {
                    const myTransform = document.documentElement.style.getPropertyValue(`--transform`) +
                        'rotate(90deg) ';
                    document.documentElement.style.setProperty(`--transform`, myTransform);
                    newQue.splice(i, 1);
                    break;
                }
                else if (newQue[i] === 'l') {
                    const myTransform = document.documentElement.style.getPropertyValue(`--transform`) +
                        'rotate(-90deg) ';
                    document.documentElement.style.setProperty(`--transform`, myTransform);
                    newQue.splice(i, 1);
                    break;
                }
                else if (newQue[i] === 'f') {
                    const myTransform = document.documentElement.style.getPropertyValue(`--transform`) +
                        `translate${direction}(-${size}) `;
                    document.documentElement.style.setProperty(`--transform`, myTransform);
                    newQue.splice(i, 1);
                    break;
                }
            }
        }
        myInt = setInterval(setTime, 1000);
    }
    myClick() {
        clearInterval(myInt);
        if (document.getElementsByClassName('field')[0].textContent === '') {
            this.setField();
        }
        else {
            const fi = document.querySelector('.field');
            document.querySelector(`.field__point`).remove();
            fi.textContent = '';
            this.setField();
        }
    }
    ngOnInit() {
    }
};
GameComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: __webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/game.component.html"),
        styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
    })
], GameComponent);



/***/ }),

/***/ "./src/app/new-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/new-service.service.ts ***!
  \****************************************/
/*! exports provided: NewServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewServiceService", function() { return NewServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewServiceService = class NewServiceService {
    constructor() {
    }
    consoleText(arg) {
        console.log(arg);
    }
};
NewServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NewServiceService);



/***/ }),

/***/ "./src/app/some/some.component.css":
/*!*****************************************!*\
  !*** ./src/app/some/some.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbWUvc29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/some/some.component.ts":
/*!****************************************!*\
  !*** ./src/app/some/some.component.ts ***!
  \****************************************/
/*! exports provided: SomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomeComponent", function() { return SomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SomeComponent = class SomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
SomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-some',
        template: __webpack_require__(/*! raw-loader!./some.component.html */ "./node_modules/raw-loader/index.js!./src/app/some/some.component.html"),
        styles: [__webpack_require__(/*! ./some.component.css */ "./src/app/some/some.component.css")]
    })
], SomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Github\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map