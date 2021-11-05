// TIMER
const timer = document.getElementById('stopwatch')

let min = 01
let sec = 30
let stoptime = true

function realTime() {
  return (min * 60) + sec
}
function startTimer() {
  if (stoptime == true) {
        stoptime = false
        timerCycle()
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true
  }
}
function timerCycle() {
  if (stoptime == false) {
    sec = parseInt(sec)
    min = parseInt(min)

    sec = sec - 1

    if (sec == 0 && min == 0) {
      stopTimer()
    }
    if (sec == 0 && min == 1) {
      min = 0
      sec = 59
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec
    }
    if (min < 10 || min == 0) {
      min = '0' + min
    }
     timer.innerHTML = min + ':' + sec

    setTimeout("timerCycle()", 1000)
  }
}

function resetTimer() {
  timer.innerHTML = '01:00'
}
