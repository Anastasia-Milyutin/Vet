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




const buttonHeader = document.querySelector('.header__city')
const modulWindow = document.querySelector('.city__block')
const buttonClose = document.querySelector('.city__img')
buttonHeader.addEventListener('click', () => {
  modulWindow.style.display = 'block'
})
buttonClose.addEventListener('click', () => {
  modulWindow.style.display = 'none'
})
