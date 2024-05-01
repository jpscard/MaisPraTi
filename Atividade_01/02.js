// Definindo as quantidades
var totalEleitores = 200;
var votosBrancos = 10;
var votosNulos = 20;
var votosValidos = 160;

// Calculando os percentuais
var percentualBrancos = (votosBrancos / totalEleitores) * 100;
var percentualNulos = (votosNulos / totalEleitores) * 100;
var percentualValidos = (votosValidos / totalEleitores) * 100;

// Mostrando os resultados no console
console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
