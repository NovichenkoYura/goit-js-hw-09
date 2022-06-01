import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";


const inputDate = document.querySelector('#datetime-picker');
const onBtnStart = document.querySelector('button[data-start]')
let daysQty = document.querySelector('span[data-days]');
let hoursQty = document.querySelector('span[data-hours]');
let minuteQty = document.querySelector('span[data-minutes]');
let secondQty = documetn.querySelector('span[data-seconds]');
let intervalId;
let delta;
let timeStart = new Date();
let timeFinish;


onBtnStart.addEventListener('click', onClickBtnStart);

function onClickBtnStart() {
    onBtnStart.disabled = true;
    count()
}

function count() {
    intervalId = setInterval(() => {
        delta = timeFinish - timeStart;
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

flatpickr(inputDate, options)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}