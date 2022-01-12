// primeira forma de alterar o atributo (exemplo)

// function trocarImagem(filename){

//     document.querySelector('.imagem').setAttribute('src', 'images/'+filename);
// }


// segunda forma de alterar o atributo (exemplo)

function trocarImagem(filename, animalName){
    document.querySelector('.imagem').setAttribute('src', 'images/'+filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalName);
}

function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal');

    alert('este animal é um(a): ' + animal);
}