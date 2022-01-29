function menuToggle(){
    let menu = document.querySelector('#menu-area');


    // forma 1 de abrir o menu: usando uma classe 

    // if(menu.classList.contains('opened')){
    //     menu.classList.remove('opened');
    // }else{
    //     menu.classList.add('opened');
    // }


    // forma 2 de abrir o menu: usando style inline

    // if(menu.style.marginRight == '-200px'){
    //     menu.style.marginRight = 0;
    // }else {
    //     menu.style.marginRight = '-200px';
    // }


    // forma 2.1 de abrir o menu: usando style inline e setAttribute e getAttribute

    // if(menu.getAttribute('style') == 'margin-right: -200px;'){
    //     menu.setAttribute('style', 'margin-right: 0;');
    // } else {
    //     menu.setAttribute('style', 'margin-right: -200px;');
    // }


    // forma 3 de abrir o menu: usando a função toggle

    menu.classList.toggle('opened');
}