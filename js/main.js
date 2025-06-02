let time = 300;

const elements = {
    countdownDisplay: document.querySelector('.countdown__time'),
    countdownStartButton: document.querySelector('.countdown__start'),
    countdownStopButton: document.querySelector('.countdown__stop'),
    countdownDuration: document.querySelector('.countdown__duration'),
}

function getDuration(){
    elements.countdownDuration.value = Number(elements.countdownDuration.value);
    
    if(elements.countdownDuration.value === 0) {
        alert('Укажите кол-во минут');
    } else {
        time = elements.countdownDuration.value * 60;
    }
}

function countdown(time, display){
    let countdown = time;
    let sec;
    let min;
    const interval = setInterval(() => {
        sec = parseInt(countdown % 60);
        min = parseInt(countdown / 60);

        sec = sec < 10 ? `0${sec}`: sec;
        min = min < 10 ? `0${min}`: min;

        display.textContent = `${min}:${sec}`;
        
        if(--countdown < 0) {
            countdown = time;
        }
    }, 1000);

    elements.countdownStopButton.addEventListener('click', () => {
        clearInterval(interval);
    })
}

elements.countdownStartButton.addEventListener('click', () => {
    getDuration();
    countdown(time, elements.countdownDisplay);
})