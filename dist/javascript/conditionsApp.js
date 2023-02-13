/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************************!*\
  !*** ./src/javascript/Conditions.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "condition": () => (/* binding */ condition),
/* harmony export */   "dateCheck": () => (/* binding */ dateCheck)
/* harmony export */ });

const regex = /^\d+$/;

const dateCheck = {
  dateDay: (day) => day > 0 && day < 32,
  dateMonth: (month) => month > 0 && month < 13,
  dateYear: (year) => year > 0,

  valDay: (day) => regex.test(day),
  valMonth: (month) => regex.test(month),
  valYear: (year) => regex.test(year),
};

function condition(day, month, year, currentDate, selectedDate) {
  return dateCheck.dateDay(day) &&
    dateCheck.dateMonth(month) &&
    dateCheck.dateYear(year) &&
    dateCheck.valDay(day) &&
    dateCheck.valMonth(month) &&
    dateCheck.valYear(year) &&
    selectedDate > currentDate
};

/******/ })()
;
//# sourceMappingURL=conditionsApp.js.map