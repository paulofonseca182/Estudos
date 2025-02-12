// Multiplicação dos elementos
// Dado um array de números, retorne o produto de todos os elementos.

const numeros = [2, 3, 4];
// Saída esperada: 24

const numeros2 = [5, 5, 5];
// Saída esperada: 125

const produto = (numeros) => {
  return numeros.reduce((acc, n) => acc * n, 1);
};


console.log(produto(numeros));
console.log(produto(numeros2));