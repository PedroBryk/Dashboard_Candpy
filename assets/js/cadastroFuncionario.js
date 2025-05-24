let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

const codigoAdministrador = 123456;

function cadastraFuncionario(event) {
  event.preventDefault();

  // Pegando os elementos
  const nomeInput = document.getElementById("nomeFuncionario");
  const cpfInput = document.getElementById("cpfFuncionario");
  const emailInput = document.getElementById("emailFuncionario");
  const senhaInput = document.getElementById("senhaFuncionario");
  const codAdmInput = document.getElementById("codAdm");

  let funcionario = {
    nome: nomeInput.value,
    cpf: cpfInput.value,
    email: emailInput.value,
    senha: senhaInput.value,
    codAdm: codAdmInput.value
  };

  if (funcionario.codAdm == codigoAdministrador) {
    funcionarios.push(funcionario);
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
    console.log("Funcionário cadastrado:", funcionario);
    console.log("Lista completa:", funcionarios);

    // Limpa os campos manualmente
    nomeInput.value = "";
    cpfInput.value = "";
    emailInput.value = "";
    senhaInput.value = "";
    codAdmInput.value = "";

    alert("Funcionário cadastrado com sucesso!");

  } else {
    alert("Código de administrador incorreto, tente novamente!");
  }
}

// Exibir Funcionarios

function exibirFuncionarios() {
  const lista = document.getElementById("listaFuncionarios");
  lista.innerHTML = ""; // Limpa a lista

  const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

  funcionarios.forEach((funcionario, index) => {
    const card = document.createElement("div");
    card.className = "funcionario-card";
    card.innerHTML = `
      <h3>${funcionario.nome}</h3>
      <p><strong>CPF:</strong> ${funcionario.cpf}</p>
      <p><strong>Email:</strong> ${funcionario.email}</p>
      <button class="btn__principal" onclick="excluirFuncionario(${index})">Excluir</button>
    `;
    lista.appendChild(card);
  });
}

function excluirFuncionario(index) {
  const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];
  funcionarios.splice(index, 1); // Remove pelo índice
  localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
  exibirFuncionarios(); // Atualiza a lista
}

window.onload = () => {
  exibirFuncionarios(); // Chama a função ao carregar a página
};
