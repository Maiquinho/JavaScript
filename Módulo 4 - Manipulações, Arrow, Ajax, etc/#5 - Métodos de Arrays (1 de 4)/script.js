/**
 * 
 * Nas manipulações de array também é possível utilizar a função toString() para converter arrays em strings.
 * 
 * 
 * O método join() é utilizado para juntar todos os elementos de um array em uma string e retorna-los. Também é possível separar com os itens do array através de alguma string passada por parâmetro no join. exemplo: arr.join(',')
 * 
 * 
 * Também é possível utilizar a função indexOf(x) na manipulação de arrays, o parâmetro x seleciona o item do array. Ao utilizar arr.indexOf(1) por exemplo é retornado o segundo item de um array.
 * 
 * 
 * O método arr.push(x) adiciona um novo item ao array. exemplo: arr.push('novo item').
 * 
 * 
 * É possível alterar algum item de um array acessando esse item e reatribuindo seu valor. 
 * 
 *      exemplo: 
 *      let arr = ['item 1', 'item 2', 'item 3'];
 *      
 *      arr[0] = 'novo item 1';
 * 
 *      o array ficará assim: arr = ['item 1', 'item 2', 'item 3'];
 * 
 * 
 * 
 * O método arr.shift() remove o primeiro item de um array.
 * 
 * 
 * O método arr.pop() remove o último item de um array.
 * 
 * 
 * Uma forma de descobrir em qual será o próximo item de um array é a seguinte:
 * 
 *      let arr = ['item 1', 'item 2', 'item 3'];
 * 
 *      arr [ lista.length ] = 'Liquidificador';
 * 
 *      O array ficará assim: arr = ['item 1', 'item 2', 'item 3',  'Liquidificador'];
 * 
 * Caso precisemos adicionar um novo item no array também podemos da seguinte maneira: arr[3] = 'Liquidificador';
 * O resultado será: let arr = ['item 1', 'item 2', 'item 3', 'Liquidificador'];
 * 
 * Caso haja a tentativa de atribuição de um indice inexistente o JavaScript criará esse indice, é importante observar que se o novo indice criado pular algum indice que também não existe o JS também criará os indices pulados e os deixará vazios.
 * 
 * 
*/


let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];

// lista [lista.length] = 'Liquidificador'; // modo não recomendado para adicionar mais itens ao array

lista.push('Liquidificador', 'Batedeira', 'Mixer'); // modo recomendado para adicionar mais itens ao array

// lista[6] = 'Liquidificador';

let res = lista;

console.log(res);