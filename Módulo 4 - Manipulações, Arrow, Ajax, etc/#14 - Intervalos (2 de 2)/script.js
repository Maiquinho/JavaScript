/**
 * 
 * O método global setTimeout() define um cronômetro que executa uma função ou trecho de código específicado assim que o cronômetro expirar.
 * 
*/


let timer;

function runFunction(){
    document.querySelector('.demo').innerHTML = 'Wait...';

    timer = setTimeout(function(){
        document.querySelector('.demo').innerHTML = 'Code have been runed!';
    }, 3000);
}

function breakFunction(){
    clearTimeout(timer);
    document.querySelector('.demo').innerHTML = 'Code have been broken!';
}