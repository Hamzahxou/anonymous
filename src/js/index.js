function ambilScreenshot() {
  // Menggunakan html2canvas untuk membuat tangkapan layar dari body
  html2canvas(document.body).then(function (canvas) {
    // Mengonversi kanvas ke format gambar PNG
    var dataURL = canvas.toDataURL("image/png");

    // Membuat elemen <a> untuk mendownload gambar
    var a = document.createElement("a");
    a.href = dataURL;
    a.download = "screenshot.png"; // Nama file yang akan didownload

    // Mengklik elemen <a> untuk memulai proses download
    a.click();
  });
}

