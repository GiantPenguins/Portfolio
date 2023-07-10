var cursorShadow = document.querySelector(".cursor-shadow");
document.addEventListener("mousemove", function (e) {
  var xPos = e.clientX - cursorShadow.clientWidth / 2;
  var yPos = e.clientY - cursorShadow.clientHeight / 2;
  cursorShadow.style.left = xPos + "px";
  cursorShadow.style.top = yPos + "px";
});
