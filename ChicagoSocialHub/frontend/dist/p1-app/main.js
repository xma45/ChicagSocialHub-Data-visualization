(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\r\n    background:purple;\r\n    color: white;\r\n\r\n}\r\n\r\n\r\n  .fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\r\n    text-align: center;\r\n    flex: 1 1 auto;\r\n\r\n  }\r\n\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTs7Q0FFaEI7OztFQUdDO0lBQ0U7c0RBQ2tEO0lBQ2xELG1CQUFtQjtJQUNuQixlQUFlOztHQUVoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQ6cHVycGxlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuXHJcbiAgLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAgIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gXHJcbiAgICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar text-align=center>\n  <span> Chicago Social Hub </span> \n  &nbsp; &nbsp; &nbsp; \n\n  <mat-icon >restaurant</mat-icon>  \n  <mat-icon >local_bar</mat-icon>\n  <mat-icon >local_cafe</mat-icon>\n\n\n  <span class=\"fill-remaining-space\"></span>\n\n</mat-toolbar> \n\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n\n\n\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ChicagoSocialHub-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./places.service */ "./src/app/places.service.ts");
/* harmony import */ var _components_find_find_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/find/find.component */ "./src/app/components/find/find.component.ts");
/* harmony import */ var _components_list_of_places_list_of_places_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/list-of-places/list-of-places.component */ "./src/app/components/list-of-places/list-of-places.component.ts");
/* harmony import */ var _components_list_of_stations_list_of_stations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/list-of-stations/list-of-stations.component */ "./src/app/components/list-of-stations/list-of-stations.component.ts");
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/// This file and the source code provided can be used only for
/// the projects and assignments of this course
/// Last Edit by Dr. Atef Bader: 1/30/2019
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////















var routes = [
    { path: 'find', component: _components_find_find_component__WEBPACK_IMPORTED_MODULE_12__["FindComponent"] },
    { path: 'list_of_places', component: _components_list_of_places_list_of_places_component__WEBPACK_IMPORTED_MODULE_13__["ListOfPlacesComponent"] },
    { path: 'list_of_stations', component: _components_list_of_stations_list_of_stations_component__WEBPACK_IMPORTED_MODULE_14__["ListOfStationsComponent"] },
    { path: '', redirectTo: 'find', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_find_find_component__WEBPACK_IMPORTED_MODULE_12__["FindComponent"],
                _components_list_of_places_list_of_places_component__WEBPACK_IMPORTED_MODULE_13__["ListOfPlacesComponent"],
                _components_list_of_stations_list_of_stations_component__WEBPACK_IMPORTED_MODULE_14__["ListOfStationsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                /////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////// SETUP NEEDED ////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////
                //  1. Create your API key from Google Developer Website
                //  2. Install AGM package: npm install @agm/core @ng-bootstrap/ng-bootstrap --
                //  3. Here is the URL for an online IDE for NG and TS that could be used to experiment
                //  4. AGM live demo is loacted at this URL: https://stackblitz.com/edit/angular-google-maps-demo
                /////////////////////////////////////////////////////////////////////////////////////
                /////////////////////////////////////////////////////////////////////////////////////
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBYgaNboYcj9WFaFx5VFVzWZeWPDSF6f2k' }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            providers: [_places_service__WEBPACK_IMPORTED_MODULE_11__["PlacesService"], _agm_core__WEBPACK_IMPORTED_MODULE_7__["GoogleMapsAPIWrapper"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/find/find.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/find/find.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-form {\r\n    min-width: 150px;\r\n    width: 75%;\r\n    align-items: center;\r\n    justify-content : center;\r\n}\r\n\r\n.field-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.mat-icon {\r\n    background: purple;\r\n    color: white;\r\n}\r\n\r\n.example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n.mat-button, .mat-raised-button{\r\n    background-color:purple;\r\n    color: white;\r\n\r\n} \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maW5kL2ZpbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFHRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCOztBQUdEO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0dBQ2I7O0FBR0Q7SUFDRSx3QkFBd0I7SUFDeEIsYUFBYTs7Q0FFaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbmQvZmluZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudCA6IGNlbnRlcjtcclxufVxyXG5cclxuLmZpZWxkLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgYmFja2dyb3VuZDogcHVycGxlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcblxyXG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnB1cnBsZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn0gXHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/find/find.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/find/find.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <br>\n    <mat-card>\n  \n      <mat-divider></mat-divider>\n      <br>\n      <form [formGroup]=\"createForm\" class=\"create-form\">\n  \n        \n       \n                <mat-form-field class=\"field-full-width\">\n                    <mat-label color=blue> Find</mat-label>\n                    <input align=\"start\" matInput  formControlName=\"find\" #find>\n                    <mat-hint [ngStyle]=\"{color: hintColor}\">Restaurants, Bars, Cafe, ... </mat-hint>\n                  </mat-form-field> \n    \n                  <br><br>\n  \n                <mat-form-field  class=\"field-full-width\">\n                    <mat-label color=blue> Where</mat-label>\n                    <input align=\"start\" matInput  formControlName=\"where\" #where>\n                    <mat-hint [ngStyle]=\"{color: hintColor}\">Near me, ... </mat-hint>\n\n                  </mat-form-field>  \n  \n                  <br><br>\n  \n                <mat-divider></mat-divider>\n                  <br><br>\n  \n                <button type=\"submit\" (click)=\"findPlaces(find.value,  where.value)\"  mat-raised-button >\n                    Go\n                    &nbsp; &nbsp; &nbsp; \n                    <mat-icon>search</mat-icon>      \n                </button>          \n                  \n                  \n      </form>\n    </mat-card>\n  </div>\n  \n  \n "

/***/ }),

/***/ "./src/app/components/find/find.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/find/find.component.ts ***!
  \***************************************************/
/*! exports provided: FindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindComponent", function() { return FindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../places.service */ "./src/app/places.service.ts");
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/// This file and the source code provided can be used only for   
/// the projects and assignments of this course
/// Last Edit by Dr. Atef Bader: 1/30/2019
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////




