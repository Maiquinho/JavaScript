/**
 * 
 * A desconstrução de arrays se assemelha muito com a de objetos exceto pelo nome da propriedade que só existe no objeto, no caso dos arrays para identifica-los usamos a chave.
 * 
 * 
*/


let arrayOne = ['Michael Santos', 'Michael', 'Santos', 21];


// exemplo de desconstrução de um array:
let [fullName, name, lastName, age] = arrayOne;

// valor printado:
console.log(`${fullName} Age:${age}`);



/**
 * 
 * Caso seja necessário invocar apenas um ou alguns índices de um array o que precisamos fazer é deixar o índice indesejado vazio, porém separado por vírgula e respeitando a ordem do array.
 * 
 * exemplo:
 */


let arrayTwo = [ 'HTML', 'CSS', 'JavaScript', 'PHP' ];

//  array desconstruído não atribuindo os primeiros 2 índices do array (arrayTwo):
let [,, frontEndLang, backEndLang ] = arrayTwo;

// valor printado
console.log(`Front-end language: ${frontEndLang}\nBack-end language: ${backEndLang}`);




/**
 * 
 * Também podemos criar um array já sendo desconstruído.
 * 
 * exemplo:
 * 
 */

let [ job, wage, city, time ] = [ 'Full-stack Developer', 4000, 'Lisboa', '9:00am - 6:00pm' ];

// valor printado:
console.log(`Looking for a job of ${job} paying $${wage} in ${city} between ${time}`);



/**
 * 
 * Outra funcionalidade onde podemos aplicar a desconstrução dos arrays é na chamada de funções.
 * 
 * exemplo:
 * 
 */

function arrayGenerate(){
    return [1,2,3,4];
}

// array atribuído ao retorno de uma função com outro array pré-determindado:
let [a,b,c,d] = arrayGenerate();


console.log(a,b,c,d);











