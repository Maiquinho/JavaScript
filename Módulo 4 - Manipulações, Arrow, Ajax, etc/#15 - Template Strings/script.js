/**
 * 
 * Template Strings são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.
 * 
 * Basicamente é uma nova forma de criar strings e tornar o seu código um pouco mais legível.
 * 
*/

let person = {name: 'Michael', age: 20};

// let sentence = "My name is " + person.name + ", I'm " + person.age + " years old. Next year I will have " + (person.age + 1) + " years old."; // sentence without template string

let sentence = `My name is ${person.name}, I'm ${person.age} years old. Next year I will have ${(person.age + 1)} years old.`; // sentence with template string


console.log(sentence);