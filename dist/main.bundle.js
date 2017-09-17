webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_home_home_component__ = __webpack_require__("../../../../../src/app/views/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_guard_auth_guard__ = __webpack_require__("../../../../../src/app/core/guard/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__views_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__core_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ui-toolbar class=\"fixed flat elevate-on-scroll accent\" id=\"app-header\">\r\n    <button (click)=\"menuOpen = true\" class=\"ui-button flat icon\" uiRipple>\r\n        <i class=\"material-icons\">menu</i>\r\n    </button>\r\n    <a class=\"logo\" routerLink=\"/\">\r\n        <img src=\"/assets/icons/biblioteca-virtual.png\"\r\n             alt=\"\">\r\n    </a>\r\n    <div class=\"title\">{{title}}</div>\r\n    <div class=\"align-right\">\r\n        <div *ngIf=\"usuario\">\r\n            <button class=\"ui-button icon user\" uiRipple\r\n                    [style.background-color]=\"usuario.cor\"\r\n                    [class.is-bright]=\"isBright(usuario.cor)\"\r\n                    [uiMenuTrigger]=\"menuUser\"\r\n                    align=\"right\">\r\n                {{usuario.letra}}\r\n            </button>\r\n        </div>\r\n        <div *ngIf=\"!usuario\">\r\n            <a class=\"ui-button flat icon\" uiRipple routerLink=\"/signin\">\r\n                <i class=\"material-icons\">person</i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</ui-toolbar>\r\n\r\n<ui-nav-drawer class=\"persistent\" [(open)]=\"menuOpen\">\r\n    <ui-toolbar class=\"flat\">\r\n        <button (click)=\"menuOpen = false\" class=\"ui-button flat icon\" uiRipple>\r\n            <i class=\"material-icons\">menu</i>\r\n        </button>\r\n        <a class=\"logo\" routerLink=\"/\">\r\n            <img src=\"/assets/icons/biblioteca-virtual.png\"\r\n                 alt=\"\">\r\n        </a>\r\n        <span class=\"title\">{{title}}</span>\r\n    </ui-toolbar>\r\n    <div class=\"ui-nav-drawer-overflow\">\r\n        <div class=\"ui-list\">\r\n            <div *ngIf=\"usuario\">\r\n                <a class=\"ui-list-item\" uiRipple routerLink=\"/\" [routerLinkActive]=\"['active']\"\r\n                   [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                    <span class=\"icon\">\r\n                        <i class=\"material-icons\">home</i>\r\n                    </span>\r\n                    Início\r\n                </a>\r\n                <!--<a class=\"ui-list-item\" uiRipple routerLink=\"/client\" [routerLinkActive]=\"['active']\">\r\n                    <span class=\"icon\">\r\n                        <i class=\"material-icons\">group</i>\r\n                    </span>\r\n                    Clientes\r\n                </a>-->\r\n            </div>\r\n            <div *ngIf=\"!usuario\">\r\n\r\n                <a class=\"ui-list-item\" uiRipple routerLink=\"/signin\">\r\n                    <span class=\"icon\">\r\n                        <i class=\"material-icons\">person</i>\r\n                    </span>\r\n                    Iniciar sessão\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ui-nav-drawer>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<ui-snackbar-container></ui-snackbar-container>\r\n<tfy-notification-pop-container *ngIf=\"usuario\"></tfy-notification-pop-container>\r\n\r\n<ui-menu #menuUser>\r\n    <div class=\"ui-menu-content size-2x\" *ngIf=\"usuario\">\r\n        <div class=\"ui-menu-item\">\r\n            <b>{{usuario.nome}}</b>\r\n        </div>\r\n        <div class=\"ui-divider\"></div>\r\n        <div class=\"ui-menu-item\" uiRipple (click)=\"signOut()\">\r\n            Sair\r\n        </div>\r\n    </div>\r\n</ui-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  -webkit-tap-highlight-color: transparent; }\n  *, *::before, *::after {\n    border: 0;\n    margin: 0;\n    padding: 0;\n    outline: none;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif; }\n\nhtml, body {\n  word-wrap: break-word;\n  height: 100%; }\n\npre {\n  font-family: monospace; }\n\nimg, svg {\n  max-width: 100%; }\n\np {\n  margin: 20px 0; }\n\ninput,\ntextarea {\n  -webkit-appearance: none;\n  -webkit-border-radius: 0; }\n\n:link {\n  text-decoration: none; }\n  :link:hover {\n    text-decoration: underline; }\n\n/* Icons*/\n.material-icons {\n  /* Rules for sizing the icon. */\n  /* Rules for using icons as black on a light background. */\n  /* Rules for using icons as white on a dark background. */ }\n  .material-icons.s-18 {\n    font-size: 18px; }\n  .material-icons.s-24 {\n    font-size: 24px; }\n  .material-icons.s-36 {\n    font-size: 36px; }\n  .material-icons.s-48 {\n    font-size: 48px; }\n  .material-icons.light {\n    color: rgba(0, 0, 0, 0.54); }\n  .material-icons.light.inactive {\n    color: rgba(0, 0, 0, 0.26); }\n  .material-icons.dark {\n    color: white; }\n  .material-icons.dark.inactive {\n    color: rgba(255, 255, 255, 0.3); }\n\n.notransition, .notransition * {\n  transition: none !important; }\n\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.ui-button-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .ui-button-container .ui-button {\n    margin: 2px 0;\n    min-width: unset; }\n  .ui-button-container .ui-button:not(.full) {\n    margin-right: 4px;\n    margin-left: 0; }\n  .ui-button-container.align-right {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    .ui-button-container.align-right .ui-button:not(.full) {\n      margin-left: 4px;\n      margin-right: 0; }\n  .ui-button-container.cover {\n    padding: 12px 16px;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    .ui-button-container.cover.align-left {\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; }\n    .ui-button-container.cover .ui-button {\n      margin-right: 0; }\n    .ui-button-container.cover .ui-button:not(.full) + .ui-button:not(.full) {\n      margin-left: 4px; }\n\n.ui-fab-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  width: 60px;\n  position: fixed;\n  right: 16px;\n  bottom: 16px;\n  z-index: 2; }\n  @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n    .ui-fab-container {\n      right: 10px;\n      bottom: 10px; } }\n  .ui-fab-container .ui-button.mini:not(:last-child) {\n    margin-right: 13px; }\n  .ui-fab-container.hide .ui-button {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n.ui-button {\n  padding-left: 16px;\n  padding-right: 16px;\n  min-height: 36px;\n  border-radius: 2px;\n  font-size: 14px;\n  font-weight: 500;\n  text-align: center;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  transition: color 0.28s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.28s cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 0.28s cubic-bezier(0, 0, 0.2, 1), color 0.28s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 0.28s cubic-bezier(0, 0, 0.2, 1), color 0.28s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.28s cubic-bezier(0, 0, 0.2, 1);\n  font-family: inherit;\n  white-space: nowrap;\n  min-width: 88px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .ui-button:not(.no-uppercase) {\n    text-transform: uppercase; }\n  .ui-button:not(button) {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .ui-button:hover {\n    text-decoration: none; }\n  .ui-button.full {\n    width: 100%; }\n  .ui-button::before {\n    content: '';\n    position: absolute;\n    display: block;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #000;\n    opacity: 0;\n    transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1);\n    border-radius: 2px; }\n  .ui-button:focus::before {\n    opacity: 0.06; }\n  .ui-button:active:not([uiRipple])::before {\n    opacity: 0.12; }\n  @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n    .ui-button::after {\n      content: \"\";\n      position: absolute;\n      left: -6px;\n      top: -6px;\n      bottom: -6px;\n      right: -6px; }\n    .ui-button > * + *::after {\n      right: 0; } }\n  .ui-button i {\n    vertical-align: middle; }\n  .ui-button.icon, .ui-button.fab {\n    border-radius: 50%;\n    padding-left: 0;\n    padding-right: 0;\n    width: 36px;\n    height: 36px;\n    min-width: 36px; }\n    .ui-button.icon::before, .ui-button.fab::before {\n      border-radius: 50%; }\n  .ui-button.icon::before {\n    transition: -webkit-transform 0.195s cubic-bezier(0.4, 0, 0.2, 1);\n    transition: transform 0.195s cubic-bezier(0.4, 0, 0.2, 1);\n    transition: transform 0.195s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.195s cubic-bezier(0.4, 0, 0.2, 1);\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  .ui-button.icon:not([uiRipple]):focus::before {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  .ui-button.fab {\n    width: 56px;\n    height: 56px;\n    min-height: 56px;\n    margin: 5px; }\n    .ui-button.fab.hide {\n      -webkit-transform: scale(0);\n              transform: scale(0); }\n    .ui-button.fab.mini {\n      width: 40px;\n      height: 40px;\n      min-height: 40px; }\n    .ui-button.fab:not(:disabled) {\n      box-shadow: 0 0 2px 0 rgba(0,0,0,.14), 0 2px 2px 0 rgba(0,0,0,.12), 0 1px 3px 0 rgba(0,0,0,.20), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1); }\n      @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n        .ui-button.fab:not(:disabled) {\n          box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1); } }\n      .ui-button.fab:not(:disabled):hover {\n        box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1); }\n      .ui-button.fab:not(:disabled):active {\n        box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 3px rgba(0,0,0,.12), 0 4px 15px 0 rgba(0,0,0,.20), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1); }\n  .ui-button.pointer {\n    cursor: pointer; }\n  .ui-button.flat {\n    background-color: transparent; }\n    .ui-button.flat:focus {\n      background-color: rgba(0, 0, 0, 0.06); }\n    .ui-button.flat:active {\n      background-color: rgba(0, 0, 0, 0.12); }\n  .ui-button.success:not(:disabled) {\n    background-color: #43a047;\n    color: white; }\n    .ui-button.success:not(:disabled) .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .ui-button.success:not(:disabled)::before {\n      background-color: white; }\n    .ui-button.success:not(:disabled).flat {\n      background-color: transparent;\n      color: #43a047; }\n    .ui-button.success:not(:disabled) ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: white; }\n  .ui-button.warning:not(:disabled) {\n    background-color: #ff9800;\n    color: black; }\n    .ui-button.warning:not(:disabled) .ui-ripple-wave {\n      background-color: rgba(33, 33, 33, 0.1); }\n    .ui-button.warning:not(:disabled)::before {\n      background-color: black; }\n    .ui-button.warning:not(:disabled).flat {\n      background-color: transparent;\n      color: #ff9800; }\n    .ui-button.warning:not(:disabled) ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: black; }\n  .ui-button.error:not(:disabled) {\n    background-color: #f44336;\n    color: white; }\n    .ui-button.error:not(:disabled) .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .ui-button.error:not(:disabled)::before {\n      background-color: white; }\n    .ui-button.error:not(:disabled).flat {\n      background-color: transparent;\n      color: #f44336; }\n    .ui-button.error:not(:disabled) ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: white; }\n  .ui-button.raised:not(:disabled) {\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.14), 0 2px 2px 0 rgba(0,0,0,.12), 0 1px 3px 0 rgba(0,0,0,.20); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      .ui-button.raised:not(:disabled) {\n        box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20); } }\n    .ui-button.raised:not(:disabled):hover {\n      box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20); }\n    .ui-button.raised:not(:disabled):active {\n      box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 3px rgba(0,0,0,.12), 0 4px 15px 0 rgba(0,0,0,.20); }\n  .ui-button:disabled {\n    background-color: rgba(0, 0, 0, 0.12);\n    color: rgba(0, 0, 0, 0.26);\n    box-shadow: none;\n    cursor: not-allowed; }\n    .ui-button:disabled.flat {\n      background-color: transparent; }\n  .ui-button .badge {\n    position: absolute;\n    right: 0;\n    top: 0;\n    background-color: #e0e0e0;\n    color: black;\n    width: 20px;\n    height: 20px;\n    text-align: center;\n    border-radius: 11px;\n    font-size: 11px;\n    line-height: 21px;\n    z-index: 1;\n    transition: -webkit-transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.28s cubic-bezier(0.4, 0, 0.2, 1); }\n    .ui-button .badge.hide {\n      -webkit-transform: scale(0);\n              transform: scale(0); }\n  .ui-button .icon {\n    margin-right: -12px;\n    float: right; }\n    .ui-button .icon i {\n      line-height: 8px;\n      padding-bottom: 2px; }\n\n.ui-s480 .ui-fab-container {\n  transition: all 280ms cubic-bezier(0, 0, 0.2, 1);\n  top: 120px;\n  bottom: 100%;\n  right: calc(50% - (480px / 2) - 79px); }\n  @media only screen and (min-width: 376px) and (min-width: 764px) {\n    .ui-s480 .ui-fab-container {\n      top: 128px; } }\n  @media (max-width: 668px) {\n    .ui-s480 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      .ui-s480 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  .ui-s480 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    .ui-s480 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\n.ui-s600 .ui-fab-container {\n  transition: all 280ms cubic-bezier(0, 0, 0.2, 1);\n  top: 120px;\n  bottom: 100%;\n  right: calc(50% - (600px / 2) - 79px); }\n  @media only screen and (min-width: 376px) and (min-width: 764px) {\n    .ui-s600 .ui-fab-container {\n      top: 128px; } }\n  @media (max-width: 788px) {\n    .ui-s600 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      .ui-s600 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  .ui-s600 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    .ui-s600 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\n.ui-s840 .ui-fab-container {\n  transition: all 280ms cubic-bezier(0, 0, 0.2, 1);\n  top: 120px;\n  bottom: 100%;\n  right: calc(50% - (840px / 2) - 79px); }\n  @media only screen and (min-width: 376px) and (min-width: 764px) {\n    .ui-s840 .ui-fab-container {\n      top: 128px; } }\n  @media (max-width: 1028px) {\n    .ui-s840 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      .ui-s840 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  .ui-s840 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    .ui-s840 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\n.ui-s960 .ui-fab-container {\n  transition: all 280ms cubic-bezier(0, 0, 0.2, 1);\n  top: 120px;\n  bottom: 100%;\n  right: calc(50% - (960px / 2) - 79px); }\n  @media only screen and (min-width: 376px) and (min-width: 764px) {\n    .ui-s960 .ui-fab-container {\n      top: 128px; } }\n  @media (max-width: 1148px) {\n    .ui-s960 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      .ui-s960 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  .ui-s960 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    .ui-s960 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\n.ui-s1280 .ui-fab-container {\n  transition: all 280ms cubic-bezier(0, 0, 0.2, 1);\n  top: 120px;\n  bottom: 100%;\n  right: calc(50% - (1280px / 2) - 79px); }\n  @media only screen and (min-width: 376px) and (min-width: 764px) {\n    .ui-s1280 .ui-fab-container {\n      top: 128px; } }\n  @media (max-width: 1468px) {\n    .ui-s1280 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      .ui-s1280 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  .ui-s1280 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    .ui-s1280 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\n.ui-s1440 .ui-fab-container {\n  transition: all 280ms cubic-bezier(0, 0, 0.2, 1);\n  top: 120px;\n  bottom: 100%;\n  right: calc(50% - (1440px / 2) - 79px); }\n  @media only screen and (min-width: 376px) and (min-width: 764px) {\n    .ui-s1440 .ui-fab-container {\n      top: 128px; } }\n  @media (max-width: 1628px) {\n    .ui-s1440 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      .ui-s1440 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  .ui-s1440 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    .ui-s1440 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\n.ui-s1600 .ui-fab-container {\n  transition: all 280ms cubic-bezier(0, 0, 0.2, 1);\n  top: 120px;\n  bottom: 100%;\n  right: calc(50% - (1600px / 2) - 79px); }\n  @media only screen and (min-width: 376px) and (min-width: 764px) {\n    .ui-s1600 .ui-fab-container {\n      top: 128px; } }\n  @media (max-width: 1788px) {\n    .ui-s1600 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      .ui-s1600 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  .ui-s1600 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    .ui-s1600 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\nbody.ui-nav-drawer-persistent .ui-s480 .ui-fab-container {\n  right: calc(50% - (800px / 2) - 79px); }\n  @media (max-width: 988px) {\n    body.ui-nav-drawer-persistent .ui-s480 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      body.ui-nav-drawer-persistent .ui-s480 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  body.ui-nav-drawer-persistent .ui-s480 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    body.ui-nav-drawer-persistent .ui-s480 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\nbody.ui-nav-drawer-persistent .ui-s600 .ui-fab-container {\n  right: calc(50% - (920px / 2) - 79px); }\n  @media (max-width: 1108px) {\n    body.ui-nav-drawer-persistent .ui-s600 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      body.ui-nav-drawer-persistent .ui-s600 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  body.ui-nav-drawer-persistent .ui-s600 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    body.ui-nav-drawer-persistent .ui-s600 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\nbody.ui-nav-drawer-persistent .ui-s840 .ui-fab-container {\n  right: calc(50% - (1160px / 2) - 79px); }\n  @media (max-width: 1348px) {\n    body.ui-nav-drawer-persistent .ui-s840 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      body.ui-nav-drawer-persistent .ui-s840 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  body.ui-nav-drawer-persistent .ui-s840 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    body.ui-nav-drawer-persistent .ui-s840 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\nbody.ui-nav-drawer-persistent .ui-s960 .ui-fab-container {\n  right: calc(50% - (1280px / 2) - 79px); }\n  @media (max-width: 1468px) {\n    body.ui-nav-drawer-persistent .ui-s960 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      body.ui-nav-drawer-persistent .ui-s960 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  body.ui-nav-drawer-persistent .ui-s960 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    body.ui-nav-drawer-persistent .ui-s960 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\nbody.ui-nav-drawer-persistent .ui-s1280 .ui-fab-container {\n  right: calc(50% - (1600px / 2) - 79px); }\n  @media (max-width: 1788px) {\n    body.ui-nav-drawer-persistent .ui-s1280 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      body.ui-nav-drawer-persistent .ui-s1280 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  body.ui-nav-drawer-persistent .ui-s1280 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    body.ui-nav-drawer-persistent .ui-s1280 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\nbody.ui-nav-drawer-persistent .ui-s1440 .ui-fab-container {\n  right: calc(50% - (1760px / 2) - 79px); }\n  @media (max-width: 1948px) {\n    body.ui-nav-drawer-persistent .ui-s1440 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      body.ui-nav-drawer-persistent .ui-s1440 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  body.ui-nav-drawer-persistent .ui-s1440 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    body.ui-nav-drawer-persistent .ui-s1440 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\nbody.ui-nav-drawer-persistent .ui-s1600 .ui-fab-container {\n  right: calc(50% - (1920px / 2) - 79px); }\n  @media (max-width: 2108px) {\n    body.ui-nav-drawer-persistent .ui-s1600 .ui-fab-container {\n      top: 100%;\n      margin-top: -82px;\n      right: 16px; }\n      body.ui-nav-drawer-persistent .ui-s1600 .ui-fab-container .ui-button.mini:not(:last-child) {\n        margin-right: 12px; } }\n  body.ui-nav-drawer-persistent .ui-s1600 .ui-fab-container.scrolled {\n    top: 100%;\n    margin-top: -82px;\n    right: 16px; }\n    body.ui-nav-drawer-persistent .ui-s1600 .ui-fab-container.scrolled .ui-button.mini:not(:last-child) {\n      margin-right: 12px; }\n\n/**/\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\nui-card {\n  display: block;\n  box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20);\n  background-color: #FFF;\n  max-width: 100%;\n  border-radius: 2px;\n  transition: box-shadow 0.28s cubic-bezier(0, 0, 0.2, 1); }\n  ui-card.no-space {\n    margin: 0; }\n  ui-card.no-radius {\n    border-radius: 0; }\n  ui-card.pointer {\n    cursor: pointer; }\n  ui-card.elevate-on-toolbar {\n    position: relative;\n    z-index: 2; }\n  ui-card.raising {\n    box-shadow: 0 0 2px 0 rgba(0,0,0,.14), 0 2px 2px 0 rgba(0,0,0,.12), 0 1px 3px 0 rgba(0,0,0,.20); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      ui-card.raising {\n        box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20); } }\n    ui-card.raising:hover {\n      box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20); }\n    ui-card.raising:active {\n      box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 3px rgba(0,0,0,.12), 0 4px 15px 0 rgba(0,0,0,.20); }\n  ui-card img.responsive {\n    width: 100%;\n    display: block; }\n  ui-card ui-card-media {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    ui-card ui-card-media .user-letter {\n      font-size: 42px; }\n  ui-card ui-card-content {\n    display: block;\n    padding: 16px;\n    font-size: 14px; }\n  ui-card ui-card-title {\n    display: block;\n    font-size: 24px;\n    padding: 16px 16px 0;\n    cursor: default;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  ui-card ui-card-subtitle {\n    cursor: default;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: block;\n    font-size: 12px;\n    padding: 12px 16px 0;\n    opacity: 0.65; }\n  ui-card.size-480 {\n    max-width: 480px; }\n  ui-card.size-600 {\n    max-width: 600px; }\n  ui-card.size-840 {\n    max-width: 840px; }\n  ui-card.size-960 {\n    max-width: 960px; }\n  ui-card.size-1280 {\n    max-width: 1280px; }\n  ui-card.size-1440 {\n    max-width: 1440px; }\n  ui-card.size-1600 {\n    max-width: 1600px; }\n\n.ui-divider {\n  height: 1px;\n  margin: 8px 0; }\n  .ui-divider:not(.nothing) {\n    min-height: 1px; }\n  .ui-divider:first-child {\n    margin-top: 0; }\n  .ui-divider:last-child {\n    margin-bottom: 0; }\n\n.ui-list {\n  padding: 8px 0; }\n  .ui-list li,\n  .ui-list .ui-list-item {\n    min-height: 48px;\n    padding: 0 16px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-decoration: none;\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.87);\n    font-weight: 500;\n    width: 100%;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: background-color 280ms cubic-bezier(0, 0, 0.2, 1); }\n    .ui-list li:not(a),\n    .ui-list .ui-list-item:not(a) {\n      cursor: default; }\n    .ui-list li.subheader,\n    .ui-list .ui-list-item.subheader {\n      color: rgba(0, 0, 0, 0.54); }\n    .ui-list li.disabled,\n    .ui-list .ui-list-item.disabled {\n      color: rgba(0, 0, 0, 0.44); }\n    .ui-list li .icon:not(.ui-button),\n    .ui-list .ui-list-item .icon:not(.ui-button) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      width: 40px;\n      margin-right: 16px;\n      color: rgba(0, 0, 0, 0.54);\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n    .ui-list li .avatar,\n    .ui-list .ui-list-item .avatar {\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      width: 40px;\n      margin-right: 16px;\n      height: 40px;\n      border-radius: 20px;\n      background-color: #9e9e9e;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      text-align: center;\n      text-transform: uppercase; }\n    .ui-list li.multi-line .lines,\n    .ui-list .ui-list-item.multi-line .lines {\n      padding: 19px 0; }\n    .ui-list li.multi-line .avatar,\n    .ui-list .ui-list-item.multi-line .avatar {\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n      margin-top: 16px; }\n    .ui-list li.multi-line .primary,\n    .ui-list .ui-list-item.multi-line .primary {\n      font-weight: 400;\n      font-size: 16px; }\n    .ui-list li.multi-line .secondary,\n    .ui-list .ui-list-item.multi-line .secondary {\n      font-weight: 400;\n      font-size: 14px; }\n    .ui-list li .action,\n    .ui-list .ui-list-item .action {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-left: auto;\n      max-width: 56px;\n      margin-right: -2px; }\n      .ui-list li .action.left,\n      .ui-list .ui-list-item .action.left {\n        margin-left: -2px;\n        margin-right: 32px; }\n      .ui-list li .action .ui-switch,\n      .ui-list .ui-list-item .action .ui-switch {\n        margin-right: 9px; }\n      .ui-list li .action .arrow,\n      .ui-list .ui-list-item .action .arrow {\n        margin-right: 10px; }\n    .ui-list li .arrow,\n    .ui-list .ui-list-item .arrow {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      margin-left: auto;\n      max-width: 56px;\n      margin-right: -2px;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      color: rgba(0, 0, 0, 0.54); }\n      .ui-list li .arrow i,\n      .ui-list .ui-list-item .arrow i {\n        transition: -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n    .ui-list li,\n    .ui-list li .icon:not(.ui-button),\n    .ui-list .ui-list-item,\n    .ui-list .ui-list-item .icon:not(.ui-button) {\n      transition: color 280ms cubic-bezier(0, 0, 0.2, 1); }\n    .ui-list li.expanded:not(.nothing),\n    .ui-list .ui-list-item.expanded:not(.nothing) {\n      background-color: rgba(0, 0, 0, 0.025);\n      font-weight: 500; }\n      .ui-list li.expanded:not(.nothing) .arrow i,\n      .ui-list .ui-list-item.expanded:not(.nothing) .arrow i {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n  .ui-list .ui-list-item-group {\n    overflow: hidden;\n    height: 0;\n    transition: height 280ms cubic-bezier(0, 0, 0.2, 1), background-color 280ms cubic-bezier(0, 0, 0.2, 1), opacity 280ms cubic-bezier(0, 0, 0.2, 1); }\n    .ui-list .ui-list-item-group li,\n    .ui-list .ui-list-item-group .ui-list-item {\n      font-weight: 400;\n      padding-left: 37px !important; }\n      .ui-list .ui-list-item-group li.expanded:not(.nothing),\n      .ui-list .ui-list-item-group .ui-list-item.expanded:not(.nothing) {\n        font-weight: 500; }\n    .ui-list .ui-list-item-group .ui-list-item-group li,\n    .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item:not(.nothing) {\n      padding-left: 53px !important; }\n      .ui-list .ui-list-item-group .ui-list-item-group li.expanded,\n      .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item:not(.nothing).expanded {\n        font-weight: 500; }\n    .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group li,\n    .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item:not(.nothing) {\n      padding-left: 69px !important; }\n      .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group li.expanded,\n      .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item:not(.nothing).expanded {\n        font-weight: 500; }\n    .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group li,\n    .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item:not(.nothing) {\n      padding-left: 85px !important; }\n      .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group li.expanded,\n      .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item:not(.nothing).expanded {\n        font-weight: 500; }\n    .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group li,\n    .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item:not(.nothing) {\n      padding-left: 101px !important; }\n      .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group li.expanded,\n      .ui-list .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item-group .ui-list-item:not(.nothing).expanded {\n        font-weight: 500; }\n    .ui-list .ui-list-item-group.expanded {\n      background-color: rgba(0, 0, 0, 0.025);\n      opacity: 1; }\n      .ui-list .ui-list-item-group.expanded li,\n      .ui-list .ui-list-item-group.expanded .ui-list-item {\n        font-weight: 400; }\n\n[uiRipple] {\n  position: relative; }\n  [uiRipple] .ui-ripple-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    pointer-events: none; }\n  [uiRipple] .ui-ripple-wave {\n    position: absolute;\n    border-radius: 50%;\n    background-color: rgba(33, 33, 33, 0.1);\n    width: 0;\n    height: 0;\n    z-index: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    pointer-events: none; }\n\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.wrap-date-picker {\n  z-index: 5; }\n  .wrap-date-picker ui-calendar {\n    box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20);\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n    transition: opacity 280ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.6, 1);\n    transition: transform 280ms cubic-bezier(0.4, 0, 0.6, 1), opacity 280ms cubic-bezier(0.4, 0, 0.6, 1);\n    transition: transform 280ms cubic-bezier(0.4, 0, 0.6, 1), opacity 280ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.6, 1);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n    z-index: 5; }\n  .wrap-date-picker.open ui-calendar {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  @media (max-width: 600px) {\n    .wrap-date-picker {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      background-color: transparent !important; }\n      .wrap-date-picker .overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: transparent;\n        transition: background 195ms cubic-bezier(0, 0, 0.2, 1); }\n      .wrap-date-picker ui-calendar {\n        box-shadow: 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 49px 8px rgba(0,0,0,.12), 0 11px 15px 0 rgba(0,0,0,.20);\n        position: relative !important;\n        top: initial !important;\n        left: initial !important;\n        margin: auto;\n        -webkit-transform-origin: bottom;\n                transform-origin: bottom;\n        transition: opacity 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 225ms cubic-bezier(0.4, 0, 1, 1);\n        transition: transform 225ms cubic-bezier(0.4, 0, 1, 1), opacity 195ms cubic-bezier(0.4, 0, 1, 1);\n        transition: transform 225ms cubic-bezier(0.4, 0, 1, 1), opacity 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 225ms cubic-bezier(0.4, 0, 1, 1);\n        -webkit-transform: scale(0.8) translateY(16px);\n                transform: scale(0.8) translateY(16px); }\n      .wrap-date-picker.open .overlay {\n        background-color: rgba(0, 0, 0, 0.2); }\n      .wrap-date-picker.open ui-calendar {\n        transition: opacity 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1), opacity 195ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1), opacity 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1);\n        -webkit-transform: scale(1) translateY(0);\n                transform: scale(1) translateY(0); } }\n\n.ui-s480 {\n  max-width: 480px;\n  width: 100%;\n  margin: 0 auto; }\n\n.ui-s600 {\n  max-width: 600px;\n  width: 100%;\n  margin: 0 auto; }\n\n.ui-s840 {\n  max-width: 840px;\n  width: 100%;\n  margin: 0 auto; }\n\n.ui-s960 {\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto; }\n\n.ui-s1280 {\n  max-width: 1280px;\n  width: 100%;\n  margin: 0 auto; }\n\n.ui-s1440 {\n  max-width: 1440px;\n  width: 100%;\n  margin: 0 auto; }\n\n.ui-s1600 {\n  max-width: 1600px;\n  width: 100%;\n  margin: 0 auto; }\n\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.ui-table-overflow {\n  overflow-x: auto; }\n\n.ui-data-table {\n  font-size: 13px;\n  border-collapse: collapse;\n  width: 100%; }\n  .ui-data-table th {\n    font-size: 12px;\n    font-weight: 500;\n    height: 56px;\n    text-align: left;\n    cursor: default;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    white-space: nowrap; }\n    .ui-data-table th i {\n      font-size: 16px;\n      vertical-align: middle;\n      transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n      transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n      transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n      opacity: 0;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n    .ui-data-table th.order_asc i {\n      opacity: 1;\n      -webkit-transform: rotate(180deg);\n              transform: rotate(180deg); }\n    .ui-data-table th.order_desc i {\n      opacity: 1;\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg); }\n  .ui-data-table th, .ui-data-table td {\n    padding: 0 12px; }\n    .ui-data-table th:first-child, .ui-data-table td:first-child {\n      padding: 0 24px; }\n    .ui-data-table th:last-child, .ui-data-table td:last-child {\n      padding-right: 24px; }\n    .ui-data-table th.option, .ui-data-table th.picture, .ui-data-table td.option, .ui-data-table td.picture {\n      width: 56px; }\n    .ui-data-table th .ellipsis, .ui-data-table td .ellipsis {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 2;\n      /* number of lines to show */\n      line-height: 17px;\n      /* fallback */\n      max-height: 34px;\n      /* fallback */ }\n  .ui-data-table tr {\n    cursor: default; }\n  .ui-data-table td {\n    height: 48px; }\n    .ui-data-table td.no-wrap {\n      white-space: nowrap; }\n  .ui-data-table .align-right {\n    text-align: right; }\n  .ui-data-table .image,\n  .ui-data-table .letter {\n    height: 32px;\n    width: 32px;\n    border-radius: 16px;\n    background-position: center;\n    background-size: cover;\n    margin: 0 2px;\n    line-height: 32px;\n    text-align: center;\n    text-transform: uppercase;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  .ui-data-table tfoot td {\n    font-size: 12px;\n    cursor: default;\n    height: 56px; }\n    .ui-data-table tfoot td:last-child {\n      padding-right: 14px; }\n    .ui-data-table tfoot td .pagination {\n      margin-right: 24px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n  ui-data-table.responsive .ui-data-table tbody th {\n    display: inline-block;\n    border: none;\n    vertical-align: middle;\n    height: 30px;\n    line-height: 30px; }\n    ui-data-table.responsive .ui-data-table tbody th.empty {\n      display: none; }\n  ui-data-table.responsive .ui-data-table tbody tr {\n    display: block; }\n    ui-data-table.responsive .ui-data-table tbody tr:first-child {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap; }\n    ui-data-table.responsive .ui-data-table tbody tr td:not(.nothing) {\n      display: block;\n      text-align: right;\n      border: none;\n      vertical-align: middle;\n      padding: 15px 12px;\n      width: 100%;\n      height: auto;\n      min-height: 48px; }\n      ui-data-table.responsive .ui-data-table tbody tr td:not(.nothing):before {\n        content: attr(data-title);\n        float: left;\n        font-weight: 500;\n        margin-right: 8px; }\n      ui-data-table.responsive .ui-data-table tbody tr td:not(.nothing) .image {\n        margin: 0; }\n      ui-data-table.responsive .ui-data-table tbody tr td:not(.nothing).empty {\n        display: none; }\n  ui-data-table.responsive .ui-data-table tfoot tr {\n    height: auto; } }\n\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.ui-progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #acece6;\n  background-clip: padding-box;\n  overflow: hidden;\n  -webkit-animation: show 280ms cubic-bezier(0, 0, 0.2, 1) forwards;\n          animation: show 280ms cubic-bezier(0, 0, 0.2, 1) forwards; }\n  .ui-progress.hide {\n    -webkit-animation: hide 280ms cubic-bezier(0, 0, 0.2, 1) forwards;\n            animation: hide 280ms cubic-bezier(0, 0, 0.2, 1) forwards; }\n  .ui-progress .determinate {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    transition: width .3s linear; }\n  .ui-progress .indeterminate:before {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite; }\n  .ui-progress .indeterminate:after {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    -webkit-animation-delay: 1.15s;\n    animation-delay: 1.15s; }\n\n@-webkit-keyframes show {\n  0% {\n    height: 0;\n    display: none; }\n  1% {\n    height: 0;\n    display: block; }\n  100% {\n    height: 4px;\n    display: block; } }\n\n@keyframes show {\n  0% {\n    height: 0;\n    display: none; }\n  1% {\n    height: 0;\n    display: block; }\n  100% {\n    height: 4px;\n    display: block; } }\n\n@-webkit-keyframes hide {\n  0% {\n    height: 4px;\n    display: block; }\n  99% {\n    height: 0;\n    display: block; }\n  100% {\n    height: 0;\n    display: none; } }\n\n@keyframes hide {\n  0% {\n    height: 4px;\n    display: block; }\n  99% {\n    height: 0;\n    display: block; }\n  100% {\n    height: 0;\n    display: none; } }\n\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%; }\n  60% {\n    left: 100%;\n    right: -90%; }\n  100% {\n    left: 100%;\n    right: -90%; } }\n\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%; }\n  60% {\n    left: 107%;\n    right: -8%; }\n  100% {\n    left: 107%;\n    right: -8%; } }\n\n.ui-flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .ui-flex-container ui-input-container,\n  .ui-flex-container ui-switch-container,\n  .ui-flex-container .ui-flex-container,\n  .ui-flex-container .flex {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n    .ui-flex-container ui-input-container + *,\n    .ui-flex-container ui-switch-container + *,\n    .ui-flex-container .ui-flex-container + *,\n    .ui-flex-container .flex + * {\n      margin-left: 16px; }\n  .ui-flex-container .ui-flex-container {\n    width: 100%; }\n  .ui-flex-container .ui-button {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n\n@media (max-width: 480px) {\n  body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s480 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s480 > ui-input-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s480 > ui-switch-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s480 > .ui-flex-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s480 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 600px) {\n  body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s600 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s600 > ui-input-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s600 > ui-switch-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s600 > .ui-flex-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s600 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 840px) {\n  body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s840 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s840 > ui-input-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s840 > ui-switch-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s840 > .ui-flex-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s840 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 960px) {\n  body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s960 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s960 > ui-input-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s960 > ui-switch-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s960 > .ui-flex-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s960 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 1280px) {\n  body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1280 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1280 > ui-input-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1280 > ui-switch-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1280 > .ui-flex-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1280 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 1440px) {\n  body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1440 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1440 > ui-input-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1440 > ui-switch-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1440 > .ui-flex-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1440 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 1600px) {\n  body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1600 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1600 > ui-input-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1600 > ui-switch-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1600 > .ui-flex-container + *,\n    body:not(.ui-nav-drawer-persistent) .ui-flex-container.break-on-s1600 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 800px) {\n  body.ui-nav-drawer-persistent .ui-flex-container.break-on-s480 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s480 > ui-input-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s480 > ui-switch-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s480 > .ui-flex-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s480 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 920px) {\n  body.ui-nav-drawer-persistent .ui-flex-container.break-on-s600 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s600 > ui-input-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s600 > ui-switch-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s600 > .ui-flex-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s600 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 1160px) {\n  body.ui-nav-drawer-persistent .ui-flex-container.break-on-s840 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s840 > ui-input-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s840 > ui-switch-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s840 > .ui-flex-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s840 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 1280px) {\n  body.ui-nav-drawer-persistent .ui-flex-container.break-on-s960 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s960 > ui-input-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s960 > ui-switch-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s960 > .ui-flex-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s960 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 1600px) {\n  body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1280 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1280 > ui-input-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1280 > ui-switch-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1280 > .ui-flex-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1280 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 1760px) {\n  body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1440 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1440 > ui-input-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1440 > ui-switch-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1440 > .ui-flex-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1440 > .flex + * {\n      margin-left: initial; } }\n\n@media (max-width: 1920px) {\n  body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1600 {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1600 > ui-input-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1600 > ui-switch-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1600 > .ui-flex-container + *,\n    body.ui-nav-drawer-persistent .ui-flex-container.break-on-s1600 > .flex + * {\n      margin-left: initial; } }\n\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\nui-subheader {\n  font-size: 14px;\n  font-weight: 500;\n  min-height: 48px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.54);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: default; }\n\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.ui-chip {\n  height: 32px;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.87);\n  background-color: #e0e0e0;\n  transition: background-color 280ms cubic-bezier(0, 0, 0.2, 1), color 280ms cubic-bezier(0, 0, 0.2, 1);\n  border-radius: 16px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 16px;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-right: 12px;\n  margin-bottom: 12px; }\n  a.ui-chip {\n    cursor: pointer; }\n    a.ui-chip:hover {\n      text-decoration: none; }\n  .ui-chip .icon {\n    width: 32px;\n    height: 32px;\n    border-radius: 16px;\n    background-size: cover;\n    background-position: center;\n    margin-left: -16px;\n    margin-right: 8px;\n    padding: 6px; }\n    .ui-chip .icon i {\n      font-size: 20px; }\n  .ui-chip .close {\n    width: 32px;\n    height: 32px;\n    margin-right: -15px;\n    padding: 6px;\n    color: rgba(0, 0, 0, 0.54); }\n    .ui-chip .close i {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      font-size: 20px; }\n  .ui-chip .ui-ripple-container {\n    border-radius: 16px; }\n\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n[uiLazyLoad] {\n  opacity: 0;\n  transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1); }\n  [uiLazyLoad].loaded {\n    opacity: 1; }\n\n[uiEllipsis] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  /* number of lines to show */\n  line-height: 17px;\n  /* fallback */\n  max-height: 34px;\n  /* fallback */ }\n\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.ui-color {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  position: absolute;\n  top: 21px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: default;\n  transition: color 280ms cubic-bezier(0, 0, 0.2, 1); }\n  .ui-color i {\n    font-size: 35px; }\n\n.ui-control[uiColorPicker] {\n  color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-bottom-width: 0;\n  visibility: hidden; }\n\n.ui-validate:not(.on-dirty):not(.on-submit) .ui-control.ng-invalid ~ .ui-color i,\n.ui-validate.on-dirty .ui-control.ng-dirty.ng-invalid ~ .ui-color i,\n.ui-validate.on-submit.ng-submitted .ui-control.ng-invalid ~ .ui-color i {\n  color: #f44336; }\n\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.wrap-time-picker {\n  z-index: 5; }\n  .wrap-time-picker ui-clock {\n    box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20);\n    -webkit-transform-origin: top left;\n            transform-origin: top left;\n    transition: opacity 280ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.6, 1);\n    transition: transform 280ms cubic-bezier(0.4, 0, 0.6, 1), opacity 280ms cubic-bezier(0.4, 0, 0.6, 1);\n    transition: transform 280ms cubic-bezier(0.4, 0, 0.6, 1), opacity 280ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.6, 1);\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0;\n    z-index: 5; }\n  .wrap-time-picker.open ui-clock {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  @media (max-width: 600px) {\n    .wrap-time-picker {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      background-color: transparent !important; }\n      .wrap-time-picker .overlay {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background-color: transparent;\n        transition: background 195ms cubic-bezier(0, 0, 0.2, 1); }\n      .wrap-time-picker ui-clock {\n        box-shadow: 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 49px 8px rgba(0,0,0,.12), 0 11px 15px 0 rgba(0,0,0,.20);\n        position: relative !important;\n        top: initial !important;\n        left: initial !important;\n        margin: auto;\n        -webkit-transform-origin: bottom;\n                transform-origin: bottom;\n        transition: opacity 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 225ms cubic-bezier(0.4, 0, 1, 1);\n        transition: transform 225ms cubic-bezier(0.4, 0, 1, 1), opacity 195ms cubic-bezier(0.4, 0, 1, 1);\n        transition: transform 225ms cubic-bezier(0.4, 0, 1, 1), opacity 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 225ms cubic-bezier(0.4, 0, 1, 1);\n        -webkit-transform: scale(0.8) translateY(16px);\n                transform: scale(0.8) translateY(16px); }\n      .wrap-time-picker.open .overlay {\n        background-color: rgba(0, 0, 0, 0.2); }\n      .wrap-time-picker.open ui-clock {\n        transition: opacity 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1), opacity 195ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 225ms cubic-bezier(0, 0, 0.2, 1), opacity 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1);\n        -webkit-transform: scale(1) translateY(0);\n                transform: scale(1) translateY(0); } }\n\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\nhtml, body {\n  background-color: #303030;\n  color: white; }\n\n.primary-text {\n  color: white; }\n\n.secondary-text {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hint-text {\n  color: rgba(255, 255, 255, 0.5); }\n\n.ui-button.flat::before {\n  background-color: #FFF; }\n\n.ui-button.flat .ui-ripple-wave {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.ui-button.flat.icon.primary::before {\n  background-color: #ef5350; }\n\n.ui-button.flat.icon.accent::before {\n  background-color: #ffcdd2; }\n\n.ui-button:disabled {\n  background-color: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.3); }\n  .ui-button:disabled.flat {\n    background-color: transparent; }\n\n.ui-button:not(.success):not(.warning):not(.error):not(:disabled) {\n  background-color: #e0e0e0;\n  color: black; }\n  .ui-button:not(.success):not(.warning):not(.error):not(:disabled)::before {\n    background-color: black; }\n  .ui-button:not(.success):not(.warning):not(.error):not(:disabled) .ui-ripple-wave {\n    background-color: rgba(33, 33, 33, 0.1); }\n  .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat {\n    background-color: transparent;\n    color: rgba(255, 255, 255, 0.7); }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat::before {\n      background-color: #FFF; }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: rgba(255, 255, 255, 0.7); }\n  .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary {\n    background-color: #ef5350;\n    color: white; }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary::before {\n      background-color: white; }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary.flat {\n      background-color: transparent;\n      color: #ef5350; }\n      .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary.flat::before {\n        background-color: #FFF; }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: white; }\n  .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent {\n    background-color: #ffcdd2;\n    color: black; }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent .ui-ripple-wave {\n      background-color: rgba(33, 33, 33, 0.1); }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent::before {\n      background-color: black; }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent.flat {\n      background-color: transparent;\n      color: #ffcdd2; }\n      .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent.flat::before {\n        background-color: #FFF; }\n    .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: black; }\n  .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat .ui-ripple-wave {\n    background-color: rgba(255, 255, 255, 0.1); }\n\n.ui-button .badge.primary {\n  background-color: #ef5350;\n  color: white; }\n\n.ui-button .badge.accent {\n  background-color: #ffcdd2;\n  color: black; }\n\nui-calendar {\n  background-color: #424242; }\n  ui-calendar header {\n    background-color: #616161;\n    color: #FFF; }\n\nui-calendar-content .label span {\n  color: white; }\n\nui-calendar-content .week-header {\n  color: rgba(255, 255, 255, 0.7); }\n\nui-card {\n  background-color: #424242;\n  color: white; }\n  ui-card .secondary-text {\n    color: rgba(255, 255, 255, 0.7); }\n\n@media (max-width: 600px) {\n  .wrap-date-picker.open .overlay {\n    background-color: rgba(0, 0, 0, 0.2); } }\n\n.wrap-dialog:not(.transparent-overlay) .overlay {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.ui-divider {\n  background-color: rgba(255, 255, 255, 0.12); }\n\nui-input-container label {\n  color: rgba(255, 255, 255, 0.7); }\n\nui-input-container .ui-control {\n  color: white;\n  border-color: rgba(255, 255, 255, 0.7); }\n  ui-input-container .ui-control::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n  ui-input-container .ui-control:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n  ui-input-container .ui-control::placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n  ui-input-container .ui-control:focus ~ label {\n    color: #ef5350; }\n  ui-input-container .ui-control:focus ~ .line {\n    background-color: #ef5350; }\n  ui-input-container .ui-control.accent:focus ~ label {\n    color: #ffcdd2; }\n  ui-input-container .ui-control.accent:focus ~ .line {\n    background-color: #ffcdd2; }\n  ui-input-container .ui-control:disabled {\n    color: rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 0.5); }\n  ui-input-container .ui-control:disabled ~ label {\n    color: rgba(255, 255, 255, 0.5); }\n  ui-input-container .ui-control:disabled ~ .line {\n    background-color: #FFF;\n    border-color: rgba(255, 255, 255, 0.7); }\n\nui-input-container select.ui-control option {\n  color: initial; }\n\nui-input-container .ui-messages .ui-message.helper,\nui-input-container .ui-messages .ui-message.counter {\n  color: rgba(255, 255, 255, 0.7); }\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n  -webkit-text-fill-color: #fff;\n  -webkit-box-shadow: 0 0 0px 1000px #424242 inset;\n  transition: background-color 5000s ease-in-out 0s; }\n\n.ui-list li,\n.ui-list .ui-list-item {\n  color: white; }\n  .ui-list li.subheader,\n  .ui-list .ui-list-item.subheader {\n    color: rgba(255, 255, 255, 0.7); }\n  .ui-list li .arrow,\n  .ui-list li .icon:not(.ui-button), .ui-list li.subheader,\n  .ui-list li .avatar,\n  .ui-list li .secondary,\n  .ui-list .ui-list-item .arrow,\n  .ui-list .ui-list-item .icon:not(.ui-button),\n  .ui-list .ui-list-item.subheader,\n  .ui-list .ui-list-item .avatar,\n  .ui-list .ui-list-item .secondary {\n    color: rgba(255, 255, 255, 0.7); }\n  .ui-list li .avatar,\n  .ui-list .ui-list-item .avatar {\n    background-color: #616161; }\n  .ui-list li.disabled,\n  .ui-list .ui-list-item.disabled {\n    color: rgba(255, 255, 255, 0.5); }\n  .ui-list li.active,\n  .ui-list li.active .icon:not(.ui-button),\n  .ui-list .ui-list-item.active,\n  .ui-list .ui-list-item.active .icon:not(.ui-button) {\n    color: #ef5350; }\n  .ui-list li.active.accent,\n  .ui-list li.active.accent .icon:not(.ui-button),\n  .ui-list .ui-list-item.active.accent,\n  .ui-list .ui-list-item.active.accent .icon:not(.ui-button) {\n    color: #ffcdd2; }\n  .ui-list li:not(.no-ripple):not([uiRipple]):active, .ui-list li:not(.no-ripple)[ng-reflect-ripple-disable=\"true\"]:active,\n  .ui-list .ui-list-item:not(.no-ripple):not([uiRipple]):active,\n  .ui-list .ui-list-item:not(.no-ripple)[ng-reflect-ripple-disable=\"true\"]:active {\n    background-color: rgba(255, 255, 255, 0.1); }\n\nui-nav-drawer nav,\nui-nav-drawer ui-toolbar header {\n  background-color: #424242;\n  color: white; }\n  ui-nav-drawer nav .logo ~ .title,\n  ui-nav-drawer ui-toolbar header .logo ~ .title {\n    border-left: 1px solid rgba(255, 255, 255, 0.12); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      ui-nav-drawer nav .logo ~ .title,\n      ui-nav-drawer ui-toolbar header .logo ~ .title {\n        border-left: none; } }\n\nui-nav-drawer .ui-divider:not(.nothing) {\n  background-color: rgba(255, 255, 255, 0.07); }\n\n.ui-nav-drawer-overlay {\n  background-color: rgba(0, 0, 0, 0.2); }\n\nui-nav-drawer nav .ui-nav-drawer-overflow {\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  margin-top: -1px; }\n\nui-option-container .info {\n  color: white; }\n  ui-option-container .info .secondary {\n    color: rgba(255, 255, 255, 0.7); }\n\nui-option input[type=\"radio\"]:checked + .ui-option-shell {\n  border-color: #ffcdd2; }\n\nui-option input[type=\"radio\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ffcdd2; }\n\nui-option input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ffcdd2; }\n\nui-option.primary input[type=\"radio\"]:checked + .ui-option-shell {\n  border-color: #ef5350; }\n\nui-option.primary input[type=\"radio\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ef5350; }\n\nui-option.primary input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ef5350; }\n\nui-option .ui-option-shell {\n  border: 2px solid rgba(255, 255, 255, 0.7); }\n\nui-option .ui-option-shell::before {\n  background-color: rgba(255, 255, 255, 0.1); }\n\nui-option input[type=\"checkbox\"] + .ui-option-shell .ui-option-fill {\n  border-color: rgba(255, 255, 255, 0.6); }\n\nui-option input[type=\"radio\"] + .ui-option-shell .ui-option-fill {\n  border: 0 solid rgba(255, 255, 255, 0.6); }\n\n.ui-progress {\n  background-color: #ef9a9a; }\n  .ui-progress .determinate,\n  .ui-progress .indeterminate {\n    background-color: #f44336; }\n  .ui-progress.accent {\n    background-color: #ef9a9a; }\n    .ui-progress.accent .determinate,\n    .ui-progress.accent .indeterminate {\n      background-color: #f44336; }\n\nui-progress-radial .spinner-container .path {\n  stroke: #2196F3; }\n\nui-progress-radial.primary .spinner-container .path {\n  stroke: #ef5350; }\n\nui-progress-radial.accent .spinner-container .path {\n  stroke: #ffcdd2; }\n\n[uiRipple] .ui-ripple-wave {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.ui-selection-primary::-moz-selection,\n.ui-selection-primary ::-moz-selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.ui-selection-primary::selection,\n.ui-selection-primary ::selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.ui-selection-accent::-moz-selection,\n.ui-selection-accent ::-moz-selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.ui-selection-accent::selection,\n.ui-selection-accent ::selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\nui-subheader {\n  color: rgba(255, 255, 255, 0.7); }\n  ui-subheader.primary {\n    color: #ef5350; }\n\nui-switch-container .info {\n  color: white; }\n  ui-switch-container .info .secondary {\n    color: rgba(255, 255, 255, 0.7); }\n\nui-switch .switch-cover {\n  background-color: #ffcdd2; }\n\nui-switch input:not(:checked) + .switch-cover {\n  background-color: #fafafa; }\n\nui-switch input:not(:checked) + .switch-cover .thumb-container::before {\n  background-color: white; }\n\nui-switch.primary .switch-cover {\n  background-color: #ef5350; }\n\nui-switch input:disabled + .switch-cover {\n  background-color: #bdbdbd; }\n\nui-toolbar.primary header {\n  background-color: #ef5350;\n  color: white; }\n  ui-toolbar.primary header .logo ~ .title {\n    border-left: 1px solid rgba(255, 255, 255, 0.3); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      ui-toolbar.primary header .logo ~ .title {\n        border-left: none; } }\n  ui-toolbar.primary header .ui-button:not(.success):not(.warning):not(.error):not(:disabled) .ui-ripple-wave {\n    background-color: rgba(255, 255, 255, 0.1); }\n  ui-toolbar.primary header .ui-button .badge {\n    background-color: #ffcdd2;\n    color: black; }\n\nui-toolbar.accent header {\n  background-color: #ffcdd2;\n  color: black; }\n  ui-toolbar.accent header .logo ~ .title {\n    border-left: 1px solid rgba(0, 0, 0, 0.3); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      ui-toolbar.accent header .logo ~ .title {\n        border-left: none; } }\n  ui-toolbar.accent header .ui-button:not(.success):not(.warning):not(.error):not(:disabled) .ui-ripple-wave {\n    background-color: rgba(0, 0, 0, 0.1); }\n  ui-toolbar.accent header .ui-button .badge {\n    background-color: #ef5350;\n    color: white; }\n\nui-toolbar.transparent:not(.scrolled) header {\n  color: white; }\n\nheader .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat {\n  color: inherit; }\n  header .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat i {\n    color: inherit; }\n\nui-slider .track.off {\n  background-color: rgba(255, 255, 255, 0.3); }\n\nui-slider .track.on {\n  background-color: #ef5350; }\n  ui-slider .track.on .balloon-wrap path {\n    fill: #ef5350; }\n  ui-slider .track.on .balloon-wrap .value {\n    color: white; }\n  ui-slider .track.on .thumb-container {\n    background-color: #ef5350; }\n\nui-slider .points .point {\n  background-color: white; }\n\nui-slider.accent .track.on {\n  background-color: #ffcdd2; }\n  ui-slider.accent .track.on .balloon-wrap path {\n    fill: #ffcdd2; }\n  ui-slider.accent .track.on .balloon-wrap .value {\n    color: black; }\n  ui-slider.accent .track.on .thumb-container {\n    background-color: #ffcdd2; }\n\n.ui-data-table {\n  color: white; }\n  .ui-data-table .image,\n  .ui-data-table .letter {\n    background-color: #9e9e9e; }\n  .ui-data-table th {\n    color: rgba(255, 255, 255, 0.7); }\n  .ui-data-table th, .ui-data-table td {\n    border-bottom: 1px solid #212121; }\n  .ui-data-table tr:last-child th, .ui-data-table tr:last-child td {\n    border-color: transparent; }\n  .ui-data-table tr.selected td {\n    background-color: #616161; }\n  @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n    .ui-data-table tr:active td {\n      background-color: #212121; } }\n  @media only screen and (min-width: 376px) and (min-width: 764px) {\n    .ui-data-table tr:hover td {\n      background-color: #212121; } }\n  .ui-data-table tr.empty td {\n    background-color: transparent; }\n  .ui-data-table tfoot td {\n    color: rgba(255, 255, 255, 0.7); }\n    .ui-data-table tfoot td:hover {\n      background-color: transparent; }\n    .ui-data-table tfoot td:last-child {\n      border-top: 1px solid #212121; }\n  .ui-data-table tbody:not(:last-child) tr:last-child td {\n    border-color: #212121; }\n\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n  ui-data-table.responsive tbody tr {\n    border-bottom: 1px solid #212121; }\n    ui-data-table.responsive tbody tr:last-child {\n      border: none; } }\n\n.ui-chip {\n  background-color: rgba(97, 97, 97, 0.75);\n  color: #FFF; }\n  .ui-chip .ui-ripple-wave {\n    background-color: rgba(255, 255, 255, 0.1); }\n  .ui-chip:link:hover, .ui-chip:link:active {\n    background-color: #616161; }\n  .ui-chip.marked {\n    background-color: #ef5350;\n    color: white; }\n    .ui-chip.marked .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .ui-chip.marked.accent-marking {\n      background-color: #ffcdd2;\n      color: black; }\n      .ui-chip.marked.accent-marking .ui-ripple-wave {\n        background-color: rgba(0, 0, 0, 0.1); }\n\nui-tabs .tabs .overflow .tab {\n  color: rgba(255, 255, 255, 0.7);\n  border-bottom: 2px solid transparent; }\n  ui-tabs .tabs .overflow .tab.selected {\n    color: #FFF;\n    border-bottom-color: #FFF; }\n\nui-tabs .tabs .overflow .indicator {\n  background-color: #FFF; }\n\nui-tabs .tabs .arrows .ui-button {\n  color: #FFF; }\n\nui-tabs.primary .tabs .overflow .tab {\n  color: rgba(255, 255, 255, 0.7); }\n  ui-tabs.primary .tabs .overflow .tab.selected {\n    color: #ef5350;\n    border-bottom-color: #ef5350; }\n\nui-tabs.primary .tabs .overflow .indicator {\n  background-color: #ef5350; }\n\nui-tabs.primary .tabs .arrows .ui-button {\n  color: #FFF; }\n\nui-autocomplete .focused {\n  background-color: #ef5350;\n  color: white; }\n\nui-autocomplete .focused.accent {\n  background-color: #ffcdd2;\n  color: black; }\n\n.wrap-bottom-sheet:not(.transparent-overlay) .overlay {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.wrap-bottom-sheet ui-card.grid li .icon i {\n  color: white; }\n\n.ui-input-file-hidden {\n  position: fixed;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  top: -9999px; }\n\n.ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent.flat {\n  color: #e57373; }\n\nui-clock {\n  background-color: #424242; }\n  ui-clock header {\n    background-color: #616161;\n    color: #FFF; }\n    ui-clock header.time-error {\n      background-color: #f44336;\n      color: white; }\n    ui-clock header .time {\n      color: rgba(255, 255, 255, 0.7); }\n      ui-clock header .time .time-focused {\n        color: white; }\n  ui-clock .clock-wrap {\n    background-color: #616161; }\n    ui-clock .clock-wrap::before {\n      background-color: rgba(239, 83, 80, 0.54); }\n  ui-clock .pointer::before {\n    background-color: rgba(239, 83, 80, 0.54); }\n  ui-clock .pointer .ball {\n    background-color: rgba(239, 83, 80, 0.54); }\n    ui-clock .pointer .ball::before {\n      background-color: #ef5350; }\n\n@media (max-width: 600px) {\n  .wrap-time-picker.open .overlay {\n    background-color: rgba(0, 0, 0, 0.2); } }\n\nhtml {\n  background-color: transparent; }\n\nbody.dark {\n  background-color: #303030;\n  color: white; }\n\n.dark html, .dark body {\n  background-color: #303030;\n  color: white; }\n\n.dark .primary-text {\n  color: white; }\n\n.dark .secondary-text {\n  color: rgba(255, 255, 255, 0.7); }\n\n.dark .hint-text {\n  color: rgba(255, 255, 255, 0.5); }\n\n.dark .ui-button.flat::before {\n  background-color: #FFF; }\n\n.dark .ui-button.flat .ui-ripple-wave {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.dark .ui-button.flat.icon.primary::before {\n  background-color: #ef5350; }\n\n.dark .ui-button.flat.icon.accent::before {\n  background-color: #ffcdd2; }\n\n.dark .ui-button:disabled {\n  background-color: rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.3); }\n  .dark .ui-button:disabled.flat {\n    background-color: transparent; }\n\n.dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled) {\n  background-color: #e0e0e0;\n  color: black; }\n  .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled)::before {\n    background-color: black; }\n  .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled) .ui-ripple-wave {\n    background-color: rgba(33, 33, 33, 0.1); }\n  .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat {\n    background-color: transparent;\n    color: rgba(255, 255, 255, 0.7); }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat::before {\n      background-color: #FFF; }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: rgba(255, 255, 255, 0.7); }\n  .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary {\n    background-color: #ef5350;\n    color: white; }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary::before {\n      background-color: white; }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary.flat {\n      background-color: transparent;\n      color: #ef5350; }\n      .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary.flat::before {\n        background-color: #FFF; }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: white; }\n  .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent {\n    background-color: #ffcdd2;\n    color: black; }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent .ui-ripple-wave {\n      background-color: rgba(33, 33, 33, 0.1); }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent::before {\n      background-color: black; }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent.flat {\n      background-color: transparent;\n      color: #ffcdd2; }\n      .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent.flat::before {\n        background-color: #FFF; }\n    .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: black; }\n  .dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat .ui-ripple-wave {\n    background-color: rgba(255, 255, 255, 0.1); }\n\n.dark .ui-button .badge.primary {\n  background-color: #ef5350;\n  color: white; }\n\n.dark .ui-button .badge.accent {\n  background-color: #ffcdd2;\n  color: black; }\n\n.dark ui-calendar {\n  background-color: #424242; }\n  .dark ui-calendar header {\n    background-color: #616161;\n    color: #FFF; }\n\n.dark ui-calendar-content .label span {\n  color: white; }\n\n.dark ui-calendar-content .week-header {\n  color: rgba(255, 255, 255, 0.7); }\n\n.dark ui-card {\n  background-color: #424242;\n  color: white; }\n  .dark ui-card .secondary-text {\n    color: rgba(255, 255, 255, 0.7); }\n\n@media (max-width: 600px) {\n  .dark .wrap-date-picker.open .overlay {\n    background-color: rgba(0, 0, 0, 0.2); } }\n\n.dark .wrap-dialog:not(.transparent-overlay) .overlay {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.dark .ui-divider {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.dark ui-input-container label {\n  color: rgba(255, 255, 255, 0.7); }\n\n.dark ui-input-container .ui-control {\n  color: white;\n  border-color: rgba(255, 255, 255, 0.7); }\n  .dark ui-input-container .ui-control::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n  .dark ui-input-container .ui-control:-ms-input-placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n  .dark ui-input-container .ui-control::placeholder {\n    color: rgba(255, 255, 255, 0.5); }\n  .dark ui-input-container .ui-control:focus ~ label {\n    color: #ef5350; }\n  .dark ui-input-container .ui-control:focus ~ .line {\n    background-color: #ef5350; }\n  .dark ui-input-container .ui-control.accent:focus ~ label {\n    color: #ffcdd2; }\n  .dark ui-input-container .ui-control.accent:focus ~ .line {\n    background-color: #ffcdd2; }\n  .dark ui-input-container .ui-control:disabled {\n    color: rgba(255, 255, 255, 0.5);\n    border-color: rgba(255, 255, 255, 0.5); }\n  .dark ui-input-container .ui-control:disabled ~ label {\n    color: rgba(255, 255, 255, 0.5); }\n  .dark ui-input-container .ui-control:disabled ~ .line {\n    background-color: #FFF;\n    border-color: rgba(255, 255, 255, 0.7); }\n\n.dark ui-input-container select.ui-control option {\n  color: initial; }\n\n.dark ui-input-container .ui-messages .ui-message.helper,\n.dark ui-input-container .ui-messages .ui-message.counter {\n  color: rgba(255, 255, 255, 0.7); }\n\n.dark input:-webkit-autofill,\n.dark input:-webkit-autofill:hover,\n.dark input:-webkit-autofill:focus,\n.dark input:-webkit-autofill,\n.dark textarea:-webkit-autofill,\n.dark textarea:-webkit-autofill:hover,\n.dark textarea:-webkit-autofill:focus,\n.dark select:-webkit-autofill,\n.dark select:-webkit-autofill:hover,\n.dark select:-webkit-autofill:focus {\n  -webkit-text-fill-color: #fff;\n  -webkit-box-shadow: 0 0 0px 1000px #424242 inset;\n  transition: background-color 5000s ease-in-out 0s; }\n\n.dark .ui-list li,\n.dark .ui-list .ui-list-item {\n  color: white; }\n  .dark .ui-list li.subheader,\n  .dark .ui-list .ui-list-item.subheader {\n    color: rgba(255, 255, 255, 0.7); }\n  .dark .ui-list li .arrow,\n  .dark .ui-list li .icon:not(.ui-button), .dark .ui-list li.subheader,\n  .dark .ui-list li .avatar,\n  .dark .ui-list li .secondary,\n  .dark .ui-list .ui-list-item .arrow,\n  .dark .ui-list .ui-list-item .icon:not(.ui-button),\n  .dark .ui-list .ui-list-item.subheader,\n  .dark .ui-list .ui-list-item .avatar,\n  .dark .ui-list .ui-list-item .secondary {\n    color: rgba(255, 255, 255, 0.7); }\n  .dark .ui-list li .avatar,\n  .dark .ui-list .ui-list-item .avatar {\n    background-color: #616161; }\n  .dark .ui-list li.disabled,\n  .dark .ui-list .ui-list-item.disabled {\n    color: rgba(255, 255, 255, 0.5); }\n  .dark .ui-list li.active,\n  .dark .ui-list li.active .icon:not(.ui-button),\n  .dark .ui-list .ui-list-item.active,\n  .dark .ui-list .ui-list-item.active .icon:not(.ui-button) {\n    color: #ef5350; }\n  .dark .ui-list li.active.accent,\n  .dark .ui-list li.active.accent .icon:not(.ui-button),\n  .dark .ui-list .ui-list-item.active.accent,\n  .dark .ui-list .ui-list-item.active.accent .icon:not(.ui-button) {\n    color: #ffcdd2; }\n  .dark .ui-list li:not(.no-ripple):not([uiRipple]):active, .dark .ui-list li:not(.no-ripple)[ng-reflect-ripple-disable=\"true\"]:active,\n  .dark .ui-list .ui-list-item:not(.no-ripple):not([uiRipple]):active,\n  .dark .ui-list .ui-list-item:not(.no-ripple)[ng-reflect-ripple-disable=\"true\"]:active {\n    background-color: rgba(255, 255, 255, 0.1); }\n\n.dark ui-nav-drawer nav,\n.dark ui-nav-drawer ui-toolbar header {\n  background-color: #424242;\n  color: white; }\n  .dark ui-nav-drawer nav .logo ~ .title,\n  .dark ui-nav-drawer ui-toolbar header .logo ~ .title {\n    border-left: 1px solid rgba(255, 255, 255, 0.12); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      .dark ui-nav-drawer nav .logo ~ .title,\n      .dark ui-nav-drawer ui-toolbar header .logo ~ .title {\n        border-left: none; } }\n\n.dark ui-nav-drawer .ui-divider:not(.nothing) {\n  background-color: rgba(255, 255, 255, 0.07); }\n\n.dark .ui-nav-drawer-overlay {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.dark ui-nav-drawer nav .ui-nav-drawer-overflow {\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  margin-top: -1px; }\n\n.dark ui-option-container .info {\n  color: white; }\n  .dark ui-option-container .info .secondary {\n    color: rgba(255, 255, 255, 0.7); }\n\n.dark ui-option input[type=\"radio\"]:checked + .ui-option-shell {\n  border-color: #ffcdd2; }\n\n.dark ui-option input[type=\"radio\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ffcdd2; }\n\n.dark ui-option input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ffcdd2; }\n\n.dark ui-option.primary input[type=\"radio\"]:checked + .ui-option-shell {\n  border-color: #ef5350; }\n\n.dark ui-option.primary input[type=\"radio\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ef5350; }\n\n.dark ui-option.primary input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ef5350; }\n\n.dark ui-option .ui-option-shell {\n  border: 2px solid rgba(255, 255, 255, 0.7); }\n\n.dark ui-option .ui-option-shell::before {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.dark ui-option input[type=\"checkbox\"] + .ui-option-shell .ui-option-fill {\n  border-color: rgba(255, 255, 255, 0.6); }\n\n.dark ui-option input[type=\"radio\"] + .ui-option-shell .ui-option-fill {\n  border: 0 solid rgba(255, 255, 255, 0.6); }\n\n.dark .ui-progress {\n  background-color: #ef9a9a; }\n  .dark .ui-progress .determinate,\n  .dark .ui-progress .indeterminate {\n    background-color: #f44336; }\n  .dark .ui-progress.accent {\n    background-color: #ef9a9a; }\n    .dark .ui-progress.accent .determinate,\n    .dark .ui-progress.accent .indeterminate {\n      background-color: #f44336; }\n\n.dark ui-progress-radial .spinner-container .path {\n  stroke: #2196F3; }\n\n.dark ui-progress-radial.primary .spinner-container .path {\n  stroke: #ef5350; }\n\n.dark ui-progress-radial.accent .spinner-container .path {\n  stroke: #ffcdd2; }\n\n.dark [uiRipple] .ui-ripple-wave {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.dark .ui-selection-primary::-moz-selection,\n.dark .ui-selection-primary ::-moz-selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.dark .ui-selection-primary::selection,\n.dark .ui-selection-primary ::selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.dark .ui-selection-accent::-moz-selection,\n.dark .ui-selection-accent ::-moz-selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.dark .ui-selection-accent::selection,\n.dark .ui-selection-accent ::selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.dark ui-subheader {\n  color: rgba(255, 255, 255, 0.7); }\n  .dark ui-subheader.primary {\n    color: #ef5350; }\n\n.dark ui-switch-container .info {\n  color: white; }\n  .dark ui-switch-container .info .secondary {\n    color: rgba(255, 255, 255, 0.7); }\n\n.dark ui-switch .switch-cover {\n  background-color: #ffcdd2; }\n\n.dark ui-switch input:not(:checked) + .switch-cover {\n  background-color: #fafafa; }\n\n.dark ui-switch input:not(:checked) + .switch-cover .thumb-container::before {\n  background-color: white; }\n\n.dark ui-switch.primary .switch-cover {\n  background-color: #ef5350; }\n\n.dark ui-switch input:disabled + .switch-cover {\n  background-color: #bdbdbd; }\n\n.dark ui-toolbar.primary header {\n  background-color: #ef5350;\n  color: white; }\n  .dark ui-toolbar.primary header .logo ~ .title {\n    border-left: 1px solid rgba(255, 255, 255, 0.3); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      .dark ui-toolbar.primary header .logo ~ .title {\n        border-left: none; } }\n  .dark ui-toolbar.primary header .ui-button:not(.success):not(.warning):not(.error):not(:disabled) .ui-ripple-wave {\n    background-color: rgba(255, 255, 255, 0.1); }\n  .dark ui-toolbar.primary header .ui-button .badge {\n    background-color: #ffcdd2;\n    color: black; }\n\n.dark ui-toolbar.accent header {\n  background-color: #ffcdd2;\n  color: black; }\n  .dark ui-toolbar.accent header .logo ~ .title {\n    border-left: 1px solid rgba(0, 0, 0, 0.3); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      .dark ui-toolbar.accent header .logo ~ .title {\n        border-left: none; } }\n  .dark ui-toolbar.accent header .ui-button:not(.success):not(.warning):not(.error):not(:disabled) .ui-ripple-wave {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .dark ui-toolbar.accent header .ui-button .badge {\n    background-color: #ef5350;\n    color: white; }\n\n.dark ui-toolbar.transparent:not(.scrolled) header {\n  color: white; }\n\n.dark header .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat {\n  color: inherit; }\n  .dark header .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat i {\n    color: inherit; }\n\n.dark ui-slider .track.off {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n.dark ui-slider .track.on {\n  background-color: #ef5350; }\n  .dark ui-slider .track.on .balloon-wrap path {\n    fill: #ef5350; }\n  .dark ui-slider .track.on .balloon-wrap .value {\n    color: white; }\n  .dark ui-slider .track.on .thumb-container {\n    background-color: #ef5350; }\n\n.dark ui-slider .points .point {\n  background-color: white; }\n\n.dark ui-slider.accent .track.on {\n  background-color: #ffcdd2; }\n  .dark ui-slider.accent .track.on .balloon-wrap path {\n    fill: #ffcdd2; }\n  .dark ui-slider.accent .track.on .balloon-wrap .value {\n    color: black; }\n  .dark ui-slider.accent .track.on .thumb-container {\n    background-color: #ffcdd2; }\n\n.dark .ui-data-table {\n  color: white; }\n  .dark .ui-data-table .image,\n  .dark .ui-data-table .letter {\n    background-color: #9e9e9e; }\n  .dark .ui-data-table th {\n    color: rgba(255, 255, 255, 0.7); }\n  .dark .ui-data-table th, .dark .ui-data-table td {\n    border-bottom: 1px solid #212121; }\n  .dark .ui-data-table tr:last-child th, .dark .ui-data-table tr:last-child td {\n    border-color: transparent; }\n  .dark .ui-data-table tr.selected td {\n    background-color: #616161; }\n  @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n    .dark .ui-data-table tr:active td {\n      background-color: #212121; } }\n  @media only screen and (min-width: 376px) and (min-width: 764px) {\n    .dark .ui-data-table tr:hover td {\n      background-color: #212121; } }\n  .dark .ui-data-table tr.empty td {\n    background-color: transparent; }\n  .dark .ui-data-table tfoot td {\n    color: rgba(255, 255, 255, 0.7); }\n    .dark .ui-data-table tfoot td:hover {\n      background-color: transparent; }\n    .dark .ui-data-table tfoot td:last-child {\n      border-top: 1px solid #212121; }\n  .dark .ui-data-table tbody:not(:last-child) tr:last-child td {\n    border-color: #212121; }\n\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n  .dark ui-data-table.responsive tbody tr {\n    border-bottom: 1px solid #212121; }\n    .dark ui-data-table.responsive tbody tr:last-child {\n      border: none; } }\n\n.dark .ui-chip {\n  background-color: rgba(97, 97, 97, 0.75);\n  color: #FFF; }\n  .dark .ui-chip .ui-ripple-wave {\n    background-color: rgba(255, 255, 255, 0.1); }\n  .dark .ui-chip:link:hover, .dark .ui-chip:link:active {\n    background-color: #616161; }\n  .dark .ui-chip.marked {\n    background-color: #ef5350;\n    color: white; }\n    .dark .ui-chip.marked .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .dark .ui-chip.marked.accent-marking {\n      background-color: #ffcdd2;\n      color: black; }\n      .dark .ui-chip.marked.accent-marking .ui-ripple-wave {\n        background-color: rgba(0, 0, 0, 0.1); }\n\n.dark ui-tabs .tabs .overflow .tab {\n  color: rgba(255, 255, 255, 0.7);\n  border-bottom: 2px solid transparent; }\n  .dark ui-tabs .tabs .overflow .tab.selected {\n    color: #FFF;\n    border-bottom-color: #FFF; }\n\n.dark ui-tabs .tabs .overflow .indicator {\n  background-color: #FFF; }\n\n.dark ui-tabs .tabs .arrows .ui-button {\n  color: #FFF; }\n\n.dark ui-tabs.primary .tabs .overflow .tab {\n  color: rgba(255, 255, 255, 0.7); }\n  .dark ui-tabs.primary .tabs .overflow .tab.selected {\n    color: #ef5350;\n    border-bottom-color: #ef5350; }\n\n.dark ui-tabs.primary .tabs .overflow .indicator {\n  background-color: #ef5350; }\n\n.dark ui-tabs.primary .tabs .arrows .ui-button {\n  color: #FFF; }\n\n.dark ui-autocomplete .focused {\n  background-color: #ef5350;\n  color: white; }\n\n.dark ui-autocomplete .focused.accent {\n  background-color: #ffcdd2;\n  color: black; }\n\n.dark .wrap-bottom-sheet:not(.transparent-overlay) .overlay {\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.dark .wrap-bottom-sheet ui-card.grid li .icon i {\n  color: white; }\n\n.dark .ui-input-file-hidden {\n  position: fixed;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  top: -9999px; }\n\n.dark .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent.flat {\n  color: #e57373; }\n\n.dark ui-clock {\n  background-color: #424242; }\n  .dark ui-clock header {\n    background-color: #616161;\n    color: #FFF; }\n    .dark ui-clock header.time-error {\n      background-color: #f44336;\n      color: white; }\n    .dark ui-clock header .time {\n      color: rgba(255, 255, 255, 0.7); }\n      .dark ui-clock header .time .time-focused {\n        color: white; }\n  .dark ui-clock .clock-wrap {\n    background-color: #616161; }\n    .dark ui-clock .clock-wrap::before {\n      background-color: rgba(239, 83, 80, 0.54); }\n  .dark ui-clock .pointer::before {\n    background-color: rgba(239, 83, 80, 0.54); }\n  .dark ui-clock .pointer .ball {\n    background-color: rgba(239, 83, 80, 0.54); }\n    .dark ui-clock .pointer .ball::before {\n      background-color: #ef5350; }\n\n@media (max-width: 600px) {\n  .dark .wrap-time-picker.open .overlay {\n    background-color: rgba(0, 0, 0, 0.2); } }\n\nbody.light {\n  background-color: #FAFAFA; }\n\n.light html, .light body {\n  background-color: #FAFAFA;\n  color: rgba(0, 0, 0, 0.87); }\n\n.light .primary-text {\n  color: rgba(0, 0, 0, 0.87); }\n\n.light .secondary-text {\n  color: rgba(0, 0, 0, 0.54); }\n\n.light .hint-text {\n  color: rgba(0, 0, 0, 0.38); }\n\n.light .ui-button.flat::before {\n  background-color: #000; }\n\n.light .ui-button.flat .ui-ripple-wave {\n  background-color: rgba(33, 33, 33, 0.1); }\n\n.light .ui-button.flat.icon.primary::before {\n  background-color: #ef5350; }\n\n.light .ui-button.flat.icon.accent::before {\n  background-color: #ffcdd2; }\n\n.light .ui-button:disabled {\n  background-color: rgba(0, 0, 0, 0.12);\n  color: rgba(0, 0, 0, 0.26); }\n  .light .ui-button:disabled.flat {\n    background-color: transparent; }\n\n.light .ui-button:not(.success):not(.warning):not(.error):not(:disabled) {\n  background-color: #e0e0e0;\n  color: black; }\n  .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled)::before {\n    background-color: black; }\n  .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled) .ui-ripple-wave {\n    background-color: rgba(33, 33, 33, 0.1); }\n  .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat {\n    background-color: transparent;\n    color: rgba(0, 0, 0, 0.54); }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat::before {\n      background-color: #000; }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat .ui-ripple-wave {\n      background-color: rgba(33, 33, 33, 0.1); }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: rgba(0, 0, 0, 0.54); }\n  .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary {\n    background-color: #ef5350;\n    color: white; }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary::before {\n      background-color: white; }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary.flat {\n      background-color: transparent;\n      color: #ef5350; }\n      .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary.flat::before {\n        background-color: #000; }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).primary ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: white; }\n  .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent {\n    background-color: #ffcdd2;\n    color: black; }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent .ui-ripple-wave {\n      background-color: rgba(33, 33, 33, 0.1); }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent::before {\n      background-color: black; }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent.flat {\n      background-color: transparent;\n      color: #ffcdd2; }\n      .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent.flat::before {\n        background-color: #000; }\n    .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent ui-progress-radial.indeterminate .spinner-container .path {\n      stroke: black; }\n  .light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat .ui-ripple-wave {\n    background-color: rgba(33, 33, 33, 0.1); }\n\n.light .ui-button .badge.primary {\n  background-color: #ef5350;\n  color: white; }\n\n.light .ui-button .badge.accent {\n  background-color: #ffcdd2;\n  color: black; }\n\n.light ui-calendar {\n  background-color: #FFF; }\n  .light ui-calendar header {\n    background-color: #ef5350;\n    color: white; }\n\n.light ui-calendar-content .label span {\n  color: rgba(0, 0, 0, 0.87); }\n\n.light ui-calendar-content .week-header {\n  color: rgba(0, 0, 0, 0.54); }\n\n.light ui-card {\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87); }\n  .light ui-card .secondary-text {\n    color: rgba(0, 0, 0, 0.54); }\n\n@media (max-width: 600px) {\n  .light .wrap-date-picker.open .overlay {\n    background-color: rgba(0, 0, 0, 0.4); } }\n\n.light .wrap-dialog:not(.transparent-overlay) .overlay {\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.light .ui-divider {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.light ui-input-container label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.light ui-input-container .ui-control {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.42); }\n  .light ui-input-container .ui-control::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n  .light ui-input-container .ui-control:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n  .light ui-input-container .ui-control::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n  .light ui-input-container .ui-control:focus ~ label {\n    color: #ef5350; }\n  .light ui-input-container .ui-control:focus ~ .line {\n    background-color: #ef5350; }\n  .light ui-input-container .ui-control.accent:focus ~ label {\n    color: #ffcdd2; }\n  .light ui-input-container .ui-control.accent:focus ~ .line {\n    background-color: #ffcdd2; }\n  .light ui-input-container .ui-control:disabled {\n    color: rgba(0, 0, 0, 0.42);\n    border-color: rgba(0, 0, 0, 0.42); }\n  .light ui-input-container .ui-control:disabled ~ label {\n    color: rgba(0, 0, 0, 0.42); }\n  .light ui-input-container .ui-control:disabled ~ .line {\n    background-color: #FFF;\n    border-color: rgba(0, 0, 0, 0.42); }\n\n.light ui-input-container select.ui-control option {\n  color: initial; }\n\n.light ui-input-container .ui-messages .ui-message.helper,\n.light ui-input-container .ui-messages .ui-message.counter {\n  color: rgba(0, 0, 0, 0.54); }\n\n.light input:-webkit-autofill,\n.light input:-webkit-autofill:hover,\n.light input:-webkit-autofill:focus,\n.light input:-webkit-autofill,\n.light textarea:-webkit-autofill,\n.light textarea:-webkit-autofill:hover,\n.light textarea:-webkit-autofill:focus,\n.light select:-webkit-autofill,\n.light select:-webkit-autofill:hover,\n.light select:-webkit-autofill:focus {\n  -webkit-text-fill-color: #000;\n  -webkit-box-shadow: 0 0 0px 1000px #fff inset;\n  transition: background-color 5000s ease-in-out 0s; }\n\n.light .ui-list li,\n.light .ui-list .ui-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n  .light .ui-list li.subheader,\n  .light .ui-list .ui-list-item.subheader {\n    color: rgba(0, 0, 0, 0.54); }\n  .light .ui-list li .arrow,\n  .light .ui-list li .icon:not(.ui-button), .light .ui-list li.subheader,\n  .light .ui-list li .avatar,\n  .light .ui-list li .secondary,\n  .light .ui-list .ui-list-item .arrow,\n  .light .ui-list .ui-list-item .icon:not(.ui-button),\n  .light .ui-list .ui-list-item.subheader,\n  .light .ui-list .ui-list-item .avatar,\n  .light .ui-list .ui-list-item .secondary {\n    color: rgba(0, 0, 0, 0.54); }\n  .light .ui-list li .avatar,\n  .light .ui-list .ui-list-item .avatar {\n    background-color: #e0e0e0; }\n  .light .ui-list li.disabled,\n  .light .ui-list .ui-list-item.disabled {\n    color: rgba(0, 0, 0, 0.38); }\n  .light .ui-list li.active,\n  .light .ui-list li.active .icon:not(.ui-button),\n  .light .ui-list .ui-list-item.active,\n  .light .ui-list .ui-list-item.active .icon:not(.ui-button) {\n    color: #ef5350; }\n  .light .ui-list li.active.accent,\n  .light .ui-list li.active.accent .icon:not(.ui-button),\n  .light .ui-list .ui-list-item.active.accent,\n  .light .ui-list .ui-list-item.active.accent .icon:not(.ui-button) {\n    color: #ffcdd2; }\n  .light .ui-list li:not(.no-ripple):not([uiRipple]):active, .light .ui-list li:not(.no-ripple)[ng-reflect-ripple-disable=\"true\"]:active,\n  .light .ui-list .ui-list-item:not(.no-ripple):not([uiRipple]):active,\n  .light .ui-list .ui-list-item:not(.no-ripple)[ng-reflect-ripple-disable=\"true\"]:active {\n    background-color: rgba(33, 33, 33, 0.1); }\n\n.light ui-nav-drawer nav,\n.light ui-nav-drawer ui-toolbar header {\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87); }\n  .light ui-nav-drawer nav .logo ~ .title,\n  .light ui-nav-drawer ui-toolbar header .logo ~ .title {\n    border-left: 1px solid rgba(0, 0, 0, 0.12); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      .light ui-nav-drawer nav .logo ~ .title,\n      .light ui-nav-drawer ui-toolbar header .logo ~ .title {\n        border-left: none; } }\n\n.light ui-nav-drawer .ui-divider:not(.nothing) {\n  background-color: rgba(0, 0, 0, 0.07); }\n\n.light .ui-nav-drawer-overlay {\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.light ui-nav-drawer nav .ui-nav-drawer-overflow {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  margin-top: -1px; }\n\n.light ui-option-container .info {\n  color: rgba(0, 0, 0, 0.87); }\n  .light ui-option-container .info .secondary {\n    color: rgba(0, 0, 0, 0.54); }\n\n.light ui-option input[type=\"radio\"]:checked + .ui-option-shell {\n  border-color: #ffcdd2; }\n\n.light ui-option input[type=\"radio\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ffcdd2; }\n\n.light ui-option input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ffcdd2; }\n\n.light ui-option.primary input[type=\"radio\"]:checked + .ui-option-shell {\n  border-color: #ef5350; }\n\n.light ui-option.primary input[type=\"radio\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ef5350; }\n\n.light ui-option.primary input[type=\"checkbox\"]:checked + .ui-option-shell .ui-option-fill {\n  border-color: #ef5350; }\n\n.light ui-option .ui-option-shell {\n  border: 2px solid rgba(0, 0, 0, 0.54); }\n\n.light ui-option .ui-option-shell::before {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.light ui-option input[type=\"checkbox\"] + .ui-option-shell .ui-option-fill {\n  border-color: rgba(0, 0, 0, 0.6); }\n\n.light ui-option input[type=\"radio\"] + .ui-option-shell .ui-option-fill {\n  border: 0 solid rgba(0, 0, 0, 0.6); }\n\n.light .ui-progress {\n  background-color: #ef9a9a; }\n  .light .ui-progress .determinate,\n  .light .ui-progress .indeterminate {\n    background-color: #f44336; }\n  .light .ui-progress.accent {\n    background-color: #ef9a9a; }\n    .light .ui-progress.accent .determinate,\n    .light .ui-progress.accent .indeterminate {\n      background-color: #f44336; }\n\n.light ui-progress-radial .spinner-container .path {\n  stroke: #2196F3; }\n\n.light ui-progress-radial.primary .spinner-container .path {\n  stroke: #ef5350; }\n\n.light ui-progress-radial.accent .spinner-container .path {\n  stroke: #ffcdd2; }\n\n.light [uiRipple] .ui-ripple-wave {\n  background-color: rgba(33, 33, 33, 0.1); }\n\n.light .ui-selection-primary::-moz-selection,\n.light .ui-selection-primary ::-moz-selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.light .ui-selection-primary::selection,\n.light .ui-selection-primary ::selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.light .ui-selection-accent::-moz-selection,\n.light .ui-selection-accent ::-moz-selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.light .ui-selection-accent::selection,\n.light .ui-selection-accent ::selection {\n  color: black;\n  background: #ffcdd2;\n  opacity: 0.5; }\n\n.light ui-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n  .light ui-subheader.primary {\n    color: #ef5350; }\n\n.light ui-switch-container .info {\n  color: rgba(0, 0, 0, 0.87); }\n  .light ui-switch-container .info .secondary {\n    color: rgba(0, 0, 0, 0.54); }\n\n.light ui-switch .switch-cover {\n  background-color: #ffcdd2; }\n\n.light ui-switch input:not(:checked) + .switch-cover {\n  background-color: #212121; }\n\n.light ui-switch input:not(:checked) + .switch-cover .thumb-container::before {\n  background-color: black; }\n\n.light ui-switch.primary .switch-cover {\n  background-color: #ef5350; }\n\n.light ui-switch input:disabled + .switch-cover {\n  background-color: #bdbdbd; }\n\n.light ui-toolbar.primary header {\n  background-color: #ef5350;\n  color: white; }\n  .light ui-toolbar.primary header .logo ~ .title {\n    border-left: 1px solid rgba(255, 255, 255, 0.3); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      .light ui-toolbar.primary header .logo ~ .title {\n        border-left: none; } }\n  .light ui-toolbar.primary header .ui-button:not(.success):not(.warning):not(.error):not(:disabled) .ui-ripple-wave {\n    background-color: rgba(255, 255, 255, 0.1); }\n  .light ui-toolbar.primary header .ui-button .badge {\n    background-color: #ffcdd2;\n    color: black; }\n\n.light ui-toolbar.accent header {\n  background-color: #ffcdd2;\n  color: black; }\n  .light ui-toolbar.accent header .logo ~ .title {\n    border-left: 1px solid rgba(0, 0, 0, 0.3); }\n    @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n      .light ui-toolbar.accent header .logo ~ .title {\n        border-left: none; } }\n  .light ui-toolbar.accent header .ui-button:not(.success):not(.warning):not(.error):not(:disabled) .ui-ripple-wave {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .light ui-toolbar.accent header .ui-button .badge {\n    background-color: #ef5350;\n    color: white; }\n\n.light ui-toolbar.transparent:not(.scrolled) header {\n  color: white; }\n\n.light header .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat {\n  color: inherit; }\n  .light header .ui-button:not(.success):not(.warning):not(.error):not(:disabled).flat i {\n    color: inherit; }\n\n.light ui-slider .track.off {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.light ui-slider .track.on {\n  background-color: #ef5350; }\n  .light ui-slider .track.on .balloon-wrap path {\n    fill: #ef5350; }\n  .light ui-slider .track.on .balloon-wrap .value {\n    color: white; }\n  .light ui-slider .track.on .thumb-container {\n    background-color: #ef5350; }\n\n.light ui-slider .points .point {\n  background-color: black; }\n\n.light ui-slider.accent .track.on {\n  background-color: #ffcdd2; }\n  .light ui-slider.accent .track.on .balloon-wrap path {\n    fill: #ffcdd2; }\n  .light ui-slider.accent .track.on .balloon-wrap .value {\n    color: black; }\n  .light ui-slider.accent .track.on .thumb-container {\n    background-color: #ffcdd2; }\n\n.light .ui-data-table {\n  color: rgba(0, 0, 0, 0.87); }\n  .light .ui-data-table .image,\n  .light .ui-data-table .letter {\n    background-color: #e0e0e0; }\n  .light .ui-data-table th {\n    color: rgba(0, 0, 0, 0.54); }\n  .light .ui-data-table th, .light .ui-data-table td {\n    border-bottom: 1px solid #e0e0e0; }\n  .light .ui-data-table tr:last-child th, .light .ui-data-table tr:last-child td {\n    border-color: transparent; }\n  .light .ui-data-table tr.selected td {\n    background-color: whitesmoke; }\n  @media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n    .light .ui-data-table tr:active td {\n      background-color: #eeeeee; } }\n  @media only screen and (min-width: 376px) and (min-width: 764px) {\n    .light .ui-data-table tr:hover td {\n      background-color: #eeeeee; } }\n  .light .ui-data-table tr.empty td {\n    background-color: transparent; }\n  .light .ui-data-table tfoot td {\n    color: rgba(0, 0, 0, 0.54); }\n    .light .ui-data-table tfoot td:hover {\n      background-color: transparent; }\n    .light .ui-data-table tfoot td:last-child {\n      border-top: 1px solid #e0e0e0; }\n  .light .ui-data-table tbody:not(:last-child) tr:last-child td {\n    border-color: #e0e0e0; }\n\n@media (max-width: 375px), only screen and (min-width: 376px) and (max-width: 763px) {\n  .light ui-data-table.responsive tbody tr {\n    border-bottom: 1px solid #e0e0e0; }\n    .light ui-data-table.responsive tbody tr:last-child {\n      border: none; } }\n\n.light .ui-chip {\n  background-color: rgba(224, 224, 224, 0.75);\n  color: #000; }\n  .light .ui-chip .ui-ripple-wave {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .light .ui-chip:link:hover, .light .ui-chip:link:active {\n    background-color: #e0e0e0; }\n  .light .ui-chip.marked {\n    background-color: #ef5350;\n    color: white; }\n    .light .ui-chip.marked .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    .light .ui-chip.marked.accent-marking {\n      background-color: #ffcdd2;\n      color: black; }\n      .light .ui-chip.marked.accent-marking .ui-ripple-wave {\n        background-color: rgba(0, 0, 0, 0.1); }\n\n.light ui-tabs .tabs .overflow .tab {\n  color: rgba(0, 0, 0, 0.7);\n  border-bottom: 2px solid transparent; }\n  .light ui-tabs .tabs .overflow .tab.selected {\n    color: #000;\n    border-bottom-color: #000; }\n\n.light ui-tabs .tabs .overflow .indicator {\n  background-color: #000; }\n\n.light ui-tabs .tabs .arrows .ui-button {\n  color: #000; }\n\n.light ui-tabs.primary .tabs .overflow .tab {\n  color: rgba(0, 0, 0, 0.7); }\n  .light ui-tabs.primary .tabs .overflow .tab.selected {\n    color: #ef5350;\n    border-bottom-color: #ef5350; }\n\n.light ui-tabs.primary .tabs .overflow .indicator {\n  background-color: #ef5350; }\n\n.light ui-tabs.primary .tabs .arrows .ui-button {\n  color: #000; }\n\n.light ui-autocomplete .focused {\n  background-color: #ef5350;\n  color: white; }\n\n.light ui-autocomplete .focused.accent {\n  background-color: #ffcdd2;\n  color: black; }\n\n.light .wrap-bottom-sheet:not(.transparent-overlay) .overlay {\n  background-color: rgba(0, 0, 0, 0.4); }\n\n.light .wrap-bottom-sheet ui-card.grid li .icon i {\n  color: rgba(0, 0, 0, 0.54); }\n\n.light .ui-input-file-hidden {\n  position: fixed;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  top: -9999px; }\n\n.light .ui-button:not(.success):not(.warning):not(.error):not(:disabled).accent.flat {\n  color: #e57373; }\n\n.light ui-clock {\n  background-color: #FFF; }\n  .light ui-clock header {\n    background-color: #ef5350;\n    color: white; }\n    .light ui-clock header.time-error {\n      background-color: #f44336;\n      color: white; }\n    .light ui-clock header .time {\n      color: rgba(255, 255, 255, 0.54); }\n      .light ui-clock header .time .time-focused {\n        color: white; }\n  .light ui-clock .clock-wrap {\n    background-color: #eeeeee; }\n    .light ui-clock .clock-wrap::before {\n      background-color: rgba(239, 83, 80, 0.54); }\n  .light ui-clock .pointer::before {\n    background-color: rgba(239, 83, 80, 0.54); }\n  .light ui-clock .pointer .ball {\n    background-color: rgba(239, 83, 80, 0.54); }\n    .light ui-clock .pointer .ball::before {\n      background-color: #ef5350; }\n\n@media (max-width: 600px) {\n  .light .wrap-time-picker.open .overlay {\n    background-color: rgba(0, 0, 0, 0.4); } }\n\na, a.dark, a.light {\n  color: #ef5350; }\n\na.accent {\n  color: #ffcdd2; }\n\nui-toolbar.fixed header .user {\n  background-size: cover;\n  background-position: center; }\n  ui-toolbar.fixed header .user.ui-button:not(.success):not(.warning):not(.error):not([disabled]) {\n    color: white; }\n    ui-toolbar.fixed header .user.ui-button:not(.success):not(.warning):not(.error):not([disabled]) .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); }\n    ui-toolbar.fixed header .user.ui-button:not(.success):not(.warning):not(.error):not([disabled]).is-bright {\n      color: black; }\n      ui-toolbar.fixed header .user.ui-button:not(.success):not(.warning):not(.error):not([disabled]).is-bright .ui-ripple-wave {\n        background-color: rgba(0, 0, 0, 0.1); }\n\ntfy-notification-pop {\n  background-color: #f44336;\n  color: white; }\n  tfy-notification-pop .ui-button:not(.success):not(.warning):not(.error):not(:disabled) {\n    color: #f44336; }\n\n/**/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_usuario_service__ = __webpack_require__("../../../../../src/app/core/services/usuario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(titleService, toolbarService, usuarioService, api, router, route) {
        var _this = this;
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.usuarioService = usuarioService;
        this.api = api;
        this.router = router;
        this.route = route;
        this.isBright = __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["b" /* UiColor */].isBright;
        toolbarService.change.subscribe(function (title) { return _this.title = title; });
        usuarioService.change.subscribe(function (user) { return _this.usuario = user; });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Biblioteca Virtual');
        this.toolbarService.set('Biblioteca Virtual');
        this.usuarioService.relogin();
        if (__WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["c" /* UiCookie */].get('NavDrawerPersistent') === 'true') {
            this.menuOpen = true;
        }
        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
    };
    AppComponent.prototype.signOut = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["c" /* UiCookie */].delete('BIVI');
        this.usuarioService.relogin();
        var currentRouteConfig = this.router.config.find(function (f) { return f.path === _this.router.url.substr(1); });
        if (currentRouteConfig != null && currentRouteConfig.canActivate != null) {
            this.router.navigate(['/']);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["f" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["f" /* UiToolbarService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_usuario_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_usuario_service__["a" /* UsuarioService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
/**/
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_guard_auth_guard__ = __webpack_require__("../../../../../src/app/core/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_usuario_service__ = __webpack_require__("../../../../../src/app/core/services/usuario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_signin_signin_module__ = __webpack_require__("../../../../../src/app/views/signin/signin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_not_found_not_found_module__ = __webpack_require__("../../../../../src/app/views/not-found/not-found.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_home_home_module__ = __webpack_require__("../../../../../src/app/views/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_client_client_module__ = __webpack_require__("../../../../../src/app/views/client/client.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_7__views_signin_signin_module__["a" /* SignInModule */],
            __WEBPACK_IMPORTED_MODULE_9__views_home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_8__views_not_found_not_found_module__["a" /* NotFoundModule */],
            __WEBPACK_IMPORTED_MODULE_10__views_client_client_module__["a" /* ClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_5__core_guard_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_6__core_services_usuario_service__["a" /* UsuarioService */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* LOCALE_ID */], useValue: 'pt-BR' }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/api/api.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var APIS = {
    usuario: {
        login: {
            method: 'post',
            url: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].host + "usuario/login",
            isPublic: true
        },
        relogin: {
            method: 'get',
            url: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].host + "usuario/relogin"
        },
        signup: {
            method: 'post',
            url: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].host + "usuario/signup",
            isPublic: true
        },
        recover: {
            method: 'post',
            url: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].host + "usuario/recover",
            isPublic: true
        },
        recoverConfirm: {
            method: 'post',
            url: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].host + "usuario/recover/confirm",
            isPublic: true
        }
    },
};
//# sourceMappingURL=api.constants.js.map

/***/ }),

