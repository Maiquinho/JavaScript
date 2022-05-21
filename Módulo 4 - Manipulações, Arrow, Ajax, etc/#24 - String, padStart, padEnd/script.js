/**
 * 
 * O método padStart() preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário) até que a string resultante atinja o comprimento fornecido. 
 * O preenchimento é aplicado antes do primeiro caractere da string original. A string original não é modificada.
 * 
 * 
 * O método padEnd() preenche a string original com um determinado caractere, ou conjunto de caracteres, (repetidamente, se necessário) para que a string resultante alcance um determinado comprimento. O preenchimento é aplicado a partir do final (direita) da string original. A string original não é modificada.
 *
 *  
*/


// exemplo padStart():
let creditCard = '0000111122223333';
let lastDigits = creditCard.slice(-4);

console.log('Is it your credit card ' + lastDigits.padStart(16, '*') + ' ?');



// exemplo padEnd():
let telephoneNum = '95643';
console.log('Is it your telephone number ' + telephoneNum.padEnd(9, '*') + ' ?');



