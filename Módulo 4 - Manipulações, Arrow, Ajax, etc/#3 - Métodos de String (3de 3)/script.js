/**
 * 
 * O <string>.replace('x', 'y') substitui o valor inserido no primeiro parâmetro 'x' pelo valor inserido em 'y' pelo novo valor inserido.
 * 
 * 
 * O <string>.toLowerCase() transforma os carácteres do texto em caixa-baixa.
 * 
 * 
 * O <string>.toUpperCase() transforma os carácteres do texto em caixa-alta.
 * 
 * 
 * O <string>.concat('texto') concatena o conteúdo de uma string com o valor inserido no parâmetro.
 * 
 * 
 * O <string>.trim() remove os espaços de uma string.
 * 
 * O <string>.charAt(1) identifica qual caractere corresponde posição na string.
 * 
 * 
 * O <string>.split('') quebra uma string comum em um array.
 * 
 */


// exemplos: 

let nome = 'Michael Matheus Santos';

nome.replace('Santos', 'Silva'); // é retornado: 'Michael Matheus Silva'

nome.toLowerCase(); // é retornado: 'michael matheus santos'

nome.toLowerCase(); // é retornado: 'MICHAEL MATHEUS SANTOS'

nome.concat(' Silva'); // é retornado: 'Michael Matheus Santos Silva'

nome.trim(); // é retornado: 'MichaelMatheusSantos'

nome.charAt(1); // é retornado: i

nome.split(' '); // é retornado:(3) ['Michael', 'Matheus', 'Santos']