/***/ "../../../../../src/app/core/api/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_constants__ = __webpack_require__("../../../../../src/app/core/api/api.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.extractData = function (res) {
        var body;
        try {
            body = res.json();
        }
        catch (e) {
            console.error(res, e);
        }
        return body || {};
    };
    ApiService.prototype.handleError = function (error) {
        var body;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            body = error.json() || '';
            switch (error.status) {
                case 0:
                    __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__["e" /* UiSnackbar */].show({
                        text: 'Um de nossos serviços está fora do ar e não foi possível processar sua requisição. Tente novamente mais' +
                            ' tarde.',
                        actionText: 'OK',
                        duration: Infinity,
                        action: function (close) { return close(); },
                    });
                    break;
                case 400:
                    __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__["e" /* UiSnackbar */].show({
                        text: 'Requisição inválida. Verifique as informações fornecidas.',
                        actionText: 'OK',
                        duration: Infinity,
                        action: function (close) { return close(); }
                    });
                    break;
                case 500:
                    __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__["e" /* UiSnackbar */].show({
                        text: 'Ocorreu um erro interno. Já fomos informados do erro. Tente novamente mais tarde.',
                        actionText: 'OK',
                        duration: Infinity,
                        action: function (close) { return close(); }
                    });
            }
        }
        else {
            console.error(error);
            __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__["e" /* UiSnackbar */].show({
                text: 'Ocorreu um erro desconhecido. Tente novamente mais tarde.',
                actionText: 'OK',
                duration: Infinity,
                action: function (close) { return close(); }
            });
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(body);
    };
    ApiService.prototype._call = function (method) {
        var _this = this;
        return function (data, setHeaders) {
            var url = method.url;
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            if (!method.isPublic) {
                headers.append('Authentication', __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__["c" /* UiCookie */].get('BIVI'));
            }
            if (setHeaders) {
                Object.keys(setHeaders).forEach(function (key) {
                    headers.append(key, setHeaders[key]);
                });
            }
            var secondParam = data;
            var thirdParam = {
                headers: headers
            };
            if (data) {
                var urlParams = jsonToParams(url, data);
                url = urlParams.url;
                data = urlParams.data;
            }
            if (method.method === 'get' || method.method === 'delete') {
                if (data) {
                    url = url + jsonToQueryString(data);
                }
                secondParam = thirdParam;
                thirdParam = undefined;
            }
            return _this.http[method.method](url, secondParam, thirdParam)
                .map(_this.extractData)
                .catch(_this.handleError);
        };
    };
    ApiService.prototype.prep = function (functionality, method) {
        return {
            call: this._call(__WEBPACK_IMPORTED_MODULE_5__api_constants__["a" /* APIS */][functionality][method])
        };
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

function jsonToQueryString(json) {
    var params = Object.keys(json).map(function (key) {
        return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key]);
    });
    return (params.length ? '?' : '') + params.join('&');
}
function jsonToParams(url, data) {
    var dataClone = Object.assign({}, data);
    Object.keys(dataClone).forEach(function (key) {
        if (url.includes(':' + key)) {
            url = url.replace(':' + key, dataClone[key]);
            delete dataClone[key];
        }
    });
    return {
        url: url,
        data: dataClone
    };
}
var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notifications_notifications_module__ = __webpack_require__("../../../../../src/app/core/components/notifications/notifications.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tvshow_card_tvshow_card_module__ = __webpack_require__("../../../../../src/app/core/components/tvshow-card/tvshow-card.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__notifications_notifications_module__["a" /* NotificationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__tvshow_card_tvshow_card_module__["a" /* TvshowCardModule */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/notifications-trigger.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TfyNotificationsTriggerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TfyNotificationsTriggerDirective = (function () {
    function TfyNotificationsTriggerDirective(viewContainerRef, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this.elementRef = elementRef;
    }
    TfyNotificationsTriggerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.notifications.closeChange.subscribe(function () {
            _this.close();
        });
        __WEBPACK_IMPORTED_MODULE_1_ng_smn_ui__["d" /* UiElement */].on(this.elementRef.nativeElement, 'click', function () {
            if (_this.notifications.opened) {
                _this.close();
            }
            else {
                _this.notifications.opened = true;
                setTimeout(function () {
                    var position = __WEBPACK_IMPORTED_MODULE_1_ng_smn_ui__["d" /* UiElement */].position(_this.elementRef.nativeElement, true);
                    var coordinate = {
                        x: position.left,
                        y: position.top
                    };
                    _this.render(coordinate);
                });
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_ng_smn_ui__["d" /* UiElement */].on(__WEBPACK_IMPORTED_MODULE_1_ng_smn_ui__["g" /* UiWindowRef */].nativeWindow, 'click resize', function (e) {
            if (_this.elementRef.nativeElement !== e.target) {
                _this.close();
            }
        });
    };
    TfyNotificationsTriggerDirective.prototype.render = function (coordinate) {
        var _this = this;
        this.viewRef = this.viewContainerRef.createEmbeddedView(this.notifications.templateRef);
        this.viewRef.detectChanges();
        this.viewRef.rootNodes.forEach(function (rootNode) {
            document.body.appendChild(rootNode);
            if (rootNode.clientWidth) {
                _this.open(rootNode, coordinate);
            }
        });
    };
    TfyNotificationsTriggerDirective.prototype.open = function (element, coordinate) {
        var _this = this;
        setTimeout(function () {
            var verticalCoveringArea = coordinate.y + element.clientHeight;
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var originalX = coordinate.x;
            coordinate.x -= element.clientWidth - _this.elementRef.nativeElement.clientWidth;
            var horizontalCoveringArea = coordinate.x;
            if (horizontalCoveringArea > windowWidth) {
                coordinate.x = windowWidth - (element.clientWidth + 8);
            }
            var arrow = element.querySelectorAll('.arrow')[0];
            if (coordinate.x <= 8) {
                coordinate.x = 8;
                element.style.right = '8px';
                element.style.width = 'auto';
                element.style.left = coordinate.x + 'px';
                arrow.style.left = originalX - 4 + 'px';
                arrow.style.right = 'auto';
            }
            else {
                element.style.width = '';
                element.style.right = '';
                coordinate.x += 2;
                arrow.style.left = '';
                arrow.style.right = '';
            }
            if (verticalCoveringArea > windowHeight) {
                coordinate.y = windowHeight - (element.clientHeight + 8);
            }
            else {
                coordinate.y += _this.elementRef.nativeElement.clientHeight;
            }
            element.style.transform = '';
            element.style.top = coordinate.y + 'px';
            element.style.left = coordinate.x + 'px';
            element.classList.add('open');
        });
    };
    TfyNotificationsTriggerDirective.prototype.close = function () {
        var _this = this;
        if (this.viewContainerRef.length) {
            this.notifications.opened = false;
            var viewRef_1 = this.viewRef; // Salvando a referência para achar o index deste componente
            viewRef_1.rootNodes.forEach(function (rootNode) {
                if (rootNode.classList) {
                    rootNode.classList.remove('open');
                }
            });
            setTimeout(function () { return _this.viewContainerRef.remove(_this.viewContainerRef.indexOf(viewRef_1)); }, 280);
        }
    };
    return TfyNotificationsTriggerDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('tfyNotificationsTrigger'),
    __metadata("design:type", Object)
], TfyNotificationsTriggerDirective.prototype, "notifications", void 0);
TfyNotificationsTriggerDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[tfyNotificationsTrigger]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewContainerRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], TfyNotificationsTriggerDirective);

var _a, _b;
/**/
//# sourceMappingURL=notifications-trigger.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template>\r\n    <div class=\"wrap-notifications\">\r\n        <div class=\"arrow\"></div>\r\n        <ui-card (click)=\"$event.stopPropagation()\" (uiInfiniteLoad)=\"loadMore()\"\r\n                 [(model)]=\"user.notifications\">\r\n            <div class=\"item\" *ngFor=\"let item of user?.notifications\" [class.hide]=\"item.hide\"\r\n                 [@notification]=\"item.id\" (click)=\"open(item)\" uiRipple>\r\n                <div class=\"content\">\r\n                    <div class=\"top hint-text\">\r\n                        <span class=\"type\">{{item.type}}</span>•<span class=\"timestamp\">\r\n                            {{item.sendDate | uiTimeAgo : '' : '' : true}}\r\n                        </span>\r\n                        <div class=\"clear ui-button icon flat\" uiRipple tabindex=\"0\"\r\n                             (click)=\"$event.stopPropagation(); dismiss(item);\">\r\n                            <i class=\"material-icons\">clear</i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"author\">\r\n                        <a class=\"primary-text\" [routerLink]=\"[item.usuario.url]\" (click)=\"$event.stopPropagation()\">\r\n                            {{item.usuario.fullname}}\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"message secondary-text\" [innerHTML]=\"item.message\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"empty-state\" [class.show]=\"!user.notifications.length\">\r\n                <p>\r\n                    <span>Você não tem nenhuma nova notificação</span>\r\n                </p>\r\n                <p>\r\n                    <i class=\"material-icons\">notifications_none</i>\r\n                </p>\r\n            </div>\r\n            <div class=\"ui-progress primary\" [class.hide]=\"!loading\">\r\n                <div class=\"indeterminate\"></div>\r\n            </div>\r\n        </ui-card>\r\n    </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/notifications.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n.wrap-notifications {\n  position: fixed;\n  z-index: 2;\n  -webkit-transform-origin: bottom;\n          transform-origin: bottom;\n  transition: opacity 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 225ms cubic-bezier(0.4, 0, 1, 1);\n  transition: transform 225ms cubic-bezier(0.4, 0, 1, 1), opacity 195ms cubic-bezier(0.4, 0, 1, 1);\n  transition: transform 225ms cubic-bezier(0.4, 0, 1, 1), opacity 195ms cubic-bezier(0.4, 0, 1, 1), -webkit-transform 225ms cubic-bezier(0.4, 0, 1, 1);\n  -webkit-transform: scale(0.8) translateY(16px);\n          transform: scale(0.8) translateY(16px);\n  opacity: 0;\n  max-width: 300px;\n  max-height: 348px;\n  width: 100%;\n  cursor: default; }\n  .wrap-notifications .arrow {\n    content: \"\";\n    top: 0;\n    right: 6px;\n    position: fixed;\n    background-color: #FFF;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    width: 28px;\n    height: 28px;\n    z-index: -1; }\n  .wrap-notifications ui-card {\n    box-shadow: 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 3px rgba(0,0,0,.12), 0 4px 15px 0 rgba(0,0,0,.20);\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: 300px;\n    min-height: 100px; }\n    .wrap-notifications ui-card .item {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.07);\n      font-size: 14px;\n      position: relative;\n      display: block;\n      /*transition: transform 0.28s ui-easing('deceleration'),\r\n            max-height 0.28s ui-easing('deceleration') 0.1s,\r\n            display 1ms 0.28s;*/\n      -webkit-transform-origin: top;\n              transform-origin: top;\n      max-height: 200px; }\n      .wrap-notifications ui-card .item:last-child {\n        border-bottom: 1px solid transparent; }\n      .wrap-notifications ui-card .item.hide {\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%);\n        max-height: 0;\n        border-bottom: none; }\n      .wrap-notifications ui-card .item .top {\n        font-size: 12px;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n        .wrap-notifications ui-card .item .top span {\n          margin: 0 5px; }\n        .wrap-notifications ui-card .item .top .type {\n          color: #ef5350;\n          margin-left: 0; }\n        .wrap-notifications ui-card .item .top .timestamp {\n          margin-right: 0; }\n        .wrap-notifications ui-card .item .top .expand {\n          margin: 0;\n          color: #2196F3; }\n          .wrap-notifications ui-card .item .top .expand .up {\n            display: none; }\n          .wrap-notifications ui-card .item .top .expand i {\n            font-size: 15px;\n            vertical-align: middle; }\n      .wrap-notifications ui-card .item .author {\n        margin-top: 7px;\n        font-weight: 400;\n        margin-bottom: 3px;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n      .wrap-notifications ui-card .item .content {\n        box-sizing: border-box;\n        position: relative;\n        padding: 12px 10px; }\n      .wrap-notifications ui-card .item .clear {\n        min-width: 0;\n        width: 20px;\n        height: 20px;\n        min-height: 20px;\n        padding: 3px;\n        border-radius: 10px;\n        position: absolute;\n        right: 10px;\n        top: 10px;\n        margin: 0; }\n        .wrap-notifications ui-card .item .clear i {\n          font-size: 14px;\n          vertical-align: top; }\n    .wrap-notifications ui-card .empty-state {\n      text-align: center;\n      padding: 0 20px;\n      overflow: hidden;\n      opacity: 0;\n      transition: opacity 0.28s cubic-bezier(0, 0, 0.2, 1) 0.5s, max-height 0.28s cubic-bezier(0, 0, 0.2, 1) 0.2s, padding 0.28s cubic-bezier(0, 0, 0.2, 1) 0.2s;\n      max-height: 0; }\n      .wrap-notifications ui-card .empty-state.show {\n        opacity: 1;\n        max-height: 300px;\n        padding: 20px; }\n      .wrap-notifications ui-card .empty-state i {\n        margin-top: 10px;\n        font-size: 60px; }\n  .wrap-notifications.open {\n    transition: opacity 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1), opacity 195ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1), opacity 195ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1);\n    -webkit-transform: scale(1) translateY(0);\n            transform: scale(1) translateY(0);\n    opacity: 1; }\n\n.dark .wrap-notifications .arrow {\n  background-color: #424242; }\n\n.light .wrap-notifications .arrow {\n  background-color: #FFF; }\n\n/**/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TfyNotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pop_notification_pop_provider__ = __webpack_require__("../../../../../src/app/core/components/notifications/pop/notification-pop.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TfyNotificationsComponent = (function () {
    function TfyNotificationsComponent(elementRef, api, router) {
        var _this = this;
        this.elementRef = elementRef;
        this.api = api;
        this.router = router;
        this.closeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.verify = setInterval(function () {
            _this.api
                .prep('notifications', 'recheck')
                .call()
                .subscribe(function (data) {
                var difference = data.unreadNotifications - _this.user.unreadNotifications;
                if (difference > 0) {
                    __WEBPACK_IMPORTED_MODULE_5__pop_notification_pop_provider__["a" /* TfyNotificationPop */].show({
                        text: "Voc\u00EA recebeu " + (difference === 1 ? 'uma nova notificação' : 'novas notificações'),
                    });
                }
                Object.assign(_this.user, data);
            });
        }, 60000);
    }
    TfyNotificationsComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.verify);
    };
    TfyNotificationsComponent.prototype.close = function () {
        this.closeChange.emit();
    };
    TfyNotificationsComponent.prototype.dismiss = function (item) {
        var _this = this;
        this.api
            .prep('notifications', 'dismiss')
            .call({
            id: item.id
        })
            .subscribe(function () {
            var notification = _this.user.notifications.indexOf(item);
            if (notification > -1) {
                _this.user.notifications.splice(notification, 1);
            }
            __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["e" /* UiSnackbar */].show({
                text: 'Notificação dispensada',
                actionText: 'Desfazer',
                action: function (close) {
                    _this.restore(item);
                    close();
                },
            });
        });
    };
    TfyNotificationsComponent.prototype.markAllAsRead = function () {
        var _this = this;
        if (this.user.unreadNotifications) {
            this.api
                .prep('notifications', 'markAllAsRead')
                .call()
                .subscribe(function () {
                _this.user.unreadNotifications = null;
            });
        }
    };
    TfyNotificationsComponent.prototype.loadMore = function () {
        var _this = this;
        if (!this.loading && !this.noMore) {
            this.loading = true;
            this.api
                .prep('notifications', 'select')
                .call({
                unless: this.user.notifications.map(function (item) { return item.id; })
            })
                .subscribe(function (data) {
                _this.loading = false;
                if (data.length) {
                    _this.user.notifications = _this.user.notifications.concat(data);
                }
                else {
                    _this.noMore = true;
                }
            });
        }
    };
    TfyNotificationsComponent.prototype.open = function (item) {
        var notification = this.user.notifications.indexOf(item);
        if (notification > -1) {
            this.user.notifications.splice(notification, 1);
        }
        if (item.url) {
            this.router.navigateByUrl(item.url);
            this.close();
        }
        this.api
            .prep('notifications', 'markOpen')
            .call({
            id: item.id
        });
    };
    TfyNotificationsComponent.prototype.restore = function (item) {
        var _this = this;
        this.api
            .prep('notifications', 'restore')
            .call({
            id: item.id
        })
            .subscribe(function () {
            _this.user.notifications.unshift(item);
        });
    };
    return TfyNotificationsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* TemplateRef */]) === "function" && _a || Object)
], TfyNotificationsComponent.prototype, "templateRef", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], TfyNotificationsComponent.prototype, "closeChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TfyNotificationsComponent.prototype, "user", void 0);
TfyNotificationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tfy-notifications',
        template: __webpack_require__("../../../../../src/app/core/components/notifications/notifications.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/notifications/notifications.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('notification', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('* => void', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ maxHeight: '200px', opacity: '1', transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)' }),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* sequence */])([
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('.25s ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ maxHeight: '200px', opacity: '.2', transform: 'translateX(100%)', 'box-shadow': 'none' })),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('.1s ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ maxHeight: '0', opacity: 0, transform: 'translateX(100%)', 'box-shadow': 'none' }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* transition */])('void => *', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ maxHeight: '0', opacity: '0' }),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* sequence */])([
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('.1s ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({ maxHeight: '200px', opacity: '.2' })),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('.35s ease', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* style */])({
                            maxHeight: '200px',
                            opacity: 1
                        }))
                    ])
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_api_service__["a" /* ApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], TfyNotificationsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=notifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/notifications.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_component__ = __webpack_require__("../../../../../src/app/core/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notifications_trigger_directive__ = __webpack_require__("../../../../../src/app/core/components/notifications/notifications-trigger.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pop_notification_pop_component__ = __webpack_require__("../../../../../src/app/core/components/notifications/pop/notification-pop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pop_notification_pop_container_component__ = __webpack_require__("../../../../../src/app/core/components/notifications/pop/notification-pop-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pop_notification_pop_provider__ = __webpack_require__("../../../../../src/app/core/components/notifications/pop/notification-pop.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var exportsAndDeclarations = [
    __WEBPACK_IMPORTED_MODULE_5__notifications_trigger_directive__["a" /* TfyNotificationsTriggerDirective */],
    __WEBPACK_IMPORTED_MODULE_4__notifications_component__["a" /* TfyNotificationsComponent */],
    __WEBPACK_IMPORTED_MODULE_6__pop_notification_pop_component__["a" /* TfyNotificationPopComponent */],
    __WEBPACK_IMPORTED_MODULE_7__pop_notification_pop_container_component__["a" /* TfyNotificationPopContainerComponent */]
];
var NotificationsModule = (function () {
    function NotificationsModule() {
    }
    return NotificationsModule;
}());
NotificationsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["a" /* SMNUIModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: exportsAndDeclarations,
        declarations: exportsAndDeclarations,
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__pop_notification_pop_provider__["a" /* TfyNotificationPop */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], NotificationsModule);

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/pop/notification-pop-container.component.html":
/***/ (function(module, exports) {

module.exports = "<tfy-notification-pop *ngFor=\"let bar of bars\" [bar]=\"bar\">\r\n    {{bar.text}}\r\n</tfy-notification-pop>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/pop/notification-pop-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  position: fixed;\n  height: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/pop/notification-pop-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TfyNotificationPopContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_pop_provider__ = __webpack_require__("../../../../../src/app/core/components/notifications/pop/notification-pop.provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TfyNotificationPopContainerComponent = (function () {
    function TfyNotificationPopContainerComponent() {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__notification_pop_provider__["a" /* TfyNotificationPop */].barsChange.subscribe(function (value) {
            _this.bars = value;
        });
    }
    return TfyNotificationPopContainerComponent;
}());
TfyNotificationPopContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tfy-notification-pop-container',
        template: __webpack_require__("../../../../../src/app/core/components/notifications/pop/notification-pop-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/notifications/pop/notification-pop-container.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TfyNotificationPopContainerComponent);

//# sourceMappingURL=notification-pop-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/pop/notification-pop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-button icon\">\r\n    <i class=\"material-icons\">notifications</i>\r\n</div>\r\n<div class=\"text\">\r\n    {{bar.text}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/pop/notification-pop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-left: 16px;\n  box-shadow: 0 0 4px 0 rgba(0,0,0,.14), 0 3px 4px 0 rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20);\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  transition: -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  min-width: 288px;\n  margin: 16px 16px;\n  border-radius: 2px;\n  max-width: 568px;\n  position: absolute;\n  top: 64px;\n  right: 0; }\n  :host:first-child {\n    -webkit-animation: enter-notification-pop 280ms cubic-bezier(0, 0, 0.2, 1);\n            animation: enter-notification-pop 280ms cubic-bezier(0, 0, 0.2, 1); }\n  :host + /deep/ tfy-notification-pop:not(.nothing) {\n    position: absolute;\n    z-index: -1;\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    -webkit-transform: translateX(calc(100% + 20px));\n            transform: translateX(calc(100% + 20px)); }\n  :host.leave {\n    -webkit-transform: translateX(110%);\n            transform: translateX(110%);\n    -webkit-transform: translateX(calc(100% + 20px));\n            transform: translateX(calc(100% + 20px)); }\n  :host .ui-button:not(.success):not(.warning):not(.error):not(:disabled) {\n    margin-right: 16px;\n    width: 25px;\n    height: 25px;\n    min-height: 25px; }\n    :host .ui-button:not(.success):not(.warning):not(.error):not(:disabled) i {\n      font-size: 18px; }\n  :host .text {\n    color: inherit;\n    font-size: 14px;\n    padding: 14px 0;\n    min-height: 48px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-right: 24px; }\n\n@-webkit-keyframes enter-notification-pop {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@keyframes enter-notification-pop {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/**/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/pop/notification-pop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TfyNotificationPopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TfyNotificationPopComponent = (function () {
    function TfyNotificationPopComponent() {
    }
    return TfyNotificationPopComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TfyNotificationPopComponent.prototype, "bar", void 0);
TfyNotificationPopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tfy-notification-pop',
        template: __webpack_require__("../../../../../src/app/core/components/notifications/pop/notification-pop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/notifications/pop/notification-pop.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TfyNotificationPopComponent);

//# sourceMappingURL=notification-pop.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/notifications/pop/notification-pop.provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TfyNotificationPop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var timeout;
var bars = [];
var defaults = {
    duration: 5000,
    center: false,
    actionText: null
};
var TfyNotificationPop = (function () {
    function TfyNotificationPop() {
    }
    TfyNotificationPop.show = function (bar) {
        bar = Object.assign({}, defaults, bar);
        bars.push(bar);
        if (bars.length === 1) {
            this.timerBar(bar);
        }
        this.barsChange.emit(bars);
    };
    TfyNotificationPop.timerBar = function (bar) {
        var _this = this;
        if (bars.length) {
            timeout = setTimeout(function () {
                document.querySelectorAll('tfy-notification-pop-container > tfy-notification-pop')[0].classList.add('leave');
                setTimeout(function () { return _this.finishTimeout(); }, 280);
            }, bar.duration);
        }
    };
    ;
    TfyNotificationPop.finishTimeout = function () {
        bars.shift();
        if (bars.length) {
            this.timerBar(bars[0]);
        }
        this.barsChange.emit(bars);
    };
    return TfyNotificationPop;
}());
TfyNotificationPop.barsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
TfyNotificationPop = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TfyNotificationPop);

//# sourceMappingURL=notification-pop.provider.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/tvshow-card/tvshow-card.component.html":
/***/ (function(module, exports) {

module.exports = "<ui-card [ngClass]=\"{'raising': !tvshow.notRaising, 'marked-as-watched': tvshow.markedAsWatched, 'archived': tvshow.type === 'archived'}\">\r\n    <a [href]=\"tvshow.url\">\r\n        <div class=\"poster\">\r\n            <img class=\"responsive\" alt=\"Poster\" uiLazyLoad [lazy-src]=\"tvshow.poster\">\r\n            <div class=\"overlay-soon\" *ngIf=\"tvshow.episode\" [class.show]=\"isAfterToday(tvshow.episode.date)\">\r\n                {{isAfterToday(tvshow.episode.date) ? (tvshow.episode.date | uiTimeAgo : 'Daqui ' : '' : false :\r\n                true) : ''}}\r\n            </div>\r\n            <div class=\"overlay-flags ui-button-container align-right\"\r\n                 *ngIf=\"showEpisodeCount || tvshow.type === 'archived' || (tvshow.episode && tvshow.episode.new) || tvshow.favorite\">\r\n                <div *ngIf=\"tvshow.favorite\" class=\"ui-button icon flat flag\"\r\n                     title=\"Favorito\">\r\n                    <i class=\"material-icons\">star</i>\r\n                </div>\r\n                <div *ngIf=\"tvshow.type === 'archived'\" class=\"ui-button icon flat flag\" title=\"Arquivado\">\r\n                    <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\r\n                        <path fill=\"#FFF\"\r\n                              d=\"M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11A0.5,0.5 0 0,0 9,11.5V13H15V11.5A0.5,0.5 0 0,0 14.5,11H9.5Z\"/>\r\n                    </svg>\r\n                </div>\r\n                <div *ngIf=\"tvshow.episode && tvshow.episode.new\" class=\"ui-button icon flat flag\"\r\n                     title=\"Novo episódio\">\r\n                    <i class=\"material-icons\">new_releases</i>\r\n                </div>\r\n                <div *ngIf=\"showEpisodeCount\" class=\"ui-button icon flat flag\"\r\n                     [title]=\"'Tem ' + tvshow.countToWatch + ' episódio' + (tvshow.countToWatch != 1 ? 's' : '') + ' para assistir'\">\r\n                    {{tvshow.countToWatch < 1000 ? tvshow.countToWatch : '+999'}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-progress\">\r\n            <div class=\"determinate\" [style.width]=\"tvshow.progress\"></div>\r\n        </div>\r\n    </a>\r\n    <ui-card-content>\r\n        <div class=\"title\">\r\n            <a [href]=\"tvshow.url\">{{tvshow.title}}</a>\r\n        </div>\r\n        <div class=\"subtitle\" *ngIf=\"tvshow.episode\">\r\n            <a [href]=\"tvshow.episode.url\">\r\n                {{tvshow.episode.title}} - {{tvshow.episode.seasonEpisode}}\r\n            </a>\r\n        </div>\r\n        <button class=\"ui-button primary raised icon\" *ngIf=\"tvshow.episode\" uiRipple\r\n                (mousedown)=\"tvshow.notRaising = true\"\r\n                (mouseout)=\"tvshow.notRaising = false\"\r\n                (mouseup)=\"tvshow.notRaising = false\"\r\n                (click)=\"markAsWatched()\"\r\n                [class.hide]=\"isAfterToday(tvshow.episode.date)\">\r\n            <ui-progress-radial class=\"indeterminate\" *ngIf=\"tvshow.markingAsWatched\"></ui-progress-radial>\r\n            <i class=\"material-icons\">visibility</i>\r\n        </button>\r\n    </ui-card-content>\r\n</ui-card>\r\n<!---->\r\n"

/***/ }),

/***/ "../../../../../src/app/core/components/tvshow-card/tvshow-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  :host ui-card {\n    position: relative;\n    pointer-events: none; }\n    :host ui-card.archived {\n      opacity: 0.8;\n      transition: box-shadow 0.28s cubic-bezier(0, 0, 0.2, 1), opacity 0.28s cubic-bezier(0, 0, 0.2, 1); }\n      :host ui-card.archived:hover, :host ui-card.archived:focus {\n        opacity: 1; }\n    :host ui-card > a {\n      display: block;\n      pointer-events: auto; }\n    :host ui-card .ui-progress {\n      position: absolute;\n      top: 0;\n      background-color: rgba(0, 0, 0, 0.3); }\n      :host ui-card .ui-progress .determinate {\n        background-color: #4caf50; }\n    :host ui-card .poster {\n      position: relative;\n      min-height: 30px;\n      background-color: #e0e0e0; }\n      :host ui-card .poster .overlay-soon {\n        position: absolute;\n        background-color: rgba(0, 0, 0, 0.3);\n        color: white;\n        top: 0;\n        height: 100%;\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        text-align: center;\n        opacity: 0;\n        transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1); }\n        :host ui-card .poster .overlay-soon.show {\n          opacity: 1; }\n      :host ui-card .poster .overlay-flags {\n        position: absolute;\n        top: 0;\n        height: 100%;\n        width: 100%;\n        padding: 10px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: flex-start;\n        text-align: center; }\n        :host ui-card .poster .overlay-flags .flag {\n          background-color: rgba(0, 0, 0, 0.5);\n          color: white; }\n    :host ui-card ui-card-content {\n      position: relative; }\n      :host ui-card ui-card-content button {\n        pointer-events: auto;\n        position: absolute;\n        top: -18px;\n        right: 10px; }\n        :host ui-card ui-card-content button .ui-progress {\n          position: absolute; }\n        :host ui-card.marked-as-watched ui-card-content button {\n          -webkit-transform: scale(0);\n                  transform: scale(0); }\n        :host ui-card ui-card-content button.hide {\n          -webkit-transform: scale(0);\n                  transform: scale(0); }\n    :host ui-card .title a {\n      pointer-events: auto;\n      color: rgba(0, 0, 0, 0.87);\n      text-decoration: none;\n      font-weight: 500; }\n      :host-context(.dark) ui-card .title a {\n        color: white; }\n    :host ui-card .subtitle a {\n      pointer-events: auto;\n      color: rgba(0, 0, 0, 0.54);\n      text-decoration: none; }\n      :host-context(.dark) ui-card .subtitle a {\n        color: rgba(255, 255, 255, 0.7); }\n\n/**/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/tvshow-card/tvshow-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvshowCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TvshowCardComponent = (function () {
    function TvshowCardComponent(api) {
        this.api = api;
    }
    TvshowCardComponent.prototype.ngOnInit = function () {
    };
    TvshowCardComponent.prototype.markAsWatched = function () {
        var _this = this;
        this.tvshow.markingAsWatched = true;
        this.api
            .prep('myList', 'markEpisodeAsWatched')
            .call({
            id: this.tvshow.episode.id,
            tvshowId: this.tvshow.id
        })
            .subscribe(function (data) {
            _this.tvshow.markedAsWatched = true;
            setTimeout(function () {
                _this.tvshow = data;
                _this.tvshow.markingAsWatched = false;
                _this.tvshow.markedAsWatched = false;
            }, 280);
        }, function () {
            _this.tvshow.markingAsWatched = false;
            _this.tvshow.markedAsWatched = false;
        });
        // setTimeout(() => {
        //     tvshow.markedAsWatched = true;
        //     setTimeout(() => {
        //         const tomorrow = new Date();
        //         tomorrow.setDate(new Date().getDate() + 1);
        //
        //         tvshow.episode = {
        //             title: 'Second episode',
        //             number: 'S01E02',
        //             url: '/tvshow/teste/s01e02',
        //             date: tomorrow.toISOString()
        //         };
        //
        //         tvshow.markingAsWatched = false;
        //         tvshow.markedAsWatched = false;
        //     }, 280);
        // }, 1000);
    };
    TvshowCardComponent.prototype.isAfterToday = function (date) {
        return new Date(date).getTime() > new Date().getTime();
    };
    return TvshowCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TvshowCardComponent.prototype, "tvshow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('show-episode-count'),
    __metadata("design:type", Boolean)
], TvshowCardComponent.prototype, "showEpisodeCount", void 0);
TvshowCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'tfy-tvshow-card',
        template: __webpack_require__("../../../../../src/app/core/components/tvshow-card/tvshow-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/components/tvshow-card/tvshow-card.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], TvshowCardComponent);

var _a;
//# sourceMappingURL=tvshow-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/components/tvshow-card/tvshow-card.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvshowCardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tvshow_card_component__ = __webpack_require__("../../../../../src/app/core/components/tvshow-card/tvshow-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TvshowCardModule = (function () {
    function TvshowCardModule() {
    }
    return TvshowCardModule;
}());
TvshowCardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["a" /* SMNUIModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__tvshow_card_component__["a" /* TvshowCardComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__tvshow_card_component__["a" /* TvshowCardComponent */]],
        providers: [],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], TvshowCardModule);

