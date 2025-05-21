document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio padrão do formulário
    window.location.href = '../tela.html';
})