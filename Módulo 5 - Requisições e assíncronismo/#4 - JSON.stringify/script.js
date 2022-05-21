/**
 * 
 * O método JSON.stringify() converte valores em javascript para uma string JSON. Esses valores podem ser substituidos especificando a função replacer, ou incluindo somente as propriedades específicas, quando o array do replacer for especificado.
 *
*/


// exemplo JSON.stringify():
const obj = {x: 5, y: 6}
const json = JSON.stringify(obj);

console.log(json); // '{"y":5,"x":6}'