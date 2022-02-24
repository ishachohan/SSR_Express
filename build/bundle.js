/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _App = __webpack_require__(/*! ./src/App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import  Provider  from 'react-redux';\n\nvar express = __webpack_require__(/*! express */ \"express\");\n//import StaticRouter  from 'react-router-dom'\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar app = express();\nvar PORT = process.env.PORT || 3000;\n\napp.use(_bodyParser2.default.json());\napp.use(express.static('./build/public'));\n\nfunction getAssets() {\n    return getAssets.assets || function () {\n        getAssets.assets = JSON.parse(fs.readFileSync('./webpack-assets.json'));\n        return getAssets.assets;\n    }();\n}\n\napp.listen(PORT, function () {\n    console.log('App running at ' + PORT);\n});\n\napp.get('*', function (req, res) {\n    var context = {};\n\n    var content = _server2.default.renderToString(_react2.default.createElement(_App2.default, null));\n\n    //  const main = getAssets();\n    // const app1 = main.javascript.app;\n    //  const vendor = main.javascript.vendor;\n    //  const style = main.styles.app;\n\n    var html = '<!DOCTYPE html>\\n    <html lang=\"en\">\\n    <head>\\n        <meta charset=\"utf-8\">\\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\\n        <title>SSR</title>\\n    </head>\\n    <body>\\n        <div id=\"root\"> ' + content + ' </div>\\n        <script src=\"client_bundle.js\"></script>\\n    </body>\\n    </html>\\n    ';\n    res.send(html);\n});\n\n//# sourceURL=webpack:///./server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n__webpack_require__(/*! ./app.css */ \"./src/app.css\");\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _SearchMovie = __webpack_require__(/*! ./pages/SearchMovie */ \"./src/pages/SearchMovie.js\");\n\nvar _SearchMovie2 = _interopRequireDefault(_SearchMovie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction App() {\n  return _react2.default.createElement(\n    \"div\",\n    null,\n    _react2.default.createElement(_SearchMovie2.default, null)\n  );\n}\n\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"e9609c04ab2deb5fdf862d4cb55e3a03.css\");\n\n//# sourceURL=webpack:///./src/app.css?");

/***/ }),

/***/ "./src/pages/AddMovie/AddMovie.css":
/*!*****************************************!*\
  !*** ./src/pages/AddMovie/AddMovie.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2ebb43368a87b52dabd329294c81290e.css\");\n\n//# sourceURL=webpack:///./src/pages/AddMovie/AddMovie.css?");

/***/ }),

