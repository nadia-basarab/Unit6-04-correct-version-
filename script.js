function areaoftrapazoid(){
var sideA = document.getElementById("side-a").value;
var sideB = document.getElementById("side-b").value;
var height = document.getElementById("height").value;
var output = (sideA + sideB) * height / 2;
document.getElementById("area-status").innerHTML = "The area of the trapazoid is " + output;
}
