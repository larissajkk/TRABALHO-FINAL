// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    const messageBox = document.getElementById('message');

    // Função que valida o e-mail
    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    // Função para exibir a mensagem de sucesso ou erro
    function mostrarMensagem(mensagem, erro = false) {
        messageBox.textContent = mensagem;
        messageBox.style.display = 'block';
        messageBox.classList.toggle('error', erro);

        // Esconder a mensagem após 3 segundos
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 3000);
    }

    // Função para simular a inserção de dados no banco de dados
    function salvarNoBanco(nome, email) {
        // Simulação de inserção no banco de dados
        console.log("Usuário registrado:", { nome, email });
        // Aqui você pode integrar com uma API backend real para salvar os dados no banco
    }

    // Evento de submissão do formulário
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();

        // Validação do E-mail
        if (!validarEmail(email)) {
            mostrarMensagem('E-mail inválido. Por favor, insira um e-mail válido.', true);
            return;
        }

        // Simulação de salvar no banco de dados
        salvarNoBanco(nome, email);

        // Exibição de mensagem de sucesso
        mostrarMensagem('Cadastro concluído com sucesso!');

        // Limpar o formulário
        form.reset();
    });
});