//# sourceMappingURL=tvshow-card.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (__WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["c" /* UiCookie */].get('BIVI')) {
            return true;
        }
        this.router.navigate(['/signin']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/usuario.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsuarioService = (function () {
    function UsuarioService(api) {
        this.api = api;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    UsuarioService.prototype.get = function () {
        return this.sharedValue;
    };
    UsuarioService.prototype.set = function (sharedValue) {
        this.sharedValue = sharedValue;
        this.change.emit(sharedValue);
    };
    UsuarioService.prototype.relogin = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["c" /* UiCookie */].get('BIVI')) {
            this.api
                .prep('usuario', 'relogin')
                .call()
                .subscribe(function (data) {
                _this.set(data);
            }, function (error) {
                console.error(error);
                __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["c" /* UiCookie */].delete('BIVI');
                switch (error.executionCode) {
                    case 1:
                        __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["e" /* UiSnackbar */].show({
                            text: 'Sua sessão expirou',
                            actionText: 'OK',
                            duration: Infinity,
                            action: function (close) { return close(); },
                        });
                        break;
                }
            });
        }
        else {
            this.set(null);
        }
    };
    return UsuarioService;
}());
UsuarioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], UsuarioService);

var _a;
/**/
//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_components_components_module__ = __webpack_require__("../../../../../src/app/core/components/components.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__["a" /* SMNUIModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_7__core_components_components_module__["a" /* ComponentsModule */]
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__["f" /* UiToolbarService */],
            __WEBPACK_IMPORTED_MODULE_6_ng_smn_ui__["b" /* UiColor */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/client/client-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_component__ = __webpack_require__("../../../../../src/app/views/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list_component__ = __webpack_require__("../../../../../src/app/views/client/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_info_component__ = __webpack_require__("../../../../../src/app/views/client/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_guard_auth_guard__ = __webpack_require__("../../../../../src/app/core/guard/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'client', component: __WEBPACK_IMPORTED_MODULE_2__client_component__["a" /* ClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__core_guard_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__list_list_component__["a" /* ClientListComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__info_info_component__["a" /* ClientInfoComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_4__info_info_component__["a" /* ClientInfoComponent */] }
        ]
    }
];
var ClientRoutingModule = (function () {
    function ClientRoutingModule() {
    }
    return ClientRoutingModule;
}());
ClientRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], ClientRoutingModule);

