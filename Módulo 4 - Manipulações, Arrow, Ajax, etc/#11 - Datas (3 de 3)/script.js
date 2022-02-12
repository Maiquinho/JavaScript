/**
 *
 * Os métodos set + tipo de data atribuem ao objeto Date o valor específicado.
*/


let date = new Date();

date.setHours(date.getHours() + 3000);

let newValue = date;

console.log( newValue );