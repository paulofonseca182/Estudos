// Filtrar números pares
// Dado um array de números, filtre apenas os números pares.

const numeros = [10, 15, 20, 25, 30];

const newNumbers = numeros.filter((e) => e % 2 === 0)

console.log(newNumbers);


const numbersEven = (numeros) => {
   return numeros.filter((e) => e % 2 === 0)
}

console.log(newNumbers)