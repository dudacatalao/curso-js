//IIFE pesquisar sobre
function meuEscopo (){
  const form = document.querySelector('.form')

  form.onsubmit = function(evento) {
    alert("oik")
  };
}

meuEscopo()