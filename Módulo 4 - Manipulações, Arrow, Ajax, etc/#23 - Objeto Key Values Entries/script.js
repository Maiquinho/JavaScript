/**
 * 
 * O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço for in (a diferença é que um laço for-in enumera propriedades que estejam na cadeia de protótipos).
 * 
 * 
 * O método Object.entries() retorna uma array dos protótipos pares [key, value] enumeráveis de um dado objeto, na mesma ordem dos objetos providos do loop for in (sendo a diferença que o for-in enumera também propriedades dispostas na cadeia de prototipagem - prototype chain).
 * 
 * 
 * O método Object.values() retorna um array com os valores das propriedades de um dado objeto, na mesma ordem provida pelo for in (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype).
 * 
*/


let arrEx = ['ovo', 'carne', 'feijão', 'pipoca'];
let ObjEx = { name: 'Michael', lastName: 'Santos', age: 21};



// exemplo Object.keys():

// usando um array:
console.log(Object.keys(arrEx)); // ['0', '1', '2', '3'];
// usando um objeto:
console.log(Object.keys(ObjEx)); // ['name', 'lastName', 'age']



// exemplo Object.entries():

// usando um array:
console.log(Object.entries(arrEx)); // [['0', 'ovo'], ['1', 'carne'], ['2', 'feijão'], ['3', 'pipoca']]
// usando um objeto:
console.log(Object.entries(ObjEx)); // [['name', 'Michael'], ['lastName', 'Santos'], ['age', '21']]



// exemplo Object.values():

// usando um array:
console.log(Object.values(arrEx)); // ['ovo', 'carne', 'feijão', 'pipoca']
// usando um objeto:
console.log(Object.values(ObjEx)); // ['Michael', 'Santos', 21]