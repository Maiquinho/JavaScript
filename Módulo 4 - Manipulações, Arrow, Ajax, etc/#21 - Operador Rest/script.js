/**
 * 
 * O Operador Rest é utilizado para permitir que uma função receba um número indefinido de parâmetros.
 * 
*/


// exemplo de uma função que não utiliza o operador rest:

const addNumbers = (n1, n2, n3, n4) => { 
    console.log(n1, n2, n3, n4);
}

// por não existir um último parâmetro para o último argumento ele não é impresso no console.
addNumbers(10, 10, 10, 20, 40);



// exemplo de uma função que utiliza o operador rest:

const addNum = (...num) => {
    console.log(num);
}

// o número de itens não é finito como o do exemplo anterior:
addNum(10, 40, 56, 39, 46, 21, 67, 45);



// exemplo de utilização do operador rest e spread: 

const addNames = (names, ...newNames) => {
    
    let mergedNames = [
        ...names, // names se transforma em um índice dento de mergedNames não um outro array
        ...newNames
    ];

    console.log(mergedNames);
}

let names = ["Michael", "Matheus", "Manuel", "Eduardo"];

let otherNames = addNames(names, "Augusto", "William", "Walter", "Renato", "Robson");