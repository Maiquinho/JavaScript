/**
 * O <element>.length retorna o número de caracteres de uma string. Se tentarmos utilizar com outros tipos de variáveis o resultado será: undefined.
 * 
 * 
 * O <element>.indexOf('<param>') retorna a posição de uma string dentro de um escopo. Caso seja feita a tentativa de acessar algum valor inexistente na string é retornado: -1 (undefined).
 * 
 * 
 */


// exemplos: 

let nome = 'Michael Matheus Santos';

nome.length; // retorna: 22

nome.indexOf('Matheus'); // retorna: 8

nome.indexOf('Silva'); // retorna: -1