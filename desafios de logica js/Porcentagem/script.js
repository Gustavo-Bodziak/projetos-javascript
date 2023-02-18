/* Uma função que recebe dois números (a e b) deve retornar quantos %
b é de a.*/

function calcularPorcentagem (a ,b) {

    let resultado = (b / a) * 100
    resultado = resultado.toString()
    resultado = resultado.slice(0,3)

    document.write(`${b} representa ${resultado}% de ${a}.`)
}

calcularPorcentagem(80, 40)