let hour = 0
let minute = 0
let second = 0
let watch = document.querySelector('#watch')
let startButton = document.querySelector('.start-btn')
let pauseButton = document.querySelector('.pause-btn')
let stopButton = document.querySelector('.stop-btn')
let message = document.querySelector('p')

let interval

function twoDigits (digit) {
    
    if(digit<10) {
        return `0${digit}`
    } else {
        return digit
    }
}

function startTimer () {

    watchCondition()
    interval = setInterval(watchCondition, 1)

    message.innerHTML = ''

        
}

function pauseTimer () {
    
    clearInterval(interval)
}

function stopTimer () {
    
    clearInterval(interval)
    hour = 0
    minute = 0
    second = 0
    message.innerHTML = `Você parou: <b>${watch.innerText}</b>`
    watch.innerHTML = '00:00:00'

}

function watchCondition () {
    second++
    if (second === 60) {
        minute++
        second = 0
        if (minute === 60) {
            hour++
            minute = 0
        }
    }

    watch.innerHTML = `${twoDigits(hour)}:${twoDigits(minute)}:${twoDigits(second)}`
}

startButton.onclick = startTimer
pauseButton.onclick = pauseTimer
stopButton.onclick = stopTimer