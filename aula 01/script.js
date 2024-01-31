// let nome = 'João' //criar variavel string e inicializa com valor
// console.log(nome, 'nasceu em 1900')


//não podemos criar variáveis com palavras reservadas, ex: console ou let
// let pode variar ao decorrer do código, const não pode ser alterado

const sobrenome = 'Catalão'
console.log('sobrenome:',sobrenome)
console.log(typeof sobrenome) //typeof serve pra sabermos o tipo de dado da variavel

//exercicio 1
const name = 'Eduarda Melo'
const idade = 18
const altura = 1.80
const peso = 70.00
let imc = peso / (altura*2)

console.log('Eu sou a', name, 'tenho', idade, 'anos. E meu imc é:', imc) //maneira mais dificil
console.log(`eu sou ${name} tenho ${idade} anos e meu imc é ${imc}`) //maneira agilizada

// NaN - Not a Number

const num1 = 2
const num2 = parseInt('5') //transformar uma string em int ou pode usar Number('5')

console.log(num1*num2)
console.log(typeof num2)

confirm('deseja realmente apagar?')//janelinha de confirmção com opções de 'Cancelar' ou 'OK'
//ou
const confirmar = confirm('realmente deseja apagar?') //ele armazena o resultado de true or false na variavel confirmar
console.log(confirmar)

let num = prompt('Digite um número:') // abre uma janelinha que o usuario tem que preencher um campo

//exercicio
let num3 = prompt('Digite o primeiro num:')
let num4 = prompt('Digite outro numero:')

num3 = parseInt(num3)
num4 = parseInt(num4)
alert(num3+num4)