//# sourceMappingURL=client-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ClientComponent = (function () {
    function ClientComponent() {
    }
    return ClientComponent;
}());
ClientComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-client',
        template: __webpack_require__("../../../../../src/app/views/client/client.component.html")
    })
], ClientComponent);

//# sourceMappingURL=client.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/client/client.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_routing_module__ = __webpack_require__("../../../../../src/app/views/client/client-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__client_component__ = __webpack_require__("../../../../../src/app/views/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list_component__ = __webpack_require__("../../../../../src/app/views/client/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__info_info_component__ = __webpack_require__("../../../../../src/app/views/client/info/info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ClientModule = (function () {
    function ClientModule() {
    }
    return ClientModule;
}());
ClientModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__client_routing_module__["a" /* ClientRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__client_component__["a" /* ClientComponent */],
            __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ClientListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__info_info_component__["a" /* ClientInfoComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], ClientModule);

//# sourceMappingURL=client.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/client/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s960\">\r\n    <form #formClient=\"ngForm\" class=\"ui-validate on-dirty on-submit\" (submit)=\"onSubmit(formClient)\">\r\n        <ui-card [class.loading]=\"loading\">\r\n            <div class=\"ui-progress\" [class.hide]=\"!loading\">\r\n                <div class=\"indeterminate\"></div>\r\n            </div>\r\n            <ui-toolbar class=\"flat\">\r\n                <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"goBack()\">\r\n                    <i class=\"material-icons\">arrow_back</i>\r\n                </button>\r\n                <span class=\"title\">\r\n                    {{addingNew ? 'Novo cliente' : (loading ? 'Carregando' : 'Alterando ' + (info.name || ''))}}</span>\r\n                <div class=\"align-right\" *ngIf=\"!addingNew\">\r\n                    <button class=\"ui-button flat icon\" type=\"button\" uiRipple\r\n                            [disabled]=\"saving || deleting || loading\" [uiMenuTrigger]=\"menuDelete\" align=\"right\">\r\n                        <i class=\"material-icons\" *ngIf=\"!deleting\">delete</i>\r\n                        <ui-progress-radial class=\"indeterminate\" *ngIf=\"deleting\"></ui-progress-radial>\r\n                    </button>\r\n                </div>\r\n            </ui-toolbar>\r\n            <fieldset [disabled]=\"saving || deleting || loading\">\r\n                <ui-card-content>\r\n                    <div class=\"ui-flex-container\">\r\n                        <ui-input-container>\r\n                            <select id=\"inputTypeId\" #fieldTypeId=\"ngModel\" [(ngModel)]=\"info.typeId\" uiInput\r\n                                    name=\"typeId\">\r\n                                <option></option>\r\n                                <option *ngFor=\"let type of typesClient\" [ngValue]=\"type.id\">\r\n                                    {{type.name}}\r\n                                </option>\r\n                            </select>\r\n                            <label for=\"inputTypeId\">{{typesClient.loaded ? 'Tipo' : 'Carregando tipos'}}</label>\r\n                        </ui-input-container>\r\n                        <ui-input-container>\r\n                            <input id=\"inputName\" #fieldName=\"ngModel\" type=\"text\" [(ngModel)]=\"info.name\"\r\n                                   uiInput name=\"name\" required uiMaxlength=\"255\">\r\n                            <label for=\"inputName\">Nome Fantasia</label>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"fieldName.errors && fieldName.dirty\">\r\n                                    <div class=\"ui-message error\"\r\n                                         [hidden]=\"!fieldName.pristine && !fieldName.errors.required\">\r\n                                        Nome é obrigatório\r\n                                    </div>\r\n                                    <div class=\"ui-message counter error\" [hidden]=\"!fieldName.errors.uiMaxlength\">\r\n                                        {{info.name ? info.name.length : 0}}/255\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                    </div>\r\n                    <div class=\"ui-flex-container\">\r\n                        <ui-input-container>\r\n                            <input id=\"inputRazaoSocial\" #fieldRazaoSocial=\"ngModel\" type=\"text\"\r\n                                   [(ngModel)]=\"info.razaoSocial\" uiInput name=\"razaoSocial\" uiMaxlength=\"255\">\r\n                            <label for=\"inputRazaoSocial\">Razão Social</label>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"fieldRazaoSocial.errors && fieldRazaoSocial.dirty\">\r\n                                    <div class=\"ui-message counter error\"\r\n                                         [hidden]=\"!fieldRazaoSocial.errors.uiMaxlength\">\r\n                                        {{info.razaoSocial ? info.razaoSocial.length : 0}}/255\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                        <ui-input-container>\r\n                            <input id=\"inputContactName\" #fieldContactName=\"ngModel\" type=\"text\"\r\n                                   [(ngModel)]=\"info.contactName\" uiInput name=\"contactName\" uiMaxlength=\"100\">\r\n                            <label for=\"inputContactName\">Nome do Contato</label>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"fieldContactName.errors && fieldContactName.dirty\">\r\n                                    <div class=\"ui-message counter error\"\r\n                                         [hidden]=\"!fieldContactName.errors.uiMaxlength\">\r\n                                        {{info.contactName ? info.contactName.length : 0}}/100\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                    </div>\r\n                    <div class=\"ui-flex-container\">\r\n                        <ui-input-container>\r\n                            <input id=\"inputCnpj\" #fieldCnpj=\"ngModel\" type=\"tel\" [(ngModel)]=\"info.cnpj\" uiInput\r\n                                   uiMaskCnpj name=\"cnpj\">\r\n                            <label for=\"inputCnpj\">CNPJ</label>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"fieldCnpj.errors && fieldCnpj.dirty\">\r\n                                    <div class=\"ui-message error\" [hidden]=\"!fieldCnpj.errors.parse\">\r\n                                        CNPJ inválido\r\n                                    </div>\r\n                                    <div class=\"ui-message error\"\r\n                                         [hidden]=\"!fieldCnpj.hasError(['existingCnpj'])\">\r\n                                        CNPJ existente\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                        <ui-input-container>\r\n                            <select id=\"inputRegionId\" #fieldRegionId=\"ngModel\" [(ngModel)]=\"info.regionId\" uiInput\r\n                                    name=\"regionId\">\r\n                                <option></option>\r\n                                <option *ngFor=\"let region of regions\" [ngValue]=\"region.id\">\r\n                                    {{region.name}}\r\n                                </option>\r\n                            </select>\r\n                            <label for=\"inputRegionId\">{{regions.loaded ? 'Região' : 'Carregando regiões'}}</label>\r\n                        </ui-input-container>\r\n                    </div>\r\n                    <ui-input-container>\r\n                        <input id=\"inputAddress\" #fieldAddress=\"ngModel\" type=\"text\" [(ngModel)]=\"info.address\" uiInput\r\n                               name=\"address\" uiMaxlength=\"255\">\r\n                        <label for=\"inputAddress\">Endereço</label>\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"fieldAddress.errors && fieldAddress.dirty\">\r\n                                <div class=\"ui-message counter error\" [hidden]=\"!fieldAddress.errors.uiMaxlength\">\r\n                                    {{info.address ? info.address.length : 0}}/255\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                    <div class=\"ui-flex-container\">\r\n                        <ui-input-container>\r\n                            <input id=\"inputInscricaoEstadual\" #fieldInscricaoEstadual=\"ngModel\" type=\"text\"\r\n                                   [(ngModel)]=\"info.inscricaoEstadual\" uiInput name=\"inscricaoEstadual\"\r\n                                   uiMaxlength=\"20\">\r\n                            <label for=\"inputInscricaoEstadual\">Inscrição Estadual</label>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"fieldInscricaoEstadual.errors && fieldInscricaoEstadual.dirty\">\r\n                                    <div class=\"ui-message counter error\"\r\n                                         [hidden]=\"!fieldInscricaoEstadual.errors.uiMaxlength\">\r\n                                        {{info.inscricaoEstadual ? info.inscricaoEstadual.length : 0}}/20\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                        <ui-switch-container>\r\n                            <label for=\"inputRecurringOrder\" class=\"info\">\r\n                                Pedido recorrente\r\n                                <span class=\"secondary\">{{info.recurringOrder ? 'Sim' : 'Não'}}</span>\r\n                            </label>\r\n                            <ui-switch class=\"action\">\r\n                                <input id=\"inputRecurringOrder\" type=\"checkbox\" name=\"recurringOrder\"\r\n                                       [checked]=\"info.recurringOrder\"\r\n                                       (change)=\"info.recurringOrder = $event.target.checked\">\r\n                            </ui-switch>\r\n                        </ui-switch-container>\r\n                    </div>\r\n                    <div *ngIf=\"info.recurringOrder\" class=\"ui-flex-container break-on-s480\">\r\n                        <ui-input-container>\r\n                            <input id=\"inputRecurringDate\" #fieldRecurringDate=\"ngModel\" type=\"text\"\r\n                                   [(ngModel)]=\"info.recurringDate\" uiInput name=\"recurringDate\" uiMaxlength=\"20\">\r\n                            <label for=\"inputRecurringDate\">Dia(s) de recorrência</label>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"fieldRecurringDate.errors && fieldRecurringDate.dirty\">\r\n                                    <div class=\"ui-message counter error\"\r\n                                         [hidden]=\"!fieldRecurringDate.errors.uiMaxlength\">\r\n                                        {{info.recurringDate ? info.recurringDate.length : 0}}/20\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                        <ui-input-container>\r\n                            <select id=\"inputTypeRecurringId\" #fieldTypeRecurringId=\"ngModel\"\r\n                                    [(ngModel)]=\"info.typeRecurringId\" uiInput name=\"typeRecurringId\" required>\r\n                                <option></option>\r\n                                <option *ngFor=\"let type of typesRecurring\" [ngValue]=\"type.id\">\r\n                                    {{type.name}}\r\n                                </option>\r\n                            </select>\r\n                            <label for=\"inputTypeRecurringId\">\r\n                                {{typesRecurring.loaded ? 'Tipo de recorrência' : 'Carregando tipos de recorrência'}}\r\n                            </label>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"fieldTypeRecurringId.errors && fieldTypeRecurringId.dirty\">\r\n                                    <div class=\"ui-message error\"\r\n                                         [hidden]=\"!fieldTypeRecurringId.pristine && !fieldTypeRecurringId.errors.required\">\r\n                                        Tipo de recorrência é obrigatório\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                    </div>\r\n                    <ui-smart-list #phones [model]=\"info.phones\">\r\n                        <ui-subheader>Telefone{{info.phones.length > 1 ? 's' : ''}}</ui-subheader>\r\n                        <ui-smart-list-item *ngFor=\"let item of phones.list; let i = index;\">\r\n                            <div class=\"ui-flex-container\">\r\n                                <div class=\"ui-flex-container break-on-s480\">\r\n                                    <ui-input-container>\r\n                                        <input [id]=\"'input' + i + 'phone'\" #fieldPhone=\"ngModel\" type=\"tel\"\r\n                                               [name]=\"i + 'phone'\" [(ngModel)]=\"item.phone\" uiInput\r\n                                               [required]=\"i < phones.list.length - 1\" uiMaskPhone autocomplete=\"off\">\r\n                                        <label [for]=\"'input' + i + 'phone'\">Número</label>\r\n                                        <div class=\"ui-messages\">\r\n                                            <div *ngIf=\"fieldPhone.errors && fieldPhone.dirty\">\r\n                                                <div class=\"ui-message error\"\r\n                                                     [hidden]=\"!fieldPhone.pristine && !fieldPhone.errors.required\">\r\n                                                    Número é obrigatório\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ui-input-container>\r\n                                    <ui-input-container>\r\n                                        <input [id]=\"'input' + i + 'phoneDescription'\" #fieldPhoneDescription=\"ngModel\"\r\n                                               type=\"text\" [(ngModel)]=\"item.description\" uiInput\r\n                                               [name]=\"i + 'phoneDescription'\" uiMaxlength=\"255\" autocomplete=\"off\">\r\n                                        <label [for]=\"'input' + i + 'phoneDescription'\">Descrição</label>\r\n                                        <div class=\"ui-messages\">\r\n                                            <div *ngIf=\"fieldPhoneDescription.errors && fieldPhoneDescription.dirty\">\r\n                                                <div class=\"ui-message counter error\"\r\n                                                     [hidden]=\"!fieldPhoneDescription.errors.uiMaxlength\">\r\n                                                    {{info.recurringDate ? info.recurringDate.length : 0}}/255\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ui-input-container>\r\n                                </div>\r\n                                <div style=\"width: 100%; max-width: 36px;display: flex;\">\r\n                                    <button *ngIf=\"i < phones.list.length - 1\"\r\n                                            (click)=\"phones.remove(i);\"\r\n                                            class=\"ui-button icon flat\" type=\"button\" uiRipple>\r\n                                        <i class=\"material-icons\">close</i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </ui-smart-list-item>\r\n                    </ui-smart-list>\r\n                    <ui-smart-list #emails [model]=\"info.emails\">\r\n                        <ui-subheader>E-mail{{info.emails.length > 1 ? 's' : ''}}</ui-subheader>\r\n                        <ui-smart-list-item *ngFor=\"let item of emails.list; let i = index;\">\r\n                            <div class=\"ui-flex-container\">\r\n                                <div class=\"ui-flex-container break-on-s480\">\r\n                                    <ui-input-container>\r\n                                        <input [id]=\"'input' + i + 'email'\" #fieldEmail=\"ngModel\" type=\"email\"\r\n                                               [name]=\"i + 'email'\" [(ngModel)]=\"item.email\" uiInput\r\n                                               [required]=\"i < emails.list.length - 1\" uiMaxlength=\"255\"\r\n                                               pattern=\"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\"\r\n                                               autocomplete=\"off\">\r\n                                        <label [for]=\"'input' + i + 'email'\">E-mail</label>\r\n                                        <div class=\"ui-messages\">\r\n                                            <div *ngIf=\"fieldEmail.errors && fieldEmail.dirty\">\r\n                                                <div class=\"ui-message error\"\r\n                                                     [hidden]=\"!fieldEmail.pristine && !fieldEmail.errors.required\">\r\n                                                    E-mail é obrigatório\r\n                                                </div>\r\n                                                <div class=\"ui-message error\"\r\n                                                     [hidden]=\"!fieldEmail.errors.pattern\">\r\n                                                    E-mail está inválido\r\n                                                </div>\r\n                                                <div class=\"ui-message counter error\"\r\n                                                     [hidden]=\"!fieldEmail.errors.uiMaxlength\">\r\n                                                    {{item.email ? item.email.length : 0}}/255\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ui-input-container>\r\n                                    <ui-input-container>\r\n                                        <input [id]=\"'input' + i + 'emailDescription'\" #fieldEmailDescription=\"ngModel\"\r\n                                               type=\"text\" [(ngModel)]=\"item.description\" uiInput\r\n                                               [name]=\"i + 'emailDescription'\" uiMaxlength=\"255\" autocomplete=\"off\">\r\n                                        <label [for]=\"'input' + i + 'emailDescription'\">Descrição</label>\r\n                                        <div class=\"ui-messages\">\r\n                                            <div *ngIf=\"fieldEmailDescription.errors && fieldEmailDescription.dirty\">\r\n                                                <div class=\"ui-message counter error\"\r\n                                                     [hidden]=\"!fieldEmailDescription.errors.uiMaxlength\">\r\n                                                    {{info.recurringDate ? info.recurringDate.length : 0}}/255\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </ui-input-container>\r\n                                </div>\r\n                                <div style=\"width: 100%; max-width: 36px;display: flex;\">\r\n                                    <button *ngIf=\"i < emails.list.length - 1\"\r\n                                            (click)=\"emails.remove(i);\"\r\n                                            class=\"ui-button icon flat\" type=\"button\" uiRipple>\r\n                                        <i class=\"material-icons\">close</i>\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </ui-smart-list-item>\r\n                    </ui-smart-list>\r\n                    <div class=\"secondary-text\" *ngIf=\"info.userNameAdded\">\r\n                        <div>\r\n                            Cadastrado por {{info.userNameAdded}}\r\n                            em {{info.dateAdded | date : 'dd/MM/yyyy hh:mm'}}\r\n                        </div>\r\n                        <div *ngIf=\"info.userNameUpdated\">\r\n                            Alterado por {{info.userNameUpdated}}\r\n                            em {{info.dateUpdated | date : 'dd/MM/yyyy hh:mm'}}\r\n                        </div>\r\n                    </div>\r\n                </ui-card-content>\r\n            </fieldset>\r\n        </ui-card>\r\n        <div class=\"ui-fab-container\">\r\n            <button class=\"ui-button success fab\" uiRipple [class.hide]=\"deleting || loading\">\r\n                <ui-progress-radial class=\"indeterminate\" *ngIf=\"saving\"></ui-progress-radial>\r\n                <i class=\"material-icons\">check</i>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<ui-menu #menuDelete>\r\n    <div class=\"ui-menu-content size-2x\">\r\n        <ui-subheader>Deseja excluir?</ui-subheader>\r\n        <div class=\"ui-menu-item\" uiRipple (click)=\"confirmDelete()\">\r\n            Sim\r\n        </div>\r\n        <div class=\"ui-menu-item\" uiRipple>\r\n            Não\r\n        </div>\r\n    </div>\r\n</ui-menu>\r\n\r\n<div style=\"height: 80px\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/client/info/info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  display: block; }\n  :host .ui-fab-container {\n    z-index: 2; }\n  :host ui-card {\n    position: relative;\n    z-index: 2;\n    margin-bottom: 20px; }\n    :host ui-card /deep/ header {\n      background-color: white;\n      color: black; }\n    :host ui-card /deep/ .ui-button.search {\n      position: relative; }\n      :host ui-card /deep/ .ui-button.search i {\n        position: absolute;\n        left: 6px;\n        top: 6px;\n        transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);\n        transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n        opacity: 0; }\n        :host ui-card /deep/ .ui-button.search i:nth-of-type(1) {\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg); }\n        :host ui-card /deep/ .ui-button.search i:nth-of-type(2) {\n          -webkit-transform: rotate(-180deg);\n                  transform: rotate(-180deg); }\n        :host ui-card /deep/ .ui-button.search i.show {\n          -webkit-transform: rotate(0);\n                  transform: rotate(0);\n          opacity: 1; }\n    :host ui-card .ui-progress {\n      position: absolute; }\n  :host /deep/ form[name=\"searchForm\"] {\n    transition: all 280ms cubic-bezier(0, 0, 0.2, 1);\n    position: absolute;\n    right: 60px;\n    left: 100%;\n    top: 14px; }\n    :host /deep/ form[name=\"searchForm\"] ui-input-container {\n      width: 100%; }\n      :host /deep/ form[name=\"searchForm\"] ui-input-container .ui-input-wrap {\n        padding-top: 0;\n        margin-bottom: 0; }\n        :host /deep/ form[name=\"searchForm\"] ui-input-container .ui-input-wrap input::-webkit-input-placeholder {\n          transition: color 280ms cubic-bezier(0, 0, 0.2, 1); }\n    :host /deep/ form[name=\"searchForm\"]:not(.open) ui-input-container .ui-input-wrap input::-webkit-input-placeholder {\n      color: transparent; }\n    :host /deep/ form[name=\"searchForm\"].open {\n      left: 25px; }\n  :host ui-toolbar .title {\n    transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n    transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1), transform 280ms cubic-bezier(0, 0, 0.2, 1);\n    transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1), transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n    :host ui-toolbar .title.hide {\n      opacity: 0;\n      -webkit-transform: translateY(-20px);\n              transform: translateY(-20px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/client/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientInfoComponent = (function () {
    function ClientInfoComponent(toolbarService, api, _location, router, route, element) {
        this.toolbarService = toolbarService;
        this.api = api;
        this._location = _location;
        this.router = router;
        this.route = route;
        this.element = element;
        this.loading = true;
        this.info = {
            phones: [],
            emails: []
        };
        this.typesClient = [];
        this.typesRecurring = [];
        this.regions = [];
    }
    ClientInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toolbarService.set('Cliente');
        this.toolbarService.activateExtendedToolbar(960);
        if (this.route.snapshot.params['id']) {
            setTimeout(function () {
                _this.addingNew = false;
            });
            this.getInfo();
        }
        else {
            setTimeout(function () {
                _this.addingNew = true;
                _this.loading = false;
            });
        }
        this.getTypesClient();
        this.getRegions();
        this.getTypesRecurring();
    };
    ClientInfoComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //     this.info = {
        //         phones: [
        //             {
        //                 phone: '1637039535',
        //                 description: 'Casa'
        //             }
        //         ],
        //         emails: [
        //             {
        //                 email: 'italo@boneare.com',
        //                 description: 'Comercial'
        //             }
        //         ],
        //         recurringOrder: true,
        //         recurringDate: '15',
        //         typeRecurringId: 1,
        //         typeId: 1,
        //         name: 'Boneare',
        //         razaoSocial: 'Boneare Social',
        //         contactName: 'Italo',
        //         cnpj: '24364775000104',
        //         regionId: 1,
        //         inscricaoEstadual: '15454',
        //         address: 'Genaldo'
        //     };
        // }, 1000);
    };
    ClientInfoComponent.prototype.getInfo = function () {
        var _this = this;
        this.api
            .prep('client', 'selectById')
            .call({
            id: this.route.snapshot.params['id']
        })
            .subscribe(function (data) {
            Object.assign(_this.info, data);
            _this.loading = false;
        }, function (error) {
            switch (error.executionCode) {
                case 1:
                    __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["e" /* UiSnackbar */].show({
                        text: error.message
                    });
                    _this.goBack();
                    break;
            }
        });
    };
    ClientInfoComponent.prototype.getTypesClient = function () {
        var _this = this;
        this.api
            .prep('typeClient', 'select')
            .call()
            .subscribe(function (data) {
            _this.typesClient = data;
            _this.typesClient.loaded = true;
        });
    };
    ClientInfoComponent.prototype.getTypesRecurring = function () {
        var _this = this;
        this.api
            .prep('typeRecurring', 'select')
            .call()
            .subscribe(function (data) {
            _this.typesRecurring = data;
            _this.typesRecurring.loaded = true;
        });
    };
    ClientInfoComponent.prototype.getRegions = function () {
        var _this = this;
        this.api
            .prep('regions', 'select')
            .call()
            .subscribe(function (data) {
            _this.regions = data;
            _this.regions.loaded = true;
        });
    };
    ClientInfoComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    ClientInfoComponent.prototype.goBack = function () {
        if (sessionStorage.getItem('goBack')) {
            this._location.back();
        }
        else {
            this.router.navigate(['/client']);
        }
    };
    ClientInfoComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.saving) {
            for (var control in form.controls) {
                if (form.controls.hasOwnProperty(control)) {
                    form.controls[control].markAsTouched();
                    form.controls[control].markAsDirty();
                }
            }
            if (!form.valid) {
                this.element.nativeElement.querySelectorAll('form .ng-invalid')[0].focus();
                return false;
            }
            this.saving = true;
            if (this.addingNew) {
                this.api
                    .prep('client', 'insert')
                    .call(this.info)
                    .subscribe(function (data) {
                    _this.router.navigate(['/client/', data.id]);
                    _this.router.navigate(['/client']);
                    __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["e" /* UiSnackbar */].show({
                        text: 'Cliente inserido com sucesso'
                    });
                }, function (error) {
                    _this.saving = false;
                    switch (error.executionCode) {
                        case 1:
                            setTimeout(function () {
                                _this.element.nativeElement.querySelectorAll('input[name="cnpj"]')[0].focus();
                            });
                            form.controls['cnpj'].setErrors({ existingCnpj: true });
                            break;
                    }
                });
            }
            else {
                this.api
                    .prep('client', 'update')
                    .call(this.info)
                    .subscribe(function () {
                    _this.router.navigate(['/client']);
                    __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["e" /* UiSnackbar */].show({
                        text: 'Cliente alterado com sucesso'
                    });
                }, function (error) {
                    _this.saving = false;
                    switch (error.executionCode) {
                        case 2:
                            _this.element.nativeElement.querySelectorAll('input[name="logon"]')[0].focus();
                            form.controls['logon'].setErrors({ existingLogon: true });
                            break;
                        case 3:
                            _this.element.nativeElement.querySelectorAll('input[name="idSuperior"]')[0].focus();
                            form.controls['idSuperior'].setErrors({ notFound: true });
                            __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["e" /* UiSnackbar */].show({
                                text: 'Usuário superior não encontrado. Verifique se ele não foi excluído.'
                            });
                            break;
                        case 4:
                            _this.element.nativeElement.querySelectorAll('input[name="idGrupo"]')[0].focus();
                            form.controls['idGrupo'].setErrors({ notFound: true });
                            __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["e" /* UiSnackbar */].show({
                                text: 'Grupo não encontrado. Verifique se ele não foi excluído.'
                            });
                            break;
                        case 5:
                        case 1:
                            __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["e" /* UiSnackbar */].show({
                                text: error.message
                            });
                    }
                });
            }
        }
    };
    ClientInfoComponent.prototype.confirmDelete = function () {
        var _this = this;
        if (!this.deleting) {
            this.deleting = true;
            this.api
                .prep('client', 'delete')
                .call({
                id: this.info.id
            })
                .subscribe(function () {
                _this.router.navigate(['/client']);
                __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["e" /* UiSnackbar */].show({
                    text: 'Cliente excluído com sucesso'
                });
            }, function (error) {
                _this.deleting = false;
                switch (error.executionCode) {
                    case 1:
                        __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["e" /* UiSnackbar */].show({
                            text: 'Cliente não encontrado. Verifique se ele já não foi excluído.'
                        });
                        break;
                }
            });
        }
    };
    return ClientInfoComponent;
}());
ClientInfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-client-list',
        template: __webpack_require__("../../../../../src/app/views/client/info/info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/client/info/info.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["f" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["f" /* UiToolbarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _f || Object])
], ClientInfoComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/client/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-s960\">\r\n    <ui-card>\r\n        <div class=\"ui-progress\" [class.hide]=\"!(loading && !searching)\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <ui-toolbar class=\"flat\">\r\n            <span class=\"title\" [ngClass]=\"{'hide': searchOpen}\">Lista de clientes</span>\r\n            <div class=\"align-right\">\r\n                <form #searchForm=\"ngForm\" name=\"searchForm\" class=\"ui-validate on-dirty\"\r\n                      [ngClass]=\"{'open': searchOpen}\">\r\n                    <ui-input-container>\r\n                        <input #searchFormText=\"ngModel\" type=\"text\" name=\"searchText\" [(ngModel)]=\"searchText\"\r\n                               uiMaxlength=\"200\" uiInput [persistPlaceholder]=\"true\" placeholder=\"Pesquisa\"\r\n                               (keyup)=\"search(searchFormText.value)\">\r\n                        <div class=\"ui-messages\">\r\n                            <div *ngIf=\"searchFormText.errors && searchFormText.dirty\">\r\n                                <div class=\"ui-message counter error\">\r\n                                    {{searchText ? searchText.length : 0}}/200\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ui-input-container>\r\n                </form>\r\n                <button class=\"ui-button flat icon search\" uiRipple (click)=\"toggleSearch()\">\r\n                    <ui-progress-radial class=\"indeterminate\" *ngIf=\"searching\"></ui-progress-radial>\r\n                    <i class=\"material-icons\" [ngClass]=\"{'show': !searchOpen}\">search</i>\r\n                    <i class=\"material-icons\" [ngClass]=\"{'show': searchOpen}\">close</i>\r\n                </button>\r\n            </div>\r\n        </ui-toolbar>\r\n        <ui-data-table>\r\n            <tbody>\r\n            <tr>\r\n                <th class=\"picture\">\r\n                </th>\r\n                <th uiDataTableOrderBy (click)=\"toggleOrderBy('name')\">\r\n                    Nome Fantasia\r\n                </th>\r\n                <th uiDataTableOrderBy (click)=\"toggleOrderBy('cnpj')\">\r\n                    CNPJ\r\n                </th>\r\n                <th uiDataTableOrderBy (click)=\"toggleOrderBy('email')\">\r\n                    E-mail\r\n                </th>\r\n                <th uiDataTableOrderBy (click)=\"toggleOrderBy('phone')\">\r\n                    Telefone\r\n                </th>\r\n            </tr>\r\n            <tr *ngFor=\"let client of clients\" [routerLink]=\"['/client', client.id]\">\r\n                <td class=\"picture\">\r\n                    <div class=\"letter\"\r\n                         [ngStyle]=\"{'background-color': client.color, 'color': isBright(client.color) ? '#000' : '#FFF'}\">\r\n                        {{client.name.substring(0, 1)}}\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <span class=\"ellipsis\">\r\n                    {{client.name}}\r\n                    </span>\r\n                </td>\r\n                <td class=\"no-wrap\">\r\n                    {{client.cnpj | uiCnpj}}\r\n                </td>\r\n                <td>\r\n                    {{client.email}}\r\n                </td>\r\n                <td class=\"no-wrap\">\r\n                    {{client.phone | uiPhone}}\r\n                </td>\r\n            </tr>\r\n            <tr class=\"empty\" *ngIf=\"!clients || !clients.length\">\r\n                <td colspan=\"4\">{{loading ? 'Carregando...' : 'Nenhum cliente encontrado'}}</td>\r\n            </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr>\r\n                <td colspan=\"4\" class=\"align-right\">\r\n                    <div class=\"ui-button-container align-right\">\r\n                        <span class=\"pagination\">\r\n                            {{((this.page - 1) * 10) + 1}}-{{this.page * 10 < this.lineCount ? this.page * 10 :\r\n                            this.lineCount}} de {{this.lineCount}}\r\n                        </span>\r\n                        <button class=\"ui-button flat icon\" uiRipple [disabled]=\"this.page < 2\"\r\n                                (click)=\"this.page = this.page - 1; this.getClients();\">\r\n                            <i class=\"material-icons\">keyboard_arrow_left</i>\r\n                        </button>\r\n                        <button class=\"ui-button flat icon\" uiRipple [disabled]=\"this.lineCount < this.page * 10\"\r\n                                (click)=\"this.page = this.page + 1; this.getClients();\">\r\n                            <i class=\"material-icons\">keyboard_arrow_right</i>\r\n                        </button>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n            </tfoot>\r\n        </ui-data-table>\r\n    </ui-card>\r\n    <div class=\"ui-fab-container\">\r\n        <a class=\"ui-button accent fab\" uiRipple href=\"/client/new\" (click)=\"goInfo($event)\">\r\n            <i class=\"material-icons\">add</i>\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<div style=\"height: 80px\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/client/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host .ui-fab-container {\n  z-index: 2; }\n\n:host ui-card {\n  position: relative;\n  z-index: 2;\n  margin-bottom: 20px; }\n  :host ui-card /deep/ header {\n    background-color: white;\n    color: black; }\n  :host ui-card /deep/ .ui-button.search {\n    position: relative; }\n    :host ui-card /deep/ .ui-button.search i {\n      position: absolute;\n      left: 6px;\n      top: 6px;\n      transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n      transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);\n      transition: transform 280ms cubic-bezier(0, 0, 0.2, 1), opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n      opacity: 0; }\n      :host ui-card /deep/ .ui-button.search i:nth-of-type(1) {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\n      :host ui-card /deep/ .ui-button.search i:nth-of-type(2) {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n      :host ui-card /deep/ .ui-button.search i.show {\n        -webkit-transform: rotate(0);\n                transform: rotate(0);\n        opacity: 1; }\n  :host ui-card .ui-progress {\n    position: absolute; }\n\n:host /deep/ form[name=\"searchForm\"] {\n  transition: all 280ms cubic-bezier(0, 0, 0.2, 1);\n  position: absolute;\n  right: 60px;\n  left: 100%;\n  top: 14px; }\n  :host /deep/ form[name=\"searchForm\"] ui-input-container {\n    width: 100%; }\n    :host /deep/ form[name=\"searchForm\"] ui-input-container .ui-input-wrap {\n      padding-top: 0;\n      margin-bottom: 0; }\n      :host /deep/ form[name=\"searchForm\"] ui-input-container .ui-input-wrap input::-webkit-input-placeholder {\n        transition: color 280ms cubic-bezier(0, 0, 0.2, 1); }\n  :host /deep/ form[name=\"searchForm\"]:not(.open) ui-input-container .ui-input-wrap input::-webkit-input-placeholder {\n    color: transparent; }\n  :host /deep/ form[name=\"searchForm\"].open {\n    left: 25px; }\n\n:host ui-toolbar .title {\n  transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1), transform 280ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1), transform 280ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0, 0, 0.2, 1); }\n  :host ui-toolbar .title.hide {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/client/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientListComponent = (function () {
    function ClientListComponent(toolbarService, element, api, router, changeDetectorRef) {
        this.toolbarService = toolbarService;
        this.element = element;
        this.api = api;
        this.router = router;
        this.changeDetectorRef = changeDetectorRef;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.page = 1;
        this.orderBy = [];
    }
    ClientListComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(function () {
            _this.searching = true;
            _this.getClients();
        });
    };
    ClientListComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.set('Clientes');
        this.toolbarService.activateExtendedToolbar(960);
        this.getClients();
    };
    ClientListComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateExtendedToolbar();
    };
    ClientListComponent.prototype.getClients = function () {
        var _this = this;
        this.loading = true;
        this.changeDetectorRef.detectChanges();
        this.api
            .prep('client', 'select')
            .call({
            search: this.searchText || '',
            page: this.page || 1,
            order: this.orderBy.join(',')
        })
            .subscribe(function (data) {
            _this.loading = false;
            _this.searching = false;
            _this.lineCount = data.lineCount;
            _this.clients = data.data;
        });
    };
    ClientListComponent.prototype.toggleSearch = function () {
        var inputSearch = this.element.nativeElement.querySelectorAll('input[name="searchText"]')[0];
        if (this.searchOpen) {
            this.searchOpen = false;
            __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["d" /* UiElement */].closest(inputSearch, 'form').style.right = '';
            this.searchText = '';
            this.getClients();
        }
        else {
            this.searchOpen = true;
            __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["d" /* UiElement */].closest(inputSearch, 'form').style.right = __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["d" /* UiElement */].closest(inputSearch, '.align-right').clientWidth + 'px';
            setTimeout(function () {
                inputSearch.focus();
            }, 280);
        }
    };
    ClientListComponent.prototype.toggleOrderBy = function (column) {
        if (this.orderBy.includes(column + '-ASC')
            || this.orderBy.includes(column + '-DESC')) {
            if (this.orderBy.includes(column + '-DESC')) {
                this.orderBy.push(column + '-ASC');
                this.orderBy.splice(this.orderBy.indexOf(column + '-DESC'), 1);
            }
            else if (this.orderBy.includes(column + '-ASC')) {
                if (this.orderBy.includes(column + '-ASC')) {
                    this.orderBy.splice(this.orderBy.indexOf(column + '-ASC'), 1);
                }
                if (this.orderBy.includes(column + '-DESC')) {
                    this.orderBy.splice(this.orderBy.indexOf(column + '-DESC'), 1);
                }
            }
        }
        else {
            this.orderBy.push(column + '-DESC');
        }
        this.getClients();
    };
    ClientListComponent.prototype.goInfo = function (e) {
        e.preventDefault();
        sessionStorage.setItem('goBack', 'true');
        this.router.navigate(['/client/new']);
    };
    ClientListComponent.prototype.isBright = function (color) {
        return __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["b" /* UiColor */].isBright(color);
    };
    return ClientListComponent;
}());
ClientListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-client-list',
        template: __webpack_require__("../../../../../src/app/views/client/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/client/list/list.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["b" /* UiColor */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["f" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["f" /* UiToolbarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _e || Object])
], ClientListComponent);

