let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
const h1 = document.querySelector("h1");
function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.querySelector('button').textContent = 'Start';
        h1.innerText="Press start to continue"
    } else {
        h1.innerText = "Counting...";
        timer = setInterval(updateTime, 1000);
        document.querySelector('button').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById('display');
    display.textContent = (hours < 10 ? '0' : '') + hours + ':' +
                          (minutes < 10 ? '0' : '') + minutes + ':' +
                          (seconds < 10 ? '0' : '') + seconds;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    h1.innerText="Start Timer"
    document.getElementById('display').textContent = '0:00:00';
    document.querySelector('button').textContent = 'Start';
}