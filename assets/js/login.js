function fazerLogin(event) {
  event.preventDefault(); 

  const cpfInput = document.getElementById("cpfLogin");
  const senhaInput = document.getElementById("senhaLogin");
  const cpfDigitado = cpfInput.value;
  const senhaDigitada = senhaInput.value;

  const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

  const funcionario = funcionarios.find(f => f.cpf === cpfDigitado && f.senha === senhaDigitada);

  if (funcionario) {
    document.getElementById("mensagemLogin").innerText = "Login realizado com sucesso!";
     window.location.href = "produtos.html";
    
    cpfInput.value = "";
    senhaInput.value = "";
  } else {
    document.getElementById("mensagemLogin").innerText = "CPF ou senha incorretos.";

    cpfInput.value = "";
    senhaInput.value = "";
  }
}