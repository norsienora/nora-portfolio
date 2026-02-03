const btn = document.getElementById("toggleBtn");
const text = document.getElementById("aboutText");

btn.addEventListener("click", function () {
  if (text.style.display === "none") {
    text.style.display = "block";
    btn.innerText = "Close";
  } else {
    text.style.display = "none";
    btn.innerText = "Click me";
  }
});

function showMessage(text) {
  document.getElementById("message").innerText = text;
}
