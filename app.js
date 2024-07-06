/******************SELECTORS*********************/
const display = document.getElementById("display")

/******************VARIABLES*********************/
//Timer is going to hold the id of setInterval, to keep track of it
let timer = null
let startTime = 0
let elapsedTime = 0
let isRunning = false

/******************FUNCTIONS*********************/
function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime
        timer = setInterval(update, 10)
        isRunning = true
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

//To update the display
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    //Convert the miliseconds into a readble format
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    //Convert the values into a string, so that if there's only one digit, there's a 0 in place before it
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}