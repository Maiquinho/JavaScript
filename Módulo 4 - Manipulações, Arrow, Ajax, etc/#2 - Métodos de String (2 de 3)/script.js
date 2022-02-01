/**
 * 
 * O <string>.slice(x, y) retorna o valor da string dividido passado através do parâmetro x como posição inicial e finaliza na parâmetro y indicando o termino da contagem. Com o slice() é possível fazer uma contagem dos caractéres da string de trás para frente usando um número negativo nos parâmetros (obs: o valor retornado não é invertido mas sim lido de trás para frente).
 * 
 * 
 * O <string>.substring(x, y) tem a mesma funcionalidade do slice() exceto por uma diferênça, no caso do substring() não é possível ler a string de trás para frente. 
 * 
 * 
 * O <string>.substr(x, y) possui as mesmas funcionalidades do slice() e do substring(), porém com uma sintax um pouco diferente: no parâmetro y ao invés de receber um valor finalização da contagem é indicado quantos caractéres serão contados ao todo após o parâmetro de inicialização x
 * 
 */


// exemplos: 

let nome = 'Michael Matheus Santos';

nome.slice(16, 22); // é retornado: 'Santos'

nome.slice(-22, -5); // é retornado: 'Michael Matheus S'

nome.substring(0, 9); // é retornado: 'Michael M'

nome.substr(0, 10); // é retornado: 'Michael Ma'