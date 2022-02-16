/**
 * 
 * 
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