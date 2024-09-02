"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/qr/validate-code";
exports.ids = ["pages/api/qr/validate-code"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/CodeStore.js":
/*!*****************************!*\
  !*** ./models/CodeStore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst codeStoreSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    sessionId: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    code: {\n        type: String,\n        required: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.CodeStore) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"CodeStore\", codeStoreSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ29kZVN0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxlQUFlLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUMxQ0csU0FBUyxFQUFFO1FBQUVDLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxNQUFNLEVBQUUsSUFBSTtLQUFFO0lBQ3pEQyxJQUFJLEVBQUU7UUFBRUosSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7Q0FDdkMsQ0FBQztBQUVGLGlFQUFlTixrRUFBeUIsSUFBSUEscURBQWMsQ0FBQyxXQUFXLEVBQUVDLGVBQWUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXNoZWV0cy1mb3JtLy4vbW9kZWxzL0NvZGVTdG9yZS5qcz82MGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb2RlU3RvcmVTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBzZXNzaW9uSWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgY29kZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkNvZGVTdG9yZSB8fCBtb25nb29zZS5tb2RlbCgnQ29kZVN0b3JlJywgY29kZVN0b3JlU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29kZVN0b3JlU2NoZW1hIiwiU2NoZW1hIiwic2Vzc2lvbklkIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwiY29kZSIsIm1vZGVscyIsIkNvZGVTdG9yZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/CodeStore.js\n");

/***/ }),

