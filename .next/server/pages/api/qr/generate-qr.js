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
exports.id = "pages/api/qr/generate-qr";
exports.ids = ["pages/api/qr/generate-qr"];
exports.modules = {

/***/ "cookies-next":
/*!*******************************!*\
  !*** external "cookies-next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("cookies-next");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "qrcode":
/*!*************************!*\
  !*** external "qrcode" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("qrcode");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "(api)/./models/CodeStore.js":
/*!*****************************!*\
  !*** ./models/CodeStore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst codeStoreSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    sessionId: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    code: {\n        type: String,\n        required: true\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.CodeStore) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"CodeStore\", codeStoreSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ29kZVN0b3JlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxlQUFlLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUMxQ0csU0FBUyxFQUFFO1FBQUVDLElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFQyxNQUFNLEVBQUUsSUFBSTtLQUFFO0lBQ3pEQyxJQUFJLEVBQUU7UUFBRUosSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7Q0FDdkMsQ0FBQztBQUVGLGlFQUFlTixrRUFBeUIsSUFBSUEscURBQWMsQ0FBQyxXQUFXLEVBQUVDLGVBQWUsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXNoZWV0cy1mb3JtLy4vbW9kZWxzL0NvZGVTdG9yZS5qcz82MGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb2RlU3RvcmVTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBzZXNzaW9uSWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgY29kZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkNvZGVTdG9yZSB8fCBtb25nb29zZS5tb2RlbCgnQ29kZVN0b3JlJywgY29kZVN0b3JlU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29kZVN0b3JlU2NoZW1hIiwiU2NoZW1hIiwic2Vzc2lvbklkIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwiY29kZSIsIm1vZGVscyIsIkNvZGVTdG9yZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/CodeStore.js\n");

/***/ }),

