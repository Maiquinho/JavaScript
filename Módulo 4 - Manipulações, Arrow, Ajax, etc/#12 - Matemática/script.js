/**
 * 
 * 
 * 
 * Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Não é um objeto de função.
 * 
 * A função Math.round(x) retorna o valor de um número arredondado para o inteiro mais próximo.
 * 
 * A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
 * 
 * A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".
 * 
 * A função Math.abs(x) retorna o valor absoluto de um número "x".
 * 
 * A função Math.min(x, y, z...) retorna o menor valor passado como parâmetro, ou NaN se o parâmetro não é ou não pode ser convertido para um número.
 * 
 * A função Math.max(x, y, z...) retorna o maior de um ou mais números.
 * 
 * A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de números aleatórios; esta semente não pode ser escolhida ou reatribuída.
*/



let newValue = Math.floor(Math.random() * 100);

console.log(newValue);
