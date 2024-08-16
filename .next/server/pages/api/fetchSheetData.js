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
exports.id = "pages/api/fetchSheetData";
exports.ids = ["pages/api/fetchSheetData"];
exports.modules = {

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "(api)/./pages/api/fetchSheetData.ts":
/*!*************************************!*\
  !*** ./pages/api/fetchSheetData.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;\nconst RANGE = \"Sheet1!A:E\"; // Adjust the range based on your sheet\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Only GET requests allowed\"\n        });\n    }\n    try {\n        const auth = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.GoogleAuth({\n            credentials: {\n                client_email: process.env.GOOGLE_CLIENT_EMAIL,\n                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\\\n/g, \"\\n\")\n            },\n            scopes: [\n                \"https://www.googleapis.com/auth/spreadsheets.readonly\", \n            ]\n        });\n        const sheets = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.sheets({\n            version: \"v4\",\n            auth\n        });\n        const response = await sheets.spreadsheets.values.get({\n            spreadsheetId: SPREADSHEET_ID,\n            range: RANGE\n        });\n        const rows = response.data.values || [];\n        return res.status(200).json({\n            data: rows\n        });\n    } catch (error) {\n        console.error(\"Error fetching data from Google Sheets:\", error);\n        return res.status(500).json({\n            message: \"Error fetching data\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2hTaGVldERhdGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ29DO0FBRXBDLE1BQU1DLGNBQWMsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGVBQWU7QUFDbEQsTUFBTUMsS0FBSyxHQUFHLFlBQVksRUFBRSx1Q0FBdUM7QUFFcEQsZUFBZUMsT0FBTyxDQUNqQ0MsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3RCO0lBQ0UsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3RCLE9BQU9ELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLDJCQUEyQjtTQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsSUFBSTtRQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJYiw4REFBc0IsQ0FBQztZQUNwQ2UsV0FBVyxFQUFFO2dCQUNUQyxZQUFZLEVBQUVkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxtQkFBbUI7Z0JBQzdDQyxXQUFXLEVBQUVoQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2dCLGtCQUFrQixFQUFFQyxPQUFPLFNBQVMsSUFBSSxDQUFDO2FBQ3JFO1lBQ0RDLE1BQU0sRUFBRTtnQkFDSix1REFBdUQ7YUFDMUQ7U0FDSixDQUFDO1FBRUYsTUFBTUMsTUFBTSxHQUFHdEIscURBQWEsQ0FBQztZQUFFdUIsT0FBTyxFQUFFLElBQUk7WUFBRVYsSUFBSTtTQUFFLENBQUM7UUFFckQsTUFBTVcsUUFBUSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csWUFBWSxDQUFDQyxNQUFNLENBQUNDLEdBQUcsQ0FBQztZQUNsREMsYUFBYSxFQUFFM0IsY0FBYztZQUM3QjRCLEtBQUssRUFBRXhCLEtBQUs7U0FDZixDQUFDO1FBRUYsTUFBTXlCLElBQUksR0FBR04sUUFBUSxDQUFDTyxJQUFJLENBQUNMLE1BQU0sSUFBSSxFQUFFO1FBRXZDLE9BQU9sQixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVvQixJQUFJLEVBQUVELElBQUk7U0FBRSxDQUFDLENBQUM7SUFDaEQsRUFBRSxPQUFPRSxLQUFLLEVBQUU7UUFDWkMsT0FBTyxDQUFDRCxLQUFLLENBQUMseUNBQXlDLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLE9BQU94QixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxxQkFBcUI7U0FBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc2hlZXRzLWZvcm0vLi9wYWdlcy9hcGkvZmV0Y2hTaGVldERhdGEudHM/ZTlmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHsgZ29vZ2xlIH0gZnJvbSAnZ29vZ2xlYXBpcyc7XHJcblxyXG5jb25zdCBTUFJFQURTSEVFVF9JRCA9IHByb2Nlc3MuZW52LkdPT0dMRV9TSEVFVF9JRDtcclxuY29uc3QgUkFOR0UgPSAnU2hlZXQxIUE6RSc7IC8vIEFkanVzdCB0aGUgcmFuZ2UgYmFzZWQgb24geW91ciBzaGVldFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICAgIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdPbmx5IEdFVCByZXF1ZXN0cyBhbGxvd2VkJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGF1dGggPSBuZXcgZ29vZ2xlLmF1dGguR29vZ2xlQXV0aCh7XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRfZW1haWw6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfRU1BSUwsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlX2tleTogcHJvY2Vzcy5lbnYuR09PR0xFX1BSSVZBVEVfS0VZPy5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNjb3BlczogW1xyXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzLnJlYWRvbmx5JyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2hlZXRzID0gZ29vZ2xlLnNoZWV0cyh7IHZlcnNpb246ICd2NCcsIGF1dGggfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgc2hlZXRzLnNwcmVhZHNoZWV0cy52YWx1ZXMuZ2V0KHtcclxuICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogU1BSRUFEU0hFRVRfSUQsXHJcbiAgICAgICAgICAgIHJhbmdlOiBSQU5HRSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93cyA9IHJlc3BvbnNlLmRhdGEudmFsdWVzIHx8IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRhdGE6IHJvd3MgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGEgZnJvbSBHb29nbGUgU2hlZXRzOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgZmV0Y2hpbmcgZGF0YScgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImdvb2dsZSIsIlNQUkVBRFNIRUVUX0lEIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9TSEVFVF9JRCIsIlJBTkdFIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiYXV0aCIsIkdvb2dsZUF1dGgiLCJjcmVkZW50aWFscyIsImNsaWVudF9lbWFpbCIsIkdPT0dMRV9DTElFTlRfRU1BSUwiLCJwcml2YXRlX2tleSIsIkdPT0dMRV9QUklWQVRFX0tFWSIsInJlcGxhY2UiLCJzY29wZXMiLCJzaGVldHMiLCJ2ZXJzaW9uIiwicmVzcG9uc2UiLCJzcHJlYWRzaGVldHMiLCJ2YWx1ZXMiLCJnZXQiLCJzcHJlYWRzaGVldElkIiwicmFuZ2UiLCJyb3dzIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetchSheetData.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/fetchSheetData.ts"));
module.exports = __webpack_exports__;

})();