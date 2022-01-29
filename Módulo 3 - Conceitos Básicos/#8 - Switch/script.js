// O Switch é uma forma de condicional que utilizamos quando temos um valor específico e precisamos a partir desse valor executar uma série de condicionais 


// // exemplo
// let dia = 2; // a expr dia é o "valor especifico" mencionado acima

// switch(dia){
//     case 1:
//         dia = 'Domingo';
//         break;
//     case 2: 
//         dia = 'Segunda-feira';
//         break;
//     case 3:
//         dia = 'Terça-feira';
//         break;
//     case 4: 
//         dia = 'Quarta-feira';
//         break;
//     case 5:
//         dia = 'Quinta-feira';
//         break;
//     case 6:
//         dia = 'Sexta-feira';
//         break;
//     case 7:
//         dia = 'Sábado';
//         break;
//     default:
//         alert('Operação inválida! Selecione os números de 1 à 7.');  
//         break;
// }


/** insere o resultado final na <div id="texto"></div> 
 * 
 * document.querySelector('#texto').innerHTML = 'Hoje é: ' + dia;
 * 
 *  
*/

let dia = 8;
let diaTipo = '';

switch(dia){
    case 7:
    case 1:
        diaTipo = 'Final de semana';
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        diaTipo = 'Dia comercial';
        break;
    default:
        alert('Operação inválida!');
        break;
}

document.querySelector('#texto').innerHTML = 'Hoje é: ' + diaTipo;
