let root = document.getElementById("root");

root.innerHTML =
  '<div id="num">0</div> <button id = "plus" onclick = "plus(); changeRandColor();">+</button> <button id = "minus" onclick = "minus(); changeRandColor();">-</button>';

let title = document.getElementsByTagName("h1")[0];
let num = document.getElementById("num");
let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
title.style.textAlign = "center";
num.style.fontSize = "40px";
num.style.textAlign = "center";
num.style.marginBottom = "30px";
root.style.textAlign = "center";
btnPlus.style.width = "60px";
btnPlus.style.height = "30px";
btnPlus.style.border = "solid 3px black";
btnPlus.style.borderRadius = "10px";
btnPlus.style.fontWeight = "700";
btnPlus.style.fontSize = "20px";
btnMinus.style.width = "60px";
btnMinus.style.height = "30px";
btnMinus.style.border = "solid 3px black";
btnMinus.style.borderRadius = "10px";
btnMinus.style.fontWeight = "700";
btnMinus.style.fontSize = "20px";
let alertRoot = alert('press the "+" & "-" buttons');
let funcNum = 0;
function plus() {
  funcNum++;
  if (funcNum > 5) {
    funcNum = 0;
  }
  num.innerHTML = funcNum;
  if (funcNum === 0) {
    funcNum.style.fontFamily = "cursive";
  }
}
function minus() {
  funcNum--;
  if (funcNum <= -1) {
    funcNum = 0;
  }
  num.innerHTML = funcNum;
}
function randColor() {
  let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return hex;
}
function randBgColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Math.random();

  return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
let fontType = [
  "Arial",
  "cursive",
  "Verdana",
  "Helvetica",
  "Fantasy",
  "Monospace",
  "Tahoma",
  "Trebuchet MS",
  "Times New Roman",
  "Georgia",
  "Garamond",
  "Brush Script MT",
];
function changeRandColor() {
  let numFont = Math.floor(Math.random() * fontType.length);
  let bgColor = randBgColor();
  let numColor = randColor();
  document.body.style.backgroundColor = bgColor;
  num.style.color = numColor;
  num.style.fontFamily = fontType[numFont];
  title.style.fontFamily = fontType[numFont];
  btnPlus.style.backgroundColor = numColor;
  btnMinus.style.backgroundColor = randBgColor();
  btnPlus.style.color = bgColor;
  btnMinus.style.color = numColor;
}
