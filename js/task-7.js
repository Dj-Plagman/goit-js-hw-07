
//скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text
//оновлюючи властивість font-size. В результаті при перетеягувані бігунка змінюється розмір тексту.

<input id="font-size-control" type="range" />


const inputRange = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

inputRange.addEventListener("input", fontSizeControl);

function fontSizeControl(event) {
    text.style.fontSize = event.currentTarget.value + "px";
};