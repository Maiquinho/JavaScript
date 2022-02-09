/**
 * 
 *  O método arr.map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo array como resultado.
 * 
 * 
 * O método arr.filter() cria um novo array com todos os elementos que retoram como true no teste implementado pela função fornecida.
 * 
 * 
 * O método arr.every() testa se todos os elementos do array passaram pelo teste implementado pela função fornecida.
 * 
 * 
 * O método arr.some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
 * 
*/


let list = [45, 4, 9, 16, 25];
let multipliedList = [];
let filteredList = [];
let listForAll = [];
let listForSome = [];


// exemplo map(): 
multipliedList = list.map(function(item){
    return item * 2;
});

// exemplo filter():
filteredList = list.filter(function(item){

    // condição (sintax convencional)

    // if(item < 40){
    //     return true;
    // }else{
    //     return false;
    // }

    // short code para o retorno
    return (item < 40)? true : false; 
});

listForAll = list.every(function(item){
    return (item < 40)? true : false;
});

listForSome = list.some(function(item){
    return (item < 40)? true : false;
});




let res = listForSome;

console.log(res);