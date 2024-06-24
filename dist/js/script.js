/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/helpers/handleInput.js":
/*!***************************************!*\
  !*** ./src/js/helpers/handleInput.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const handleInput = () => {
  const inputs = document.querySelectorAll('.calculator__item-input');
  inputs.forEach(input => {
    input.addEventListener('input', e => {
      let value = e.target.value;
      value = value.replace(/\D/g, '');
      if (value > 3) {
        value = value.slice(0, 3);
      }
      e.target.value = value;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleInput);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tabs = () => {
  const tabs = document.querySelectorAll('.calculator__tab'),
    tabsContent = document.querySelectorAll('.calculator__wrapper'),
    tabsParent = document.querySelector('.calculator__wrapper-tabs');
  const hideTabContent = () => {
    tabs.forEach(tab => tab.classList.remove('calculator__tab_active'));
    tabsContent.forEach(tabContent => tabContent.classList.add('none'));
  };
  const showTabContent = (i = 0) => {
    tabs[i].classList.add('calculator__tab_active');
    tabsContent[i].classList.remove('none');
  };
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', e => {
    const target = e.target;
    if (target && target.classList.contains('calculator__tab')) {
      tabs.forEach((item, i) => {
        if (target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_handleInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/handleInput */ "./src/js/helpers/handleInput.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");




window.addEventListener('DOMContentLoaded', () => {
  (0,_helpers_handleInput__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
});
/******/ })()
;
//# sourceMappingURL=script.js.map