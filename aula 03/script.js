// como concatenar anúmeros
let num1= 10
let num2 = 2.5

exemple = num1 * num2

console.log(num1.toString() + num2) //temporariamente colocando o numero como uma string para fazer concatenação e não soma
num1 = num1.toString() //mudando o numero pra string permanente
console.log(num1.toString(2) )//representação binaria do num1
console.log(exemple.toFixed(2)) //reduzindo as casas decimais 

// como concatenar anúmeros
let num3= 3.525524
let num4 = Math.floor(num3); //arredondar
let num5 = Math.ceil(num3) //arredonda pro maix proximo
let num6 = Math.round(num3) //arredonda pro numero maior
console.log(num4)
console.log(num5)
console.log(Math.max(1,2,3,5,6,4)) // mostra o maior num da sequencia
console.log(Math.random()) //num aleat
const aleat = Math.random() * (10 - 5) + 5 //num aleatorio entre 5 e 10 
console.log(Math.round(aleat))