var FindComponent = /** @class */ (function () {
    function FindComponent(placesService, fb, router) {
        this.placesService = placesService;
        this.fb = fb;
        this.router = router;
        this.hintColor = "#76FF03";
        this.createForm = this.fb.group({
            where: '',
            find: ''
        });
    }
    FindComponent.prototype.findPlaces = function (find, where) {
        var _this = this;
        this.placesService.findPlaces(find, where).subscribe(function () {
            _this.router.navigate(['/list_of_places']);
        });
    };
    FindComponent.prototype.ngOnInit = function () {
    };
    FindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-find',
            template: __webpack_require__(/*! ./find.component.html */ "./src/app/components/find/find.component.html"),
            styles: [__webpack_require__(/*! ./find.component.css */ "./src/app/components/find/find.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FindComponent);
    return FindComponent;
}());



/***/ }),

/***/ "./src/app/components/list-of-places/list-of-places.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/list-of-places/list-of-places.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-right {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LW9mLXBsYWNlcy9saXN0LW9mLXBsYWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtDQUNmOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saXN0LW9mLXBsYWNlcy9saXN0LW9mLXBsYWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/list-of-places/list-of-places.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/list-of-places/list-of-places.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <mat-card>\n    <button mat-raised-button color=\"primary\" routerLink=\"/find\">\n      Find Another Place\n      &nbsp; &nbsp; &nbsp; \n      <mat-icon>search</mat-icon>    \n    </button>\n    <br><br>\n    <mat-divider></mat-divider>\n    <br>\n    <table mat-table [dataSource]=\"places\">\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"display_phone\">\n        <th mat-header-cell *matHeaderCellDef>Phone</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.display_phone}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"address1\">\n        <th mat-header-cell *matHeaderCellDef>Address</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.address1}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"is_closed\">\n        <th mat-header-cell *matHeaderCellDef>Closed</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.is_closed}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"rating\">\n        <th mat-header-cell *matHeaderCellDef>Rating</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.rating}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"review_count\">\n        <th mat-header-cell *matHeaderCellDef>Review Count</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.review_count}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"Divvy\">\n        <th mat-header-cell *matHeaderCellDef class=\"mat-column-right\"></th>\n        <td mat-cell *matCellDef=\"let element\" class=\"mat-column-right\">\n          <button mat-raised-button color=\"primary\" (click)=\"findStations(element.name)\">Divvy Near by</button>\n        </td>\n      </ng-container>\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/list-of-places/list-of-places.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/list-of-places/list-of-places.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListOfPlacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfPlacesComponent", function() { return ListOfPlacesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../places.service */ "./src/app/places.service.ts");
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/// This file and the source code provided can be used only for   
/// the projects and assignments of this course
/// Last Edit by Dr. Atef Bader: 1/30/2019
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var ListOfPlacesComponent = /** @class */ (function () {
    function ListOfPlacesComponent(placesService, router, http) {
        this.placesService = placesService;
        this.router = router;
        this.http = http;
        this.uri = 'http://localhost:4000';
        this.places = [];
        this.displayedColumns = ['name', 'display_phone', 'address1', 'is_closed', 'rating', 'review_count', 'Divvy'];
    }
    ListOfPlacesComponent.prototype.ngOnInit = function () {
        this.fetchPlaces();
    };
    ListOfPlacesComponent.prototype.fetchPlaces = function () {
        var _this = this;
        this.placesService
            .getPlaces()
            .subscribe(function (data) {
            _this.places = data;
        });
    };
    ListOfPlacesComponent.prototype.findStations = function (placeName) {
        var _this = this;
        for (var i = 0, len = this.places.length; i < len; i++) {
            if (this.places[i].name === placeName) { // strict equality test
                var place_selected = this.places[i];
                break;
            }
        }
        this.placesService.findStations(placeName).subscribe(function () {
            _this.router.navigate(['/list_of_stations']);
        });
    };
    ListOfPlacesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-of-places',
            template: __webpack_require__(/*! ./list-of-places.component.html */ "./src/app/components/list-of-places/list-of-places.component.html"),
            styles: [__webpack_require__(/*! ./list-of-places.component.css */ "./src/app/components/list-of-places/list-of-places.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_4__["PlacesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ListOfPlacesComponent);
    return ListOfPlacesComponent;
}());



/***/ }),

