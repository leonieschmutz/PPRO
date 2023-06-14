let bgList = document.querySelectorAll(".gradient-bg");

document.addEventListener("DOMContentLoaded", () => {
  bgList.forEach((bg) => {
    setInterval(() => {
      createCircle(bg);
      createCircle(bg);
      createCircle(bg);
      createCircle(bg);
      createCircle(bg);
    }, 1000);
  });
});

function createCircle(bg) {
  let circle = document.createElement("div");
  circle.classList.add("circle");
  if (Math.random() > 0.35) circle.classList.add("gradient-bg-light");
  else circle.classList.add("gradient-bg-dark");
  circle.style.setProperty("--pos-x", Math.floor(Math.random() * 100) + "%");
  circle.style.setProperty("--pos-y", Math.floor(Math.random() * 100) + "%");
  circle.style.setProperty("--end-x", Math.floor(Math.random() * 100) + "%");
  circle.style.setProperty("--end-y", Math.floor(Math.random() * 100) + "%");
  console.log(circle);
  setTimeout(() => {
    circle.remove();
  }, 8500);
  bg.appendChild(circle);
}
