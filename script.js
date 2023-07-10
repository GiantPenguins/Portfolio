/* Main NavBar Function Hamburger Icon */
function mainNavigationBurgerFunction() {
  var icon = document.getElementById("mainNavigationBar");
  if (icon.style.display === "block") {
    icon.style.display = "none";
  } else {
    icon.style.display = "block";
  }
  var navigationBar = document.querySelector(".main-navigation-bar");
  navigationBar.classList.toggle("active");
}

/* Home Button Scrolls to Top */

mybutton = document.getElementById("home");

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* Projects Button Scrolls To Projects */

function scrolldiv() {
  var projectsSection = document.getElementById("projects");
  projectsSection.scrollIntoView({
    behavior: "smooth",
  });
}

var cursorShadow = document.querySelector(".cursor-shadow");
document.addEventListener("mousemove", function (e) {
  var xPos = e.clientX - cursorShadow.clientWidth / 2;
  var yPos = e.clientY - cursorShadow.clientHeight / 2;
  cursorShadow.style.left = xPos + "px";
  cursorShadow.style.top = yPos + "px";
});
