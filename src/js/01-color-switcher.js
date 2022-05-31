function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBtnStart = document.querySelector('button[data-start]');
const onBtnStop = document.querySelector('button[data-stop]');
const bodyBgc = document.querySelector('body')

onBtnStart.addEventListener('click', onClickBtnStart);
onBtnStop.addEventListener('click', onClickBtnStop)

let timerId = null;

function changeColor() {
    timerId = setInterval(() => {
        bodyBgc.style.backgroundColor = getRandomHexColor();
    }, 1000);

}

function onClickBtnStart() {
    onBtnStart.disabled = true;
    changeColor()

}

function onClickBtnStop() {
    clearInterval(timerId);
    onBtnStart.disabled = false;
}