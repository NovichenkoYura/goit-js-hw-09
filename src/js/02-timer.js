import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';


const inputDate = document.querySelector('#datetime-picker');
const onBtnStart = document.querySelector('button[data-start]')
let daysQty = document.querySelector('span[data-days]');
let hoursQty = document.querySelector('span[data-hours]');
let minuteQty = document.querySelector('span[data-minutes]');
let secondQty = document.querySelector('span[data-seconds]');
let intervalId;
let delta;
let timeStart = new Date();
let timeFinish;


onBtnStart.addEventListener('click', onClickBtnStart);

function onClickBtnStart() {
    count()
}

function count() {
  intervalId = setInterval(() => {
       delta = timeFinish - Date.now();
        // delta = timeFinish - timeStart;
        const dateOffset = convertMs(delta);
        clockView(dateOffset);
        
    }, 1000);
}

function clockView(dateOffset) {
    daysQty.textContent = dateOffset.days;
    hoursQty.textContent = dateOffset.hours;
    minuteQty.textContent = dateOffset.minutes;
    secondQty.textContent = dateOffset.seconds;
}

function clearView() {
  clockView({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate(selectedDates[0]);
  },
};


flatpickr(inputDate, options)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}



function selectDate(selectTime){
      timeFinish = Date.parse(selectTime);
      // timeFinish = selectTime.getTime()  - ???? ?????????? ????????????
      // delta = timeFinish - Date.now();
      delta = timeFinish-Date.now();  
    
  if (delta <= 0) {
    onBtnStart.disabled = true;
    clearInterval(intervalId);
    clearView()
    // window.alert("Please choose a date in the future");

    Notiflix.Notify.failure("Please choose a date in the future");
      return;
    }
    else {
    onBtnStart.disabled = false;
    return timeFinish;
    }
};