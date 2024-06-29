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
      value = value.replace(/[^0-9-]/g, '');
      if (value.length > 3) {
        value = value.slice(0, 3);
      }
      ;
      if (value.indexOf('-') !== -1) {
        const parts = value.split('-');
        value = '-' + parts.join('');
        e.target.classList.add('error-input');
      } else e.target.classList.remove('error-input');
      e.target.value = value;
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleInput);

/***/ }),

/***/ "./src/js/helpers/showData.js":
/*!************************************!*\
  !*** ./src/js/helpers/showData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");

const showData = () => {
  const listItems = document.querySelector('.calculator__content_square');
  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/squares').then(res => {
    res.forEach(item => {
      const {
        name,
        value,
        id
      } = item;
      const li = document.createElement('LI');
      li.classList.add('calculator__item');
      li.id = id;
      li.innerHTML = `<label class="calculator__item-text"><span>${name}:</span>
                        <div class="calculator__item-inner">
                            <input class="calculator__item-input" type="text" placeholder="0.0">
                            <span class="calculator__item-symb">м2</span>
                        </div>
                    </label>`;
      listItems.appendChild(li);
      document.querySelectorAll('.calculator__item-input').forEach(item => item.value = value);
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showData);

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
    tabs.forEach(tab => {
      tab.classList.remove('calculator__tab_active');
    });
    tabsContent.forEach(tabContent => {
      tabContent.classList.remove('fadeIn');
      tabContent.classList.add('none');
    });
  };
  const showTabContent = (i = 0) => {
    tabsContent[i].classList.remove('none');
    tabsContent[i].classList.add('fade-in');
    tabs[i].classList.add('calculator__tab_active');
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

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getResource: () => (/* binding */ getResource)
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'apllication/json'
    },
    body: data
  });
  return await res.json();
};
const getResource = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`couldn't get data, status response is ${res.status}`);
  }
  return await res.json();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);


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
/* harmony import */ var _helpers_showData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/showData */ "./src/js/helpers/showData.js");





window.addEventListener('DOMContentLoaded', () => {
  (0,_helpers_handleInput__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_helpers_showData__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
/******/ })()
;
//# sourceMappingURL=script.js.map