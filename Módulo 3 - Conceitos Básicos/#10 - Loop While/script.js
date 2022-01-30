/** 
 * O Loop While básicamente funciona como o próprio nome diz, enquanto a condição for satisfeita.
 * 
 * Obs: no Loop While não existe um limitador por padrão, é necessário adicionar alguma forma de incremento para quando a condição for satisfeita o loop acabar.
*/

// exemplo:

let html = '';
let i = 0;

while(i <= 50){ // verificação (semelhante ao for)
    html += i +'<br>';
    i++; // incremento
}

document.querySelector('#demo').innerHTML = html; // imprime os números