var _a, _b, _c, _d, _e;
/**/
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"ui-s960\">\r\n        <h1>Biblioteca Virtual</h1><br>\r\n        <h3>Em desenvolvimento</h3>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host {\n  color: #616161; }\n  :host .container {\n    margin: 0 10px;\n    cursor: default; }\n  :host h1 {\n    margin-top: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(titleService, toolbarService) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Biblioteca Virtual');
        this.toolbarService.set('Biblioteca Virtual');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/views/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["f" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["f" /* UiToolbarService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/views/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/not-found/not-found-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_component__ = __webpack_require__("../../../../../src/app/views/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_2__not_found_component__["a" /* NotFoundComponent */] }
];
var NotFoundRoutingModule = (function () {
    function NotFoundRoutingModule() {
    }
    return NotFoundRoutingModule;
}());
NotFoundRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], NotFoundRoutingModule);

//# sourceMappingURL=not-found-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background ui-nav-drawer-persistent\">\r\n    <h1>404</h1>\r\n    <h2>Página não encontrada</h2>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host .background {\n  min-height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  background: #2d8eae url(\"/assets/img/not-found-background.jpg\") center;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n  transition: padding-left 0.28s cubic-bezier(0, 0, 0.2, 1);\n  overflow-y: auto;\n  padding: 0 10px;\n  color: #fff;\n  cursor: default; }\n\n:host h1 {\n  font-size: 72px;\n  margin-bottom: 0; }\n\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n  :host-context(body.ui-nav-drawer-persistent) .background {\n    padding-left: 320px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotFoundComponent = (function () {
    function NotFoundComponent(titleService, toolbarService) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Página não encontrada');
        this.toolbarService.set('Página não encontrada');
        this.toolbarService.activateTransparentToolbar();
    };
    NotFoundComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateTransparentToolbar();
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/views/not-found/not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/not-found/not-found.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["f" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_smn_ui__["f" /* UiToolbarService */]) === "function" && _b || Object])
], NotFoundComponent);

