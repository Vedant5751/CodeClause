document.addEventListener("DOMContentLoaded", function () {
    const timerHours = document.getElementById("timer-hours");
    const timerMinutes = document.getElementById("timer-minutes");
    const timerSeconds = document.getElementById("timer-seconds");
    const startTimerButton = document.getElementById("start-timer");
    const stopTimerButton = document.getElementById("stop-timer");
    const resetTimerButton = document.getElementById("reset-timer");
    const timerDisplay = document.getElementById("timer-display");
    const stopwatchDisplay = document.getElementById("stopwatch-display");
    const startStopwatchButton = document.getElementById("start-stopwatch");
    const stopStopwatchButton = document.getElementById("stop-stopwatch");
    const resetStopwatchButton = document.getElementById("reset-stopwatch");

    let timerInterval;
    let stopwatchInterval;
    let timerTime = 0;
    let stopwatchTime = 0;
    let isTimerRunning = false;
    let isStopwatchRunning = false;

    startTimerButton.addEventListener("click", () => {
        if (!isTimerRunning) {
            const hours = parseInt(timerHours.value) || 0;
            const minutes = parseInt(timerMinutes.value) || 0;
            const seconds = parseInt(timerSeconds.value) || 0;
            timerTime = hours * 3600 + minutes * 60 + seconds;

            if (timerTime > 0) {
                isTimerRunning = true;
                startTimerButton.disabled = true;

                timerInterval = setInterval(() => {
                    if (timerTime > 0) {
                        timerTime--;
                        timerDisplay.textContent = formatTime(timerTime);
                    } else {
                        clearInterval(timerInterval);
                        isTimerRunning = false;
                        startTimerButton.disabled = false;
                    }
                }, 1000);
            }
        }
    });

    startStopwatchButton.addEventListener("click", () => {
        if (!isStopwatchRunning) {
            isStopwatchRunning = true;
            startStopwatchButton.disabled = true;
            let seconds = 0;

            stopwatchInterval = setInterval(() => {
                seconds++;
                stopwatchDisplay.textContent = formatTime(seconds);
            }, 1000);
        }
    });

    stopTimerButton.addEventListener("click", () => {
        clearInterval(timerInterval);
        isTimerRunning = false;
        startTimerButton.disabled = false;
    });

    stopStopwatchButton.addEventListener("click", () => {
        clearInterval(stopwatchInterval);
        isStopwatchRunning = false;
        startStopwatchButton.disabled = false;
    });

    resetTimerButton.addEventListener("click", () => {
        clearInterval(timerInterval);
        isTimerRunning = false;
        startTimerButton.disabled = false;
        timerTime = 0;
        timerDisplay.textContent = "00:00:00";
    });

    resetStopwatchButton.addEventListener("click", () => {
        clearInterval(stopwatchInterval);
        isStopwatchRunning = false;
        startStopwatchButton.disabled = false;
        stopwatchTime = 0;
        stopwatchDisplay.textContent = "00:00:00";
    });

    function formatTime(timeInSeconds) {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
});
