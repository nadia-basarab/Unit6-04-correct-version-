function areaoftrapazoid(){
var sideA = document.getElementById("sideA").value;
var sideB = document.getElementById("sideB").value;
var height = document.getElementById("height").value;
var output = (sideA + sideB) * height / 2;
document.getElementById("area_status").innerHTML="The area of the trapazoid is "+output;
}
