const escolhas = document.querySelectorAll('.escolha');

escolhas.forEach(botao => {
    botao.addEventListener('click', function() {
        document.getElementById('img-inicial').style.display = 'none';
        document.getElementById('pergunta').style.display = 'none';
        document.getElementById('img-segunda').style.display = 'block';
    });
});
