function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function showMessage() {
  document.getElementById("msg").innerText =
    "Message sent successfully!";
}

window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");
  nav.style.background =
    window.scrollY > 50 ? "#0f172a" : "#111827";
});