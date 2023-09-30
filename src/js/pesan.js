const spreadsheetId = "1qOCVzh3P0Ew_46ZnToS3tpK7vSwQQDpFQY76Ui2UfOE";
let url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv`;

function fetchDataAndConvertToHTML() {
  // Tambahkan parameter unik ke URL fetch
  const uniqueParam = new Date().getTime();
  const fetchUrl = `${url}&_=${uniqueParam}`;

  fetch(fetchUrl)
    .then((response) => response.text())
    .then((data) => {
      const html = convertDataToHTML(data);
      const areaPesanMasuk = document.querySelector(".container");
      areaPesanMasuk.innerHTML = html;
    })
    .catch((error) => {
      console.log("Terjadi kesalahan:", error);
    });
}

function convertDataToHTML(data) {
  const rows = data.split("\n").slice(1);
  const html = rows
    .map((row) => {
      const values = row.split('","').map((value) => value.replace(/"/g, ""));
      const [timestamp, pesan] = values;

      // Validasi enter pada pesan
      const escapedPesan = document.createElement("div");
      escapedPesan.textContent = pesan; // Menghapus karakter enter (\n)

      return `<div class="box"><p>${pesan}</p></div>`;
    })
    .join("");

  return `${html}`;
}

fetchDataAndConvertToHTML();
