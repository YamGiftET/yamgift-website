document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to Yam Gift!");

  const button = document.querySelector(".btn");

  if (button) {
    button.addEventListener("click", function () {
      button.innerHTML = "Opening WhatsApp...";
    });
  }
});
