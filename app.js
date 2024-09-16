let colorsCont = document.querySelector(".colors-cont");
let add = document.querySelector(".add");
let number = document.querySelector(".number");
let copy = document.getElementById("copy");

function getRandomColor() {
  return Math.floor(Math.random() * 255);
}

function createColorPalette() {
  let randomFirst = getRandomColor();
  let randomSecond = getRandomColor();
  let randomThird = getRandomColor();
  let randomBackground = `rgb(${randomFirst}, ${randomSecond}, ${randomThird})`;

  let colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorsCont.append(colorBox);

  let perview = document.createElement("div");
  perview.classList.add("perview");
  perview.style.background = randomBackground;
  colorBox.append(perview);

  let hex = document.createElement("div");
  hex.textContent = randomBackground;
  hex.classList.add("hex");
  colorBox.append(hex);

  hex.onclick = function () {
    copy.value = randomBackground;
    copy.select();
    navigator.clipboard
      .writeText(copy.value)
      .then(() => {
        hex.textContent = "Color Copied!";
        setTimeout(() => {
          hex.textContent = randomBackground;
        }, 1000);
      })
      .catch((error) => {
        hex.textContent = error;
        setTimeout(() => {
          hex.textContent = randomBackground;
        }, 1000);
      });
  };
}

function generateColors(count) {
  for (let i = 0; i < count; i++) {
    createColorPalette();
  }
}

add.onclick = function () {
  if (number.value != "") {
    generateColors(number.value);
    number.placeholder = `Colors Number..`;
  } else {
    number.placeholder = `Where Is Number!?`;
  }
};

window.onload = function () {
  generateColors(10);
};
