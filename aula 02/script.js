//cada caractere de uma string tem um indice
//             0123456789
let exemplo = "exemplo um"
console.log(exemplo[2]) //pegando uma letra pelo indice 
console.log(exemplo.charAt(1))
console.log(exemplo.indexOf(`um`)) //pesquisar o indice que se encontra a palavra
console.log(exemplo.replace(`um`, `dois`)) //substituir uma palavra por outra
console.log(exemplo.replace(/m/, `y`)) //substituir letras por outra
console.log(exemplo.split(' ')) //divide as palavras pelo elemento que escolher e coloca em uma array
console.log(exemplo.toLocaleUpperCase()) // deixar tudo em letra maiuscula
console.log(exemplo.toLocaleLowerCase()) //deixar tudo em letra minuscula