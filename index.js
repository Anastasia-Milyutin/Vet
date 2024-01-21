const cityImg = document.querySelector("svg path");
const cityText = document.querySelector(".header__city-p");
document
  .querySelector(".header__city")
  .addEventListener("mouseover", function () {
    cityImg.style.fill = "#59443F";
    cityText.style.color = "#59443F";
  });

document
  .querySelector(".header__city")
  .addEventListener("mouseout", function () {
    cityImg.style.fill = "#FFC59E";
    cityText.style.color = "#FFC59E";
  });

const buttonHeader = document.querySelector(".header__city");
const modulWindow = document.querySelector(".city__block");
const buttonClose = document.querySelector(".city__img");
buttonHeader.addEventListener("click", () => {
  modulWindow.style.display = "block";
});
buttonClose.addEventListener("click", () => {
  modulWindow.style.display = "none";
});




document.querySelector(".welcome_start").style.display = "block";

const btns = document.querySelectorAll(".welcome__btn");
const blocks = document.querySelectorAll(".welcome__block");

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.add("welcome__btn_start");

    btns.forEach((otherbtn) => {
      if (otherbtn !== btn) {
        otherbtn.classList.remove("welcome__btn_start");
      }
    });

    blocks.forEach((block, blockindex) => {
      if (blockindex === index) {
        block.style.display = "flex";
        block.style.position = "absolute";
        block.style.right = "0";
        block.style.top = "600px";
      } else {
        block.style.display = "none";
      }
    });
  });
});