var _a, _b;
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/not-found/not-found.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_routing_module__ = __webpack_require__("../../../../../src/app/views/not-found/not-found-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_component__ = __webpack_require__("../../../../../src/app/views/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotFoundModule = (function () {
    function NotFoundModule() {
    }
    return NotFoundModule;
}());
NotFoundModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__not_found_routing_module__["a" /* NotFoundRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__not_found_component__["a" /* NotFoundComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], NotFoundModule);

//# sourceMappingURL=not-found.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/signin/recover/confirm/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background ui-nav-drawer-persistent\" [class.loading]=\"submitting\">\r\n    <div class=\"ui-toolbar-space\"></div>\r\n    <ui-card>\r\n        <div class=\"ui-progress primary\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <ui-card-title>\r\n            <img class=\"logo\" src=\"/assets/icons/android-chrome-192x192.png\"/>\r\n            Recupere sua conta\r\n        </ui-card-title>\r\n        <ui-card-subtitle>escolha uma senha nova</ui-card-subtitle>\r\n        <ui-card-content>\r\n            <form #formForgotPassword=\"ngForm\" class=\"ui-validate on-dirty on-submit\" (submit)=\"onSubmit(formForgotPassword)\">\r\n                <ui-input-container>\r\n                    <input type=\"email\" [(ngModel)]=\"info.email\" name=\"email\" uiInput readonly>\r\n                    <label>E-mail</label>\r\n                </ui-input-container>\r\n                <ui-input-container>\r\n                    <input [type]=\"showPassword ? 'text' : 'password'\"\r\n                           [(ngModel)]=\"info.password\"\r\n                           name=\"password\"\r\n                           uiInput\r\n                           required\r\n                           #fieldPassword=\"ngModel\"\r\n                           uiMaxlength=\"60\">\r\n                    <label>Nova senha</label>\r\n                    <div class=\"suffix ui-button flat icon\" (click)=\"showPassword = !showPassword\" uiRipple>\r\n                        <i class=\"material-icons light\">{{showPassword ? 'visibility_off' : 'visibility'}}</i>\r\n                    </div>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"fieldPassword.errors && fieldPassword.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldPassword.pristine && !fieldPassword.errors.required\">\r\n                                Senha é obrigatória\r\n                            </div>\r\n                            <div class=\"ui-message counter error\" [hidden]=\"!fieldPassword.errors.uiMaxlength\">\r\n                                {{info.password ? info.password.length : 0}}/60\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <ui-input-container>\r\n                    <input [type]=\"showConfirmPassword ? 'text' : 'password'\"\r\n                           [(ngModel)]=\"info.confirmPassword\"\r\n                           name=\"confirmPassword\"\r\n                           uiInput\r\n                           required\r\n                           #fieldConfirmPassword=\"ngModel\"\r\n                           uiMaxlength=\"60\">\r\n                    <label>Confirme a senha</label>\r\n                    <div class=\"suffix ui-button flat icon\" (click)=\"showConfirmPassword = !showConfirmPassword\"\r\n                         uiRipple>\r\n                        <i class=\"material-icons light\">{{showConfirmPassword ? 'visibility_off' : 'visibility'}}</i>\r\n                    </div>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"fieldConfirmPassword.errors && fieldConfirmPassword.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldConfirmPassword.pristine && !fieldConfirmPassword.errors.required\">\r\n                                Confirmação de senha é obrigatória\r\n                            </div>\r\n                            <div class=\"ui-message counter error\"\r\n                                 [hidden]=\"!fieldConfirmPassword.errors.uiMaxlength\">\r\n                                {{info.confirmPassword ? info.confirmPassword.length : 0}}/60\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldConfirmPassword.hasError(['wrongConfirmation'])\">\r\n                                Confirmação de senha não confere\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <div class=\"ui-button-container align-right\">\r\n                    <div class=\"go-back\">\r\n                        <a href=\"/signin\" (click)=\"goBack($event)\">Voltar</a>\r\n                    </div>\r\n                    <button class=\"ui-button primary\" uiRipple\r\n                            [disabled]=\"!formForgotPassword.valid && formForgotPassword.dirty\">\r\n                        Recuperar\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </ui-card-content>\r\n    </ui-card>\r\n    <div class=\"ui-button-container cover\">\r\n        <button class=\"ui-button accent raised facebook\" uiRipple>\r\n            <img src=\"/assets/img/facebook.svg\" alt=\"\">\r\n            Entrar com Facebook\r\n        </button>\r\n    </div>\r\n</div>\r\n<!---->\r\n"

/***/ }),