/***/ "(api)/./pages/api/qr/generate-qr.js":
/*!*************************************!*\
  !*** ./pages/api/qr/generate-qr.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode */ \"qrcode\");\n/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_CodeStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/CodeStore */ \"(api)/./models/CodeStore.js\");\n/* harmony import */ var _utils_generateUniqueCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/generateUniqueCode */ \"(api)/./utils/generateUniqueCode.js\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cookies-next */ \"cookies-next\");\n/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nasync function handler(req, res) {\n    await (0,_utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    if (req.method === \"GET\") {\n        try {\n            const uniqueCode = (0,_utils_generateUniqueCode__WEBPACK_IMPORTED_MODULE_4__.generateUniqueCode)(10);\n            const sessionId = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();\n            // Create the data to encode in the QR code\n            const qrData = {\n                code: uniqueCode,\n                sessionId: sessionId\n            };\n            // Convert the object to a string for the QR code\n            const qrCodeData = await qrcode__WEBPACK_IMPORTED_MODULE_0___default().toDataURL(JSON.stringify(qrData));\n            const newCodeEntry = new _models_CodeStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n                sessionId,\n                code: uniqueCode\n            });\n            await newCodeEntry.save();\n            // Set the session ID in a cookie with the SameSite attribute\n            (0,cookies_next__WEBPACK_IMPORTED_MODULE_5__.setCookie)(\"sessionId\", sessionId, {\n                req,\n                res,\n                maxAge: 60 * 60 * 24,\n                sameSite: \"Lax\",\n                secure: \"development\" === \"production\",\n                httpOnly: true\n            });\n            console.log(`Generated Code: ${uniqueCode}, Session ID: ${sessionId}`);\n            res.status(200).json({\n                qrCodeData,\n                sessionId\n            });\n        } catch (error) {\n            console.error(\"Error generating QR code:\", error);\n            res.status(500).json({\n                error: \"Internal Server Error\"\n            });\n        }\n    } else {\n        res.setHeader(\"Allow\", [\n            \"GET\"\n        ]);\n        res.status(405).end(`Method ${req.method} Not Allowed`);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXIvZ2VuZXJhdGUtcXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ1E7QUFDTTtBQUNRO0FBQ3FCO0FBQzlCO0FBRTFCLGVBQWVPLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTU4scURBQVMsRUFBRSxDQUFDO0lBRWxCLElBQUlLLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixJQUFJO1lBQ0YsTUFBTUMsVUFBVSxHQUFHTiw2RUFBa0IsQ0FBQyxFQUFFLENBQUM7WUFDekMsTUFBTU8sU0FBUyxHQUFHVix3Q0FBTSxFQUFFO1lBRTFCLDJDQUEyQztZQUMzQyxNQUFNVyxNQUFNLEdBQUc7Z0JBQ2JDLElBQUksRUFBRUgsVUFBVTtnQkFDaEJDLFNBQVMsRUFBRUEsU0FBUzthQUNyQjtZQUVELGlEQUFpRDtZQUNqRCxNQUFNRyxVQUFVLEdBQUcsTUFBTWYsdURBQWdCLENBQUNpQixJQUFJLENBQUNDLFNBQVMsQ0FBQ0wsTUFBTSxDQUFDLENBQUM7WUFFakUsTUFBTU0sWUFBWSxHQUFHLElBQUlmLHlEQUFTLENBQUM7Z0JBQUVRLFNBQVM7Z0JBQUVFLElBQUksRUFBRUgsVUFBVTthQUFFLENBQUM7WUFDbkUsTUFBTVEsWUFBWSxDQUFDQyxJQUFJLEVBQUUsQ0FBQztZQUUxQiw2REFBNkQ7WUFDN0RkLHVEQUFTLENBQUMsV0FBVyxFQUFFTSxTQUFTLEVBQUU7Z0JBQ2hDSixHQUFHO2dCQUNIQyxHQUFHO2dCQUNIWSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO2dCQUNwQkMsUUFBUSxFQUFFLEtBQUs7Z0JBQ2ZDLE1BQU0sRUFBRUMsYUFqQ0gsS0FpQzRCLFlBQVk7Z0JBQzdDQyxRQUFRLEVBQUUsSUFBSTthQUNmLENBQUMsQ0FBQztZQUVIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFaEIsVUFBVSxDQUFDLGNBQWMsRUFBRUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFSCxHQUFHLENBQUNtQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRWQsVUFBVTtnQkFBRUgsU0FBUzthQUFFLENBQUMsQ0FBQztRQUNsRCxFQUFFLE9BQU9rQixLQUFLLEVBQUU7WUFDZEosT0FBTyxDQUFDSSxLQUFLLENBQUMsMkJBQTJCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1lBQ2xEckIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQUVDLEtBQUssRUFBRSx1QkFBdUI7YUFBRSxDQUFDLENBQUM7UUFDM0QsQ0FBQztJQUNILE9BQU87UUFDTHJCLEdBQUcsQ0FBQ3NCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFBQyxLQUFLO1NBQUMsQ0FBQyxDQUFDO1FBQ2hDdEIsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUV4QixHQUFHLENBQUNFLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXNoZWV0cy1mb3JtLy4vcGFnZXMvYXBpL3FyL2dlbmVyYXRlLXFyLmpzP2YwNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuLi8uLi8uLi91dGlscy9kYic7XHJcbmltcG9ydCBDb2RlU3RvcmUgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL0NvZGVTdG9yZSc7XHJcbmltcG9ydCB7IGdlbmVyYXRlVW5pcXVlQ29kZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2dlbmVyYXRlVW5pcXVlQ29kZSc7XHJcbmltcG9ydCB7IHNldENvb2tpZSB9IGZyb20gJ2Nvb2tpZXMtbmV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdW5pcXVlQ29kZSA9IGdlbmVyYXRlVW5pcXVlQ29kZSgxMCk7XHJcbiAgICAgIGNvbnN0IHNlc3Npb25JZCA9IHV1aWR2NCgpO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIHRoZSBkYXRhIHRvIGVuY29kZSBpbiB0aGUgUVIgY29kZVxyXG4gICAgICBjb25zdCBxckRhdGEgPSB7XHJcbiAgICAgICAgY29kZTogdW5pcXVlQ29kZSxcclxuICAgICAgICBzZXNzaW9uSWQ6IHNlc3Npb25JZCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIENvbnZlcnQgdGhlIG9iamVjdCB0byBhIHN0cmluZyBmb3IgdGhlIFFSIGNvZGVcclxuICAgICAgY29uc3QgcXJDb2RlRGF0YSA9IGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoSlNPTi5zdHJpbmdpZnkocXJEYXRhKSk7XHJcblxyXG4gICAgICBjb25zdCBuZXdDb2RlRW50cnkgPSBuZXcgQ29kZVN0b3JlKHsgc2Vzc2lvbklkLCBjb2RlOiB1bmlxdWVDb2RlIH0pO1xyXG4gICAgICBhd2FpdCBuZXdDb2RlRW50cnkuc2F2ZSgpO1xyXG5cclxuICAgICAgLy8gU2V0IHRoZSBzZXNzaW9uIElEIGluIGEgY29va2llIHdpdGggdGhlIFNhbWVTaXRlIGF0dHJpYnV0ZVxyXG4gICAgICBzZXRDb29raWUoJ3Nlc3Npb25JZCcsIHNlc3Npb25JZCwge1xyXG4gICAgICAgIHJlcSxcclxuICAgICAgICByZXMsXHJcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQsIC8vIDEgZGF5XHJcbiAgICAgICAgc2FtZVNpdGU6ICdMYXgnLCAgICAgICAvLyBZb3UgY2FuIGFsc28gdXNlICdTdHJpY3QnIG9yICdOb25lJyBiYXNlZCBvbiB5b3VyIG5lZWRzXHJcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nLCAvLyBVc2Ugc2VjdXJlIGNvb2tpZXMgaW4gcHJvZHVjdGlvblxyXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGBHZW5lcmF0ZWQgQ29kZTogJHt1bmlxdWVDb2RlfSwgU2Vzc2lvbiBJRDogJHtzZXNzaW9uSWR9YCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcXJDb2RlRGF0YSwgc2Vzc2lvbklkIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBRUiBjb2RlOicsIGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSk7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUVJDb2RlIiwidjQiLCJ1dWlkdjQiLCJjb25uZWN0REIiLCJDb2RlU3RvcmUiLCJnZW5lcmF0ZVVuaXF1ZUNvZGUiLCJzZXRDb29raWUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidW5pcXVlQ29kZSIsInNlc3Npb25JZCIsInFyRGF0YSIsImNvZGUiLCJxckNvZGVEYXRhIiwidG9EYXRhVVJMIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5ld0NvZGVFbnRyeSIsInNhdmUiLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInNlY3VyZSIsInByb2Nlc3MiLCJodHRwT25seSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/qr/generate-qr.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState)) {\n        // Use current db connection\n        return;\n    }\n    // Use new db connection\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    console.log(\"MongoDB Connected\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsU0FBUyxHQUFHLFVBQVk7SUFDNUIsSUFBSUQsMkVBQWtDLEVBQUU7UUFDdEMsNEJBQTRCO1FBQzVCLE9BQU87SUFDVCxDQUFDO0lBQ0Qsd0JBQXdCO0lBQ3hCLE1BQU1BLHVEQUFnQixDQUFDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO1FBQzlDQyxlQUFlLEVBQUUsSUFBSTtRQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtLQUN6QixDQUFDLENBQUM7SUFDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsaUVBQWVWLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zaGVldHMtZm9ybS8uL3V0aWxzL2RiLmpzPzdjYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xyXG4gICAgLy8gVXNlIGN1cnJlbnQgZGIgY29ubmVjdGlvblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBVc2UgbmV3IGRiIGNvbm5lY3Rpb25cclxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coJ01vbmdvREIgQ29ubmVjdGVkJyk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ }),