/***/ "./src/pages/AddMovie/AddMovie.js":
/*!****************************************!*\
  !*** ./src/pages/AddMovie/AddMovie.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n\n__webpack_require__(/*! ./AddMovie.css */ \"./src/pages/AddMovie/AddMovie.css\");\n\nvar _formik = __webpack_require__(/*! formik */ \"formik\");\n\nvar _reactMultiselectCheckboxes = __webpack_require__(/*! react-multiselect-checkboxes */ \"react-multiselect-checkboxes\");\n\nvar _reactMultiselectCheckboxes2 = _interopRequireDefault(_reactMultiselectCheckboxes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction AddMovie() {\n    var _useState = (0, _react.useState)(false),\n        _useState2 = _slicedToArray(_useState, 2),\n        show = _useState2[0],\n        setShow = _useState2[1];\n\n    var handleClose = function handleClose() {\n        return setShow(false);\n    };\n    var handleShow = function handleShow() {\n        return setShow(true);\n    };\n\n    var data = [{ value: 'Crime', label: 'Crime', isSelected: true }, { value: 'Documentary', label: 'Documentary' }, { value: 'Horror', label: 'Horror' }, { value: 'Comedy', label: 'Comedy', isSelected: true }];\n\n    var initialTitle = 'ADD MOVIE';\n\n    var validate = function validate(values) {\n        var errors = {};\n        if (!values.title) {\n            errors.title = 'Required';\n        } else if (values.title.length > 40) {\n            errors.title = 'Must be 40 characters or less';\n        }\n\n        if (!values.movieurl) {\n            errors.movieurl = 'Required';\n        } else if (values.movieurl.length > 50) {\n            errors.movieurl = 'Must be 50 characters or less';\n        }\n\n        if (!values.rating) {\n            errors.rating = 'Required';\n        } else if (values.rating.length > 3) {\n            errors.rating = 'Must be 2-3 characters or less';\n        }\n\n        if (!values.releasedate) {\n            errors.releasedate = 'Required';\n        }\n\n        if (!values.overview) {\n            errors.overview = 'Required';\n        } else if (values.overview.length > 500) {\n            errors.overview = 'Must be 500 characters or less';\n        }\n        if (!values.runtime) {\n            errors.runtime = 'Required';\n        } else if (0 > values.runtime > 150) {\n            errors.runtime = 'Must be between 0-150';\n        }\n        return errors;\n    };\n\n    var formik = (0, _formik.useFormik)({\n        initialValues: { title: \"Moana\", movieurl: \"https://\", rating: \"0\",\n            releasedate: \"dd/mm/yyyy\", genres: [], overview: \"\", runtime: \"90\" },\n        validate: validate,\n        onSubmit: function onSubmit(values) {\n            var data = JSON.stringify(values, null, 2);\n            console.log(data);\n        }\n    });\n\n    return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(\"input\", { type: \"button\", onClick: handleShow, className: \"addmoviesbtn\", value: \"+ ADD MOVIES\" }),\n        _react2.default.createElement(\n            _reactBootstrap.Modal,\n            { show: show, onHide: handleClose, dialogClassName: \"modal-content\" },\n            _react2.default.createElement(\n                _reactBootstrap.Modal.Header,\n                { className: \"headerbackstyle\", closeButton: true },\n                _react2.default.createElement(\n                    _reactBootstrap.Modal.Title,\n                    null,\n                    initialTitle\n                )\n            ),\n            _react2.default.createElement(\n                _reactBootstrap.Modal.Body,\n                { className: \"addmovieModalbox\" },\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"container\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"left\" },\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"title\" },\n                            \"TITLE\"\n                        ),\n                        _react2.default.createElement(\"input\", { type: \"text\", className: \"backstlyes fontstyles2\",\n                            placeholder: \"TITLE\", value: formik.values.title, id: \"title\", name: \"title\",\n                            onChange: formik.handleChange }),\n                        formik.errors.title ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.title\n                        ) : null,\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"movieurl\" },\n                            \"MOVIE URL\"\n                        ),\n                        _react2.default.createElement(\"input\", { type: \"text\", className: \"backstlyes fontstyles2\", id: \"movieurl\", name: \"movieurl\",\n                            placeholder: \"https://\", value: formik.values.movieurl,\n                            onChange: formik.handleChange }),\n                        formik.errors.movieurl ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.movieurl\n                        ) : null,\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"genres\" },\n                            \"GENRE\"\n                        ),\n                        _react2.default.createElement(_reactMultiselectCheckboxes2.default, { options: data, className: \"MultiSelectstyle\",\n                            id: \"genres\", name: \"genres\" })\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"right\" },\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"releasedate\" },\n                            \"RELEASE DATE\"\n                        ),\n                        _react2.default.createElement(\"input\", { type: \"date\", className: \"backstlyes2 fontstyles2\", id: \"releasedate\", name: \"releasedate\",\n                            placeholder: \"SELECT DATE\", value: formik.values.releasedate,\n                            onChange: formik.handleChange }),\n                        formik.errors.releasedate ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.releasedate\n                        ) : null,\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"rating\" },\n                            \"RATING\"\n                        ),\n                        _react2.default.createElement(\"input\", { type: \"text\", className: \"backstlyes2 fontstyles2\", id: \"rating\", name: \"rating\",\n                            value: formik.values.rating, onChange: formik.handleChange }),\n                        formik.errors.rating ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.rating\n                        ) : null,\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"runtime\" },\n                            \"RUNTIME\"\n                        ),\n                        _react2.default.createElement(\"input\", { type: \"number\", placeholder: \"minutes\", className: \"backstlyes2 fontstyles2\",\n                            id: \"runtime\", name: \"runtime\",\n                            value: formik.values.runtime, onChange: formik.handleChange }),\n                        formik.errors.runtime ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.runtime\n                        ) : null\n                    )\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    null,\n                    _react2.default.createElement(\n                        \"label\",\n                        { className: \"fontstyles\", htmlFor: \"overview\" },\n                        \"OVERVIEW\"\n                    ),\n                    _react2.default.createElement(\"textarea\", { className: \"backstlyes3 fontstyles2\", id: \"overview\", name: \"overview\",\n                        placeholder: \"Movie description\", value: formik.values.overview,\n                        onChange: formik.handleChange, rows: 10, cols: 100 }),\n                    formik.errors.overview ? _react2.default.createElement(\n                        \"div\",\n                        { className: \"fontstyles2\" },\n                        formik.errors.overview\n                    ) : null\n                )\n            ),\n            _react2.default.createElement(\n                _reactBootstrap.Modal.Footer,\n                { className: \"headerbackstyle\" },\n                _react2.default.createElement(\n                    _reactBootstrap.Button,\n                    { variant: \"custom\", onClick: handleClose },\n                    \"RESET\"\n                ),\n                _react2.default.createElement(\n                    _reactBootstrap.Button,\n                    { variant: \"customsubmit\", onClick: formik.handleSubmit },\n                    \"SUBMIT\"\n                )\n            )\n        )\n    );\n}\nexports.default = AddMovie;\n\n//# sourceURL=webpack:///./src/pages/AddMovie/AddMovie.js?");

/***/ }),

/***/ "./src/pages/DeleteMovie/DeleteMovie.css":
/*!***********************************************!*\
  !*** ./src/pages/DeleteMovie/DeleteMovie.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"64e9b414c8dc1a732ebb1ec75dafcad8.css\");\n\n//# sourceURL=webpack:///./src/pages/DeleteMovie/DeleteMovie.css?");

/***/ }),

/***/ "./src/pages/DeleteMovie/DeleteMovie.js":
/*!**********************************************!*\
  !*** ./src/pages/DeleteMovie/DeleteMovie.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n\n__webpack_require__(/*! ./DeleteMovie.css */ \"./src/pages/DeleteMovie/DeleteMovie.css\");\n\nvar _formik = __webpack_require__(/*! formik */ \"formik\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction DeleteMovie() {\n    var _useState = (0, _react.useState)(false),\n        _useState2 = _slicedToArray(_useState, 2),\n        show = _useState2[0],\n        setShow = _useState2[1];\n\n    var handleClose = function handleClose() {\n        return setShow(false);\n    };\n    var handleShow = function handleShow() {\n        return setShow(true);\n    };\n\n    var formik = (0, _formik.useFormik)({\n        initialValues: { id: 0 },\n        onSubmit: function onSubmit(values) {\n            var data = JSON.stringify(values, null, 2);\n            handleClose();\n            console.log(data);\n        }\n    });\n\n    return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(\"input\", { type: \"button\", onClick: handleShow, className: \"deletemoviesbtn\", value: \"-DELETE MOVIES\" }),\n        _react2.default.createElement(\n            _reactBootstrap.Modal,\n            { show: show, onHide: handleClose, dialogClassName: \"modal-content1\" },\n            _react2.default.createElement(\n                _reactBootstrap.Modal.Header,\n                { className: \"headerbackstyle\", closeButton: true },\n                _react2.default.createElement(\n                    _reactBootstrap.Modal.Title,\n                    null,\n                    \"DELETE MOVIE\"\n                )\n            ),\n            _react2.default.createElement(\n                _reactBootstrap.Modal.Body,\n                { className: \"headerbackstyle\" },\n                _react2.default.createElement(\n                    \"div\",\n                    null,\n                    _react2.default.createElement(\n                        \"label\",\n                        { className: \"fontstyles2\" },\n                        \"Are you sure you want to delete this movie?\"\n                    )\n                )\n            ),\n            _react2.default.createElement(\n                _reactBootstrap.Modal.Footer,\n                { className: \"headerbackstyle\" },\n                _react2.default.createElement(\n                    _reactBootstrap.Button,\n                    { variant: \"customsubmit\", onClick: formik.handleSubmit },\n                    \"CONFIRM\"\n                )\n            )\n        )\n    );\n}\nexports.default = DeleteMovie;\n\n//# sourceURL=webpack:///./src/pages/DeleteMovie/DeleteMovie.js?");