/***/ "(api)/./pages/api/qr/validate-code.js":
/*!***************************************!*\
  !*** ./pages/api/qr/validate-code.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_CodeStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/CodeStore */ \"(api)/./models/CodeStore.js\");\n\n\nasync function handler(req, res) {\n    await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method !== \"POST\") {\n        res.setHeader(\"Allow\", [\n            \"POST\"\n        ]);\n        return res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n    const { enteredCode , sessionId  } = req.body;\n    if (!enteredCode || !sessionId) {\n        return res.status(400).json({\n            valid: false,\n            message: \"Invalid data provided.\"\n        });\n    }\n    try {\n        const codeEntry = await _models_CodeStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            sessionId\n        });\n        if (!codeEntry) {\n            console.log(\"Session not found.\");\n            return res.status(400).json({\n                valid: false,\n                message: \"Session not found.\"\n            });\n        }\n        const isValid = enteredCode === codeEntry.code;\n        console.log(isValid ? \"Code is valid.\" : \"Invalid code.\");\n        return res.status(200).json({\n            valid: isValid\n        });\n    } catch (error) {\n        console.error(\"Error validating code:\", error);\n        return res.status(500).json({\n            valid: false,\n            message: \"Internal Server Error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXIvdmFsaWRhdGUtY29kZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEM7QUFDUTtBQUVuQyxlQUFlRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1KLHFEQUFTLEVBQUUsQ0FBQztJQUVsQixJQUFJRyxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekJELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLE9BQU8sRUFBRTtZQUFDLE1BQU07U0FBQyxDQUFDLENBQUM7UUFDakMsT0FBT0YsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRUwsR0FBRyxDQUFDRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsTUFBTSxFQUFFSSxXQUFXLEdBQUVDLFNBQVMsR0FBRSxHQUFHUCxHQUFHLENBQUNRLElBQUk7SUFFM0MsSUFBSSxDQUFDRixXQUFXLElBQUksQ0FBQ0MsU0FBUyxFQUFFO1FBQzlCLE9BQU9OLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLEtBQUs7WUFBRUMsT0FBTyxFQUFFLHdCQUF3QjtTQUFFLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1DLFNBQVMsR0FBRyxNQUFNZCxpRUFBaUIsQ0FBQztZQUFFUyxTQUFTO1NBQUUsQ0FBQztRQUV4RCxJQUFJLENBQUNLLFNBQVMsRUFBRTtZQUNkRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLE9BQU9kLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSyxJQUFJLENBQUM7Z0JBQUVDLEtBQUssRUFBRSxLQUFLO2dCQUFFQyxPQUFPLEVBQUUsb0JBQW9CO2FBQUUsQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFFRCxNQUFNSyxPQUFPLEdBQUdWLFdBQVcsS0FBS00sU0FBUyxDQUFDSyxJQUFJO1FBQzlDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxHQUFHLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBRTFELE9BQU9mLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFTSxPQUFPO1NBQUUsQ0FBQyxDQUFDO0lBQ2xELEVBQUUsT0FBT0UsS0FBSyxFQUFFO1FBQ2RKLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDLHdCQUF3QixFQUFFQSxLQUFLLENBQUMsQ0FBQztRQUMvQyxPQUFPakIsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNLLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsS0FBSztZQUFFQyxPQUFPLEVBQUUsdUJBQXVCO1NBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXNoZWV0cy1mb3JtLy4vcGFnZXMvYXBpL3FyL3ZhbGlkYXRlLWNvZGUuanM/NDBiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uLy4uL3V0aWxzL2RiJztcclxuaW1wb3J0IENvZGVTdG9yZSBmcm9tICcuLi8uLi8uLi9tb2RlbHMvQ29kZVN0b3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBhd2FpdCBjb25uZWN0REIoKTtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7cmVxLm1ldGhvZH0gTm90IEFsbG93ZWRgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgZW50ZXJlZENvZGUsIHNlc3Npb25JZCB9ID0gcmVxLmJvZHk7XHJcblxyXG4gIGlmICghZW50ZXJlZENvZGUgfHwgIXNlc3Npb25JZCkge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgdmFsaWQ6IGZhbHNlLCBtZXNzYWdlOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLicgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgY29kZUVudHJ5ID0gYXdhaXQgQ29kZVN0b3JlLmZpbmRPbmUoeyBzZXNzaW9uSWQgfSk7XHJcblxyXG4gICAgaWYgKCFjb2RlRW50cnkpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1Nlc3Npb24gbm90IGZvdW5kLicpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyB2YWxpZDogZmFsc2UsIG1lc3NhZ2U6ICdTZXNzaW9uIG5vdCBmb3VuZC4nIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzVmFsaWQgPSBlbnRlcmVkQ29kZSA9PT0gY29kZUVudHJ5LmNvZGU7XHJcbiAgICBjb25zb2xlLmxvZyhpc1ZhbGlkID8gJ0NvZGUgaXMgdmFsaWQuJyA6ICdJbnZhbGlkIGNvZGUuJyk7XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdmFsaWQ6IGlzVmFsaWQgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHZhbGlkYXRpbmcgY29kZTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyB2YWxpZDogZmFsc2UsIG1lc3NhZ2U6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiQ29kZVN0b3JlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNldEhlYWRlciIsInN0YXR1cyIsImVuZCIsImVudGVyZWRDb2RlIiwic2Vzc2lvbklkIiwiYm9keSIsImpzb24iLCJ2YWxpZCIsIm1lc3NhZ2UiLCJjb2RlRW50cnkiLCJmaW5kT25lIiwiY29uc29sZSIsImxvZyIsImlzVmFsaWQiLCJjb2RlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/qr/validate-code.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        // Use current db connection\n        return;\n    }\n    // Use new db connection\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    console.log(\"MongoDB Connected\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsU0FBUyxHQUFHLFVBQVk7SUFDNUIsSUFBSUQsMkVBQWtDLEVBQUU7UUFDdEMsNEJBQTRCO1FBQzVCLE9BQU87SUFDVCxDQUFDO0lBQ0Qsd0JBQXdCO0lBQ3hCLE1BQU1BLHVEQUFnQixDQUFDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1FBQzlDQyxlQUFlLEVBQUUsSUFBSTtRQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtLQUN6QixDQUFDLENBQUM7SUFDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsaUVBQWVWLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zaGVldHMtZm9ybS8uL3V0aWxzL2RiLmpzPzdjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG4gICAgLy8gVXNlIGN1cnJlbnQgZGIgY29ubmVjdGlvblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBVc2UgbmV3IGRiIGNvbm5lY3Rpb25cclxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coJ01vbmdvREIgQ29ubmVjdGVkJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/qr/validate-code.js"));
module.exports = __webpack_exports__;

})();