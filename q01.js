document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("botaoErro").addEventListener("click", function () {
    if (document.getElementById("campoNome").value.trim() === "") {
      showError("O campo não pode ser vazio.");
    }
  });
});

function showError(text) {
  var errorMessage = document.getElementById("mensagemErro");
  errorMessage.textContent = text;
  errorMessage.classList.remove("oculto");
  setTimeout(function () {
    errorMessage.classList.add("oculto");
  }, 1500);
}
