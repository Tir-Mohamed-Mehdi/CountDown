"use strict";
// import scss style files.
import "../scss/mainStyle.scss";

// import javascript files.
import * as fun from "./subApp";
import { condition as cond } from "./Conditions";
import * as v from './variables';

//_ when you click select date button.
v.selectButton.onclick = () => {
  // inputs values.
  const day = document.querySelector('.day').value;
  const month = document.querySelector('.month').value;
  const year = document.querySelector('.year').value;

  // the selected date with milliseconds.
  const selectedDay = new Date(`${month}/${day}/${year}`).getTime();

  // the condition you will check the validation base on. 
  const condition = cond(day, month, year, v.theDateMsec, selectedDay);

  // the check statement.
  if (condition) {
    // show success message.
    fun.showSuccess();

    // show the lower part of the container.
    fun.showLowerPart();

    // disable all inputs.
    fun.disableInputs();

    // calc the selected date milliseconds.
    fun.dateDeferent(selectedDay);

    // display the selected date below the container.
    fun.displayDate(day, month, year);

  } else {
    // show error message.
    fun.showError();
  };

  // reset inputs values.
  fun.resetInputs();
};

//_ when you click reset button.
v.resetButton.onclick = () => {
  location.reload();
};