/***/ }),

/***/ "./src/pages/EditMovie/EditMovie.js":
/*!******************************************!*\
  !*** ./src/pages/EditMovie/EditMovie.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n\n__webpack_require__(/*! ../AddMovie/AddMovie.css */ \"./src/pages/AddMovie/AddMovie.css\");\n\nvar _reactMultiselectCheckboxes = __webpack_require__(/*! react-multiselect-checkboxes */ \"react-multiselect-checkboxes\");\n\nvar _reactMultiselectCheckboxes2 = _interopRequireDefault(_reactMultiselectCheckboxes);\n\nvar _TextField = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _formik = __webpack_require__(/*! formik */ \"formik\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction AddMovie() {\n    var _useState = (0, _react.useState)(false),\n        _useState2 = _slicedToArray(_useState, 2),\n        show = _useState2[0],\n        setShow = _useState2[1];\n\n    var handleClose = function handleClose() {\n        return setShow(false);\n    };\n    var handleShow = function handleShow() {\n        return setShow(true);\n    };\n\n    var MockData = {\n        Movie: \"Moana\",\n        Date: \"14-11-2016\",\n        Url: \"https://www.moana.com\",\n        Rating: 7.8,\n        running: \"1h 47min\",\n        overview: \"Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.\"\n    };\n\n    var data = [{ value: 'Crime', label: 'Crime', isSelected: true }, { value: 'Documentary', label: 'Documentary' }, { value: 'Horror', label: 'Horror' }, { value: 'Comedy', label: 'Comedy', isSelected: true }];\n\n    var validate = function validate(values) {\n        var errors = {};\n        if (!values.title) {\n            errors.title = 'Required';\n        } else if (values.title.length > 40) {\n            errors.title = 'Must be 40 characters or less';\n        }\n\n        if (!values.movieurl) {\n            errors.movieurl = 'Required';\n        } else if (values.movieurl.length > 50) {\n            errors.movieurl = 'Must be 50 characters or less';\n        }\n\n        if (!values.rating) {\n            errors.rating = 'Required';\n        } else if (values.rating.length > 3) {\n            errors.rating = 'Must be 2-3 characters or less';\n        }\n\n        if (!values.releasedate) {\n            errors.releasedate = 'Required';\n        }\n\n        if (!values.overview) {\n            errors.overview = 'Required';\n        } else if (values.overview.length > 500) {\n            errors.overview = 'Must be 500 characters or less';\n        }\n        if (!values.runtime) {\n            errors.runtime = 'Required';\n        } else if (0 > values.runtime > 150) {\n            errors.runtime = 'Must be between 0-150';\n        }\n        return errors;\n    };\n    var formik = (0, _formik.useFormik)({\n        initialValues: { title: \"Moana\", movieurl: \"https://www.moana.com\", rating: \"7.8\",\n            releasedate: \"14-11-2016\", genres: [], overview: \"Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.\",\n            runtime: \"107\" },\n        validate: validate,\n        onSubmit: function onSubmit(values) {\n            var data = JSON.stringify(values, null, 2);\n            console.log(data);\n        }\n    });\n    return _react2.default.createElement(\n        _react2.default.Fragment,\n        null,\n        _react2.default.createElement(\"input\", { type: \"button\", onClick: handleShow, className: \"editmoviesbtn\", value: \"+EDIT MOVIES\" }),\n        _react2.default.createElement(\n            _reactBootstrap.Modal,\n            { show: show, onHide: handleClose, dialogClassName: \"modal-content\" },\n            _react2.default.createElement(\n                _reactBootstrap.Modal.Header,\n                { className: \"headerbackstyle\", closeButton: true },\n                _react2.default.createElement(\n                    _reactBootstrap.Modal.Title,\n                    null,\n                    \"EDIT MOVIE\"\n                )\n            ),\n            _react2.default.createElement(\n                _reactBootstrap.Modal.Body,\n                { className: \"addmovieModalbox\" },\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"container\" },\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"left\" },\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"title\" },\n                            \"TITLE\"\n                        ),\n                        _react2.default.createElement(\"input\", { type: \"text\", className: \"backstlyes\", name: \"title\", id: \"title\",\n                            value: formik.values.title, onChange: formik.handleChange, placeholder: \"TITLE\" }),\n                        formik.errors.title ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.title\n                        ) : null,\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"movieurl\" },\n                            \"MOVIE URL\"\n                        ),\n                        _react2.default.createElement(\"input\", { type: \"text\", className: \"backstlyes fontstyles2\", id: \"movieurl\", name: \"movieurl\",\n                            placeholder: \"https://\", value: formik.values.movieurl,\n                            onChange: formik.handleChange }),\n                        formik.errors.movieurl ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.movieurl\n                        ) : null,\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"genres\" },\n                            \"GENRE\"\n                        ),\n                        _react2.default.createElement(_reactMultiselectCheckboxes2.default, { options: data, className: \"MultiSelectstyle\",\n                            id: \"genres\", name: \"genres\" })\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"right\" },\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"releasedate\" },\n                            \"RELEASE DATE\"\n                        ),\n                        _react2.default.createElement(_TextField2.default, { id: \"releasedate\", type: \"date\", defaultValue: MockData.Date, className: \"backstlyes2\",\n                            InputProps: { color: \"white\" }, name: \"releasedate\",\n                            InputLabelProps: { shrink: true } }),\n                        formik.errors.releasedate ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.releasedate\n                        ) : null,\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"rating\" },\n                            \"RATING\"\n                        ),\n                        _react2.default.createElement(\"input\", { type: \"text\", className: \"backstlyes2 fontstyles2\", id: \"rating\", name: \"rating\",\n                            value: formik.values.rating, onChange: formik.handleChange }),\n                        formik.errors.rating ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.rating\n                        ) : null,\n                        _react2.default.createElement(\n                            \"label\",\n                            { className: \"fontstyles\", htmlFor: \"runtime\" },\n                            \"RUNTIME\"\n                        ),\n                        _react2.default.createElement(\"input\", { type: \"number\", placeholder: \"minutes\", className: \"backstlyes2 fontstyles2\",\n                            id: \"runtime\", name: \"runtime\",\n                            value: formik.values.runtime, onChange: formik.handleChange }),\n                        formik.errors.runtime ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.runtime\n                        ) : null\n                    )\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    null,\n                    _react2.default.createElement(\n                        \"label\",\n                        { className: \"fontstyles2\", htmlFor: \"overview\" },\n                        \"OVERVIEW\"\n                    ),\n                    _react2.default.createElement(\n                        \"textarea\",\n                        { className: \"backstlyes3\",\n                            placeholder: \"Movie description\", name: \"overview\", id: \"overview\",\n                            rows: 40, cols: 100,\n                            onChange: formik.handleChange,\n                            value: formik.values.overview\n                        },\n                        formik.errors.overview ? _react2.default.createElement(\n                            \"div\",\n                            { className: \"fontstyles2\" },\n                            formik.errors.overview\n                        ) : null\n                    )\n                )\n            ),\n            _react2.default.createElement(\n                _reactBootstrap.Modal.Footer,\n                { className: \"headerbackstyle\" },\n                _react2.default.createElement(\n                    _reactBootstrap.Button,\n                    { variant: \"custom\", onClick: handleClose },\n                    \"RESET\"\n                ),\n                _react2.default.createElement(\n                    _reactBootstrap.Button,\n                    { variant: \"customsubmit\", onClick: formik.handleSubmit },\n                    \"SUBMIT\"\n                )\n            )\n        )\n    );\n}\nexports.default = AddMovie;\n\n//# sourceURL=webpack:///./src/pages/EditMovie/EditMovie.js?");

