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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_global_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/global/layout */ "./components/global/layout/index.tsx");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/book.service */ "./services/book.service.ts");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./pages/index/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);






var Home = function Home() {
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
      src: t.v.url,
      className: "img-responsive"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "main-ct"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, t.books.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, t.nameChannel), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "seen-count"
    }, t.books.rating, " l\u01B0\u1EE3t xem"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "1 tu\u1EA7n tr\u01B0\u1EDBc"))))));
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./services/book.service.ts":
/*!**********************************!*\
  !*** ./services/book.service.ts ***!
  \**********************************/
/*! exports provided: getAllBooks, getAllBooks2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBooks", function() { return getAllBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllBooks2", function() { return getAllBooks2; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var rxfire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxfire/firestore */ "./node_modules/rxfire/firestore/dist/index.esm.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase.service */ "./services/firebase.service.ts");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/book */ "./models/book.ts");
/* harmony import */ var _models_channel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/channel */ "./models/channel.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var BookAndChannel = function BookAndChannel() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BookAndChannel);

  this.books = data.books || null;
  this.nameChannel = data.nameChannel || '';
};

function getAllBooks() {
  var res = Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_2__["collection"])(_firebase_service__WEBPACK_IMPORTED_MODULE_4__["db"].collection('books').limit(12)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (snapshot) {
    return snapshot.map(function (doc0) {
      var rs = new _models_book__WEBPACK_IMPORTED_MODULE_5__["Book"](doc0.data());
      ;
      var channelId = rs.channelId;
      return new BookAndChannel({
        books: doc0.data(),
        nameChannel: GetChanelName(channelId)
      });
    });
  }));
  return res;
}

function GetChanelName(e) {
  var subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]("");
  Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_2__["collection"])(_firebase_service__WEBPACK_IMPORTED_MODULE_4__["db"].collection('channels').where('channelId', '==', e)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
    return res.map(function (doc1) {
      var resChennel = new _models_channel__WEBPACK_IMPORTED_MODULE_6__["Channel"](doc1.data());
      subject.next(resChennel.name);
    });
  }));
  return subject.value;
}

function getAllBooks2() {
  console.log('function 2');
  return Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_2__["collection"])(_firebase_service__WEBPACK_IMPORTED_MODULE_4__["db"].collection('books').limit(12)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (books) {
    var channelIds = books.map(function (v) {
      return v.data()['channelId'];
    });
    console.log('log 1 ' + channelIds[0]);
    var books2 = books.map(function (v) {
      return v.data();
    });
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(books2), Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(channelIds.map(function (channelId) {
      console.log('log 2 ' + channelId);
      Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_2__["collection"])(_firebase_service__WEBPACK_IMPORTED_MODULE_4__["db"].collection('channels').where('channelId', '==', channelIds)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) {
        console.log('log 3 ' + v);
        return v[0].data();
      }));
    })));
  }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        books = _ref2[0],
        channels = _ref2[1];

    return books.map(function (book) {
      return {
        book: book,
        channels: channels
      };
    }); //return {books, channels};
  }));
}



/***/ })

})
//# sourceMappingURL=index.js.af33944d07047de4a66c.hot-update.js.map