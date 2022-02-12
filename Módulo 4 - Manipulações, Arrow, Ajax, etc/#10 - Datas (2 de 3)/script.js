/**
 *
 * O método getFullYear() retorna o ano da data específicada de acordo com a hora local. Use este método ao invés do getYear().
 * 
 * 
 * O método getMonth() retorna o mês na data específicada de acordo com o horário local, como um valor zero-based (onde o zero indica o primeiro mês do ano).
 * 
 * 
 * O método getDay() retorna o dia da semana para a data específicada de acordo com a hora local, onde 0 representa o Domingo.
 * 
 * 
 * O método getDate() retorna o dia do mês da data específicada de acordo com a hora local.
 * 
 * 
 * O método getHours() retorna a hora para a data específicada, de acordo com a hora local.
 * 
 * 
 * O método getMinutes() retorna os minutos em uma data específicada de acordo com o horário local.
 * 
 * 
 * O método getSeconds() retorna os segundos de uma data específicada de acordo com o horário local.
 * 
 * 
 * O método getMilliseconds() retorna os milissegundos de uma data específica de acordo com o horário local.
 * 
 * 
 * O método getTime() retorna o valor numérico correspondente ao horário da data específicada de acordo com o horário universal. Você pode usar este método para atribuir uma data e horário a outro objeto Date. Este método é funcionalmente equivalente ao método valueOf().
 * 
 * 
 * O método Date.now() retorna o número de milisegundos decorridos desde 1 de janeiro de 1970 00:00:00 UTC.
*/


let date = new Date();

let newValue = date.getTime();

console.log( newValue );