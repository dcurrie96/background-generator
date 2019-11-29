var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
// function changeColor(){
//   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +");";
// }


function changeColor(){
  var styleStr = "linear-gradient(to right, "
  + color1.value +
  ", " +
  color2.value +")";
  body.style.background = styleStr;
  css.textContent = styleStr + ";";

}
color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