/***/ "../../../../../src/app/views/signin/recover/confirm/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_usuario_service__ = __webpack_require__("../../../../../src/app/core/services/usuario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecoverConfirmComponent = (function () {
    function RecoverConfirmComponent(toolbarService, titleService, api, router, route, userService, element, _location) {
        this.toolbarService = toolbarService;
        this.titleService = titleService;
        this.api = api;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.element = element;
        this._location = _location;
        if (__WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["c" /* UiCookie */].get('BIVI')) {
            this.router.navigate(['']);
        }
        this.info = {};
        this.token = this.route.snapshot.params['token'];
        try {
            this.token = atob(this.token);
            this.token = JSON.parse(this.token);
            this.info.email = this.token.email;
            this.info.token = this.token.token;
        }
        catch (e) {
            __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["e" /* UiSnackbar */].show({
                text: 'Não foi possível ler seu token de recuperação de senha',
                actionText: 'OK',
                duration: Infinity,
                action: function (close) { return close(); }
            });
            this.router.navigate(['/recover']);
        }
    }
    RecoverConfirmComponent.prototype.ngOnInit = function () {
    };
    RecoverConfirmComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Recuperar conta');
        this.toolbarService.set('Recuperar conta');
        this.toolbarService.activateTransparentToolbar();
        this.element.nativeElement.querySelectorAll('input[name="password"]')[0].focus();
    };
    RecoverConfirmComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateTransparentToolbar();
    };
    RecoverConfirmComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.submitting) {
            for (var control in form.controls) {
                if (form.controls.hasOwnProperty(control)) {
                    form.controls[control].markAsTouched();
                    form.controls[control].markAsDirty();
                }
            }
            if (this.info.password !== this.info.confirmPassword) {
                this.element.nativeElement.querySelectorAll('input[name="confirmPassword"]')[0].focus();
                form.controls['confirmPassword'].setErrors({ wrongConfirmation: true });
                return false;
            }
            if (!form.valid) {
                this.element.nativeElement.querySelectorAll('form .ng-invalid')[0].focus();
                return false;
            }
            this.submitting = true;
            this.api
                .prep('usuario', 'recoverConfirm')
                .call(this.info)
                .subscribe(function (data) {
                __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["e" /* UiSnackbar */].show({
                    text: 'Senha alterada com sucesso',
                    actionText: 'OK',
                    duration: Infinity,
                    action: function (close) { return close(); }
                });
                __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["c" /* UiCookie */].set('BIVI', data.token);
                _this.userService.set(data);
                _this.router.navigate(['']);
            }, function (error) {
                _this.submitting = false;
                switch (error.executionCode) {
                    case 1:
                        _this.element.nativeElement.querySelectorAll('input[name="confirmPassword"]')[0].focus();
                        form.controls['confirmPassword'].setErrors({ wrongConfirmation: true });
                        break;
                    case 2:
                        __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["e" /* UiSnackbar */].show({
                            text: 'Seu token de recuperação de conta expirou',
                            actionText: 'OK',
                            duration: Infinity,
                            action: function (close) { return close(); }
                        });
                        _this.router.navigate(['/recover']);
                        break;
                }
            });
        }
    };
    RecoverConfirmComponent.prototype.goBack = function (e) {
        e.preventDefault();
        if (sessionStorage.getItem('goBack')) {
            sessionStorage.removeItem('goBack');
            this._location.back();
        }
        else {
            this.router.navigate(['/signin']);
        }
    };
    return RecoverConfirmComponent;
}());
RecoverConfirmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-recover-confirm',
        template: __webpack_require__("../../../../../src/app/views/signin/recover/confirm/confirm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/signin/signin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["f" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["f" /* UiToolbarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__core_services_usuario_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core_services_usuario_service__["a" /* UsuarioService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* Location */]) === "function" && _h || Object])
], RecoverConfirmComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/signin/recover/recover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background ui-nav-drawer-persistent\" [class.loading]=\"submitting\">\r\n    <div class=\"ui-toolbar-space\"></div>\r\n    <ui-card>\r\n        <div class=\"ui-progress primary\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <ui-card-title>\r\n            <img class=\"logo\" src=\"/assets/icons/android-chrome-192x192.png\"/>\r\n            Recupere sua conta\r\n        </ui-card-title>\r\n        <ui-card-subtitle>fornecendo seu e-mail abaixo</ui-card-subtitle>\r\n        <ui-card-content>\r\n            <form #formForgotPassword=\"ngForm\" class=\"ui-validate on-dirty on-submit\" (submit)=\"onSubmit(formForgotPassword)\">\r\n                <ui-input-container>\r\n                    <input type=\"email\" [(ngModel)]=\"info.email\" name=\"email\" uiInput required\r\n                           #fieldEmail=\"ngModel\"\r\n                           uiMaxlength=\"255\" pattern=\"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\">\r\n                    <label>E-mail</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"fieldEmail.errors && fieldEmail.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldEmail.pristine && !fieldEmail.errors.required\">E-mail é\r\n                                obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldEmail.errors.pattern\">E-mail\r\n                                está inválido\r\n                            </div>\r\n                            <div class=\"ui-message counter error\" [hidden]=\"!fieldEmail.errors.uiMaxlength\">\r\n                                {{info.email ? info.email.length : 0}}/255\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldEmail.hasError(['notFound'])\">\r\n                                E-mail não encontrado\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <div class=\"ui-button-container align-right\">\r\n                    <div class=\"go-back\">\r\n                        <a href=\"/signin\" (click)=\"goBack($event)\">Voltar</a>\r\n                    </div>\r\n                    <button class=\"ui-button primary\" uiRipple\r\n                            [disabled]=\"!formForgotPassword.valid && formForgotPassword.dirty\">\r\n                        Recuperar\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </ui-card-content>\r\n    </ui-card>\r\n    <div class=\"ui-button-container cover\">\r\n        <button class=\"ui-button accent raised facebook\" uiRipple>\r\n            <img src=\"/assets/img/facebook.svg\" alt=\"\">\r\n            Entrar com Facebook\r\n        </button>\r\n    </div>\r\n</div>\r\n<!---->\r\n"

