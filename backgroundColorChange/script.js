const darkColorsArr = [

    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#800020",
    "#1A237E",
    "#311B92",
    "#880E4F",
    "#3E2723",
    "#006064",
    "#004D40",
    "#1B5E20",
    "#BF360C",
    "#4E342E",
    "#263238",
    "#5D4037",
    "#212121",
    "#01579B",
    "#0D47A1",
    "#4A148C",
    "#7B1FA2",
    "#6A1B9A",
    "#1A472A",
    "#641E16",
    "#0B5345"
];

function getRandomIndex() {
    return Math.floor(darkColorsArr.length * Math.random());
}

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
}

const btn = document.querySelector("#btn");
btn.onclick = changeBackgroundColor;

window.onload = changeBackgroundColor;