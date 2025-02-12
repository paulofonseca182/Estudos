// Escreva uma função que recebe um array de números e retorna um novo array com cada número dobrado.
// Saída esperada: [2, 4, 6, 8, 10]


const numeros = [1, 2, 3, 4, 5];

const newArray = numeros.map((e) => e * 2)

console.log(newArray);


const funcArrayForEach = (numeros) => {
    const newArray = [];
    numeros.forEach((e) => newArray.push(e *2));
    return newArray
};

console.log(funcArrayForEach(numeros))


const funcArrayMap = (numeros) => {
    
    const newArray = numeros.map((e) => e * 2);
    return newArray
};

console.log(funcArrayMap(numeros))