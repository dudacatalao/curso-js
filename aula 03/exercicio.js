const number = Number(prompt('Insira um número')); 

const title = document.getElementById('numtitulo');
title.innerHTML = number; 

const raiz = document.getElementById('raiz');
raiz.innerHTML = Math.sqrt(number); 

const inteiro = document.getElementById('inteiro');
inteiro.innerHTML = Number.isInteger(number) ? 'Sim' : 'Não'; 

const nan = document.getElementById('nan');
nan.innerHTML = isNaN(number); 

const baixo = document.getElementById('baixo');
baixo.innerHTML = Math.floor(number); 

const cima = document.getElementById('cima');
cima.innerHTML = Math.ceil(number); 

const decimais = document.getElementById('decimais');
decimais.innerHTML = number.toFixed(2); 
