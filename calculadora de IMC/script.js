let inputHeight = document.querySelector('.input-height')
let inputWeight = document.querySelector('.input-weight')
let button = document.querySelector('button')
let result = document.querySelector('.result')

function calculateIMC (e) {
    let height = inputHeight.value / 100
    let weight = inputWeight.value
    let imc = weight/height ** 2
    let weightResult

    e.target.nextElementSibling.className= 'result'

    if (imc < 18.5) {
        weightResult = 'abaixo do peso'
        result.classList.add('blue')
    } else if (imc > 18.5 && imc < 24.9) {
        weightResult = 'normal'
        result.classList.add('green')
    } else if (imc > 25 && imc < 29.9 ) {
        weightResult = 'excesso de peso'
        result.classList.add('yellow')
    } else if ( imc > 30 && imc < 34.9) {
        weightResult = 'obeso'
        result.classList.add('orange')
    } else if ( imc > 35 ) {
        weightResult = 'obesidade extrema'
        result.classList.add('red')
    }

    result.innerHTML = weightResult
    inputHeight.value = ''
    inputWeight.value = ''
  
}

button.onclick = calculateIMC