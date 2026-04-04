
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", function(e) {
    let circle = document.createElement("span");
    let x = e.clientX - btn.offsetLeft;
    let y = e.clientY - btn.offsetTop;

    circle.style.left = x + "px";
    circle.style.top = y + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});
