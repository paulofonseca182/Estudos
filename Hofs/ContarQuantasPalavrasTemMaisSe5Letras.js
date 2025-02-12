// Contar quantas palavras têm mais de 5 letras 
// Dado um array de palavras, conte quantas têm mais de 5 letras.

const palavras = ["gato", "elefante", "cachorro", "lua"];
// Saída esperada: 2 (elefante, cachorro)



const maisDeCinco = (palavra) => {
    return palavra.filter((e) => e.length > 5)
}

console.log(maisDeCinco(palavras));
