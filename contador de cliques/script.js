let clickButton = document.getElementById('click-btn')
let restartButton = document.getElementById('restart-btn')
let counter = document.getElementById('counter')
let timeInterface = document.getElementById('time')
let count = 0
let time = 30
let controlOfTime


function clickCounter () {

    count++
    counter.innerHTML = count

    timeInterface.innerHTML = `Tempo: ${time}`

    if(count === 1) {
       controlOfTime = setInterval(timeCounter, 1000)
    }
    

}

function restartCounter () {
    count = 0
    time = 30

    counter.innerHTML = count
    timeInterface.innerHTML = 'Clique no botão mais para iniciar o contador. Você tem <b>30 segundos</b> para clicar o maior número de vezes!'

    clickButton.addEventListener('click', clickCounter)
    
    setTimeout(function(){
        restartButton.classList.remove('visible')
    },500)
}

function timeCounter () {
    time--
    timeInterface.innerHTML = `Tempo: ${time}`
    if(time === 0) {
        clearInterval(controlOfTime)

        clickButton.removeEventListener('click', clickCounter)

        if(count === 1){
            timeInterface.innerHTML = `Você clicou ${count} vez!`
        } else {
            timeInterface.innerHTML = `Você clicou ${count} vezes!`
        }

        restartButton.classList.add('visible')
        
    }
   
}

clickButton.addEventListener('click', clickCounter)
restartButton.addEventListener('click',restartCounter)