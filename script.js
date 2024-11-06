// script.js

// Array para armazenar os alunos cadastrados
let alunos = [];

// Função para atualizar a lista de alunos na tabela
function atualizarTabela() {
  const lista = document.getElementById('listaAlunos');
  lista.innerHTML = ''; // Limpar a tabela antes de adicionar os alunos

  alunos.forEach((aluno, index) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.email}</td>
      <td>
        <button class="edit" onclick="editarAluno(${index})">Editar</button>
        <button class="delete" onclick="deletarAluno(${index})">Deletar</button>
      </td>
    `;
    lista.appendChild(tr);
  });
}

// Função para adicionar um aluno
function adicionarAluno() {
  const nome = document.getElementById('inputNome').value;
  const email = document.getElementById('inputEmail').value;

  if (!nome || !email) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const aluno = { nome, email };
  alunos.push(aluno);
  atualizarTabela();
  limparCampos();
}

// Função para editar um aluno
function editarAluno(index) {
  const aluno = alunos[index];
  document.getElementById('inputNome').value = aluno.nome;
  document.getElementById('inputEmail').value = aluno.email;

  const btn = document.getElementById('btnCadastrar');
  btn.textContent = 'Salvar Alterações';
  btn.onclick = function() {
    salvarAlteracoes(index);
  };
}

// Função para salvar as alterações feitas no aluno
function salvarAlteracoes(index) {
  const nome = document.getElementById('inputNome').value;
  const email = document.getElementById('inputEmail').value;

  if (!nome || !email) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  alunos[index] = { nome, email };
  atualizarTabela();
  limparCampos();

  const btn = document.getElementById('btnCadastrar');
  btn.textContent = 'Cadastrar';
  btn.onclick = adicionarAluno;
}

// Função para deletar um aluno
function deletarAluno(index) {
  if (confirm('Você tem certeza que deseja excluir este aluno?')) {
    alunos.splice(index, 1);
    atualizarTabela();
  }
}

// Função para limpar os campos do formulário
function limparCampos() {
  document.getElementById('inputNome').value = '';
  document.getElementById('inputEmail').value = '';
}

// Inicializa a página e configura o botão de "Cadastrar"
function iniciar() {
  const btnCadastrar = document.getElementById('btnCadastrar');
  btnCadastrar.onclick = adicionarAluno;
  atualizarTabela();
}

// Chamando a função de inicialização assim que a página carrega
iniciar();