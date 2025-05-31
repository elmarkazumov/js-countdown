function countdown(time, display){
    let countdown = time;
    let sec;
    let min;
    const interval = setInterval(() => {
        sec = parseInt(countdown % 60);
        min = parseInt(countdown / 60);

        sec = sec < 10 ? `0${sec}`: sec;
        min = min < 10 ? `0${min}`: min;

        display = `${min}:${sec}`;
        
        if(--countdown < 0) {
            countdown = time;
        }
    }, 1000);
}

