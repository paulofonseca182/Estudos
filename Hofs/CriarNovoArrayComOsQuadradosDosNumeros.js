// Criar um novo array com os quadrados dos números
// Escreva uma função que retorna um novo array contendo os quadrados dos números de um array original.

const numeros = [2, 3, 4, 5];
// Saída esperada: [4, 9, 16, 25]


const newArray = (numbers) => {
    return numbers.map((e) => e * e);
}

console.log(newArray(numeros));
