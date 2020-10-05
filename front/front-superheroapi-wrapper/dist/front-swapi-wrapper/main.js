(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["main"], {

        /***/
        0:
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/
            (function(module, exports, __webpack_require__) {

            module.exports = __webpack_require__( /*! /home/knock/dev/tests/falabella/front/front-superheroapi-wrapper/src/main.ts */ "zUnb");


            /***/
        }),

        /***/
        "AytR":
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            const environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.


            /***/
        }),

        /***/
        "Sy1n":
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "fXoL");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "tyNb");



            class AppComponent {
                constructor() {
                    this.title = 'front-superheroapi-wrapper';
                }
            }
            AppComponent.ɵfac = function AppComponent_Factory(t) { return new(t || AppComponent)(); };
            AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: AppComponent,
                selectors: [
                    ["app-root"]
                ],
                decls: 1,
                vars: 0,
                template: function AppComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
                    }
                },
                directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
                styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
            });
            /*@__PURE__*/
            (function() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-root',
                        templateUrl: './app.component.html',
                        styleUrls: ['./app.component.scss']
                    }]
                }], null, null);
            })();


            /***/
        }),

        /***/
        "ZAI4":
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
            /* harmony import */
            var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/platform-browser */ "jhN1");
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "fXoL");
            /* harmony import */
            var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "tk/3");
            /* harmony import */
            var _swapy_queries_swapy_queries_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./superheroapi-queries/superheroapi-queries.component */ "tPU9");
            /* harmony import */
            var _superheroapi_wrapper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./superheroapi-wrapper.service */ "iyEh");
            /* harmony import */
            var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./app-routing.module */ "vY5A");
            /* harmony import */
            var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./app.component */ "Sy1n");








            class AppModule {}
            AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
            AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
                factory: function AppModule_Factory(t) { return new(t || AppModule)(); },
                providers: [_superheroapi_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["SuperHeroApiWrapperService"]],
                imports: [
                    [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                    ]
                ]
            });
            (function() {
                (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _swapy_queries_swapy_queries_component__WEBPACK_IMPORTED_MODULE_3__["SuperHeroApiQueriesComponent"]
                    ],
                    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                    ]
                });
            })();
            /*@__PURE__*/
            (function() {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                    args: [{
                        declarations: [
                            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                            _swapy_queries_swapy_queries_component__WEBPACK_IMPORTED_MODULE_3__["SuperHeroApiQueriesComponent"]
                        ],
                        imports: [
                            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                        ],
                        providers: [_superheroapi_wrapper_service__WEBPACK_IMPORTED_MODULE_4__["SuperHeroApiWrapperService"]],
                        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                    }]
                }], null, null);
            })();


            /***/
        }),

        /***/
        "iyEh":
        /*!******************************************!*\
          !*** ./src/app/superheroapi-wrapper.service.ts ***!
          \******************************************/
        /*! exports provided: SuperHeroApiWrapperService */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "SuperHeroApiWrapperService", function() { return SuperHeroApiWrapperService; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "fXoL");
            /* harmony import */
            var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */ "tk/3");



            class SuperHeroApiWrapperService {
                constructor(http) {
                    this.http = http;
                }
                getData(page = 1) {
                    return this.http.get('http://localhost/api/list/people?page=' + page);
                }
            }
            SuperHeroApiWrapperService.ɵfac = function SuperHeroApiWrapperService_Factory(t) { return new(t || SuperHeroApiWrapperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
            SuperHeroApiWrapperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SuperHeroApiWrapperService, factory: SuperHeroApiWrapperService.ɵfac, providedIn: 'root' });
            /*@__PURE__*/
            (function() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperHeroApiWrapperService, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                    args: [{
                        providedIn: 'root'
                    }]
                }], function() { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null);
            })();


            /***/
        }),

        /***/
        "tPU9":
        /*!**********************************************************!*\
          !*** ./src/app/superheroapi-queries/superheroapi-queries.component.ts ***!
          \**********************************************************/
        /*! exports provided: SuperHeroApiQueriesComponent */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "SuperHeroApiQueriesComponent", function() { return SuperHeroApiQueriesComponent; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "fXoL");
            /* harmony import */
            var _superheroapi_wrapper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../superheroapi-wrapper.service */ "iyEh");
            /* harmony import */
            var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */ "ofXK");




            function SuperHeroApiQueriesComponent_tr_15_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    const r_r4 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.name);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.gender);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.hair_color);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.skin_color);
                }
            }

            function SuperHeroApiQueriesComponent_a_18_Template(rf, ctx) {
                if (rf & 1) {
                    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperHeroApiQueriesComponent_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.getData(ctx_r5.page); });
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anterior");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
            }

            function SuperHeroApiQueriesComponent_a_19_Template(rf, ctx) {
                if (rf & 1) {
                    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperHeroApiQueriesComponent_a_19_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const pn_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.getData(pn_r7); });
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    const pn_r7 = ctx.$implicit;
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pn_r7, "\u00A0 ");
                }
            }

            function SuperHeroApiQueriesComponent_a_20_Template(rf, ctx) {
                if (rf & 1) {
                    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuperHeroApiQueriesComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.getData(ctx_r10.page + 1); });
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Siguiente");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
            }
            class SuperHeroApiQueriesComponent {
                constructor(userService) {
                    this.userService = userService;
                    this.numbers = [];
                    this.page = 1;
                    this.pages = -1;
                    this.pageSize = 10;
                    this.totalRecords = 0;
                    this.records = [];
                }
                ngOnInit() {
                    this.getData(1);
                }
                getData(page) {
                    this.page = page;
                    this.userService.getData(this.page).subscribe((data) => {
                        this.totalRecords = data['count'];
                        this.records = data['results'];
                        this.pages = Math.ceil(this.totalRecords / this.pageSize);
                        this.numbers = Array.from({ length: this.pages }, (v, k) => k + 1);
                    }, (error) => {
                        console.error(error);
                    });
                }
            }
            SuperHeroApiQueriesComponent.ɵfac = function SuperHeroApiQueriesComponent_Factory(t) { return new(t || SuperHeroApiQueriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_superheroapi_wrapper_service__WEBPACK_IMPORTED_MODULE_1__["SuperHeroApiWrapperService"])); };
            SuperHeroApiQueriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
                type: SuperHeroApiQueriesComponent,
                selectors: [
                    ["app-superheroapi-queries"]
                ],
                decls: 22,
                vars: 8,
                consts: [
                    [1, "table"],
                    [4, "ngFor", "ngForOf"],
                    [1, "col"],
                    [2, "font-size", "18"],
                    ["style", "color: rgb(109, 86, 163); cursor: pointer;", 3, "click", 4, "ngIf"],
                    ["style", "color: rgb(109, 86, 163); cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"],
                    [2, "color", "rgb(109, 86, 163)", "cursor", "pointer", 3, "click"]
                ],
                template: function SuperHeroApiQueriesComponent_Template(rf, ctx) {
                    if (rf & 1) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 0);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nombre");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "G\u00E9nero");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Color de Cabello");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Color de Piel");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SuperHeroApiQueriesComponent_tr_15_Template, 9, 4, "tr", 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SuperHeroApiQueriesComponent_a_18_Template, 2, 0, "a", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SuperHeroApiQueriesComponent_a_19_Template, 2, 1, "a", 5);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SuperHeroApiQueriesComponent_a_20_Template, 2, 0, "a", 4);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    }
                    if (rf & 2) {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("P\u00E1gina ", ctx.page, " de ", ctx.pages, ", Registros: ", ctx.totalRecords, ", Tama\u00F1o de P\u00E1gina: ", ctx.pageSize, "");
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.records);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page > 1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page < ctx.pages);
                    }
                },
                directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
                styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N3YXB5LXF1ZXJpZXMvc3dhcHktcXVlcmllcy5jb21wb25lbnQuc2NzcyJ9 */"]
            });
            /*@__PURE__*/
            (function() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuperHeroApiQueriesComponent, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                    args: [{
                        selector: 'app-superheroapi-queries',
                        templateUrl: './superheroapi-queries.component.html',
                        styleUrls: ['./superheroapi-queries.component.scss']
                    }]
                }], function() { return [{ type: _superheroapi_wrapper_service__WEBPACK_IMPORTED_MODULE_1__["SuperHeroApiWrapperService"] }]; }, null);
            })();


            /***/
        }),

        /***/
        "vY5A":
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "fXoL");
            /* harmony import */
            var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/router */ "tyNb");
            /* harmony import */
            var _swapy_queries_swapy_queries_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./superheroapi-queries/superheroapi-queries.component */ "tPU9");





            const routes = [
                { path: 'home', component: _swapy_queries_swapy_queries_component__WEBPACK_IMPORTED_MODULE_2__["SuperHeroApiQueriesComponent"] },
                { path: '', redirectTo: '/home', pathMatch: 'full' },
            ];
            class AppRoutingModule {}
            AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
            AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
                factory: function AppRoutingModule_Factory(t) { return new(t || AppRoutingModule)(); },
                imports: [
                    [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            });
            (function() {
                (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
            })();
            /*@__PURE__*/
            (function() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
                    args: [{
                        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                    }]
                }], null, null);
            })();


            /***/
        }),

        /***/
        "zUnb":
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/
            (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */
            var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "fXoL");
            /* harmony import */
            var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./environments/environment */ "AytR");
            /* harmony import */
            var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module */ "ZAI4");
            /* harmony import */
            var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/platform-browser */ "jhN1");




            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
            }
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                .catch(err => console.error(err));


            /***/
        }),

        /***/
        "zn8P":
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/
            (function(module, exports) {

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
            webpackEmptyAsyncContext.id = "zn8P";

            /***/
        })

    },
    [
        [0, "runtime", "vendor"]
    ]
]);
//# sourceMappingURL=main.js.map