"use strict";
//- importing variables.
import * as v from './variables';

//- reset all the inputs values.
export function resetInputs() {
  document.querySelector('.day').value = "";
  document.querySelector('.month').value = "";
  document.querySelector('.year').value = "";
};

//- show the error message.
export function showError() {
  v.calcMsg.classList.add('hide');
  v.infoMsg.classList.add('hide');
  v.NumErrorMsg.classList.remove('hide');

  v.dayInput.focus();

  setTimeout(() => {
    v.infoMsg.classList.remove('hide');
    v.NumErrorMsg.classList.add('hide');
  }, 3000);
};

//- show success message.
export function showSuccess() {
  v.infoMsg.classList.add('hide');
  v.doneMsg.classList.remove('hide');

  setTimeout(() => {
    v.calcMsg.classList.remove('hide');
    v.doneMsg.classList.add('hide');
  }, 3000);
};

//- disable inputs and hide select button.
export function disableInputs() {
  v.dayInput.classList.add('disableInput');
  v.monthInput.classList.add('disableInput');
  v.yearInput.classList.add('disableInput');

  v.selectButton.classList.add('hide');
  v.resetButton.classList.remove('hide');
};

//- show select button and hide reset button.
export function resetButtons() {
  v.selectButton.classList.remove('hide');
  v.resetButton.classList.add('hide');
};

//- show lower part of the container.
export function showLowerPart() {
  v.lowerPart.classList.remove('hide');
};

//- display the selected date.
export function displayDate(day, month, year) {
  v.dateDisplay.innerText = `${day}/${month}/${year}`;
};

//- calculate the deferent between dates.
export function dateDeferent(selectedDate) {
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
  year < 10 ? v.yearCount.innerText = `0${year}` : v.yearCount.innerText = year;
  month < 10 ? v.monthCount.innerText = `0${month}` : v.monthCount.innerText = month;
  day < 10 ? v.dayCount.innerText = `0${day}` : v.dayCount.innerText = day;
  hour < 10 ? v.hourCount.innerText = `0${hour}` : v.hourCount.innerText = hour;
  min < 10 ? v.minuteCount.innerText = `0${min}` : v.minuteCount.innerText = min;
  sec < 10 ? v.secCount.innerText = `0${sec}` : v.secCount.innerText = sec;

};

// counting and changing progress bar. 
function progressBar(selectedDate) {
  const percentage = (100 / (selectedDate / 1000));
  v.progressBar.style.width = `${percentage}%`;

  console.log(percentage);
};
// progressBar(new Date().getTime());