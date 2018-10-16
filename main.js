// document.addEventListener('DOMContentLoaded', () => {


function update(value, sender) {
  console.log(sender);
  var firstColor = document.querySelector(".firstColor");
  var secondColor = document.querySelector(".secondColor");

  if (sender.id === "firstColor") {
    firstColor.innerHTML = '';
    var temp = document.createTextNode(value);
    firstColor.appendChild(temp);
  } else {
    secondColor.innerHTML = '';
    var temp = document.createTextNode(value);
    secondColor.appendChild(temp);
  }

  var backgroundCommand = document.querySelector(".color-line-wrap").innerText;
  document.querySelector("html").style.background = backgroundCommand;

}
// });