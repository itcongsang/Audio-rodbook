webpackHotUpdate('static/development/pages/index.js', {
  /***/ './services/book.service.ts':
    /*!**********************************!*\
  !*** ./services/book.service.ts ***!
  \**********************************/
    /*! exports provided: getAllBooks, getAllBooks2 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getAllBooks', function() {
        return getAllBooks;
      });
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getAllBooks2', function() {
        return getAllBooks2;
      });
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/objectSpread */ './node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js'
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ './node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js'
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ './node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js'
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ './node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js'
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ './node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js'
      );
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/inherits */ './node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js'
      );
      /* harmony import */ var rxfire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! rxfire/firestore */ './node_modules/rxfire/firestore/dist/index.esm.js'
      );
      /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! rxjs/operators */ './node_modules/rxjs/_esm5/operators/index.js'
      );
      /* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! ./firebase.service */ './services/firebase.service.ts'
      );
      /* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! ../models/book */ './models/book.ts'
      );
      /* harmony import */ var _models_channel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! ../models/channel */ './models/channel.ts'
      );
      /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! rxjs */ './node_modules/rxjs/_esm5/index.js'
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        /*! lodash */ './node_modules/lodash/lodash.js'
      );
      /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
        lodash__WEBPACK_IMPORTED_MODULE_12__
      );

      var BookAndChannel =
        /*#__PURE__*/
        (function(_Book) {
          Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__['default'])(
            BookAndChannel,
            _Book
          );

          function BookAndChannel() {
            var _this;

            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__['default'])(
              this,
              BookAndChannel
            );

            _this = Object(
              _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__['default']
            )(
              this,
              Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__['default'])(
                BookAndChannel
              ).call(this, data)
            );
            _this.channelName = data.channelName || '';
            return _this;
          }

          return BookAndChannel;
        })(_models_book__WEBPACK_IMPORTED_MODULE_9__['Book']);

      function getAllBooks() {
        var res = Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_6__['collection'])(
          _firebase_service__WEBPACK_IMPORTED_MODULE_8__['db'].collection('books').limit(12)
        ).pipe(
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__['switchMap'])(function(snapshot) {
            return snapshot.map(function(doc0) {
              var rsd = new _models_book__WEBPACK_IMPORTED_MODULE_9__['Book'](doc0.data());
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__['combineLatest'])(
                Object(rxjs__WEBPACK_IMPORTED_MODULE_11__['of'])(rsd),
                GetChanelName(doc0.data())
              ).pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__['map'])(function(val) {
                  var ob = new BookAndChannel({
                    books: val[0],
                    nameChannel: val[1][0],
                  });
                  return ob;
                })
              );
            });
          }),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__['map'])(function(val) {
            return val;
          })
        );
        return res;
      }

      function GetChanelName(object) {
        var rs = new _models_book__WEBPACK_IMPORTED_MODULE_9__['Book'](object);
        var channelId = rs.channelId;
        var res = Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_6__['collection'])(
          _firebase_service__WEBPACK_IMPORTED_MODULE_8__['db']
            .collection('channels')
            .where('channelId', '==', channelId)
        ).pipe(
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__['map'])(function(res) {
            return res.map(function(doc1) {
              var resChennel = new _models_channel__WEBPACK_IMPORTED_MODULE_10__['Channel'](doc1.data());
              return resChennel.name;
            });
          })
        );
        return res;
      }

      function getAllBooks2() {
        return Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_6__['collection'])(
          _firebase_service__WEBPACK_IMPORTED_MODULE_8__['db'].collection('books').limit(12)
        ).pipe(
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__['switchMap'])(function(books) {
            var channelIds = Object(lodash__WEBPACK_IMPORTED_MODULE_12__['uniq'])(
              books.map(function(v) {
                return v.data()['channelId'];
              })
            );
            console.log('id ', channelIds);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__['combineLatest'])(
              Object(rxjs__WEBPACK_IMPORTED_MODULE_11__['of'])(books),
              Object(rxjs__WEBPACK_IMPORTED_MODULE_11__['combineLatest'])(
                channelIds.map(function(channelId) {
                  return Object(rxfire_firestore__WEBPACK_IMPORTED_MODULE_6__['collection'])(
                    _firebase_service__WEBPACK_IMPORTED_MODULE_8__['db']
                      .collection('channels')
                      .where('channelId', '==', channelId)
                  ).pipe(
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__['map'])(function(v) {
                      return v[0];
                    })
                  );
                })
              )
            );
          }),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__['map'])(function(_ref) {
            var _ref2 = Object(
                _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__['default']
              )(_ref, 2),
              books = _ref2[0],
              channels = _ref2[1];

            return books.map(function(book) {
              var bookDoc = book.data();
              var channel = channels.find(function(o) {
                return o.data().channelId === bookDoc.channelId;
              });
              return new BookAndChannel(
                Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__['default'])(
                  {},
                  bookDoc,
                  {
                    channelName: typeof channel === 'object' ? channel.data().name : '',
                  }
                )
              );
            });
          })
        );
      }

      /***/
    },
});
//# sourceMappingURL=index.js.536af0314c5d26397361.hot-update.js.map
