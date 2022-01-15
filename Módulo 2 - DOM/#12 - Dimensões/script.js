let texto = document.querySelector('.texto'); // elemento 



// Dimensões Offset

texto.offsetWidth; // retorna a largura + scrollbar + padding + borda do elemento

texto.offsetHeight; // retorna a altura + scrollbar + padding + borda do elemento



// Dimensões Client

texto.clientWidth; // retorna a largura do elemento + padding sem o scrollbar

texto.clientHeight; // retorna a altura do elemento + padding sem o scrollbar



// Dimensões Scroll 

texto.scrollWidth; // retorna a largura do elemento + padding sem o scrollbar (se houver conteúdo rolável o mesmo é adicionado a largura total do elemento) 

texto.scrollHeight; // retorna a altura do elemento + padding sem o scrollbar (se houver conteúdo rolável o mesmo é adicionado a altura total do elemento) 