/* Uma função  que recebe dois números a e b, e cria uma moldura
com essas dimensões. a e b tem que ser maiores que um.*/

function moldura (a, b) {

    largura = '+'
    altura = '-'

    if(a>1 && b>1){

        for(let i = 0; i<a -2 ; i++) {
            largura = largura + '-'
            altura = altura + ' '
        }
    
        largura = largura + '+'
        altura = altura + '-'
    
        console.log(largura)
    
        for (let i = 0; i<b - 2; i++) {
            console.log(altura)
        }
    
        console.log(largura)
    } else {
        console.log('Essas dimensões não são válidas!')
    }
    
    

}

moldura(20,5)