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
exports.id = "pages/api/submit";
exports.ids = ["pages/api/submit"];
exports.modules = {

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("googleapis");

/***/ }),

/***/ "(api)/./pages/api/submit.ts":
/*!*****************************!*\
  !*** ./pages/api/submit.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).send({\n            message: \"Only POST requests allowed\"\n        });\n    }\n    const body = req.body;\n    console.log(body);\n    try {\n        const auth = new googleapis__WEBPACK_IMPORTED_MODULE_0__.google.auth.GoogleAuth({\n            credentials: {\n                client_email: process.env.GOOGLE_CLIENT_EMAIL,\n                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\\\n/g, \"\\n\")\n            },\n            scopes: [\n                \"https://www.googleapis.com/auth/drive\",\n                \"https://www.googleapis.com/auth/drive.file\",\n                \"https://www.googleapis.com/auth/spreadsheets\"\n            ]\n        });\n        const sheets = googleapis__WEBPACK_IMPORTED_MODULE_0__.google.sheets({\n            auth,\n            version: \"v4\"\n        });\n        const response = await sheets.spreadsheets.values.append({\n            spreadsheetId: process.env.GOOGLE_SHEET_ID,\n            range: \"A1:E1\",\n            valueInputOption: \"USER_ENTERED\",\n            requestBody: {\n                values: [\n                    [\n                        body.firstname,\n                        body.lastname,\n                        body.email,\n                        body.phone,\n                        body.company\n                    ]\n                ]\n            }\n        });\n        return res.status(200).json({\n            data: response.data\n        });\n    } catch (e) {\n        return res.status(500).send({\n            message: \"Something went wrong\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWl0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNrQztBQVVuQixlQUFlQyxPQUFPLENBQ2pDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDdEI7SUFDRSxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDdkIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsNEJBQTRCO1NBQUUsQ0FBQztJQUMxRSxDQUFDO0lBRUQsTUFBTUMsSUFBSSxHQUFHTixHQUFHLENBQUNNLElBQUk7SUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7SUFFakIsSUFBSTtRQUNBLE1BQU1HLElBQUksR0FBRyxJQUFJWCw4REFBc0IsQ0FBQztZQUNwQ2EsV0FBVyxFQUFFO2dCQUNUQyxZQUFZLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUI7Z0JBQzdDQyxXQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxrQkFBa0IsRUFBRUMsT0FBTyxTQUFTLElBQUksQ0FBQzthQUNyRTtZQUNEQyxNQUFNLEVBQUU7Z0JBQ0osdUNBQXVDO2dCQUN2Qyw0Q0FBNEM7Z0JBQzVDLDhDQUE4QzthQUNqRDtTQUNKLENBQUM7UUFFRixNQUFNQyxNQUFNLEdBQUd0QixxREFBYSxDQUFDO1lBQ3pCVyxJQUFJO1lBQ0pZLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUM7UUFFRixNQUFNQyxRQUFRLEdBQUcsTUFBTUYsTUFBTSxDQUFDRyxZQUFZLENBQUNDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDO1lBQ3JEQyxhQUFhLEVBQUViLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxlQUFlO1lBQzFDQyxLQUFLLEVBQUUsT0FBTztZQUNkQyxnQkFBZ0IsRUFBRSxjQUFjO1lBQ2hDQyxXQUFXLEVBQUU7Z0JBQ1ROLE1BQU0sRUFBRTtvQkFDSjt3QkFBQ2xCLElBQUksQ0FBQ3lCLFNBQVM7d0JBQUV6QixJQUFJLENBQUMwQixRQUFRO3dCQUFFMUIsSUFBSSxDQUFDMkIsS0FBSzt3QkFBRTNCLElBQUksQ0FBQzRCLEtBQUs7d0JBQUU1QixJQUFJLENBQUM2QixPQUFPO3FCQUFDO2lCQUN4RTthQUNKO1NBQ0osQ0FBQztRQUdGLE9BQU9sQyxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ2lDLElBQUksQ0FBQztZQUN4QkMsSUFBSSxFQUFFZixRQUFRLENBQUNlLElBQUk7U0FDdEIsQ0FBQztJQUNOLEVBQUMsT0FBT0MsQ0FBQyxFQUFFO1FBQ1AsT0FBT3JDLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFDeEJDLE9BQU8sRUFBRSxzQkFBc0I7U0FDbEMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc2hlZXRzLWZvcm0vLi9wYWdlcy9hcGkvc3VibWl0LnRzPzUxNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7Z29vZ2xlfSBmcm9tIFwiZ29vZ2xlYXBpc1wiO1xuXG50eXBlIFNoZWV0Rm9ybSA9IHtcbiAgICBmaXJzdG5hbWU6c3RyaW5nXG4gICAgbGFzdG5hbWU6c3RyaW5nXG4gICAgZW1haWw6IHN0cmluZ1xuICAgIHBob25lOiBzdHJpbmdcbiAgICBjb21wYW55OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuc2VuZCh7IG1lc3NhZ2U6ICdPbmx5IFBPU1QgcmVxdWVzdHMgYWxsb3dlZCcgfSlcbiAgICB9XG5cbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHkgYXMgU2hlZXRGb3JtXG4gICAgY29uc29sZS5sb2coYm9keSlcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGF1dGggPSBuZXcgZ29vZ2xlLmF1dGguR29vZ2xlQXV0aCh7XG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIGNsaWVudF9lbWFpbDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9FTUFJTCxcbiAgICAgICAgICAgICAgICBwcml2YXRlX2tleTogcHJvY2Vzcy5lbnYuR09PR0xFX1BSSVZBVEVfS0VZPy5yZXBsYWNlKC9cXFxcbi9nLCAnXFxuJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzY29wZXM6IFtcbiAgICAgICAgICAgICAgICAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9kcml2ZScsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvZHJpdmUuZmlsZScsXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2F1dGgvc3ByZWFkc2hlZXRzJ1xuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHNoZWV0cyA9IGdvb2dsZS5zaGVldHMoe1xuICAgICAgICAgICAgYXV0aCxcbiAgICAgICAgICAgIHZlcnNpb246ICd2NCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaGVldHMuc3ByZWFkc2hlZXRzLnZhbHVlcy5hcHBlbmQoe1xuICAgICAgICAgICAgc3ByZWFkc2hlZXRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX1NIRUVUX0lELFxuICAgICAgICAgICAgcmFuZ2U6ICdBMTpFMScsXG4gICAgICAgICAgICB2YWx1ZUlucHV0T3B0aW9uOiAnVVNFUl9FTlRFUkVEJyxcbiAgICAgICAgICAgIHJlcXVlc3RCb2R5OiB7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXG4gICAgICAgICAgICAgICAgICAgIFtib2R5LmZpcnN0bmFtZSwgYm9keS5sYXN0bmFtZSwgYm9keS5lbWFpbCwgYm9keS5waG9uZSwgYm9keS5jb21wYW55XVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgXG5cbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgfSlcbiAgICB9Y2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIlxuICAgICAgICB9KTtcbiAgICB9fVxuIl0sIm5hbWVzIjpbImdvb2dsZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiYXV0aCIsIkdvb2dsZUF1dGgiLCJjcmVkZW50aWFscyIsImNsaWVudF9lbWFpbCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0VNQUlMIiwicHJpdmF0ZV9rZXkiLCJHT09HTEVfUFJJVkFURV9LRVkiLCJyZXBsYWNlIiwic2NvcGVzIiwic2hlZXRzIiwidmVyc2lvbiIsInJlc3BvbnNlIiwic3ByZWFkc2hlZXRzIiwidmFsdWVzIiwiYXBwZW5kIiwic3ByZWFkc2hlZXRJZCIsIkdPT0dMRV9TSEVFVF9JRCIsInJhbmdlIiwidmFsdWVJbnB1dE9wdGlvbiIsInJlcXVlc3RCb2R5IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJlbWFpbCIsInBob25lIiwiY29tcGFueSIsImpzb24iLCJkYXRhIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/submit.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/submit.ts"));
module.exports = __webpack_exports__;

})();