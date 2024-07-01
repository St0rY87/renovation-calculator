/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/helpers/handleData.js":
/*!**************************************!*\
  !*** ./src/js/helpers/handleData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _handleInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleInput */ "./src/js/helpers/handleInput.js");


const showData = (selectorListItems, selectorOverlay, ref, markupTemplate, ...variables) => {
  const listItems = document.querySelector(selectorListItems),
    overlay = document.querySelector(selectorOverlay);
  overlay.classList.remove('none');
  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)(ref).then(res => {
    overlay.classList.add('none');
    res.forEach(item => {
      const selectedVariables = {};
      variables.forEach(variable => {
        selectedVariables[variable] = item[variable];
      });
      const li = document.createElement('LI');
      li.classList.add('calculator__item');
      li.id = selectedVariables.id;
      li.innerHTML = markupTemplate(selectedVariables);
      listItems.appendChild(li);
    });
  }).catch(error => {
    console.error('Error fetching data');
  });
};
showData('.calculator__content_square', '.overlay', 'http://localhost:3000/squares', selectedVariable => `
        <label class="calculator__item-text">
        <span>${selectedVariable.name}:</span>
            <div class="calculator__item-inner">
            <input class="calculator__item-input" type="text" placeholder="0.0">
        <span class="calculator__item-symb">м2</span>
            </div>
        </label>`, 'id', 'name');
showData('.calculator__content_require-works', '.overlay.overlay_require-works', 'http://localhost:3000/operations', selectedVariable => `
                           <label class="calculator__item-text calculator__item-text_require-works">
                                            <p>${selectedVariable.name}
                                                <span
                                                    class=" accent calculator__item-accent calculator__item-accent_require-works ">
                                                    ${selectedVariable.count}/${selectedVariable.unit}</span>
                                            </p>
                                            <div class="calculator__item-inner  calculator__item-inner_require-works ">
                                                <input type="checkbox" class="checkbox dismantling" name="dismantling">
                                            </div>
                                        </label>
                                    `, 'id', 'name', 'count', 'unit');
setTimeout(() => {
  (0,_handleInput__WEBPACK_IMPORTED_MODULE_1__["default"])();
}, 2000);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showData);

/***/ }),

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
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _helpers_handleData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/handleData */ "./src/js/helpers/handleData.js");


// import handleInput from "./helpers/handleInput"


// import { showDataRequireWorks } from "./helpers/handleData"

window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
/******/ })()
;
//# sourceMappingURL=script.js.map