/***/ "./src/app/components/list-of-stations/list-of-stations.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/list-of-stations/list-of-stations.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-right {\r\n    text-align: center;\r\n}\r\n\r\nagm-map {\r\n    height: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saXN0LW9mLXN0YXRpb25zL2xpc3Qtb2Ytc3RhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpc3Qtb2Ytc3RhdGlvbnMvbGlzdC1vZi1zdGF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/list-of-stations/list-of-stations.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/list-of-stations/list-of-stations.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n  <mat-card>\n    <button mat-raised-button color=\"primary\" routerLink=\"/find\">\n      Find Another Place\n      &nbsp; &nbsp; &nbsp; \n      <mat-icon>search</mat-icon>    \n    </button>\n    <br><br>\n    <mat-divider></mat-divider>\n    <br>\n    <table mat-table [dataSource]=\"stations\">\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef>ID</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"stationName\">\n        <th mat-header-cell *matHeaderCellDef>stationName</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.stationName}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"availableBikes\">\n        <th mat-header-cell *matHeaderCellDef>availableBikes</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.availableBikes}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"availableDocks\">\n        <th mat-header-cell *matHeaderCellDef>availableDocks</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.availableDocks}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"is_renting\">\n        <th mat-header-cell *matHeaderCellDef>is_renting</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.is_renting}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"lastCommunicationTime\">\n        <th mat-header-cell *matHeaderCellDef>lastCommunicationTime </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.lastCommunicationTime}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"latitude\">\n        <th mat-header-cell *matHeaderCellDef>latitude</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.latitude}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"longitude\">\n        <th mat-header-cell *matHeaderCellDef>longitude</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.longitude}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef>status</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n      </ng-container>\n\n        <th mat-header-cell *matHeaderCellDef>totalDocks</th>\n      <ng-container matColumnDef=\"totalDocks\">\n        <th mat-header-cell *matHeaderCellDef>totalDocks</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.totalDocks}} </td>\n      </ng-container>\n\n\n\n\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    </table>\n  </mat-card>\n</div>\n\n\n\n<agm-map [(latitude)]=\"location.lat\" [(longitude)]=\"location.lng\" [(zoom)]=\"location.zoom\" [disableDefaultUI]=\"true\" [zoomControl]=\"true\" >\n\n  <!-- Possible icons to use -->\n  <!--  http://maps.google.com/mapfiles/ms/icons/green-dot.png   -->\n  <!--  http://maps.google.com/mapfiles/ms/icons/blue-dot.png    -->\n  <!--  http://maps.google.com/mapfiles/ms/icons/red-dot.png     -->\n\n\n  <!-- Google Maps Developer - Docs -->\n  <!--  https://developers.google.com/maps/documentation/   -->\n\n\n  <!-- Angular Google Maps - Docs -->\n  <!--  https://angular-maps.com/   -->\n\n\n\n  <!-- Angular Google Maps - Demo -->\n  <!--  https://stackblitz.com/edit/angular-google-maps-demo?file=app%2Fapp.module.ts   -->\n\n\n\n  <agm-marker \n  (markerClick)=\"clickedMarker('Union Station', 0)\"\n  [latitude]=\"location.lat\"\n  [longitude]=\"location.lng\"\n  [iconUrl]= \"icon\"\n  [label]=\"{ color: 'white', text: 'You are Here'}\">\n\n  <agm-info-window #infoWindow>\n    <strong>You are currently here by the Union Station</strong>\n\n  </agm-info-window>\n  </agm-marker>\n\n\n \n\n  <agm-marker \n  (markerClick)=\"clickedMarker('placeSelected', 0)\"\n  [latitude]=\"placeSelected.latitude\"\n  [longitude]=\"placeSelected.longitude\"\n  [iconUrl] = \"{ url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',\n                scaledSize: {\n                  width: 40,\n                  height: 60\n              }}\" >\n\n  <agm-info-window #infoWindow>\n    <strong>You have selected this place</strong>\n    <br><br><br>\n    <strong>Name: {{placeSelected.name}}</strong>\n    <br><br>\n    <strong>Phone: {{placeSelected.display_phone}}</strong>\n    <br><br>\n    <strong>Address: {{placeSelected.address1}}</strong>\n  </agm-info-window>\n  </agm-marker>\n\n \n\n\n\n  <agm-marker \n    *ngFor=\"let m of markers; let i = index\"\n    (markerClick)=\"clickedMarker(m.stationName, i)\"\n    [latitude]=\"m.latitude\"\n    [longitude]=\"m.longitude\"\n    [label]=\"m.id\">\n  \n    <agm-info-window #infoWindow>\n      <strong>Divvy Station</strong>\n      <br><br>\n      <strong>stationName: {{m.stationName}}</strong>\n      <br><br>\n      <strong>status: {{m.status}}</strong>\n      <br><br>\n      <strong>availableDocks: {{m.availableDocks}}</strong>\n    </agm-info-window>\n\n\n  </agm-marker>\n\n\n\n\n  <agm-circle [latitude]=\"location.lat\" [longitude]=\"location.lng\"\n  [(radius)]=\"circleRadius\"\n  [fillColor]=\"'blue'\"\n  [circleDraggable]=\"true\"\n  [editable]=\"true\"></agm-circle>\n\n  \n</agm-map>\n\n"

