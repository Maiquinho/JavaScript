function digitou(e){
    if(e.ctrlKey == false && e.keyCode == 13){
        let texto = document.querySelector('input').value;
        console.log(texto);
    }
    // console.log(e);
}