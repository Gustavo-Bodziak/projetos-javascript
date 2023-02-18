/* Uma função que receba um objeto de atributo nome, sobrenome e 
idade e delete algum deles caso esteja vazio (null) */

function verificandoObjeto (nome, sobrenome, idade) {

    let objeto = {

        nome: nome,
        sobrenome: sobrenome,
        idade: idade

    }
 
    if (!objeto.nome) {
        delete objeto.nome
    } else if (!objeto.sobrenome) {
        delete objeto.sobrenome
    } else if (!objeto.idade) {
        delete objeto.idade
    } else {
        console.log('Nada para deletar dentro do objeto!')
    }

    console.log(objeto)

}

verificandoObjeto('Gustavo','Bodziak', 19)