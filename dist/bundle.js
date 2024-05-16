/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _signInValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signInValidation */ \"./src/js/signInValidation.js\");\n\n\n// selecting the sign in form elements\n\nconst emailInput = document.querySelector('.email');\nconst passwordInput = document.querySelector('.password');\nconst signInButton = document.querySelector('.sign-in-button');\nconst emailError = document.querySelector('.email-error');\nconst passwordError = document.querySelector('.password-error');\nconst signInForm = document.querySelector('.sign-in-form');\nconst submissionError = document.querySelector('.submission-error');\nconsole.log(emailError);\nsignInButton.addEventListener(\"click\", e => {\n  e.preventDefault();\n  (0,_signInValidation__WEBPACK_IMPORTED_MODULE_0__.validateSignInForm)(emailInput.value, passwordInput.value, emailError, passwordError);\n});\n\n//# sourceURL=webpack://finalproject/./src/js/app.js?");

/***/ }),

/***/ "./src/js/signInValidation.js":
/*!************************************!*\
  !*** ./src/js/signInValidation.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   validateSignInForm: function() { return /* binding */ validateSignInForm; }\n/* harmony export */ });\nconst validateSignInForm = (email, password, emailErrorElement, passErrorElement) => {\n  const errors = {\n    errorStatus: false,\n    emailError: \"\",\n    passwordError: \"\"\n  };\n  if (!email && !password) {\n    errors.errorStatus = true, errors.emailError = \"Email is required!\", errors.passwordError = \"Password is required!\", emailErrorElement.style.visibility = 'visible';\n    passErrorElement.style.visibility = 'visible';\n    emailErrorElement.textContent = errors.emailError;\n    passErrorElement.textContent = errors.passwordError;\n    console.log(\"Both email and password are empty\");\n  } else if (!email) {\n    errors.errorStatus = true, errors.emailError = \"Email is required!\", errors.passwordError = \"\", emailErrorElement.style.visibility = 'visible';\n    passErrorElement.style.visibility = 'hidden';\n    emailErrorElement.textContent = errors.emailError;\n    passErrorElement.textContent = errors.passwordError;\n    console.log(\"Email is empty\");\n  } else if (!password) {\n    errors.errorStatus = true, errors.emailErrorElement = \"\", errors.passwordError = \"Password is required!\", emailErrorElement.style.visibility = 'hidden';\n    passErrorElement.style.visibility = 'visible';\n    emailErrorElement.textContent = errors.emailError;\n    passErrorElement.textContent = errors.passwordError;\n    console.log(\"Password is empty\");\n  } else {\n    errors.errorStatus = false, errors.emailErrorElement = \"\", errors.passwordError = \"\", emailErrorElement.style.visibility = 'hidden';\n    passErrorElement.style.visibility = 'hidden';\n    emailErrorElement.textContent = errors.emailError;\n    passErrorElement.textContent = errors.passwordError;\n    console.log(\"Both email and password are filled\");\n  }\n  const signInFormStatus = () => {\n    return errors.errorStatus;\n  };\n  return {\n    signInFormStatus\n  };\n};\n\n\n//# sourceURL=webpack://finalproject/./src/js/signInValidation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;