/**
 * 
 * Uma forma simples mas não recomendada para remoção de itens de um array é o delete pois não possui uma boa pratica de escrita e ainda mantém o slot do array removido porém vazio, ele pode ser utilizado da seguinte maneira:
 * 
 *      let arr = ['item 1', 'item 2', 'item 3'];
 * 
 *      delele arr[1];
 * 
 *      let result = arr;
 * 
 *      console.log(result); // retorna: ['item 1', empty, 'item 3']
 * 
 * 
 * 
 * 
 * o método arr.splice(x, y) remove o indice enviado através do parâmetro x e remove a quantidade passada no parâmetro y. exemplo:
 * 
 *      let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
 *
 *      lista.splice(0, 1);
 *
 *      let res = lista;
 *
 *      console.log(res); // retorna: ['Farinha', 'Corante', 'Massa'];
 * 
 * 
 * 
 *  Para contatenar 2 arrays podemos utilizar a função concat, não é possível fazer esse tipo de concatenação com o +. Para fazer esse tipo de concatenação temos esse exemplo: 
 * 
 *      let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
 *      let lista2 = ['Prato', 'Liquidificador', 'Forno'];
 * 
 *      let res = lista.concat(lista2);
 * 
 *      console.log(res);
 *  
 * 
 *  Para ordenarmos um array em ordem alfabética podemos usar a função 
 * .short(). Exemplo:
 * 
 *      let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
 *
 *      lista.sort();
 *
 *      let res = lista;
 *
 *      console.log(res); // retorna: ['Corante', 'Farinha', 'Massa', 'Ovo']
 *  
 *  Para inverter a ordem de um array utilizamos a função: .reverse()
 *  Exemplo:
 * 
 * let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
 *
 *       lista.sort(); // ['Corante', 'Farinha', 'Massa', 'Ovo']
 *       lista.reverse();
 *
 *       let res = lista;
 *       console.log(res); // rerorna: ['Ovo', 'Massa', 'Farinha',      'Corante']
 *  
 * 
*/


let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

lista.sort();
// lista.reverse();

let res = lista;

console.log(res);