webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var rxfire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxfire/firestore */ "./node_modules/rxfire/firestore/dist/index.esm.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase.service */ "./services/firebase.service.ts");
/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/book */ "./models/book.ts");
/* harmony import */ var _models_channel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/channel */ "./models/channel.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var BookAndChannel = function BookAndChannel() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BookAndChannel);

  this.books = data.books || null;
  this.nameChannel = data.nameChannel || '';
};

function getAllBooks() {
  var res = Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_1__["collection"])(_firebase_service__WEBPACK_IMPORTED_MODULE_3__["db"].collection('books').limit(12)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (snapshot) {
    return snapshot.map(function (doc0) {
      var rs = new _models_book__WEBPACK_IMPORTED_MODULE_4__["Book"](doc0.data());
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
  var subject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]("");
  Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_1__["collection"])(_firebase_service__WEBPACK_IMPORTED_MODULE_3__["db"].collection('channels').where('channelId', '==', e)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
    return res.map(function (doc1) {
      var resChennel = new _models_channel__WEBPACK_IMPORTED_MODULE_5__["Channel"](doc1.data());
      subject.next(resChennel.name);
    });
  }));
  return subject.value;
}

function getAllBooks2() {
  //console.log('function 2')
  return Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_1__["collection"])(_firebase_service__WEBPACK_IMPORTED_MODULE_3__["db"].collection('books').limit(12)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (books) {
    var channelIds = books.map(function (v) {
      return v.data()['channelId'];
    });
    console.log('log 1 ' + channelIds[0]);
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(books), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(channelIds.map(function (channelId) {
      console.log('log 2 ' + channelId);
      Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_1__["doc"])(_firebase_service__WEBPACK_IMPORTED_MODULE_3__["db"].collection('channels').doc(channelId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (v) {
        console.log('log 3 ' + v);
        return v.data()['name'];
      }));
    })));
  }));
}



/***/ })

})
//# sourceMappingURL=index.js.416d1b6c47f7381d7db4.hot-update.js.map