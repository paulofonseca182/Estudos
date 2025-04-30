// Verificar se todos os números são positivos
// Escreva uma função que verifica se todos os números de um array são positivos.

const numeros = [1, 5, 8, 10, -2];
// Saída esperada: false

const numeros2 = [1, 5, 8, 10];
// Saída esperada: true

const check = (numbers) => {
   return numbers.every((e) => e >= 1)
}

console.log(check(numeros))
console.log(check(numeros2))