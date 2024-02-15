//IIFE pesquisar sobre
function meuEscopo (){
  const form = document.getElementById('form')

  let contador = 1
  function recebeForm(evento){
    evento.preventDefault()
    const nome = form.document.querySelector('.nome')
    const sobrenome = form.document.querySelector('.sobrenome')
    const peso = form.document.querySelector('.peso')
    const altura = form.document.querySelector('.altura')

    console.log(nome, sobrenome, peso, altura)
  }


  form.addEventListener('submit', recebeForm)

}

meuEscopo()

//n funcionou!!!!!!