/***/ "(api)/./utils/generateUniqueCode.js":
/*!*************************************!*\
  !*** ./utils/generateUniqueCode.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateUniqueCode\": () => (/* binding */ generateUniqueCode)\n/* harmony export */ });\nconst generateUniqueCode = (length)=>{\n    const characters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n    let result = \"\";\n    for(let i = 0; i < length; i++){\n        const randomIndex = Math.floor(Math.random() * characters.length);\n        result += characters[randomIndex];\n    }\n    return result;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9nZW5lcmF0ZVVuaXF1ZUNvZGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGtCQUFrQixHQUFHLENBQUNDLE1BQU0sR0FBSztJQUMxQyxNQUFNQyxVQUFVLEdBQUcsZ0VBQWdFO0lBQ25GLElBQUlDLE1BQU0sR0FBRyxFQUFFO0lBQ2YsSUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILE1BQU0sRUFBRUcsQ0FBQyxFQUFFLENBQUU7UUFDL0IsTUFBTUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBR04sVUFBVSxDQUFDRCxNQUFNLENBQUM7UUFDakVFLE1BQU0sSUFBSUQsVUFBVSxDQUFDRyxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsT0FBT0YsTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1zaGVldHMtZm9ybS8uL3V0aWxzL2dlbmVyYXRlVW5pcXVlQ29kZS5qcz9jMmFlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZW5lcmF0ZVVuaXF1ZUNvZGUgPSAobGVuZ3RoKSA9PiB7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzLmxlbmd0aCk7XHJcbiAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzW3JhbmRvbUluZGV4XTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuICAiXSwibmFtZXMiOlsiZ2VuZXJhdGVVbmlxdWVDb2RlIiwibGVuZ3RoIiwiY2hhcmFjdGVycyIsInJlc3VsdCIsImkiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/generateUniqueCode.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/qr/generate-qr.js"));
module.exports = __webpack_exports__;

})();