let speed = 50;
let loopSpeed = 1000;
let whiteSpan = document.getElementById("whiteSpan");
let blackSpan = document.getElementById("blackSpan");

var whiteText = "";
var blackText = blackSpan.innerHTML;

function typeWriter() {
    blackSpan.innerHTML = blackText;
    whiteSpan.innerHTML = whiteText;
    if (blackText.length != 0) {
        whiteText += blackText[0];
        blackText = blackText.substr(1);
        setTimeout(typeWriter, speed);
    } else {
        blackText = whiteText;
        whiteText = "";
        setTimeout(typeWriter, loopSpeed);
    }   
}