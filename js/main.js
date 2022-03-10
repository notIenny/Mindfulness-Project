// Countdown: https://jsfiddle.net/wr1ua0db/17/ Accessed 3.7.2022
// Click detect: https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter Accessed 3.7.2022
// fillArray code: https://thewebdev.info/2021/03/06/how-to-create-a-javascript-array-with-the-same-element-repeated-multiple-times/ Accessed 3.8.2022
// https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/ Step 4's making HTML code in JS referenced, Accessed 3.8.2022

let bubbles = 16;
let clicks = 0; //Click counter
let theme = 0; //BG color/image
var amountToAdd = 0;

const fillArray = (value, length) => {
    const popped = [];
    for (let i = 0; i < length; i++) {
        popped.push(value);
    }
    return popped;
  }
var popped = fillArray(false, bubbles)

// Adds given amount of bubbles, the += sign adds instead of overwriting
while (amountToAdd != bubbles) {
    document.getElementById("sheet").innerHTML += `<i><img id="${'bub'+(amountToAdd+1)}" src="./images/bubble.png" onclick="popCheck(${amountToAdd})"/></i>`; 
    amountToAdd += 1;
}

// Reset bubbles + states
function resetBub(){ 
    x = 0;
    while (x != bubbles) {
        document.getElementById("bub"+(x+1)).src="./images/bubble.png";
        x += 1;
    }
    popped = fillArray(false, bubbles)
}

// Is the bubble already popped? If no, add to click counter. If yes, ignore.
function evaluate(bubId) {
    if (popped[bubId] != true) {
        console.log(`Bubble #${bubId + 1} popped`);
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
        pop.play();
        popped[bubId] = true;
    } else {
        console.log('Already popped');
    }
}

// Evaluates when a bubble is clicked
function popCheck(bubId) {
    switch (bubId) {
        default:
            document.getElementById(`bub${bubId+1}`).src="./images/bubblePopped.png";
            evaluate(bubId);
            break;
    }
    if (clicks % bubbles === 0) {
        jingle.play();
    }
}

// Timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        //minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
			//alert("Times up!"); //annoying
			console.warn("Times up!")
            timer = duration;
			resetBub();
			clicks = 0;
			document.getElementById("clicks").innerHTML = clicks;
        }
    }, 1000);
}

//Swap background color/image
function bgChange() {
    switch (theme) {
        case 0:
            color = '#a9e7b8';
            theme = 1;
            break;
        case 1:
            color = '#9592d3';
            theme = 2;
            break;
        case 2:
            color = '#d1d485';
            theme = 3;
            break;
        case 3:
            color = '#a9c8e7';
            theme = 0;
            break;
    }
    paint.play();
    document.documentElement.style.setProperty('--bgcol', color);
}

//Begin timer when window is loaded
window.onload = function () { 
    var countdown = 30, // # of seconds
        display = document.querySelector('#time');
    startTimer((countdown-1), display); // one subtracted from countdown since it already spends a second on the original amount
};

console.log(popped);















// The if-else graveyard
/*
    if(bubId==1){
    }
    else if(bubId==2){
        console.log("2 clicked");
        document.getElementById("bubTwo").src="./images/bubblePopped.png";
    }
    else if(bubId==3){
        console.log("3 clicked");
        document.getElementById("bubThree").src="./images/bubblePopped.png";
    }
    else if(bubId==4){
        console.log("4 clicked");
        document.getElementById("bubFour").src="./images/bubblePopped.png";
    }
    else if(bubId==5){
        console.log("5 clicked");
        document.getElementById("bubFive").src="./images/bubblePopped.png";
    }
    else if(bubId==6){
        console.log("6 clicked");
        document.getElementById("bubSix").src="./images/bubblePopped.png";
    }
    else if(bubId==7){
        console.log("7 clicked");
        document.getElementById("bubSeven").src="./images/bubblePopped.png";
    }
    else if(bubId==8){
        console.log("8 clicked");
        document.getElementById("bubEight").src="./images/bubblePopped.png";
    }
    else if(bubId==9){
        console.log("9 clicked");
        document.getElementById("bubNine").src="./images/bubblePopped.png";
    }
    else if(bubId==10){
        console.log("10 clicked");
        document.getElementById("bub10").src="./images/bubblePopped.png";
    }
    else if(bubId==11){
        console.log("11 clicked");
        document.getElementById("bub11").src="./images/bubblePopped.png";
    }
    else if(bubId==12){
        console.log("12 clicked");
        document.getElementById("bub12").src="./images/bubblePopped.png";
    }
    else{
        console.warn("ERROR");
    }*/