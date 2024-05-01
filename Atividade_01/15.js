/*
  15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
    que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
    respectivos.
*/
const prompt = require('prompt-sync')();

var somaPesos = 0;
var multipicacao = 0;

var numero = parseFloat(prompt("Digite um número: "));
var peso = parseFloat(prompt("Digite um peso: "));

while (numero != 0) {
    
    somaPesos += peso;
    
    multipicacao += numero * peso;

    numero = parseFloat(prompt("Digite um número: "));


    if(numero != 0){
        peso = parseFloat(prompt("Digite um peso: "));
    }

}


console.log("A média ponderada dos números é = " + multipicacao / somaPesos);