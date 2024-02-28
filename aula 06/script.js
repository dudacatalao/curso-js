/*
operadores de comparação
> maior que
< menor que
<=menos que ou igual a
== igualdade
= atribuição
=== igualdade estrita (verifica valor e tipo)
!=diferente
!==diferença estrita (verifica valor e tipo)
*/

//retorna true ou false
const comparação = 10 > 8;
console.log(comparação)

//verifica duas condiçoes, e se uma for verdaderira retorna true
const comp = 10 >= 8;
console.log(comp)

// === igualdade estrita exemplo
const num1 = 10
const num2 = '10'
const comparando = num1 === num2  
console.log(comparando) // retorna falso pq os tipos de variaveis são diferentes


//---------------------------------------------------------------------------------------------------------//
/*operadores lógicos 
&& - and 
|| - ou
1 - not
*/

const expressionAnd = true && true && true && false
console.log(expressionAnd) // retorna false, porque se uma condição é falsa, todas as expressoes precisam ser verdadeiras pra retornar true

const expressionOr = true || true || true || false
console.log(expressionOr) // retorna true, porque uma das condiçoes é verdadeeira e somenteuma é falsa

const expressionDif = true
console.log(!expressionDif) //inverte o valor da expressão 

