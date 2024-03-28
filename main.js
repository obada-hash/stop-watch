let secondsPassed = 0;
let interval = null;
const time = document.querySelector('h1');

function padStart(value) {
    return String(value).padStart(2, '0');
}

function start() {
    if (interval) resetClock();
    interval = setInterval(timer, 1000);
}

function resetClock() {
    pause();
    secondsPassed = 0;
    show();
}
function timer() {
    secondsPassed++;
    show();
}
function stop() {

    clearInterval(interval);
    secondsPassed = 0;
    time.innerHTML = '00:00:00';
}

function pause() { clearInterval(interval); }

function show() {
    const hour = Math.floor(secondsPassed / 60 / 60);
    const min = Math.floor(secondsPassed / 60);
    const sec = Math.floor(secondsPassed % 60);

    time.innerHTML = `${padStart(hour)}:${padStart(min)}:${padStart(sec)}`;
}