/***/ }),

/***/ "../../../../../src/app/views/signin/recover/recover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecoverComponent = (function () {
    function RecoverComponent(toolbarService, titleService, api, router, element, _location) {
        this.toolbarService = toolbarService;
        this.titleService = titleService;
        this.api = api;
        this.router = router;
        this.element = element;
        this._location = _location;
        if (__WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["c" /* UiCookie */].get('BIVI')) {
            this.router.navigate(['']);
        }
        this.info = {};
    }
    RecoverComponent.prototype.ngOnInit = function () {
        this.info.email = sessionStorage.getItem('emailToRecover');
        sessionStorage.removeItem('emailToRecover');
    };
    RecoverComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Recuperar conta');
        this.toolbarService.set('Recuperar conta');
        this.toolbarService.activateTransparentToolbar();
        this.element.nativeElement.querySelectorAll('input[name="email"]')[0].focus();
    };
    RecoverComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateTransparentToolbar();
    };
    RecoverComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.submitting) {
            for (var control in form.controls) {
                if (form.controls.hasOwnProperty(control)) {
                    form.controls[control].markAsTouched();
                    form.controls[control].markAsDirty();
                }
            }
            if (!form.valid) {
                this.element.nativeElement.querySelectorAll('form .ng-invalid')[0].focus();
                return false;
            }
            this.submitting = true;
            this.api
                .prep('usuario', 'recover')
                .call(this.info)
                .subscribe(function () {
                __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["e" /* UiSnackbar */].show({
                    text: 'E-mail de recuperação enviado com sucesso. Cheque sua caixa de entrada.',
                    actionText: 'OK',
                    duration: Infinity,
                    action: function (close) { return close(); }
                });
                _this.submitting = false;
            }, function (error) {
                _this.submitting = false;
                switch (error.executionCode) {
                    case 1:
                        _this.element.nativeElement.querySelectorAll('input[name="email"]')[0].focus();
                        form.controls['email'].setErrors({ notFound: true });
                        break;
                }
            });
        }
    };
    RecoverComponent.prototype.goBack = function (e) {
        e.preventDefault();
        if (sessionStorage.getItem('goBack')) {
            sessionStorage.removeItem('goBack');
            this._location.back();
        }
        else {
            this.router.navigate(['/signin']);
        }
    };
    return RecoverComponent;
}());
RecoverComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-recover',
        template: __webpack_require__("../../../../../src/app/views/signin/recover/recover.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/signin/signin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["f" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["f" /* UiToolbarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* Location */]) === "function" && _f || Object])
], RecoverComponent);

var _a, _b, _c, _d, _e, _f;
/**/
//# sourceMappingURL=recover.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/signin/signin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_component__ = __webpack_require__("../../../../../src/app/views/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/views/signin/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recover_recover_component__ = __webpack_require__("../../../../../src/app/views/signin/recover/recover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recover_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/views/signin/recover/confirm/confirm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_2__signin_component__["a" /* SignInComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignUpComponent */] },
    { path: 'recover', component: __WEBPACK_IMPORTED_MODULE_4__recover_recover_component__["a" /* RecoverComponent */] },
    { path: 'recover/:token', component: __WEBPACK_IMPORTED_MODULE_5__recover_confirm_confirm_component__["a" /* RecoverConfirmComponent */] },
];
var SigninRoutingModule = (function () {
    function SigninRoutingModule() {
    }
    return SigninRoutingModule;
}());
SigninRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], SigninRoutingModule);

//# sourceMappingURL=signin-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background ui-nav-drawer-persistent\" [class.loading]=\"submitting\">\r\n    <div class=\"ui-toolbar-space\"></div>\r\n    <ui-card>\r\n        <div class=\"ui-progress primary\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <ui-card-title>\r\n            <img class=\"logo\" src=\"/assets/icons/android-chrome-192x192.png\"/>\r\n            Inicie a sessão\r\n        </ui-card-title>\r\n        <ui-card-subtitle>com seu e-mail e senha</ui-card-subtitle>\r\n        <ui-card-content>\r\n            <form #formSignIn=\"ngForm\" class=\"ui-validate on-dirty on-submit\" (submit)=\"onSubmit(formSignIn)\">\r\n                <ui-input-container>\r\n                    <input id=\"email\" type=\"email\" [(ngModel)]=\"info.email\" name=\"email\" uiInput required\r\n                           #fieldEmail=\"ngModel\"\r\n                           uiMaxlength=\"255\" pattern=\"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\"\r\n                           autofocus>\r\n                    <label for=\"email\">E-mail</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"fieldEmail.errors && fieldEmail.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldEmail.pristine && !fieldEmail.errors.required\">E-mail é\r\n                                obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldEmail.errors.pattern\">E-mail\r\n                                está inválido\r\n                            </div>\r\n                            <div class=\"ui-message counter error\" [hidden]=\"!fieldEmail.errors.uiMaxlength\">\r\n                                {{info.email ? info.email.length : 0}}/255\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldEmail.hasError(['notFound'])\">\r\n                                E-mail não encontrado\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <ui-input-container>\r\n                    <input [type]=\"showPassword ? 'text' : 'password'\" [(ngModel)]=\"info.senha\" name=\"senha\"\r\n                           uiInput\r\n                           required #fieldSenha=\"ngModel\" uiMaxlength=\"40\">\r\n                    <label>Senha</label>\r\n                    <div class=\"suffix ui-button flat icon\" (click)=\"showPassword = !showPassword\" uiRipple>\r\n                        <i class=\"material-icons\">{{showPassword ? 'visibility_off' : 'visibility'}}</i>\r\n                    </div>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"fieldSenha.errors && fieldSenha.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldSenha.pristine && !fieldSenha.errors.required\">\r\n                                Senha\r\n                                é obrigatória\r\n                            </div>\r\n                            <div class=\"ui-message counter error\"\r\n                                 [hidden]=\"!fieldSenha.errors.uiMaxlength\">\r\n                                {{info.password ? info.password.length : 0}}/40\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldSenha.hasError(['wrongPassword'])\">\r\n                                Senha incorreta\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <div class=\"ui-button-container align-right\">\r\n                    <div class=\"forgot-password\">\r\n                        <a href=\"/recover\" (click)=\"goToRecover($event)\">\r\n                            Esqueceu a senha?\r\n                        </a>\r\n                    </div>\r\n                    <button class=\"ui-button primary\" uiRipple\r\n                            [disabled]=\"!formSignIn.valid && formSignIn.dirty\">\r\n                        Entrar\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </ui-card-content>\r\n    </ui-card>\r\n    <div class=\"ui-button-container cover\">\r\n        <a class=\"ui-button primary raised\" uiRipple href=\"/signup\" (click)=\"goToSignUp($event)\">\r\n            Criar nova conta\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n:host ui-card-title,\n:host ui-card-subtitle,\n:host ui-card-content,\n:host .background > .ui-button-container {\n  transition: opacity 280ms cubic-bezier(0, 0, 0.2, 1); }\n\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n  :host /deep/ ui-toolbar.transparent header {\n    color: white; }\n    :host /deep/ ui-toolbar.transparent header [uiRipple].ui-button:not(.success):not(.warning):not(.error):not([disabled]).flat .ui-ripple-wave {\n      background-color: rgba(255, 255, 255, 0.1); } }\n\n:host .background {\n  min-height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  background: #1d303b url(\"/assets/img/login-background.jpg\") center;\n  background-size: cover;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  transition: padding-left 0.28s cubic-bezier(0, 0, 0.2, 1);\n  overflow-y: auto;\n  padding: 0 5px; }\n\n:host ui-card {\n  position: relative;\n  width: 450px;\n  max-width: 100%; }\n  :host ui-card ui-card-content {\n    padding-left: 40px;\n    padding-right: 40px;\n    padding-bottom: 40px; }\n  :host ui-card ui-card-title {\n    padding-left: 40px;\n    padding-right: 40px;\n    padding-top: 40px; }\n  :host ui-card ui-card-subtitle {\n    padding-left: 40px;\n    padding-right: 40px; }\n  :host ui-card .ui-progress {\n    position: absolute;\n    border-radius: 2px 2px 0 0;\n    width: 100%;\n    height: 0;\n    opacity: 0;\n    transition: height 280ms cubic-bezier(0, 0, 0.2, 1), opacity 280ms cubic-bezier(0, 0, 0.2, 1); }\n\n:host .forgot-password + *,\n:host .go-back + * {\n  margin-left: 20px; }\n\n:host .logo {\n  width: 36px;\n  display: block;\n  margin-bottom: 10px;\n  margin-left: -2px; }\n\n:host /deep/ .facebook.ui-button:not(.success):not(.warning):not(.error):not([disabled]) {\n  background-color: #3f51b5;\n  color: white; }\n  :host /deep/ .facebook.ui-button:not(.success):not(.warning):not(.error):not([disabled]) .ui-ripple-wave {\n    background-color: rgba(255, 255, 255, 0.1); }\n  :host /deep/ .facebook.ui-button:not(.success):not(.warning):not(.error):not([disabled]) img {\n    height: 20px; }\n  :host /deep/ .facebook.ui-button:not(.success):not(.warning):not(.error):not([disabled]):not(.icon) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    :host /deep/ .facebook.ui-button:not(.success):not(.warning):not(.error):not([disabled]):not(.icon) img {\n      margin-right: 10px;\n      margin-top: -3px; }\n\n:host .background.loading ui-card-title,\n:host .background.loading ui-card-subtitle,\n:host .background.loading ui-card-content,\n:host .background.loading > .ui-button-container {\n  pointer-events: none;\n  opacity: 0.7; }\n\n:host .background.loading ui-card .ui-progress {\n  height: 4px;\n  opacity: 1; }\n\n@media only screen and (min-width: 376px) and (min-width: 764px) {\n  :host-context(body.ui-nav-drawer-persistent) .background {\n    padding-left: 325px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_usuario_service__ = __webpack_require__("../../../../../src/app/core/services/usuario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignInComponent = (function () {
    function SignInComponent(toolbarService, titleService, api, router, userService, element) {
        this.toolbarService = toolbarService;
        this.titleService = titleService;
        this.api = api;
        this.router = router;
        this.userService = userService;
        this.element = element;
        if (__WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["c" /* UiCookie */].get('BIVI')) {
            this.router.navigate(['']);
        }
        this.info = {};
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Entrar');
        this.toolbarService.set('Entrar');
        this.toolbarService.activateTransparentToolbar();
        this.element.nativeElement.querySelectorAll('input[name="email"]')[0].focus();
    };
    SignInComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateTransparentToolbar();
    };
    SignInComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.submitting) {
            for (var control in form.controls) {
                if (form.controls.hasOwnProperty(control)) {
                    form.controls[control].markAsTouched();
                    form.controls[control].markAsDirty();
                }
            }
            if (!form.valid) {
                this.element.nativeElement.querySelectorAll('form .ng-invalid')[0].focus();
                return false;
            }
            this.submitting = true;
            this.api
                .prep('usuario', 'login')
                .call(this.info)
                .subscribe(function (data) {
                __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["c" /* UiCookie */].set('BIVI', data.token);
                _this.userService.set(data);
                _this.router.navigate(['']);
            }, function (error) {
                _this.submitting = false;
                switch (error.executionCode) {
                    case 1:
                        _this.element.nativeElement.querySelectorAll('input[name="email"]')[0].focus();
                        form.controls['email'].setErrors({ notFound: true });
                        break;
                    case 2:
                        _this.element.nativeElement.querySelectorAll('input[name="password"]')[0].focus();
                        form.controls['password'].setErrors({ wrongPassword: true });
                }
            });
        }
    };
    SignInComponent.prototype.goToSignUp = function (e) {
        e.preventDefault();
        sessionStorage.setItem('goBack', 'true');
        this.router.navigate(['/signup']);
    };
    SignInComponent.prototype.goToRecover = function (e) {
        e.preventDefault();
        sessionStorage.setItem('goBack', 'true');
        this.router.navigate(['/recover']);
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/views/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/signin/signin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["f" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng_smn_ui__["f" /* UiToolbarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_api_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__core_services_usuario_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_services_usuario_service__["a" /* UsuarioService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _f || Object])
], SignInComponent);

var _a, _b, _c, _d, _e, _f;
/**/
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/views/signin/signin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_module__ = __webpack_require__("../../../../../src/app/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_routing_module__ = __webpack_require__("../../../../../src/app/views/signin/signin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_component__ = __webpack_require__("../../../../../src/app/views/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__ = __webpack_require__("../../../../../src/app/views/signin/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recover_recover_component__ = __webpack_require__("../../../../../src/app/views/signin/recover/recover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recover_confirm_confirm_component__ = __webpack_require__("../../../../../src/app/views/signin/recover/confirm/confirm.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SignInModule = (function () {
    function SignInModule() {
    }
    return SignInModule;
}());
SignInModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__signin_routing_module__["a" /* SigninRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__signin_component__["a" /* SignInComponent */],
            __WEBPACK_IMPORTED_MODULE_4__signup_signup_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_5__recover_recover_component__["a" /* RecoverComponent */],
            __WEBPACK_IMPORTED_MODULE_6__recover_confirm_confirm_component__["a" /* RecoverConfirmComponent */],
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], SignInModule);

//# sourceMappingURL=signin.module.js.map

/***/ }),

/***/ "../../../../../src/app/views/signin/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background ui-nav-drawer-persistent\" [class.loading]=\"submitting\">\r\n    <div class=\"ui-toolbar-space\"></div>\r\n    <ui-card>\r\n        <div class=\"ui-progress primary\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <ui-card-title>\r\n            <img class=\"logo\" src=\"/assets/icons/android-chrome-192x192.png\"/>\r\n            Crie sua conta\r\n        </ui-card-title>\r\n        <ui-card-subtitle>preenchendo o formulário abaixo</ui-card-subtitle>\r\n        <ui-card-content>\r\n            <form #formSignUp=\"ngForm\" class=\"ui-validate on-dirty on-submit\" (submit)=\"onSubmit(formSignUp)\">\r\n                <ui-input-container>\r\n                    <input id=\"nome\" [(ngModel)]=\"info.nome\" name=\"nome\" uiInput required\r\n                           #fieldNome=\"ngModel\"\r\n                           uiMaxlength=\"100\" autofocus>\r\n                    <label for=\"nome\">Nome completo</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"fieldNome.errors && fieldNome.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldNome.pristine && !fieldNome.errors.required\">\r\n                                Nome é obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message counter error\" [hidden]=\"!fieldNome.errors.uiMaxlength\">\r\n                                {{info.nome ? info.nome.length : 0}}/100\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <ui-input-container>\r\n                    <input id=\"email\" type=\"email\" [(ngModel)]=\"info.email\" name=\"email\" uiInput required\r\n                           #fieldEmail=\"ngModel\"\r\n                           uiMaxlength=\"255\" pattern=\"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*\">\r\n                    <label for=\"email\">E-mail</label>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"fieldEmail.errors && fieldEmail.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldEmail.pristine && !fieldEmail.errors.required\">E-mail é\r\n                                obrigatório\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldEmail.errors.pattern\">E-mail\r\n                                está inválido\r\n                            </div>\r\n                            <div class=\"ui-message counter error\" [hidden]=\"!fieldEmail.errors.uiMaxlength\">\r\n                                {{info.email ? info.email.length : 0}}/255\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldEmail.hasError(['existingEmail'])\">\r\n                                E-mail existente (<a href=\"/recover\" (click)=\"goToRecover($event)\">recuperar\r\n                                conta</a>)\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <ui-input-container>\r\n                    <input id=\"senha\" [type]=\"showPassword ? 'text' : 'password'\"\r\n                           [(ngModel)]=\"info.senha\"\r\n                           name=\"senha\"\r\n                           uiInput\r\n                           required\r\n                           #fieldSenha=\"ngModel\"\r\n                           uiMaxlength=\"40\">\r\n                    <label for=\"senha\">Senha</label>\r\n                    <div class=\"suffix ui-button flat icon\" (click)=\"showPassword = !showPassword\" uiRipple>\r\n                        <i class=\"material-icons\">{{showPassword ? 'visibility_off' : 'visibility'}}</i>\r\n                    </div>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"fieldSenha.errors && fieldSenha.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldSenha.pristine && !fieldSenha.errors.required\">\r\n                                Senha é obrigatória\r\n                            </div>\r\n                            <div class=\"ui-message counter error\" [hidden]=\"!fieldSenha.errors.uiMaxlength\">\r\n                                {{info.password ? info.password.length : 0}}/40\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <ui-input-container>\r\n                    <input id=\"confirmarSenha\" [type]=\"showConfirmarSenha ? 'text' : 'password'\"\r\n                           [(ngModel)]=\"info.confirmarSenha\"\r\n                           name=\"confirmarSenha\"\r\n                           uiInput\r\n                           required\r\n                           #fieldConfirmarSenha=\"ngModel\"\r\n                           uiMaxlength=\"40\">\r\n                    <label for=\"confirmarSenha\">Confirme a senha</label>\r\n                    <div class=\"suffix ui-button flat icon\" (click)=\"showConfirmarSenha = !showConfirmarSenha\"\r\n                         uiRipple>\r\n                        <i class=\"material-icons\">{{showConfirmarSenha ? 'visibility_off' : 'visibility'}}</i>\r\n                    </div>\r\n                    <div class=\"ui-messages\">\r\n                        <div *ngIf=\"fieldConfirmarSenha.errors && fieldConfirmarSenha.dirty\">\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldConfirmarSenha.pristine && !fieldConfirmarSenha.errors.required\">\r\n                                Confirmação de senha é obrigatória\r\n                            </div>\r\n                            <div class=\"ui-message counter error\"\r\n                                 [hidden]=\"!fieldConfirmarSenha.errors.uiMaxlength\">\r\n                                {{info.confirmarSenha ? info.confirmarSenha.length : 0}}/40\r\n                            </div>\r\n                            <div class=\"ui-message error\"\r\n                                 [hidden]=\"!fieldConfirmarSenha.hasError(['wrongConfirmation'])\">\r\n                                Confirmação de senha não confere\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ui-input-container>\r\n                <div class=\"ui-button-container align-right\">\r\n                    <div class=\"go-back\">\r\n                        <a href=\"/signin\" (click)=\"goBack($event)\">Voltar</a>\r\n                    </div>\r\n                    <button class=\"ui-button primary\" uiRipple\r\n                            [disabled]=\"!formSignUp.valid && formSignUp.dirty\">\r\n                        Criar conta\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </ui-card-content>\r\n    </ui-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/signin/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__ = __webpack_require__("../../../../ng-smn-ui/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__ = __webpack_require__("../../../../../src/app/core/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_usuario_service__ = __webpack_require__("../../../../../src/app/core/services/usuario.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignUpComponent = (function () {
    function SignUpComponent(toolbarService, titleService, api, router, usuarioService, element, _location) {
        this.toolbarService = toolbarService;
        this.titleService = titleService;
        this.api = api;
        this.router = router;
        this.usuarioService = usuarioService;
        this.element = element;
        this._location = _location;
        this.info = {};
    }
    SignUpComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["c" /* UiCookie */].get('BIVI')) {
            this.router.navigate(['']);
        }
        this.titleService.setTitle('Cadastro');
        this.toolbarService.set('Cadastro');
    };
    SignUpComponent.prototype.ngAfterViewInit = function () {
        this.toolbarService.activateTransparentToolbar();
        this.element.nativeElement.querySelectorAll('input[name="nome"]')[0].focus();
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        this.toolbarService.deactivateTransparentToolbar();
    };
    SignUpComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.submitting) {
            for (var control in form.controls) {
                if (form.controls.hasOwnProperty(control)) {
                    form.controls[control].markAsTouched();
                    form.controls[control].markAsDirty();
                }
            }
            if (this.info.senha !== this.info.confirmarSenha) {
                this.element.nativeElement.querySelectorAll('input[name="confirmarSenha"]')[0].focus();
                form.controls['confirmarSenha'].setErrors({ wrongConfirmation: true });
                return false;
            }
            if (!form.valid) {
                this.element.nativeElement.querySelectorAll('form .ng-invalid')[0].focus();
                return false;
            }
            this.submitting = true;
            this.api
                .prep('usuario', 'signup')
                .call(this.info)
                .subscribe(function (data) {
                __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["c" /* UiCookie */].set('BIVI', data.token);
                _this.usuarioService.set(data);
                _this.router.navigate(['']);
            }, function (error) {
                _this.submitting = false;
                switch (error.executionCode) {
                    case 1:
                        _this.element.nativeElement.querySelectorAll('input[name="confirmarSenha"]')[0].focus();
                        form.controls['confirmarSenha'].setErrors({ wrongConfirmation: true });
                        break;
                    case 2:
                        _this.element.nativeElement.querySelectorAll('input[name="email"]')[0].focus();
                        form.controls['email'].setErrors({ existingEmail: true });
                }
            });
        }
    };
    SignUpComponent.prototype.goBack = function (e) {
        e.preventDefault();
        if (sessionStorage.getItem('goBack')) {
            sessionStorage.removeItem('goBack');
            this._location.back();
        }
        else {
            this.router.navigate(['/signin']);
        }
    };
    SignUpComponent.prototype.goToRecover = function (e) {
        e.preventDefault();
        sessionStorage.setItem('goBack', 'true');
        sessionStorage.setItem('emailToRecover', this.info.email);
        this.router.navigate(['/recover']);
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/views/signin/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/views/signin/signin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["f" /* UiToolbarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng_smn_ui__["f" /* UiToolbarService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__core_api_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__core_services_usuario_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__core_services_usuario_service__["a" /* UsuarioService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["h" /* Location */]) === "function" && _g || Object])
], SignUpComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    host: 'http://192.168.0.10:6969/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map