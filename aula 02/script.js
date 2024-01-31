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


const nome = prompt('Digite seu nome completo:')

document.body.innerHTML = `Seu nome é : <strong>${nome}</strong> </br>` 
document.body.innerHTML += `Seu nome tem ${nome.length} letras </br>`
document.body.innerHTML += `A segunda letra do seu nome é:  ${nome[1]}</br>`
document.body.innerHTML += `O primeiro indice da letra a é : ${nome.indexOf['a']}</br>`
document.body.innerHTML += `O ultimo indice da letra a é : ${nome.lastIndexOf['a']}</br>`
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)}</br>`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}</br>`
document.body.innerHTML += `Seu nome com letras minusculas: ${nome.toLocaleLowerCase()}</br>`
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()}</br>`