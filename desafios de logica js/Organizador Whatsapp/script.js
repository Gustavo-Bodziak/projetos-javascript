/* Uma função que recebe um array de objetos com atributos: itsMe, 
admin e name. */

pessoas = ([

    {itsMe: false, admin: false, name:'Gustavo'},

    {itsMe: true, admin: false, name: 'Elder'},

    {itsMe: false, admin: true, name:'João'},

    {itsMe: false, admin: true, name: 'Mateus'}
])

function organizador (objetos) {
    // se return <0 a vem primeiro que b
    // se return >0 b vem primeiro que o a

    objetos.sort(function(a,b){
        if(a.admin === true && b.admin === false) {
            return -1
        }
    })

    objetos.sort(function(a,b){

        if(a.itsMe === true && b.itsMe === false) {
            return -1
        }
    
    })

   

    
    console.log(objetos)

    
}

organizador(pessoas)

