

window.onload = () => {
    loadTasks();
};

function loadTasks() {


    const tasks = [
        { id: 1, titulo: 'Tarefa 1', descricao: 'Descrição 1', setor: 'TI', prioridade: 'Alta', usuario: 'João', status: 'A Fazer' },
        { id: 2, titulo: 'Tarefa 2', descricao: 'Descrição 2', setor: 'RH', prioridade: 'Média', usuario: 'Maria', status: 'Fazendo' },
        { id: 3, titulo: 'Tarefa 3', descricao: 'Descrição 3', setor: 'Financeiro', prioridade: 'Baixa', usuario: 'Pedro', status: 'Pronto' },
    ];

    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        if (task.status === 'A Fazer') {
            document.getElementById('todo-tasks').appendChild(taskElement);
        } else if (task.status === 'Fazendo') {
            document.getElementById('doing-tasks').appendChild(taskElement);
        } else if (task.status === 'Pronto') {
            document.getElementById('done-tasks').appendChild(taskElement);
        }
    });
}

function createTaskElement(task) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task-card');

    taskCard.innerHTML = `
        <h3>${task.titulo}</h3>
        <p><strong>Descrição:</strong> ${task.descricao}</p>
        <p><strong>Setor:</strong> ${task.setor}</p>
        <p><strong>Prioridade:</strong> ${task.prioridade}</p>
        <p><strong>Usuário:</strong> ${task.usuario}</p>
        <p><strong>Status:</strong> ${task.status}</p>
        <button onclick="editTask(${task.id})">Editar</button>
        <button class="delete" onclick="deleteTask(${task.id})">Excluir</button>
    `;

    return taskCard;
}


function editTask(taskId) {
    window.location.href = `editar-tarefa.html?id=${taskId}`;
}


function deleteTask(taskId) {
    const popup = document.getElementById('confirmDeletePopup');
    popup.classList.add('show');
    
    const confirmButton = document.getElementById('confirmDelete');
    confirmButton.onclick = () => {
       
        console.log(`Excluindo tarefa ${taskId}`);
      
        popup.classList.remove('show');
    };

    const cancelButton = document.getElementById('cancelDelete');
    cancelButton.onclick = () => {
        popup.classList.remove('show');
    };
}


