/**
 * 
 * A descontrução de objetos ou Atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.
 * 
*/


// exemplo

let person = {
    name: 'Michael',
    age: 21,
    relasionship: 'Dating',
    social: {
        facebook: 'michaelmatheus',
        instagram: 'maiquinho'
    }
}

// chamada convencional (sem a desconstrução)
console.log(`Chamada convencional: ${person.name}, ${person.age}, ${person.relasionship}`);




// objeto desconstruído:
let { name, age, relasionship } = person;

// nova chamada com o objeto desconstruído
console.log(`Chamada com o objeto desconstruído: ${name}, ${age}, ${relasionship}`);