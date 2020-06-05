webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Price.jsx":
/*!******************************!*\
  !*** ./components/Price.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "C:\\Users\\SaMaDoR\\Desktop\\project\\NextJS\\next002\\components\\Price.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Price = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Price, _React$Component);

  var _super = _createSuper(Price);

  function Price() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Price);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      currency: 'USD'
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Price, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var list;

      if (this.state.currency === 'USD') {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 9
          }
        }, "Bitcoin rate for ", this.props.bpi.USD.description, ":", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 11
          }
        }, this.props.bpi.USD.code), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 11
          }
        }, this.props.bpi.USD.rate));
      } else if (this.state.currency === 'GBP') {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 9
          }
        }, "Bitcoin rate for ", this.props.bpi.GBP.description, ":", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }
        }, this.props.bpi.GBP.code), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }
        }, this.props.bpi.GBP.rate));
      } else if (this.state.currency === 'EUR') {
        list = __jsx("li", {
          className: "list-group-item",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 9
          }
        }, "Bitcoin rate for ", this.props.bpi.EUR.description, ":", __jsx("span", {
          className: "badge badge-primary",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }
        }, this.props.bpi.EUR.code), __jsx("strong", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 11
          }
        }, this.props.bpi.EUR.rate));
      }

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 7
        }
      }, __jsx("ul", {
        className: "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, list), __jsx("select", {
        onChange: function onChange(e) {
          return _this2.setState({
            currency: e.target.value
          });
        },
        className: "form-control mt-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, __jsx("option", {
        value: "USD",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, "USD"), __jsx("option", {
        value: "GBP",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }, "GBP"), __jsx("option", {
        value: "EUR",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, "EUR")));
    }
  }]);

  return Price;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Price);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ByaWNlLmpzeCJdLCJuYW1lcyI6WyJQcmljZSIsImN1cnJlbmN5IiwibGlzdCIsInN0YXRlIiwicHJvcHMiLCJicGkiLCJVU0QiLCJkZXNjcmlwdGlvbiIsImNvZGUiLCJyYXRlIiwiR0JQIiwiRVVSIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxjQUFRLEVBQUU7QUFESixLOzs7Ozs7OzZCQUlDO0FBQUE7O0FBQ1AsVUFBSUMsSUFBSjs7QUFFQSxVQUFJLEtBQUtDLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUNqQ0MsWUFBSSxHQUNGO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUNvQixLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsV0FEdkMsT0FFRTtBQUFNLG1CQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJFLElBQTFELENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJHLElBQTVCLENBSEYsQ0FERjtBQU9ELE9BUkQsTUFRTyxJQUFJLEtBQUtOLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUN4Q0MsWUFBSSxHQUNGO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUNvQixLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUssR0FBZixDQUFtQkgsV0FEdkMsT0FFRTtBQUFNLG1CQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJGLElBQTFELENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJELElBQTVCLENBSEYsQ0FERjtBQU9ELE9BUk0sTUFRQSxJQUFJLEtBQUtOLEtBQUwsQ0FBV0YsUUFBWCxLQUF3QixLQUE1QixFQUFtQztBQUN4Q0MsWUFBSSxHQUNGO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUNvQixLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZU0sR0FBZixDQUFtQkosV0FEdkMsT0FFRTtBQUFNLG1CQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBdUMsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVNLEdBQWYsQ0FBbUJILElBQTFELENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVNLEdBQWYsQ0FBbUJGLElBQTVCLENBSEYsQ0FERjtBQU9EOztBQUNELGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBNEJQLElBQTVCLENBREYsRUFFRTtBQUNFLGdCQUFRLEVBQUUsa0JBQUNVLENBQUQ7QUFBQSxpQkFBTyxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFWixvQkFBUSxFQUFFVyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFBckIsV0FBZCxDQUFQO0FBQUEsU0FEWjtBQUVFLGlCQUFTLEVBQUMsbUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlFO0FBQVEsYUFBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLEVBS0U7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsRUFNRTtBQUFRLGFBQUssRUFBQyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixDQUZGLENBREY7QUFhRDs7OztFQTlDaUJDLDRDQUFLLENBQUNDLFM7O0FBaURYakIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmYxMjNhMTYwN2UwNGRlZmQyOTQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjdXJyZW5jeTogJ1VTRCcsXHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGxpc3Q7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdVU0QnKSB7XHJcbiAgICAgIGxpc3QgPSAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtJz5cclxuICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn06XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JhZGdlIGJhZGdlLXByaW1hcnknPnt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX08L3NwYW4+XHJcbiAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLmJwaS5VU0QucmF0ZX08L3N0cm9uZz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnR0JQJykge1xyXG4gICAgICBsaXN0ID0gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSc+XHJcbiAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5HQlAuZGVzY3JpcHRpb259OlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS1wcmltYXJ5Jz57dGhpcy5wcm9wcy5icGkuR0JQLmNvZGV9PC9zcGFuPlxyXG4gICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5icGkuR0JQLnJhdGV9PC9zdHJvbmc+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0VVUicpIHtcclxuICAgICAgbGlzdCA9IChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdsaXN0LWdyb3VwLWl0ZW0nPlxyXG4gICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9ufTpcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2UtcHJpbWFyeSc+e3RoaXMucHJvcHMuYnBpLkVVUi5jb2RlfTwvc3Bhbj5cclxuICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkVVUi5yYXRlfTwvc3Ryb25nPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZ3JvdXAnPntsaXN0fTwvdWw+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgY3VycmVuY3k6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgbXQtMidcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdVU0QnPlVTRDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nR0JQJz5HQlA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J0VVUic+RVVSPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9