"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_op_Prakash_Bootcamp_Web_Mongodb_practice_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_op_Prakash_Bootcamp_Web_Mongodb_practice_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_op_Prakash_Bootcamp_Web_Mongodb_practice_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n// Router.onRouterChangeStart =  url => {\n//   console.log(\"Hello\");\n// }\nfunction Home() {\n    var uploadData = _asyncToGenerator(_home_op_Prakash_Bootcamp_Web_Mongodb_practice_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var res, data;\n        return _home_op_Prakash_Bootcamp_Web_Mongodb_practice_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    _ctx.next = 3;\n                    return fetch(\"/uploads\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify({\n                            data: [\n                                {\n                                    title: \"title\",\n                                    htmlCode: \"This is Code\",\n                                    reactCode: \"This is React Code\"\n                                }\n                            ]\n                        })\n                    });\n                case 3:\n                    res = _ctx.sent;\n                    _ctx.next = 6;\n                    return res.json();\n                case 6:\n                    data = _ctx.sent;\n                    if (data.status === 422 || data.status === 421 || !data) {\n                        console.log(\"Registration Failed\");\n                    } else {\n                        alert(\"Uploaded Successfully\");\n                    }\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n            className: \"w-screen h-screen mt-96 flex justify-center items-center\",\n            __source: {\n                fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 5\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                className: \" bg-yellow-100 p-4 py-6 \",\n                __source: {\n                    fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: _config__WEBPACK_IMPORTED_MODULE_7__.APP_NAME\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"form\", {\n                        method: \"POST\",\n                        className: \"flex flex-col\",\n                        onSubmit: uploadData,\n                        __source: {\n                            fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                for: \"w3review \",\n                                __source: {\n                                    fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Title\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                                type: \"text \",\n                                className: \"my-4 bg-white p-3\",\n                                __source: {\n                                    fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                for: \"w3review\",\n                                __source: {\n                                    fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"React\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"textarea\", {\n                                id: \"w3review\",\n                                name: \"w3review\",\n                                rows: \"4\",\n                                cols: \"50\",\n                                __source: {\n                                    fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                for: \"w3review\",\n                                __source: {\n                                    fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Html Code\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"textarea\", {\n                                id: \"w3review\",\n                                name: \"w3review\",\n                                rows: \"4\",\n                                cols: \"50\",\n                                __source: {\n                                    fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 11\n                                },\n                                __self: this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                                className: \"bg-blue-500 p-2 px-4 rounded-2xl my-5 hover:bg-blue-400\",\n                                onClick: uploadData,\n                                __source: {\n                                    fileName: \"/home/op/Prakash/Bootcamp/Web/Mongodb/practice/frontend/pages/index.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: \"Upload\"\n                            })\n                        ]\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNFO0FBQ007QUFDSztBQUNBO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQyxFQUF5QztBQUN6QyxFQUEwQjtBQUMxQixFQUFJO0FBR1csUUFBUSxDQUFDTSxJQUFJLEdBQUcsQ0FBQztJQUc5QixHQUFLLENBQUNDLFVBQVUscUtBQUcsUUFBUSxTQUFEQyxDQUFDLEVBQUssQ0FBQztZQUV6QkMsR0FBRyxFQVlIQyxJQUFJOzs7O29CQWJWRixDQUFDLENBQUNHLGNBQWM7OzJCQUNFQyxLQUFLLENBQUMsQ0FBVSxXQUFFLENBQUM7d0JBQ25DQyxNQUFNLEVBQUUsQ0FBTTt3QkFDZEMsT0FBTyxFQUFFLENBQUM7NEJBQ1IsQ0FBYyxlQUFFLENBQWtCO3dCQUNwQyxDQUFDO3dCQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7NEJBQ3BCUCxJQUFJLEVBQUMsQ0FBQztnQ0FBQSxDQUFDO29DQUNQUSxLQUFLLEVBQUUsQ0FBTztvQ0FDZEMsUUFBUSxFQUFFLENBQWM7b0NBQ3hCQyxTQUFTLEVBQUUsQ0FBb0I7Z0NBQ2pDLENBQUM7NEJBQUEsQ0FBQzt3QkFBQSxDQUFDO29CQUNMLENBQUM7O29CQVhLWCxHQUFHOzsyQkFZVUEsR0FBRyxDQUFDWSxJQUFJOztvQkFBckJYLElBQUk7b0JBQ1YsRUFBRSxFQUFDQSxJQUFJLENBQUNZLE1BQU0sS0FBRyxHQUFHLElBQUlaLElBQUksQ0FBQ1ksTUFBTSxLQUFHLEdBQUcsS0FBS1osSUFBSSxFQUFDLENBQUM7d0JBQ2xEYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFxQjtvQkFDbkMsQ0FBQyxNQUFLLENBQUM7d0JBQ0xDLEtBQUssQ0FBQyxDQUF1QjtvQkFDL0IsQ0FBQzs7Ozs7O0lBQ0gsQ0FBQztJQUNELE1BQU07dUZBR0hDLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQTBEOzs7Ozs7OzRGQUV0RUQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTJCOzs7Ozs7Ozt5RkFDdkNDLENBQUU7Ozs7Ozs7a0NBQUV2Qiw2Q0FBUTs7MEZBQ1p3QixDQUFJO3dCQUFDaEIsTUFBTSxFQUFDLENBQU07d0JBQUNjLFNBQVMsRUFBQyxDQUFlO3dCQUFDRyxRQUFRLEVBQUV2QixVQUFVOzs7Ozs7OztpR0FDL0R3QixDQUFLO2dDQUFDQyxHQUFHLEVBQUMsQ0FBVzs7Ozs7OzswQ0FBQyxDQUFLOztpR0FFM0JDLENBQUs7Z0NBQUNDLElBQUksRUFBQyxDQUFPO2dDQUFDUCxTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7O2lHQUNoREksQ0FBSztnQ0FBQ0MsR0FBRyxFQUFDLENBQVU7Ozs7Ozs7MENBQUMsQ0FBSzs7aUdBRTFCRyxDQUFRO2dDQUFDQyxFQUFFLEVBQUMsQ0FBVTtnQ0FBQ0MsSUFBSSxFQUFDLENBQVU7Z0NBQUNDLElBQUksRUFBQyxDQUFHO2dDQUFDQyxJQUFJLEVBQUMsQ0FBSTs7Ozs7Ozs7aUdBQ3pEUixDQUFLO2dDQUFDQyxHQUFHLEVBQUMsQ0FBVTs7Ozs7OzswQ0FBQyxDQUFTOztpR0FFOUJHLENBQVE7Z0NBQUNDLEVBQUUsRUFBQyxDQUFVO2dDQUFDQyxJQUFJLEVBQUMsQ0FBVTtnQ0FBQ0MsSUFBSSxFQUFDLENBQUc7Z0NBQUNDLElBQUksRUFBQyxDQUFJOzs7Ozs7OztpR0FDekRDLENBQU07Z0NBQ0xiLFNBQVMsRUFBQyxDQUF5RDtnQ0FDbkVjLE9BQU8sRUFBRWxDLFVBQVU7Ozs7Ozs7MENBQ3BCLENBRUQ7Ozs7Ozs7O0FBTVYsQ0FBQztLQXBEdUJELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuLy8gUm91dGVyLm9uUm91dGVyQ2hhbmdlU3RhcnQgPSAgdXJsID0+IHtcbi8vICAgY29uc29sZS5sb2coXCJIZWxsb1wiKTtcbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cbiAgY29uc3QgdXBsb2FkRGF0YSA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL3VwbG9hZHNcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBkYXRhOlt7XG4gICAgICAgIHRpdGxlOiBcInRpdGxlXCIsXG4gICAgICAgIGh0bWxDb2RlOiBcIlRoaXMgaXMgQ29kZVwiLFxuICAgICAgICByZWFjdENvZGU6IFwiVGhpcyBpcyBSZWFjdCBDb2RlXCIsXG4gICAgICB9XX0pLFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGlmKGRhdGEuc3RhdHVzPT09NDIyIHx8IGRhdGEuc3RhdHVzPT09NDIxIHx8ICFkYXRhKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0cmF0aW9uIEZhaWxlZFwiKTtcbiAgICB9ZWxzZSB7XG4gICAgICBhbGVydChcIlVwbG9hZGVkIFN1Y2Nlc3NmdWxseVwiKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIG10LTk2IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLXllbGxvdy0xMDAgcC00IHB5LTYgIFwiPlxuICAgICAgICA8aDE+e0FQUF9OQU1FfTwvaDE+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCIgb25TdWJtaXQ9e3VwbG9hZERhdGF9PlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ3M3JldmlldyBcIj5UaXRsZTwvbGFiZWw+XG5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHQgXCIgY2xhc3NOYW1lPVwibXktNCBiZy13aGl0ZSBwLTNcIj48L2lucHV0PlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ3M3Jldmlld1wiPlJlYWN0PC9sYWJlbD5cblxuICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cInczcmV2aWV3XCIgbmFtZT1cInczcmV2aWV3XCIgcm93cz1cIjRcIiBjb2xzPVwiNTBcIj48L3RleHRhcmVhPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ3M3Jldmlld1wiPkh0bWwgQ29kZTwvbGFiZWw+XG5cbiAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ3M3Jldmlld1wiIG5hbWU9XCJ3M3Jldmlld1wiIHJvd3M9XCI0XCIgY29scz1cIjUwXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCBwLTIgcHgtNCByb3VuZGVkLTJ4bCBteS01IGhvdmVyOmJnLWJsdWUtNDAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3VwbG9hZERhdGF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVXBsb2FkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsIlJvdXRlciIsIkxheW91dCIsIk5hdmJhciIsIkFQUF9OQU1FIiwiSG9tZSIsInVwbG9hZERhdGEiLCJlIiwicmVzIiwiZGF0YSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aXRsZSIsImh0bWxDb2RlIiwicmVhY3RDb2RlIiwianNvbiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJmb3IiLCJpbnB1dCIsInR5cGUiLCJ0ZXh0YXJlYSIsImlkIiwibmFtZSIsInJvd3MiLCJjb2xzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});