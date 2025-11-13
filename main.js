const escolhas = document.querySelectorAll('.escolha');

escolhas.forEach(botao => {
    botao.addEventListener('click', function() {

        const imagem = this.getAttribute('data-img');

 document.getElementById('img-inicial').style.display = 'none';
        document.getElementById('pergunta').style.display = 'none';

        const imgFinal = document.getElementById('img-final');
        imgFinal.src = imagem;
        imgFinal.style.display = 'block';
    });
});
