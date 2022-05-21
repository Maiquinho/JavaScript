/**
 * 
 * O método JSON.parse() analisa uma string JSON, construindo o valor ou o objeto JavaScript descrito pela string. Uma função reviver opcional pode ser fornecida para executar uma transformação no objeto que será retornado.
 *
*/


// exemplo JSON.parse():
const json = '{"name": "Michael", "lastName": "Santos", "age": 21}';
const obj = JSON.parse(json);


console.log(obj); // {name: 'Michael', lastName: 'Santos', age: 21}