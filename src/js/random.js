const random = document.getElementById("randomKata");
const textarea = document.querySelector("form textarea");
const berhasil = document.querySelector(".berhasil");
const kata = ["bunga, bunga apa yang bunga?", "kalo kita makan apa kita ..."];
random.addEventListener("click", () => {
  const randomKata = Math.floor(Math.random() * kata.length);
  textarea.value = kata[randomKata];
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzegLI7B4L1XZelJDqlQODhfDOAwFOT-qrsE8ZcbmCe5Qj-DeG6rxcaN-0GGVXmNafzeg/exec";
const form = document.forms["chatMistery"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.querySelector("textarea").value.trim() !== "") {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("Success!"))
      .catch((error) => console.error("Error!", error.message));
    textarea.value = "";
    berhasil.classList.add("active");
  }
});
