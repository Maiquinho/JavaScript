/**
 * 
 * Diferente dos arrays os objeots são listas nomeadas e são usados geramente quando queremos guardar informações mais precisas sobre os itens da lista.
 * 
 */

// array comum:
let carros = ['Palio', 'Uno', 'Corolla', 'Ferrari'];


// objeto:
let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar: function(){
        console.log('VRUM VRUM!');
    }
};

console.log( carro['nome'] ); // forma não convencional de chamar um objeto
console.log( carro.nome ); // forma mais comum de chamar um objeto 


/** o javascript é um objeto gigante, podemos ver no exemplo abaixo:
 *
 *  document.getElementById('titulo').style.display = 'block';
 * 
*/ 