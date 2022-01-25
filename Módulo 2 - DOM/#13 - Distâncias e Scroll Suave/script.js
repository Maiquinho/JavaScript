/**  Verifica qual a posição do scroll da janela do navegador Verticalmente
 * 
 *  window.scrollY;
 * 
 * */


/**  Verifica qual a posição do scroll da janela do navegador Horizontalmente
 * 
 *  window.scrollX;
 * 
 * */


/**  Verifica qual a posição do scroll Vertical do elemento selecionado
 * 
 *  document.querySelector('.element').scrollTop;
 * 
 * */


/**  Verifica qual a posição do scroll Horizontal do elemento selecionado
 * 
 *  document.querySelector('.element').scrollLeft;
 * 
 * */


/**  Função utilizada para alterar as coordenadas do scroll
 * 
 * 
 *  document.querySelector('.element').scrollTo(x, y); Na primeira opção são passados os parâmetros de valor horizontal e vertical 
 * 
 * 
 *  document.querySelector('.element').scrollTo({
 *      top: ; number
 *      left: ; number
 *      behavior: ; auto | smooth
 * 
 * }); Na segunda opção é possível acessar um objeto com uma série de propriedades, sendo as mais comuns: top, left e behavior
 * 
 * */


// Exemplo de função para resetar o scroll verticalmente com efeito suave:

function resetScroll(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


// Verificação para aparecer o botão resetScroll 

let scrollY = window.scrollY;
let resetScrollY = document.querySelector('.reset-scroll');

if(scrollY >= 50){
    resetScrollY.classList.add('visible');
}else {
    resetScrollY.classList.remove('visible');
}