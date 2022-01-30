/** 1 - O Loop for consiste básicamente (na maioria dos casos) em uma inicialização de variável, uma condicional para a variável, um incremento da variável e a execução do loop
 * 
 * 
*/

// exemplo Loop For:

// let html = '';

// for(let i = 0; i <= 100; i++){
//     html += i + '<br>'; // executa um loop de até 100 itens conforme a declaração da condição acima, após isso ele finaliza o loop.
// }

// document.querySelector('#demo').innerHTML = html; // imprimindo o resultado



/** 2 - O Loop for array consiste em rodar um loop com uma série de itens de um array.
 * 
*/


// exemplo:

let carros = ['Civic', 'Fusion', 'Corolla', 'Cruze'];
let html = '<ul>';

for(let carro in carros){
    html += '<li>' + carros[carro] + '</li>';
}

html += '</ul>';
document.querySelector('#demo').innerHTML = html;