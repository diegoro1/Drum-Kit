let highHat = new Audio("sounds/hihat.wav");
let bass = new Audio("sounds/boom.wav");
let clash = new Audio("sounds/openhat.wav");
let snare = new Audio("sounds/snare.wav");
let highTom = new Audio("sounds/tom.wav");
let tink = new Audio("sounds/tink.wav");

const clashBtn = document.querySelector('#btn1');
const highHatBtn = document.querySelector('#btn2');
const bassBtn = document.querySelector('#btn3');
const snareBtn = document.querySelector('#btn4');
const highTomBtn = document.querySelector('#btn5');
const tinkBtn = document.querySelector('#btn6');


function playSound(key){
    switch (key.keyCode){
        case 65:
            clash.currentTime = 0;
            clash.play();
            clashBtn.classList.add('play');
            break;
        case 83:
            highHat.currentTime = 0;
            highHat.play();
            highHatBtn.classList.add('play');
            break;
        case 68:
            bass.currentTime = 0;
            bass.play();
            bassBtn.classList.add('play');
            break;
        case 70:
            snare.currentTime = 0;
            snare.play();
            snareBtn.classList.add('play');
            break;
        case 71:
            highTom.currentTime = 0;
            highTom.play();
            highTomBtn.classList.add('play');
            break;
        case 72:
            tink.currentTime = 0;
            tink.play();
            tinkBtn.classList.add('play');
            break;
    }
}

function endPlaySound(key){
    switch (key.keyCode){
        case 65:
            clashBtn.classList.remove('play');
            break;
        case 83:
            highHatBtn.classList.remove('play');
            break;
        case 68:
            bassBtn.classList.remove('play');
            break;
        case 70:
            snareBtn.classList.remove('play');
            break;
        case 71:
            highTomBtn.classList.remove('play');
            break;
        case 72:
            tinkBtn.classList.remove('play');
            break;
    }
}

window.addEventListener("keydown", playSound, false);
window.addEventListener("keyup", endPlaySound, false);


// for mobile/no key board
highHatBtn.addEventListener("click", () => {
    highHat.currentTime = 0;
    highHat.play();
});
bassBtn.addEventListener("click", () => {
    bass.currentTime = 0;
    bass.play();
});
clashBtn.addEventListener("click", () => {
    clash.currentTime = 0;
    clash.play();
});
snareBtn.addEventListener("click", () => {
    snare.currentTime = 0;
    snare.play();
});
highTomBtn.addEventListener("click", () => {
    highTom.currentTime = 0;
    highTom.play();
});
tinkBtn.addEventListener("click", () => {
    tink.currentTime = 0;
    tink.play();
});