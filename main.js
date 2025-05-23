//Criar funcionário

// Tenta carregar a lista de funcionários do Local Storage
let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

const codigoAdministrador = "123456";

function cadastraFuncionario() {
  let funcionario = {
    nome: document.getElementById("nomeFuncionario").value,
    cpf: document.getElementById("cpfFuncionario").value,
    email: document.getElementById("emailFuncionario").value,
    senha: document.getElementById("senhaFuncionario").value,
  };

  funcionarios.push(funcionario); // Adiciona à lista

  // Salva a lista atualizada no Local Storage
  localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

  console.log("Funcionário cadastrado:", funcionario);
  console.log("Lista completa:", funcionarios);
}

//Fazer Login

function fazerLogin() {
  const cpfDigitado = document.getElementById("cpfLogin").value;
  const senhaDigitada = document.getElementById("senhaLogin").value;

  // Recupera a lista de funcionários
  const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

  // Verifica se algum funcionário tem o CPF e a senha informados
  const funcionario = funcionarios.find(f => f.cpf === cpfDigitado && f.senha === senhaDigitada);

  if (funcionario) {
    document.getElementById("mensagemLogin").innerText = "Login realizado com sucesso!";
    // Aqui você pode redirecionar para outra página, por exemplo:
    // window.location.href = "paginaPrincipal.html";
  } else {
    document.getElementById("mensagemLogin").innerText = "CPF ou senha incorretos.";
  }
}

//Cadastro de produtos

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function cadastraProduto() {
  let produto = {
    nome: document.getElementById("nomeProduto").value,
    descricao: document.getElementById("descricaoProduto").value,
    preco: document.getElementById("precoProduto").value,
    estoque: document.getElementById("estoqueQuantidade").value
  };

  produtos.push(produto); // Adiciona à lista

  // Salva a lista atualizada no Local Storage
  localStorage.setItem("produtos", JSON.stringify(produtos));

  console.log("Produto cadastrado:", produto);

}

// Exibir Produtos

function exibirProdutos() {
  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = ""; // Limpa antes de exibir

  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  produtos.forEach((produto, index) => {
    const card = document.createElement("div");
    card.className = "produto-card";
    card.innerHTML = `
      <h3>${produto.nome}</h3>
      <p><strong>Descrição:</strong> ${produto.descricao}</p>
      <p><strong>Preço:</strong> R$ ${parseFloat(produto.preco).toFixed(2)}</p>
      <p><strong>Estoque:</strong> ${produto.estoque} unidades</p>
    `;
    lista.appendChild(card);
  });
}

// Chame essa função assim que a página carregar:
window.onload = exibirProdutos;
