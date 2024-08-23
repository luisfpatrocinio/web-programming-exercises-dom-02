function exibirConteudo() {
  // Obtém o texto retirando os espaços, via trim.
  var conteudo = document.getElementById("caixaDeTexto").value.trim();

  // Se o conteúdo for vazio, não faz nada.
  if (conteudo === "") {
    return;
  }

  document.getElementById("conteudo").textContent = conteudo;
}

// Ao carregar a página:
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM carregado.");
  var botaoExibir = document.getElementById("botaoExibir");
  botaoExibir.addEventListener("click", exibirConteudo);
});
