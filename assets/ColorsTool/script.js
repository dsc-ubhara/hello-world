"use strict";

function getValue() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;
  let alpha = document.getElementById("alpha").value;
  let rgbaColor = `rgba(${red},${green},${blue},${alpha})`;

  document.body.style.background = rgbaColor;

  document.querySelector(".codeRGBA").innerHTML = rgbaColor;

  let hexColor = rgbaToHex(red, green, blue);
  document.querySelector(".codeHex").innerHTML = hexColor;
}

function rgbaToHex(red, green, blue) {
  const toHex = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const redHex = toHex(parseInt(red, 10));
  const greenHex = toHex(parseInt(green, 10));
  const blueHex = toHex(parseInt(blue, 10));

  return `#${redHex}${greenHex}${blueHex}`;
}

function copyText(selector) {
  let element = document.createElement("textarea");
  element.value = document.querySelector(selector).textContent;
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy", false);
  document.body.removeChild(element);
  alert("Copiado!!");
}
