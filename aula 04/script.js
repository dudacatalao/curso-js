//criando objetos

const pessoa1 = {
  nome: 'Maria',
  sobrenome: 'Melo',
  idade: 25,

  fala(){
    console.log(`${this.idade} idade atual`)
  },

  incrementaIdade(){
    this.idade++;
  }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()

function criarPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
}

const pessoa2 = criarPessoa('Ingrid', 'Carvalho', 19)
console.log(pessoa2)