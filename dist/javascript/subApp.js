/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/variables.js":
/*!*************************************!*\
  !*** ./src/javascript/variables.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumErrorMsg": () => (/* binding */ NumErrorMsg),
/* harmony export */   "calcMsg": () => (/* binding */ calcMsg),
/* harmony export */   "dateDisplay": () => (/* binding */ dateDisplay),
/* harmony export */   "dayCount": () => (/* binding */ dayCount),
/* harmony export */   "dayInput": () => (/* binding */ dayInput),
/* harmony export */   "doneMsg": () => (/* binding */ doneMsg),
/* harmony export */   "hourCount": () => (/* binding */ hourCount),
/* harmony export */   "infoMsg": () => (/* binding */ infoMsg),
/* harmony export */   "lowerPart": () => (/* binding */ lowerPart),
/* harmony export */   "minuteCount": () => (/* binding */ minuteCount),
/* harmony export */   "monthCount": () => (/* binding */ monthCount),
/* harmony export */   "monthInput": () => (/* binding */ monthInput),
/* harmony export */   "progressBar": () => (/* binding */ progressBar),
/* harmony export */   "resetButton": () => (/* binding */ resetButton),
/* harmony export */   "secCount": () => (/* binding */ secCount),
/* harmony export */   "selectButton": () => (/* binding */ selectButton),
/* harmony export */   "theDateMsec": () => (/* binding */ theDateMsec),
/* harmony export */   "theDay": () => (/* binding */ theDay),
/* harmony export */   "theMonth": () => (/* binding */ theMonth),
/* harmony export */   "theYear": () => (/* binding */ theYear),
/* harmony export */   "yearCount": () => (/* binding */ yearCount),
/* harmony export */   "yearInput": () => (/* binding */ yearInput)
/* harmony export */ });
//- DATE -------------->
const theTime = new Date();
const theDay = theTime.getDate();
const theMonth = theTime.getMonth();
const theYear = theTime.getFullYear();
const theDateMsec = theTime.getTime();


//- buttons ----------->
const selectButton = document.querySelector('.submit');
const resetButton = document.querySelector('.reset');

//- inputs ------------>
const dayInput = document.querySelector('.day');
const monthInput = document.querySelector('.month');
const yearInput = document.querySelector('.year');

//- messages ---------->
const infoMsg = document.querySelector('.info');
const calcMsg = document.querySelector('.calc');
const NumErrorMsg = document.querySelector('.error_num');
const doneMsg = document.querySelector('.done');

//- parts ------------->
const lowerPart = document.querySelector('.mask');

//- date count ------>
const yearCount = document.querySelector('.yearDes');
const monthCount = document.querySelector('.monthDes');
const dayCount = document.querySelector('.dayDes');
const hourCount = document.querySelector('.hourDes');
const minuteCount = document.querySelector('.minuteDes');
const secCount = document.querySelector('.secDes');

//- date display ---->
const dateDisplay = document.querySelector(".date_text span");

//- progress bar ---->
const progressBar = document.querySelector('.progress');




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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/javascript/subApp.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateDeferent": () => (/* binding */ dateDeferent),
/* harmony export */   "disableInputs": () => (/* binding */ disableInputs),
/* harmony export */   "displayDate": () => (/* binding */ displayDate),
/* harmony export */   "resetButtons": () => (/* binding */ resetButtons),
/* harmony export */   "resetInputs": () => (/* binding */ resetInputs),
/* harmony export */   "showError": () => (/* binding */ showError),
/* harmony export */   "showLowerPart": () => (/* binding */ showLowerPart),
/* harmony export */   "showSuccess": () => (/* binding */ showSuccess)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/javascript/variables.js");

//- importing variables.


//- reset all the inputs values.
function resetInputs() {
  document.querySelector('.day').value = "";
  document.querySelector('.month').value = "";
  document.querySelector('.year').value = "";
};

//- show the error message.
function showError() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.calcMsg.classList.add('hide');
  _variables__WEBPACK_IMPORTED_MODULE_0__.infoMsg.classList.add('hide');
  _variables__WEBPACK_IMPORTED_MODULE_0__.NumErrorMsg.classList.remove('hide');

  _variables__WEBPACK_IMPORTED_MODULE_0__.dayInput.focus();

  setTimeout(() => {
    _variables__WEBPACK_IMPORTED_MODULE_0__.infoMsg.classList.remove('hide');
    _variables__WEBPACK_IMPORTED_MODULE_0__.NumErrorMsg.classList.add('hide');
  }, 3000);
};

