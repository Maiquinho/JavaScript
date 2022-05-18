/**
 * 
 * Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
 * 
*/

// exemplo 1: 
const calc = (x, y) => { return console.log(x + y) }

// chamada da função:
calc(10,56);




// exemplo 2 (sinxtaxe sem expressão return):
const countLetters = (personName) => console.log(personName.length);
// equivalente a: 
// const countLetters = personName => { return console.log(personName.length)};

// chamada da função:
countLetters('Michael Matheus');




// exemplo 3 (sintaxe sem os parênteses):
const licenseDriver = age => age > 18 ? console.log('You can have a license driver') : console.log('You cant have a license driver');

// chamada da função: 
licenseDriver(19);