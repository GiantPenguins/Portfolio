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

// Scrolling

function scrollToTop() {
  window.scrollTo({
    top: 70,
    behavior: "smooth",
  });
}

function scrollToProjects() {
  const projectsSection = document.getElementById("projects");
  const offset = projectsSection.offsetTop;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
}

// function changeActiveNav() {
//   const navLinks = document.querySelectorAll(
//     ".navigation-container nav ul li a"
//   );
//   const sections = document.querySelectorAll(".column > *");

//   let currentSection = sections[0];
//   sections.forEach((section) => {
//     const sectionId = section.getAttribute("id");
//     if (sectionId && window.scrollY >= section.offsetTop - 100) {
//       currentSection = section;
//     }
//   });

//   let currentLink;
//   navLinks.forEach((link) => {
//     if (link.getAttribute("href") === `#${currentSection.id}`) {
//       currentLink = link;
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//   });

//   currentLink.classList.add("active");
// }

// window.addEventListener("scroll", changeActiveNav);

window.onload = function () {
  var boldText = document.getElementsByTagName("b");
  for (var i = 0; i < boldText.length; i++) {
    boldText[i].style.textShadow = "var(--text-glow)";
  }
  setTimeout(function () {
    for (var i = 0; i < boldText.length; i++) {
      boldText[i].style.textShadow = "";
    }
  }, 2000);
};
window.onload = function () {
  var boldText = document.getElementsByTagName("b");
  for (var i = 0; i < boldText.length; i++) {
    boldText[i].style.textShadow = "var(--text-glow)";
  }
  setTimeout(function () {
    for (var i = 0; i < boldText.length; i++) {
      boldText[i].style.textShadow = "";
    }
  }, 3000);
};