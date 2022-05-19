/**
 * 
 * O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
 * 
 * O método repeat() constrói e retorna uma nova string com um determinado número de cópias concatenadas da string original.
 * 
*/


// exemplo do método includes():
let list = ['ovo', 'café', 'arroz', 'feijão'];

// retorna false por não existir o índice ou true caso o encontre
console.log( list.includes('carne') );;


let name = "Michael";

// uma curiosidade sobre o método includes() é que ele imperpreta o dado como case sensitive, ou seja caso exista um caractere maiúsculo e utilizamos o includes() chamando um caractere minúsculo o resultado será false. exemplo:
console.log( name.includes('m') );




// exemplo do método repeat():

let text = "Hello ";

console.log( text.repeat(10) )