const header = document.getElementById("siteHeader");
addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 40);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.style.display === "flex";
  navLinks.style.display = isOpen ? "none" : "flex";
  if (!isOpen) {
    navLinks.style.position = "absolute";
    navLinks.style.top = "100%";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.flexDirection = "column";
    navLinks.style.alignItems = "flex-start";
    navLinks.style.gap = "18px";
    navLinks.style.padding = "22px 20px";
    navLinks.style.background = "rgba(11,15,26,0.97)";
    navLinks.style.borderTop = "1px solid rgba(244,241,232,0.1)";
    navLinks.querySelector("nav ul").style.flexDirection = "column";
    navLinks.querySelector("nav ul").style.gap = "16px";
  }
});

const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  success.classList.add("show");
  form.reset();
});
