exports.id = "main";
exports.modules = {

/***/ "./src/middleware/notFound.middleware.ts":
/*!***********************************************!*\
  !*** ./src/middleware/notFound.middleware.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.notFoundHandler = void 0;\nvar notFoundHandler = function (req, res, next) {\n    var message = '리소스를 찾을 수 없습니다';\n    res.status(404).send(message);\n};\nexports.notFoundHandler = notFoundHandler;\n\n\n//# sourceURL=webpack:///./src/middleware/notFound.middleware.ts?");

/***/ })

};