function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var onBtnStart=document.querySelector("button[data-start]"),onBtnStop=document.querySelector("button[data-stop]"),bodyBgc=document.querySelector("body");onBtnStart.addEventListener("click",onClickBtnStart),onBtnStop.addEventListener("click",onClickBtnStop);var timerId=null;function changeColor(){timerId=setInterval((function(){bodyBgc.style.backgroundColor=getRandomHexColor()}),1e3)}function onClickBtnStart(){onBtnStart.disabled=!0,changeColor()}function onClickBtnStop(){clearInterval(timerId),onBtnStart.disabled=!1}
//# sourceMappingURL=01-color-switcher.d23345e6.js.map
