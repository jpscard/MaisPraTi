/*
  14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.
*/
var prompt = require('prompt-sync')();
let soma = 0;
let contador = 0;
let n;
do {
    n =  parseFloat(prompt("Insira número (0 para terminar): "));
    soma += n;
    contador ++;
} while (n!= 0);
if (contador > 0) {console.log("Média dos numeros: ", soma/contador)}


