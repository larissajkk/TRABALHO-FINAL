document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const usuario = document.getElementById('usuario').value;
    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;
    const prioridade = document.getElementById('prioridade').value;

    if (!usuario || !titulo || !descricao || !prioridade) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    
    console.log({
        usuario: usuario,
        titulo: titulo,
        descricao: descricao,
        prioridade: prioridade
    });

    
    document.getElementById('success-message').style.display = 'block';

    
    document.getElementById('task-form').reset();
});
