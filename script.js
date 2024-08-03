const startBtn = document.getElementsByClassName("startBtn")[0];
const timer = document.getElementsByClassName("timer")[0];
const hr = document.getElementsByClassName("hr")[0];
const min = document.getElementsByClassName("min")[0];
const sec = document.getElementsByClassName("sec")[0];
const stopBtn = document.getElementsByClassName("stopBtn")[0];
const resetBtn = document.getElementsByClassName("resetBtn")[0];

let seconds = 57; // Seconds
let minutes = 0;  // Minutes
let hours = 0;    // Hours
let intervalId;

function updateDisplay() {
    sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    hr.innerHTML = hours < 10 ? "0" + hours : hours;
}

startBtn.addEventListener("click", () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();
