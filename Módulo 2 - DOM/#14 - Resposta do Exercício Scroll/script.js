function subirTela(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}



function decidirBotaoScroll(){
    if(window.scrollY === 0){
        // ocultar botão 
        document.querySelector('.scrollbutton').style.display = 'none';
    }else{
        // mostrar botão
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

/** 
 * 
 * setInterval(decidirBotaoScroll, 1000); primeira forma de timer para executar a função (não muito eficiente pela quantidade de requisições)
 * 
 * window.addEventListener('scroll', decidirBotaoScroll); primeira forma de timer para executar a função
 * 
 * */  


 window.addEventListener('scroll', decidirBotaoScroll);
