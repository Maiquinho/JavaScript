function showSite(e){
    e.style.display = 'none'; // remove o botão após a execução da função.

    let main = document.getElementsByTagName('main')[0]; // armazena a chamada do elemento main dentro de uma variável com o mesmo nome do elemento.

    main.style.opacity = '1'; // adiciona opacidade quando executada a função.
    main.style.visibility = 'visible'; // adiciona visibidade quando executada a função.
}