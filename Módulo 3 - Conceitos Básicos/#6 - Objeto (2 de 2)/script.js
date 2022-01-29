// exemplo de uso de funções no objeto:
let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligado: false,
    ligar: function () {
        this.ligado = true, // liga o carro ao executar a função
        console.log('VRUM VRUM!');
    },
    acelerar: function () {
        if(this.ligado == true) {
            console.log('ihiiihihihiiii');
        }else{
            console.log('O ' + this.nome + ' ' + this.modelo + ' ' + 'não está ligado!');
        }
    }
};


// outro exemplo de objetos (encapsulados em um array), mencionado anteriormente:

let carros = [
    {nome: 'Fiat', modelo: 'Uno'},
    {nome: 'Nissan', modelo: 'March'},
    {nome: 'Chevrolet', modelo: 'Ônix'},
    {nome: 'Ford', modelo: 'Fusion'}
];
