// A few different console methods from.  http://joshbassett.info  Console Methods Accessed 2.4.2022
// countdown: https://jsfiddle.net/wr1ua0db/17/ Accessed 3.7.2022
// personal high score (30s): 80

let clicks = 0;
function resetBub(){
	document.getElementById("bubOne").src="./images/bubble.png";
	document.getElementById("bubTwo").src="./images/bubble.png";
	document.getElementById("bubThree").src="./images/bubble.png";
	document.getElementById("bubFour").src="./images/bubble.png";
	document.getElementById("bubFive").src="./images/bubble.png";
	document.getElementById("bubSix").src="./images/bubble.png";
	document.getElementById("bubSeven").src="./images/bubble.png";
	document.getElementById("bubEight").src="./images/bubble.png";
	document.getElementById("bubNine").src="./images/bubble.png";
	document.getElementById("bub10").src="./images/bubble.png";
	document.getElementById("bub11").src="./images/bubble.png";
	document.getElementById("bub12").src="./images/bubble.png";
}

function myFunction(bubId) {
    clicks += 1;               // Click detect: https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter
    document.getElementById("clicks").innerHTML = clicks;
    switch (bubId) {
        case 1:
            console.log("1 clicked");
            document.getElementById("bubOne").src="./images/bubblePopped.png";
            break;
        case 2:
            console.log("2 clicked");
            document.getElementById("bubTwo").src="./images/bubblePopped.png";
            break;
        case 3:
            console.log("3 clicked");
            document.getElementById("bubThree").src="./images/bubblePopped.png";
            break;
        case 4:
            console.log("4 clicked");
            document.getElementById("bubFour").src="./images/bubblePopped.png";
            break;
        case 5:
            console.log("5 clicked");
            document.getElementById("bubFive").src="./images/bubblePopped.png";
            break;
        case 6:
            console.log("6 clicked");
            document.getElementById("bubSix").src="./images/bubblePopped.png";
            break;
        case 7:
            console.log("7 clicked");
            document.getElementById("bubSeven").src="./images/bubblePopped.png";
            break;
        case 8:
            console.log("8 clicked");
            document.getElementById("bubEight").src="./images/bubblePopped.png";
            break;
        case 9:
            console.log("9 clicked");
            document.getElementById("bubNine").src="./images/bubblePopped.png";
            break;
        case 10:
            console.log("10 clicked");
            document.getElementById("bub10").src="./images/bubblePopped.png";
            break;
        case 11:
            console.log("11 clicked");
            document.getElementById("bub11").src="./images/bubblePopped.png";
            break;
        case 12:
            console.log("12 clicked");
            document.getElementById("bub12").src="./images/bubblePopped.png";
            break;
        default:
            console.log('Invalid item');
            break;
    }
    if (clicks % 12 === 0) {
        audio.play();
        jingle.play();		// Jingle plays when finishing a full sheet
		resetBub();
    } else {
        audio.play();
    }
}

function bgChange() {

}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        //minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
			clicks = 0;
			//alert("Times up!"); //annoying
			console.warn("Times up!")
            timer = duration;
			resetBub();
        }
    }, 1000);
}

window.onload = function () {
    var countdown = 29,
        display = document.querySelector('#time');
    startTimer(countdown, display);
};



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