/***/ }),

/***/ "./src/pages/Header1.js":
/*!******************************!*\
  !*** ./src/pages/Header1.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./Home.css */ \"./src/pages/Home.css\");\n\nvar _Movietile = __webpack_require__(/*! ./Movietile */ \"./src/pages/Movietile.js\");\n\nvar _Movietile2 = _interopRequireDefault(_Movietile);\n\nvar _SearchMovie = __webpack_require__(/*! ./SearchMovie */ \"./src/pages/SearchMovie.js\");\n\nvar _SearchMovie2 = _interopRequireDefault(_SearchMovie);\n\nvar _MovieDetails = __webpack_require__(/*! ./MovieDetails/MovieDetails */ \"./src/pages/MovieDetails/MovieDetails.js\");\n\nvar _MovieDetails2 = _interopRequireDefault(_MovieDetails);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n\nvar _movies = __webpack_require__(/*! ../store/movies */ \"./src/store/movies.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header1 = function Header1(props) {\n    var navigate = (0, _reactRouterDom.useNavigate)();\n\n    var _useState = (0, _react.useState)({}),\n        _useState2 = _slicedToArray(_useState, 2),\n        MovieSelect = _useState2[0],\n        SetMovieSelect = _useState2[1];\n\n    var _useState3 = (0, _react.useState)(false),\n        _useState4 = _slicedToArray(_useState3, 2),\n        flag = _useState4[0],\n        setflag = _useState4[1];\n\n    var movieList = props.movies;\n\n    var _useState5 = (0, _react.useState)('Release Date'),\n        _useState6 = _slicedToArray(_useState5, 2),\n        value = _useState6[0],\n        setValue = _useState6[1];\n\n    var handleSelect = function handleSelect(e) {\n        setValue(e);\n        if (e === \"Release Date\") e = \"releasedate\";\n        navigate(\"?sortBy=\" + e);\n    };\n\n    var dispatch = (0, _reactRedux.useDispatch)();\n    var handleChange = function handleChange(event, movie) {\n        var newMovies = _extends({}, MovieSelect);\n        newMovies = movie;\n        console.log(newMovies);\n        SetMovieSelect(newMovies);\n        navigate(\"?movie=\" + newMovies.id);\n    };\n\n    var flagHandler = function flagHandler() {\n        setflag(true);\n        window.scrollTo({ top: 0, behavior: \"smooth\" });\n    };\n\n    return _react2.default.createElement(\n        \"div\",\n        null,\n        flag === false && _react2.default.createElement(_SearchMovie2.default, null),\n        flag === true && _react2.default.createElement(_MovieDetails2.default, { movie: MovieSelect }),\n        _react2.default.createElement(\"div\", { className: \"rectangle9\" }),\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { className: \"all\", to: \"?genre=all\", onClick: function onClick() {\n                    return dispatch((0, _movies.filterbygenres)(\"\", value));\n                } },\n            \"ALL\"\n        ),\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { className: \"Documentary\", to: \"?genre=documentary\", onClick: function onClick() {\n                    return dispatch((0, _movies.filterbygenres)(\"documentary\", value));\n                } },\n            \"DOCUMENTARY\"\n        ),\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { className: \"Comedy\", to: \"?genre=comedy\", onClick: function onClick() {\n                    return dispatch((0, _movies.filterbygenres)(\"comedy\", value));\n                } },\n            \"COMEDY\"\n        ),\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { className: \"Horror\", to: \"?genre=horror\", onClick: function onClick() {\n                    return dispatch((0, _movies.filterbygenres)(\"horror\", value));\n                } },\n            \"HORROR\"\n        ),\n        _react2.default.createElement(\n            _reactRouterDom.Link,\n            { className: \"Crime\", to: \"?genre=crime\", onClick: function onClick() {\n                    return dispatch((0, _movies.filterbygenres)(\"crime\", value));\n                } },\n            \"CRIME\"\n        ),\n        _react2.default.createElement(\n            \"label\",\n            { className: \"moviesfound\" },\n            \"39 movies found\"\n        ),\n        _react2.default.createElement(\n            \"label\",\n            { className: \"Sortby\" },\n            \"Sort by\"\n        ),\n        _react2.default.createElement(\n            _reactBootstrap.DropdownButton,\n            { id: \"Iddropdown\", title: value, variant: \"secondary\",\n                className: \"Releasedate\", onSelect: handleSelect },\n            _react2.default.createElement(\n                _reactBootstrap.Dropdown.Item,\n                { eventKey: \"Release Date\" },\n                \"Release Date\"\n            ),\n            _react2.default.createElement(\n                _reactBootstrap.Dropdown.Item,\n                { eventKey: \"Ratings\" },\n                \"Ratings\"\n            )\n        )\n    );\n};\nexports.default = Header1;\n\n//# sourceURL=webpack:///./src/pages/Header1.js?");

