/**
 * 
 *  Para desmembrar um objeto detro de outro precisamos apenas fazer a desconstrução do objeto secundário do primário: let { name, skills: { javascript, php, node, react } } = obj;
 * 
 * 
 * 
*/


// exemplo

let person = {
    name: 'Michael',
    lastName: 'Santos',
    age: 21,
    social: {
        facebook: {
            url: 'michael.matheus.317',
            followers: 1100
        },
        instagram: {
            url: '__maiquinho',
            followers: 558
        }
    },
    fullName: function (){
        return `${this.name} ${this.lastName}`;
    }
}


// desconstrução do objeto 
// let { name, lastName, social: { facebook: { url: facebook }, instagram: { url: instagram } }, fullName } = person;


// é possível desconstruir o objeto dentro do parâmetro de uma função, ex:
function objectAssignment( { name, lastName, social: { instagram: { url: instagram } } } ){
    return `${name} ${lastName} follow on: ${instagram}`;
}

console.log(objectAssignment(person));