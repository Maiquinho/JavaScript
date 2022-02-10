/**
 * 
 * O método arr.find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
 * 
 * 
 * O método arr.findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrario, retorna -1, indicando que nenhum elemento passou no teste.
*/


// let list = [45, 4, 9, 16, 25];
let list = [
    {id: 1, name: 'Michael', lastName: 'Santos'},
    {id: 2, name: 'Tyler', lastName: 'Williams'},
    {id: 3, name: 'Jack', lastName: 'Sparrow'}
];
let findListItem = [];
let findListItemPosition = [];


// exemplo do find():
findListItem = list.find(function(item){
    return (item.lastName === 'Williams')? true : false;
});


// exemplo do findIndex():
findListItemPosition = list.findIndex(function(item){
    return (item.lastName === 'Santos')? true : false;
});




let res = findListItemPosition;

console.log(res);