/***/ }),

/***/ "./src/pages/Home.css":
/*!****************************!*\
  !*** ./src/pages/Home.css ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"3c336ac6c83ab46c97d90438786e053f.css\");\n\n//# sourceURL=webpack:///./src/pages/Home.css?");

/***/ }),

/***/ "./src/pages/MovieDetails/MovieDetails.css":
/*!*************************************************!*\
  !*** ./src/pages/MovieDetails/MovieDetails.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ae9e16236f85fc77c503d3bf5cdd50ca.css\");\n\n//# sourceURL=webpack:///./src/pages/MovieDetails/MovieDetails.css?");

/***/ }),

/***/ "./src/pages/MovieDetails/MovieDetails.js":
/*!************************************************!*\
  !*** ./src/pages/MovieDetails/MovieDetails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _templateObject = _taggedTemplateLiteral([\"\\n  object-fit: cover;\\n  width: 320px;\\n  height: 400px;\\n  left: 5px;\\n  top: 100px;\\n\"], [\"\\n  object-fit: cover;\\n  width: 320px;\\n  height: 400px;\\n  left: 5px;\\n  top: 100px;\\n\"]),\n    _templateObject2 = _taggedTemplateLiteral([\"\\nwidth: 698px;\\nheight: 292px;\\nleft: 400px;\\ntop: 200px;\\n\\nfont-family: Montserrat;\\nfont-style: normal;\\nfont-weight: 300;\\nfont-size: 20px;\\nline-height: 24px;\\n\\ncolor: #FFFFFF;\\n\\nmix-blend-mode: normal;\\nopacity: 0.5;;\\n\"], [\"\\nwidth: 698px;\\nheight: 292px;\\nleft: 400px;\\ntop: 200px;\\n\\nfont-family: Montserrat;\\nfont-style: normal;\\nfont-weight: 300;\\nfont-size: 20px;\\nline-height: 24px;\\n\\ncolor: #FFFFFF;\\n\\nmix-blend-mode: normal;\\nopacity: 0.5;;\\n\"]),\n    _templateObject3 = _taggedTemplateLiteral([\"\\nobject-fit: cover;\\nwidth: 32px;\\nheight: 32px;\\nleft: 900px;\\ntop: 5px;\\ncursor: pointer;\\n\"], [\"\\nobject-fit: cover;\\nwidth: 32px;\\nheight: 32px;\\nleft: 900px;\\ntop: 5px;\\ncursor: pointer;\\n\"]),\n    _templateObject4 = _taggedTemplateLiteral([\"\\nwidth: 400px;\\nheight: 49px;\\nleft: 470px;\\ntop: 100px;\\n\\nfont-family: Montserrat;\\nfont-style: normal;\\nfont-weight: 300;\\nfont-size: 28px;\\nline-height: 49px;\\n\\ntext-align: center;\\nletter-spacing: 1px;\\ntext-transform: uppercase;\\n\\ncolor: #FFFFFF;\\n\"], [\"\\nwidth: 400px;\\nheight: 49px;\\nleft: 470px;\\ntop: 100px;\\n\\nfont-family: Montserrat;\\nfont-style: normal;\\nfont-weight: 300;\\nfont-size: 28px;\\nline-height: 49px;\\n\\ntext-align: center;\\nletter-spacing: 1px;\\ntext-transform: uppercase;\\n\\ncolor: #FFFFFF;\\n\"]),\n    _templateObject5 = _taggedTemplateLiteral([\"\\nheight: 24px;\\nleft: 200px;\\nheight: 24px;\\ntop:100px;\\n\\nfont-family: Montserrat;\\nfont-style: normal;\\nfont-weight: 300;\\nfont-size: 20px;\\nline-height: 24px;\\ntext-align: center;\\ntext-transform: uppercase;\\n\\ncolor: #FFFFFF;\\n\"], [\"\\nheight: 24px;\\nleft: 200px;\\nheight: 24px;\\ntop:100px;\\n\\nfont-family: Montserrat;\\nfont-style: normal;\\nfont-weight: 300;\\nfont-size: 20px;\\nline-height: 24px;\\ntext-align: center;\\ntext-transform: uppercase;\\n\\ncolor: #FFFFFF;\\n\"]),\n    _templateObject6 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-direction: column;\\n  padding: 10px;\\n  width: 1100px;\\n  height: 396px;\\n  left: 5px;\\n  top: 1px;\\n\"], [\"\\n  display: flex;\\n  flex-direction: column;\\n  padding: 10px;\\n  width: 1100px;\\n  height: 396px;\\n  left: 5px;\\n  top: 1px;\\n\"]),\n    _templateObject7 = _taggedTemplateLiteral([\"\\n    width: 323px;\\n    height: 17px;\\n    left: 494px;\\n    top: 186px;\\n    font-family: Montserrat;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 14px;\\n    line-height: 17px;\\n    color: #FFFFFF;\\n    mix-blend-mode: normal;\\n    opacity: 0.5;\\n\"], [\"\\n    width: 323px;\\n    height: 17px;\\n    left: 494px;\\n    top: 186px;\\n    font-family: Montserrat;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 14px;\\n    line-height: 17px;\\n    color: #FFFFFF;\\n    mix-blend-mode: normal;\\n    opacity: 0.5;\\n\"]),\n    _templateObject8 = _taggedTemplateLiteral([\"\\nwidth: 100px;\\nheight: 29px;\\nleft: 500px;\\ntop: 233px;\\n\\nfont-family: Montserrat;\\nfont-style: normal;\\nfont-weight: 300;\\nfont-size: 15px;\\nline-height: 15px;\\n\\ncolor: #F65261;\\n\"], [\"\\nwidth: 100px;\\nheight: 29px;\\nleft: 500px;\\ntop: 233px;\\n\\nfont-family: Montserrat;\\nfont-style: normal;\\nfont-weight: 300;\\nfont-size: 15px;\\nline-height: 15px;\\n\\ncolor: #F65261;\\n\"]),\n    _templateObject9 = _taggedTemplateLiteral([\"\\nwidth: 113px;\\nheight: 29px;\\n\\nfont-family: Montserrat;\\nfont-style: normal;\\nfont-weight: 300;\\nfont-size: 15px;\\nline-height: 15px;\\n\\ncolor: #F65261;\\n\"], [\"\\nwidth: 113px;\\nheight: 29px;\\n\\nfont-family: Montserrat;\\nfont-style: normal;\\nfont-weight: 300;\\nfont-size: 15px;\\nline-height: 15px;\\n\\ncolor: #F65261;\\n\"]);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./MovieDetails.css */ \"./src/pages/MovieDetails/MovieDetails.css\");\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _styledComponents2 = _interopRequireDefault(_styledComponents);\n\nvar _SearchMovie = __webpack_require__(/*! ../SearchMovie */ \"./src/pages/SearchMovie.js\");\n\nvar _SearchMovie2 = _interopRequireDefault(_SearchMovie);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar CoverImage = _styledComponents2.default.img(_templateObject);\n\nvar DetailText = _styledComponents2.default.label(_templateObject2);\n\nvar SearchIcon = _styledComponents2.default.img(_templateObject3);\n\nvar MovieText = _styledComponents2.default.label(_templateObject4);\n\nvar Ratingstext = _styledComponents2.default.label(_templateObject5);\n\nvar MovieContainer = _styledComponents2.default.div(_templateObject6);\n\nvar MovieTypetext = _styledComponents2.default.label(_templateObject7);\n\nvar MovieYear = _styledComponents2.default.label(_templateObject8);\n\nvar MovieRunTime = _styledComponents2.default.label(_templateObject9);\n\nfunction MovieDetails(props) {\n    var textdetails = {\n        text: props.movie.overview\n    };\n\n    var TextdetailsContext = _react2.default.createContext(textdetails);\n\n    var _useState = (0, _react.useState)(false),\n        _useState2 = _slicedToArray(_useState, 2),\n        flag = _useState2[0],\n        setflag = _useState2[1];\n\n    var flagHandler = (0, _react.useCallback)(function () {\n        setflag(true);\n    }, []);\n\n    var textcontext = (0, _react.useContext)(TextdetailsContext);\n\n    if (flag) return _react2.default.createElement(_SearchMovie2.default, null);else {\n        return _react2.default.createElement(\n            MovieContainer,\n            null,\n            _react2.default.createElement(\n                \"div\",\n                { className: \"column\", style: { textAlign: \"right\" } },\n                _react2.default.createElement(SearchIcon, { src: \"/search-2-32.png\", alt: \"search button\", onClick: flagHandler })\n            ),\n            _react2.default.createElement(\n                \"div\",\n                { className: \"row\" },\n                _react2.default.createElement(CoverImage, { src: props.movie.poster_path, alt: \"poster path\" }),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"col-5\" },\n                    _react2.default.createElement(\n                        MovieText,\n                        null,\n                        props.movie.title\n                    ),\n                    _react2.default.createElement(\n                        Ratingstext,\n                        { style: { textAlign: \"right\" } },\n                        props.movie.vote_average\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"col-9\" },\n                        _react2.default.createElement(\n                            MovieTypetext,\n                            null,\n                            props.movie.genres\n                        )\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"col-9\" },\n                        _react2.default.createElement(\n                            MovieYear,\n                            null,\n                            props.movie.release_date\n                        ),\n                        _react2.default.createElement(\n                            MovieRunTime,\n                            null,\n                            props.movie.runtime\n                        )\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"col-9\" },\n                        _react2.default.createElement(\n                            DetailText,\n                            null,\n                            textcontext.text\n                        )\n                    )\n                )\n            )\n        );\n    }\n}\n\nexports.default = MovieDetails;\n\n//# sourceURL=webpack:///./src/pages/MovieDetails/MovieDetails.js?");

