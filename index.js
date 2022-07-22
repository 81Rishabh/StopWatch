const min = document.getElementById("min");
const sec = document.getElementById("sec");
const miliSecond = document.getElementById("milSec");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const container = document.querySelector(".container");

// set time before initalTime while initialTime < 10
function timeWithBeforeZero(intialtime) {
  var TimeWithBeforeZero;
  if (intialtime < 10) {
    TimeWithBeforeZero = "0" + intialtime;
  } else {
    TimeWithBeforeZero = intialtime;
  }
  return TimeWithBeforeZero;
}

let interval;
var intialtime = 0;
var intialSec = 0;
var intialMin = 1;
let isIntervalCleared = false;


// reset stop watch as intitial state
function reset() {
    min.innerText = "00";
    sec.innerText = "00";
    miliSecond.innerText = "00";
  if (isIntervalCleared) {
    (intialtime = 0), (intialMin = 0), (intialSec = 0);
  } else {
    clearInterval(interval);
    (intialtime = 0), (intialMin = 0), (intialSec = 0);
  }
}
// reset function invoke
reset();

// start watch
function startTime() {
  interval = setInterval(function () {
    if (intialSec == 61) {
      min.innerText = timeWithBeforeZero(intialMin);
      intialMin += 1;
      intialSec = 0;
    }

    if (intialtime == 61) {
      sec.innerText = timeWithBeforeZero(intialSec);
      intialSec++;
      intialtime = 0;
    }

    miliSecond.innerText = timeWithBeforeZero(intialtime);
    intialtime++;
  }, 10); // 10 --> 0.01sec
}

// stop stop watch defination
function stopWatch() {
  clearInterval(interval);
  isIntervalCleared = true;
}


startBtn.addEventListener("click", startTime);
stopBtn.addEventListener("click", stopWatch);
resetBtn.addEventListener("click", reset);
