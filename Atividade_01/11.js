let numeros = [12, 7, 22, -5, 0, 15];
for (let numero of numeros) {
    if (numero <= 0) {
        console.log("Número nulo ou negativo encontrado, encerrando...");
        break;
    }
    if (numero % 2 === 0) {
        console.log(`${numero} é PAR`);
    } else {
        console.log(`${numero} é ÍMPAR`);
    }
}