/***/ }),

/***/ "./src/pages/Movietile.js":
/*!********************************!*\
  !*** ./src/pages/Movietile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./Home.css */ \"./src/pages/Home.css\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction Movietile(props) {\n\n    return _react2.default.createElement(\n        \"div\",\n        { className: \"movietiles\", onClick: function onClick(event) {\n                return props.handleChange(event, props.movie);\n            } },\n        _react2.default.createElement(\n            _react2.default.Fragment,\n            { key: props.movie.id },\n            _react2.default.createElement(\n                \"div\",\n                { className: \"row movietilestyle\" },\n                _react2.default.createElement(\"img\", { src: props.movie.poster_path, alt: \"movie info\" }),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"row\" },\n                    _react2.default.createElement(\n                        \"h3\",\n                        { className: \"col-md-auto\" },\n                        props.movie.title\n                    ),\n                    _react2.default.createElement(\n                        \"div\",\n                        { className: \"col align-\" },\n                        _react2.default.createElement(\n                            \"div\",\n                            { className: \"rectangle8 float-right\" },\n                            _react2.default.createElement(\n                                \"p\",\n                                null,\n                                props.movie.release_date\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(\n                    \"p\",\n                    null,\n                    props.movie.genres.join('/')\n                ),\n                _react2.default.createElement(\n                    \"div\",\n                    { className: \"row moviediv\", onClick: flagHandler },\n                    movieList.length ? movieList.map(function (movie) {\n                        return _react2.default.createElement(Movietile, {\n                            key: movie.id,\n                            movie: movie,\n                            handleChange: handleChange\n                        });\n                    }) : _react2.default.createElement(\"span\", null)\n                )\n            )\n        )\n    );\n}\nexports.default = Movietile;\n\n\nMovietile.propTypes = {\n    datas: _propTypes2.default.shape({\n        movie: _propTypes2.default.string,\n        id: _propTypes2.default.number,\n        genres: _propTypes2.default.array,\n        release_date: _propTypes2.default.string\n    })\n};\n\n//# sourceURL=webpack:///./src/pages/Movietile.js?");

