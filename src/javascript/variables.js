//- DATE -------------->
const theTime = new Date();
export const theDay = theTime.getDate();
export const theMonth = theTime.getMonth();
export const theYear = theTime.getFullYear();
export const theDateMsec = theTime.getTime();


//- buttons ----------->
export const selectButton = document.querySelector('.submit');
export const resetButton = document.querySelector('.reset');

//- inputs ------------>
export const dayInput = document.querySelector('.day');
export const monthInput = document.querySelector('.month');
export const yearInput = document.querySelector('.year');

//- messages ---------->
export const infoMsg = document.querySelector('.info');
export const calcMsg = document.querySelector('.calc');
export const NumErrorMsg = document.querySelector('.error_num');
export const doneMsg = document.querySelector('.done');

//- parts ------------->
export const lowerPart = document.querySelector('.mask');

//- date count ------>
export const yearCount = document.querySelector('.yearDes');
export const monthCount = document.querySelector('.monthDes');
export const dayCount = document.querySelector('.dayDes');
export const hourCount = document.querySelector('.hourDes');
export const minuteCount = document.querySelector('.minuteDes');
export const secCount = document.querySelector('.secDes');

//- date display ---->
export const dateDisplay = document.querySelector(".date_text span");

//- progress bar ---->
export const progressBar = document.querySelector('.progress');


