//Cadastro de produtos

let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function cadastraProduto(event) {
  event.preventDefault();

  // Pega os inputs
  const nomeInput = document.getElementById("nomeProduto");
  const descricaoInput = document.getElementById("descricaoProduto");
  const precoInput = document.getElementById("precoProduto");
  const estoqueInput = document.getElementById("estoqueQuantidade");

  // Validação: impede cadastro se algum estiver vazio
  if (
    nomeInput.value.trim() === "" ||
    descricaoInput.value.trim() === "" ||
    precoInput.value.trim() === "" ||
    estoqueInput.value.trim() === ""
  ) {
    alert("Por favor, preencha todos os campos antes de cadastrar o produto.");
    return;
  }

  // Cria o objeto produto
  let produto = {
    nome: nomeInput.value,
    descricao: descricaoInput.value,
    preco: precoInput.value,
    estoque: estoqueInput.value
  };

  // Adiciona à lista
  produtos.push(produto);

  // Salva no Local Storage
  localStorage.setItem("produtos", JSON.stringify(produtos));

  console.log("Produto cadastrado:", produto);

  // Limpa os campos
  nomeInput.value = "";
  descricaoInput.value = "";
  precoInput.value = "";
  estoqueInput.value = "";

  alert("Produto cadastrado com sucesso!");
}

// Exibir Produtos

function exibirProdutos() {
  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = ""; 

  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  produtos.forEach((produto, index) => {
    const card = document.createElement("div");
    card.className = "produto-card";
    card.innerHTML = `
      <h3>${produto.nome}</h3>
      <p><strong>Descrição:</strong> ${produto.descricao}</p>
      <p><strong>Preço:</strong> R$ ${parseFloat(produto.preco).toFixed(2)}</p>
      <p><strong>Estoque:</strong> ${produto.estoque} unidades</p>
      <button class="btn__principal" onclick="excluirProduto(${index})">Excluir</button>
    `;
    lista.appendChild(card);
  });
}

function excluirProduto(index) {
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.splice(index, 1); 
  localStorage.setItem("produtos", JSON.stringify(produtos)); 
  exibirProdutos(); 
}

window.onload = exibirProdutos;