/***/ }),

/***/ "./src/pages/SearchMovie.js":
/*!**********************************!*\
  !*** ./src/pages/SearchMovie.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AddMovie = __webpack_require__(/*! ./AddMovie/AddMovie */ \"./src/pages/AddMovie/AddMovie.js\");\n\nvar _AddMovie2 = _interopRequireDefault(_AddMovie);\n\nvar _DeleteMovie = __webpack_require__(/*! ./DeleteMovie/DeleteMovie */ \"./src/pages/DeleteMovie/DeleteMovie.js\");\n\nvar _DeleteMovie2 = _interopRequireDefault(_DeleteMovie);\n\nvar _EditMovie = __webpack_require__(/*! ./EditMovie/EditMovie */ \"./src/pages/EditMovie/EditMovie.js\");\n\nvar _EditMovie2 = _interopRequireDefault(_EditMovie);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _movies = __webpack_require__(/*! ../store/movies */ \"./src/store/movies.js\");\n\nvar _Header = __webpack_require__(/*! ./Header1 */ \"./src/pages/Header1.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _MovieDetails = __webpack_require__(/*! ./MovieDetails/MovieDetails */ \"./src/pages/MovieDetails/MovieDetails.js\");\n\nvar _MovieDetails2 = _interopRequireDefault(_MovieDetails);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction SearchMovie() {\n    var navigate = (0, _reactRouterDom.useNavigate)();\n    var params = (0, _reactRouterDom.useParams)();\n\n    var _useState = (0, _react.useState)(params.searchQuery),\n        _useState2 = _slicedToArray(_useState, 2),\n        value = _useState2[0],\n        setValue = _useState2[1];\n\n    var _useState3 = (0, _react.useState)(false),\n        _useState4 = _slicedToArray(_useState3, 2),\n        flag = _useState4[0],\n        setflag = _useState4[1];\n\n    var _useState5 = (0, _react.useState)([]),\n        _useState6 = _slicedToArray(_useState5, 2),\n        data = _useState6[0],\n        setData = _useState6[1];\n\n    var _useState7 = (0, _react.useState)(0),\n        _useState8 = _slicedToArray(_useState7, 2),\n        conditionCounter = _useState8[0],\n        setConditionCounter = _useState8[1];\n\n    var dispatch = (0, _reactRedux.useDispatch)();\n    var moviesList = (0, _reactRedux.useSelector)(function (state) {\n        return state.list;\n    });\n\n    var _useSearchParams = (0, _reactRouterDom.useSearchParams)(),\n        _useSearchParams2 = _slicedToArray(_useSearchParams, 1),\n        searchParams = _useSearchParams2[0];\n\n    (0, _react.useEffect)(function () {\n        if (searchParams.get(\"movie\")) {\n            setConditionCounter(function (c) {\n                return c + 1;\n            });\n            console.log(searchParams.get(\"movie\"));\n            dispatch((0, _movies.getMoviebyId)(searchParams.get(\"movie\")));\n            console.log(moviesList);\n        } else {\n            console.log(conditionCounter);\n            setConditionCounter(0);\n        }\n    }, []);\n    console.log(conditionCounter);\n    if (conditionCounter) {\n        return _react2.default.createElement(_MovieDetails2.default, { key: conditionCounter, movie: moviesList });\n    }\n\n    var flagHandler = function flagHandler() {\n        setflag(true);\n\n        if (value) {\n            dispatch((0, _movies.searchMovies)(value));\n            navigate(\"\" + value);\n            return;\n        }\n        if (searchParams.get(\"genre\")) {\n            dispatch((0, _movies.filterbygenres)(searchParams.get(\"genre\"), \"releasedate\"));\n            console.log(moviesList.data);\n        } else if (searchParams.get(\"sortBy\")) {\n            dispatch((0, _movies.filterbygenres)(\"\", searchParams.get(\"sortBy\")));\n            console.log(moviesList.data);\n        } else if (params.searchQuery === undefined) {\n            dispatch((0, _movies.searchMovies)(\" \"));\n        } else if (params.searchQuery) {\n            dispatch((0, _movies.searchMovies)(params.searchQuery));\n        } else {\n            dispatch((0, _movies.searchMovies)(params.searchQuery));\n        }\n    };\n\n    if (flag === true) {\n        return _react2.default.createElement(_Header2.default, { movies: moviesList.data });\n    } else {\n        return _react2.default.createElement(\n            \"div\",\n            { className: \"rectangle1\" },\n            _react2.default.createElement(\"input\", { type: \"image\", className: \"bitmapimageback\", alt: \"Image\" }),\n            _react2.default.createElement(_AddMovie2.default, null),\n            _react2.default.createElement(_EditMovie2.default, null),\n            _react2.default.createElement(_DeleteMovie2.default, null),\n            _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(\n                    \"h1\",\n                    { className: \"labelFindText\" },\n                    \"FIND YOUR MOVIE \"\n                ),\n                _react2.default.createElement(\"input\", { type: \"text\", placeholder: \"What do you want to watch?\", name: \"searchtxt\", id: \"searchtxt\",\n                    className: \"SearchInput\", value: value, onChange: function onChange(e) {\n                        return setValue(e.target.value);\n                    } }),\n                _react2.default.createElement(\"input\", { type: \"button\", className: \"SearchBtn\", value: \"Search\", onClick: flagHandler, id: \"searchbtn\", name: \"searchbtn\" })\n            )\n        );\n    }\n}\nexports.default = SearchMovie;\n\n//# sourceURL=webpack:///./src/pages/SearchMovie.js?");

