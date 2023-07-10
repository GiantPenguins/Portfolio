// Cursor

let cursorShadow = document.querySelector(".cursor-shadow");
document.addEventListener("mousemove", function (e) {
  let xPos = e.clientX - cursorShadow.clientWidth / 2;
  let yPos = e.clientY - cursorShadow.clientHeight / 2;
  cursorShadow.style.left = xPos + "px";
  cursorShadow.style.top = yPos + "px";
});

// Navigation

window.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navigation-container nav ul li");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});

navItems.forEach((item) => {
  const link = item.querySelector("a");
  const sectionId = link.getAttribute("href").substring(1);

  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSection(sectionId);
  });
});
