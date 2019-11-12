webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index/index.tsx":
/*!*******************************!*\
  !*** ./pages/index/index.tsx ***!
  \*******************************/
/*! exports provided: Home, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var rxjs_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs-hooks */ "./node_modules/rxjs-hooks/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_global_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/global/layout */ "./components/global/layout/index.tsx");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/book.service */ "./services/book.service.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./pages/index/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);





var Home = function Home() {
  var res = Object(rxjs_hooks__WEBPACK_IMPORTED_MODULE_0__["useObservable"])(function () {
    return Object(_services_book_service__WEBPACK_IMPORTED_MODULE_3__["getAllBooks"])();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_global_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Dashbord",
    description: "This is the home page"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container bt-line"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "title-oneach"
  }, "\u0110\u1EC1 xu\u1EA5t")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, res.map(function (t, i) {
    t.subscribe(function (val) {
      console.log(console.log);
    });
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8c0e8a8653d9be87cce9.hot-update.js.map