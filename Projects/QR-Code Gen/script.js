let Api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

document.getElementById("b").addEventListener("click", () => {
  generateQRCode();
});
function generateQRCode() {
  const url = document.getElementById("url-input").value;
  const qrCodeimage = document.getElementById("qrcode");

  qrCodeimage.src = "";

  if (url) {
    try {
      qrCodeimage.src = Api + url;
    } catch (error) {
      alert("Api Error aagya bhai !");
      return;
    }
  } else {
    alert("Please enter a URL or text.");
  }
}
