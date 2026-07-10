document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to Yam Gift!");

  const button = document.querySelector(".btn");

  if (button) {
    button.addEventListener("click", function () {
      button.innerHTML = "Opening WhatsApp...";
    });
  }
});
function copyAccount() {
    const account = document.getElementById("accountNumber").innerText;
    navigator.clipboard.writeText(account);

    alert("Account number copied!");
}