//- show success message.
function showSuccess() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.infoMsg.classList.add('hide');
  _variables__WEBPACK_IMPORTED_MODULE_0__.doneMsg.classList.remove('hide');

  setTimeout(() => {
    _variables__WEBPACK_IMPORTED_MODULE_0__.calcMsg.classList.remove('hide');
    _variables__WEBPACK_IMPORTED_MODULE_0__.doneMsg.classList.add('hide');
  }, 3000);
};

//- disable inputs and hide select button.
function disableInputs() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.dayInput.classList.add('disableInput');
  _variables__WEBPACK_IMPORTED_MODULE_0__.monthInput.classList.add('disableInput');
  _variables__WEBPACK_IMPORTED_MODULE_0__.yearInput.classList.add('disableInput');

  _variables__WEBPACK_IMPORTED_MODULE_0__.selectButton.classList.add('hide');
  _variables__WEBPACK_IMPORTED_MODULE_0__.resetButton.classList.remove('hide');
};

//- show select button and hide reset button.
function resetButtons() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.selectButton.classList.remove('hide');
  _variables__WEBPACK_IMPORTED_MODULE_0__.resetButton.classList.add('hide');
};

//- show lower part of the container.
function showLowerPart() {
  _variables__WEBPACK_IMPORTED_MODULE_0__.lowerPart.classList.remove('hide');
};

//- display the selected date.
function displayDate(day, month, year) {
  _variables__WEBPACK_IMPORTED_MODULE_0__.dateDisplay.innerText = `${day}/${month}/${year}`;
};

//- calculate the deferent between dates.
function dateDeferent(selectedDate) {
  let interval = setInterval(() => {
    let theDeferent = selectedDate - new Date().getTime();

    const years = theDeferent / 31_556_952_000;
    const months = (years - Math.floor(years)) * 12;
    const days = (months - Math.floor(months)) * 30;
    const hours = (days - Math.floor(days)) * 24;
    const min = (hours - Math.floor(hours)) * 60;
    const sec = (min - Math.floor(min)) * 60;

    dateTimeDisplay(floorNum(years), floorNum(months), floorNum(days), floorNum(hours), floorNum(min), floorNum(sec));

    progressBar(selectedDate - new Date().getTime());

    if (theDeferent < 0) {
      clearInterval(interval);
    };
  }, 1000);
};

//_ ------------------------>
//! Sub Functions ---------->
//_ ------------------------>

// return the correct number.
function floorNum(num) {
  return Math.floor(num);
};

// display date on screen.
function dateTimeDisplay(year, month, day, hour, min, sec) {
  year < 10 ? _variables__WEBPACK_IMPORTED_MODULE_0__.yearCount.innerText = `0${year}` : _variables__WEBPACK_IMPORTED_MODULE_0__.yearCount.innerText = year;
  month < 10 ? _variables__WEBPACK_IMPORTED_MODULE_0__.monthCount.innerText = `0${month}` : _variables__WEBPACK_IMPORTED_MODULE_0__.monthCount.innerText = month;
  day < 10 ? _variables__WEBPACK_IMPORTED_MODULE_0__.dayCount.innerText = `0${day}` : _variables__WEBPACK_IMPORTED_MODULE_0__.dayCount.innerText = day;
  hour < 10 ? _variables__WEBPACK_IMPORTED_MODULE_0__.hourCount.innerText = `0${hour}` : _variables__WEBPACK_IMPORTED_MODULE_0__.hourCount.innerText = hour;
  min < 10 ? _variables__WEBPACK_IMPORTED_MODULE_0__.minuteCount.innerText = `0${min}` : _variables__WEBPACK_IMPORTED_MODULE_0__.minuteCount.innerText = min;
  sec < 10 ? _variables__WEBPACK_IMPORTED_MODULE_0__.secCount.innerText = `0${sec}` : _variables__WEBPACK_IMPORTED_MODULE_0__.secCount.innerText = sec;

};

// counting and changing progress bar. 
function progressBar(selectedDate) {
  const percentage = (100 / (selectedDate / 1000));
  _variables__WEBPACK_IMPORTED_MODULE_0__.progressBar.style.width = `${percentage}%`;

  console.log(percentage);
};
// progressBar(new Date().getTime());
})();

/******/ })()
;
//# sourceMappingURL=subApp.js.map