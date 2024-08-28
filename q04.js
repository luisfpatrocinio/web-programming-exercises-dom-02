// Ao carregar a página:
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM carregado.");

  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", loadImage);
});

function loadImage() {
  var uploadImage = document.getElementById("uploadImage");
  var selectedFile = uploadImage.files[0];

  if (!selectedFile) {
    console.log("Nenhuma imagem selecionada.");
    return;
  }

  var img = document.createElement("img");
  img.src = URL.createObjectURL(selectedFile);

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.appendChild(img);

  console.log("Imagem carregada.");
}