/***/ }),

/***/ "./src/store/api.js":
/*!**************************!*\
  !*** ./src/store/api.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.apiCallFailed = exports.apiCallSuccess = exports.apiCallBegan = undefined;\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n\nvar apiCallBegan = exports.apiCallBegan = (0, _toolkit.createAction)(\"api/callBegan\");\nvar apiCallSuccess = exports.apiCallSuccess = (0, _toolkit.createAction)(\"api/callSuccess\");\nvar apiCallFailed = exports.apiCallFailed = (0, _toolkit.createAction)(\"api/callFailed\");\n\n//# sourceURL=webpack:///./src/store/api.js?");

/***/ }),

/***/ "./src/store/movies.js":
/*!*****************************!*\
  !*** ./src/store/movies.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getMoviebyId = exports.filterbygenres = exports.searchMovies = exports.loadMovies = undefined;\n\nvar _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n\nvar _api = __webpack_require__(/*! ./api */ \"./src/store/api.js\");\n\nvar slice = (0, _toolkit.createSlice)({\n    name: \"posts\",\n    initialState: {\n        list: [],\n        loading: false\n    },\n    reducers: {\n        postsRequested: function postsRequested(posts, action) {\n            posts.loading = true;\n        },\n\n        postsReceived: function postsReceived(posts, action) {\n            posts.list = action.payload;\n            posts.loading = false;\n        },\n\n        postsRequestFailed: function postsRequestFailed(posts, action) {\n            posts.loading = false;\n        }\n    }\n});\nexports.default = slice.reducer;\nvar _slice$actions = slice.actions,\n    postsRequested = _slice$actions.postsRequested,\n    postsReceived = _slice$actions.postsReceived,\n    postsRequestFailed = _slice$actions.postsRequestFailed;\nvar loadMovies = exports.loadMovies = function loadMovies() {\n    return function (dispatch) {\n        console.log(\"Load movie api call\");\n        return dispatch((0, _api.apiCallBegan)({\n            url: \"/movies?limit=6\",\n            onStart: postsRequested.type,\n            onSuccess: postsReceived.type,\n            onError: postsRequestFailed.type\n        }));\n    };\n};\n\nvar searchMovies = exports.searchMovies = function searchMovies(name) {\n    return function (dispatch) {\n        var urlstring = \"/movies?search=\" + name + \"&searchBy=title&limit=6\";\n        console.log(urlstring);\n        return dispatch((0, _api.apiCallBegan)({\n            url: urlstring,\n            onStart: postsRequested.type,\n            onSuccess: postsReceived.type,\n            onError: postsRequestFailed.type\n        }));\n    };\n};\n\nvar filterbygenres = exports.filterbygenres = function filterbygenres(genretype, sortby) {\n\n    var urlstring = \"/movies?filter=\" + genretype + \"&limit=6&sortOrder=desc&sortBy=\";\n    switch (sortby) {\n        case \"Release Date\":\n            urlstring = urlstring + \"releasedate\";\n            break;\n        case \"Ratings\":\n            urlstring = urlstring + \"ratings\";\n            break;\n        default:\n            urlstring = urlstring + \"releasedate\";\n    }\n    console.log(urlstring);\n    return (0, _api.apiCallBegan)({\n        url: urlstring,\n        onStart: postsRequested.type,\n        onSuccess: postsReceived.type,\n        onError: postsRequestFailed.type\n    });\n};\n\nvar getMoviebyId = exports.getMoviebyId = function getMoviebyId(id) {\n    return function (dispatch) {\n        var urlstring = \"/movies/\" + id;\n        console.log(urlstring);\n        return dispatch((0, _api.apiCallBegan)({\n            url: urlstring,\n            onStart: postsRequested.type,\n            onSuccess: postsReceived.type,\n            onError: postsRequestFailed.type\n        }));\n    };\n};\n\n//# sourceURL=webpack:///./src/store/movies.js?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");\n\n//# sourceURL=webpack:///external_%22@reduxjs/toolkit%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");\n\n//# sourceURL=webpack:///external_%22react-bootstrap%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-multiselect-checkboxes":
/*!***********************************************!*\
  !*** external "react-multiselect-checkboxes" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-multiselect-checkboxes\");\n\n//# sourceURL=webpack:///external_%22react-multiselect-checkboxes%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });