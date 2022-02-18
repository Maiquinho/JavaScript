/**
 * 
 * O método setInterval() oferecido das interfaces Window e Worker, repertem chamadas de funções ou executam trechos de código, com um tempo de espera fixo entre cada chamada. Isso retorna um ID único para o intervalo, podendo remove-los mais tarde apenas o chamando clearInterval().
 * Este método é definido pelo mixin WindowOrWorkerGlobalScope.
 * 
*/


let timer;

function startShowTime(){
    timer = setInterval(showTime, 1000)
}

function pauseShowTime(){
    clearInterval(timer);
}

function showTime(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let text = hours + ':' + minutes + ':' + seconds;

    document.querySelector('.demo').innerHTML = text;
}