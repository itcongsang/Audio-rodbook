webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/rxjs-hooks/dist/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/rxjs-hooks/dist/esm/index.js ***!
  \***************************************************/
/*! exports provided: useEventCallback, useObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _use_event_callback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-event-callback */ "./node_modules/rxjs-hooks/dist/esm/use-event-callback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventCallback", function() { return _use_event_callback__WEBPACK_IMPORTED_MODULE_0__["useEventCallback"]; });

/* harmony import */ var _use_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-observable */ "./node_modules/rxjs-hooks/dist/esm/use-observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useObservable", function() { return _use_observable__WEBPACK_IMPORTED_MODULE_1__["useObservable"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/rxjs-hooks/dist/esm/use-event-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs-hooks/dist/esm/use-event-callback.js ***!
  \****************************************************************/
/*! exports provided: useEventCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEventCallback", function() { return useEventCallback; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-constant */ "./node_modules/use-constant/dist/use-constant.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




function useEventCallback(callback, initialState, inputs) {
    var initialValue = (typeof initialState !== 'undefined' ? initialState : null);
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue), 2), state = _a[0], setState = _a[1];
    var event$ = Object(use_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(function () { return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); });
    var state$ = Object(use_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(function () { return new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](initialValue); });
    var inputs$ = Object(use_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(function () { return new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](typeof inputs === 'undefined' ? null : inputs); });
    function eventCallback(e) {
        return event$.next(e);
    }
    var returnedCallback = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(eventCallback, []);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        inputs$.next(inputs);
    }, inputs || []);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        setState(initialValue);
        var value$;
        if (!inputs) {
            value$ = callback(event$, state$);
        }
        else {
            value$ = callback(event$, inputs$, state$);
        }
        var subscription = value$.subscribe(function (value) {
            state$.next(value);
            setState(value);
        });
        return function () {
            subscription.unsubscribe();
            state$.complete();
            inputs$.complete();
            event$.complete();
        };
    }, []); // immutable forever
    return [returnedCallback, state];
}
//# sourceMappingURL=use-event-callback.js.map

/***/ }),

/***/ "./node_modules/rxjs-hooks/dist/esm/use-observable.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-hooks/dist/esm/use-observable.js ***!
  \************************************************************/
/*! exports provided: useObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useObservable", function() { return useObservable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-constant */ "./node_modules/use-constant/dist/use-constant.esm.js");




function useObservable(inputFactory, initialState, inputs) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(typeof initialState !== 'undefined' ? initialState : null), 2), state = _a[0], setState = _a[1];
    var state$ = Object(use_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(function () { return new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](initialState); });
    var inputs$ = Object(use_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(function () { return new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](inputs); });
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        inputs$.next(inputs);
    }, inputs || []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        var output$;
        if (inputs) {
            output$ = inputFactory(inputs$, state$);
        }
        else {
            output$ = inputFactory(state$);
        }
        var subscription = output$.subscribe(function (value) {
            state$.next(value);
            setState(value);
        });
        return function () {
            subscription.unsubscribe();
            inputs$.complete();
            state$.complete();
        };
    }, []); // immutable forever
    return state;
}
//# sourceMappingURL=use-observable.js.map

/***/ }),

/***/ "./node_modules/use-constant/dist/use-constant.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/use-constant/dist/use-constant.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useConstant(fn) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (!ref.current) {
    ref.current = {
      v: fn()
    };
  }

  return ref.current.v;
}

/* harmony default export */ __webpack_exports__["default"] = (useConstant);


/***/ }),

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_global_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/global/layout */ "./components/global/layout/index.tsx");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/book.service */ "./services/book.service.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./pages/index/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);






var Home = function Home() {
  Object(_services_book_service__WEBPACK_IMPORTED_MODULE_4__["getAllBooks2"])().subscribe(function (val) {
    console.log(val);
  });
  var res = Object(rxjs_hooks__WEBPACK_IMPORTED_MODULE_0__["useObservable"])(function () {
    return Object(_services_book_service__WEBPACK_IMPORTED_MODULE_4__["getAllBooks2"])();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_global_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
  }, console.log(res), res.map(function (t, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: i,
      className: "col-md-2 rs-pad mar-bot-25"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      title: ""
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "img-ct"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: t.books.coverUrl,
      className: "img-responsive"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "main-ct"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, t.books.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, t.nameChannel), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "seen-count"
    }, t.books.rating, " l\u01B0\u1EE3t xem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "1 tu\u1EA7n tr\u01B0\u1EDBc"))))));
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7b4f2c4e700eafaca575.hot-update.js.map