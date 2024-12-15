let Api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const generateButton = document.getElementById("b");
const clearButton = document.getElementById("clr");
const resultImage = document.querySelector(".result");
function generateQRCode() {
  const url = document.getElementById("input").value;
  if (url) {
    try {
      resultImage.src = Api + url;
      resultImage.style.visibility = "visible";
    } catch (error) {
      alert("Api Error aagya bhai !");
      return;
    }
  } else {
    alert("Please enter a URL or text.");
  }
}
function clearResult() {
  document.getElementById("input").value = "";
  resultImage.style.visibility = "hidden";
}

generateButton.addEventListener("click", generateQRCode);
clearButton.addEventListener("click", clearResult);
