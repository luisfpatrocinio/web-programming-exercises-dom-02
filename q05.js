// Ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM carregado.");

  var selectImageList = document.getElementById("selectImageList");
  selectImageList.addEventListener("change", changeImage);
});

function changeImage(event) {
  var img = document.createElement("img");
  img.src = event.target.value;

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  resultDiv.appendChild(img);
}
