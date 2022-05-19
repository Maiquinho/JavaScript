/**
 * 
 * O operador Spread permite definir um número indefinido de parâmetros para uma função, array ou objeto.
 * 
*/

// para fazer um merge de arrays/objetos, até então usavamos o .push para realizar a mesclagem dos arrays ou objetos:

let arrayOne = [1,2,3,4];
let arrayTwo = [5,6,7,8];

Array.prototype.push.apply(arrayOne, arrayTwo);

console.log(`Array push: ${arrayOne}`);



// com o operador spread fazemos da seguinte forma:

let arrOne = [1,2,3,4];
let arrTwo = [...arrOne,5,6,7,8];

console.log(`Operador spread: ${arrTwo}`);



// utilizando operador spread em objetos:

let info = {
    name: 'Michael',
    lastName: 'Santos',
    age: 21
}

let newInfo = {
    ...info, // merge do primeiro objeto com o novo objeto.
    city: 'Guarulhos',
    state: 'São Paulo',
    country: 'Brazil'
}

// valor printado 
console.log(newInfo);





// utilizando operador spread em funções 

const addInfo = (inf) => {
    let newInfos = {
        ...inf,
        status: 0,
        token: 'sdfsdfkdfjkshdfjkg',
        register_date: '00-00-0000'
    }

    return console.log(newInfos);
}

addInfo({name: 'Matheus', lastName: 'Silva', age: 21});