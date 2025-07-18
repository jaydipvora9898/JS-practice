let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

btn.forEach(function (button) {
    button.addEventListener("click", function () {
      if (this.innerHTML == "=") {
        value.innerHTML = eval(value.innerHTML);
      } else {
        if (this.innerHTML == "Clear") {
          value.innerHTML = "";
        } else {
          value.innerHTML += this.innerHTML;
        }
      }
    });
  });
  

toggleBtn.onclick = function () {
  body.classList.toggle("dark");
};