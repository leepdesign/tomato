let timer;
let totalSeconds = 0;

function startTimer() {
    let minutesInput = document.getElementById("minutesInput").value;
    if (!timer && minutesInput > 0) {
        totalSeconds = minutesInput * 60;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    document.getElementById("timer").textContent = formatTime(totalSeconds);
}

function updateTimer() {
    if (totalSeconds > 0) {
        totalSeconds--;
        document.getElementById("timer").textContent = formatTime(totalSeconds);
    } else {
        stopTimer();
    }
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    return `${formatNumber(minutes)}:${formatNumber(remainingSeconds)}`;
}

function formatNumber(number) {
    return number < 10 ? "0" + number : number;
}

function setPresetTimer(minutes) {
    document.getElementById("minutesInput").value = minutes;
}