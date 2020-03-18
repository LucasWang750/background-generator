var value1 = document.querySelector("#color1");
var value2 = document.querySelector("#color2");
var header = document.querySelector("h3");

document.body.style.background = "linear-gradient(to right, " + value1.value + ", " + value2.value + ")";
header.innerText = "linear-gradient(to right, " + value1.value  + ", " + value2.value + ")";

value1.addEventListener("input",  changeBackground);// value1.value = e.srcElement.value;

value2.addEventListener("input",  changeBackground);// value2.value = e.srcElement.value;


function changeBackground(){
    header.innerText = "linear-gradient(to right, " + value1.value  + ", " + value2.value + ")";
    document.body.style.background = "linear-gradient(to right, " + value1.value + ", " + value2.value + ")";
}