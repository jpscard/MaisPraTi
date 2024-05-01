let quantidade = 15;
let preco = quantidade < 12 ? 0.30 : 0.25;
let total = quantidade * preco;
console.log(`O valor total da compra é R$ ${total.toFixed(2)}`);