/***/ }),

/***/ "./src/app/components/list-of-stations/list-of-stations.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/list-of-stations/list-of-stations.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListOfStationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfStationsComponent", function() { return ListOfStationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places.service */ "./src/app/places.service.ts");
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/// This file and the source code provided can be used only for   
/// the projects and assignments of this course
/// Last Edit by Dr. Atef Bader: 1/30/2019
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



var ListOfStationsComponent = /** @class */ (function () {
    function ListOfStationsComponent(placesService, router) {
        this.placesService = placesService;
        this.router = router;
        this.displayedColumns = ['id', 'stationName', 'availableBikes', 'availableDocks', 'is_renting', 'lastCommunicationTime', 'latitude', 'longitude', 'status', 'totalDocks'];
        this.icon = {
            url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            scaledSize: {
                width: 60,
                height: 60
            }
        };
        this.circleRadius = 3000; // km
        this.location = {
            lat: 41.882607,
            lng: -87.643548,
            label: 'You are Here',
            zoom: 13
        };
    }
    ListOfStationsComponent.prototype.ngOnInit = function () {
        this.fetchStations();
        this.getPlaceSelected();
    };
    ListOfStationsComponent.prototype.fetchStations = function () {
        var _this = this;
        this.placesService
            .getStations()
            .subscribe(function (data) {
            _this.stations = data;
            _this.markers = data;
        });
    };
    ListOfStationsComponent.prototype.getPlaceSelected = function () {
        var _this = this;
        this.placesService
            .getPlaceSelected()
            .subscribe(function (data) {
            _this.placeSelected = data;
        });
    };
    ListOfStationsComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    ListOfStationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-of-stations',
            template: __webpack_require__(/*! ./list-of-stations.component.html */ "./src/app/components/list-of-stations/list-of-stations.component.html"),
            styles: [__webpack_require__(/*! ./list-of-stations.component.css */ "./src/app/components/list-of-stations/list-of-stations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_3__["PlacesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListOfStationsComponent);
    return ListOfStationsComponent;
}());



/***/ }),

/***/ "./src/app/places.service.ts":
/*!***********************************!*\
  !*** ./src/app/places.service.ts ***!
  \***********************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

/// This file and the source code provided can be used only for   
/// the projects and assignments of this course
/// Last Edit by Dr. Atef Bader: 1/30/2019
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var PlacesService = /** @class */ (function () {
    function PlacesService(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
    }
    PlacesService.prototype.getPlaces = function () {
        return this.http.get(this.uri + "/places");
    };
    PlacesService.prototype.getPlaceSelected = function () {
        return this.http.get(this.uri + "/place_selected");
    };
    PlacesService.prototype.getStations = function () {
        return this.http.get(this.uri + "/stations");
    };
    PlacesService.prototype.findPlaces = function (find, where) {
        var find_places_at = {
            find: find,
            where: where
        };
        return this.http.post(this.uri + "/places/find", find_places_at, httpOptions);
    };
    PlacesService.prototype.findStations = function (placeName) {
        var find_stations_at = {
            placeName: placeName
        };
        var str = JSON.stringify(find_stations_at, null, 2);
        return this.http.post(this.uri + "/stations/find", find_stations_at, httpOptions);
    };
    PlacesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlacesService);
    return PlacesService;
}());



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
var environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mahang/Downloads/CSP586/ChicagoSocialHub/ChicagoSocialHub/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map