/* Uma função que recebe uma letra e uma frase. Ela deve dizer quantas vezes a letra
aparece na frase.*/

let nome = 'Gustavo'

function cacaLetras (letra, nome) {

    let caractere
    let quantidade = 0

    for(let contador = 0; contador<=nome.length-1; contador++) {
        caractere = nome[contador]

        if(caractere === letra) {
            quantidade++
        }
        
    }

    document.write(`A quantidade de '${letra}' em '${nome}' são: ${quantidade}`)
}

cacaLetras('o','Leonardo')